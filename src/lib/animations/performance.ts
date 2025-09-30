import { gsap } from "gsap";

// Performance optimization utilities
export class AnimationPerformanceManager {
  private static instance: AnimationPerformanceManager;
  private observers = new Map<string, IntersectionObserver>();
  private loadedAnimations = new Set<string>();
  private performanceMode: "high" | "balanced" | "low" = "high";

  private constructor() {
    this.detectPerformanceMode();
  }

  static getInstance(): AnimationPerformanceManager {
    if (!AnimationPerformanceManager.instance) {
      AnimationPerformanceManager.instance = new AnimationPerformanceManager();
    }
    return AnimationPerformanceManager.instance;
  }

  // Detect device performance capabilities
  private detectPerformanceMode() {
    if (typeof window === "undefined") return;

    // Check hardware concurrency (CPU cores)
    const cores = navigator.hardwareConcurrency || 4;

    // Check memory (if available)
    const memory =
      (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;

    // Check connection speed
    const connection = (
      navigator as Navigator & { connection?: { effectiveType?: string } }
    ).connection;
    const effectiveType = connection?.effectiveType || "4g";

    // Determine performance mode based on device capabilities
    if (cores >= 8 && memory >= 8 && effectiveType === "4g") {
      this.performanceMode = "high";
    } else if (cores >= 4 && memory >= 4) {
      this.performanceMode = "balanced";
    } else {
      this.performanceMode = "low";
    }

    // Apply performance-based GSAP settings
    this.applyPerformanceSettings();
  }

  private applyPerformanceSettings() {
    switch (this.performanceMode) {
      case "low":
        gsap.config({
          force3D: false,
          nullTargetWarn: false,
        });
        break;
      case "balanced":
        gsap.config({
          force3D: "auto",
          nullTargetWarn: false,
        });
        break;
      case "high":
      default:
        gsap.config({
          force3D: true,
          nullTargetWarn: false,
        });
        break;
    }
  }

  // Get performance recommendations
  getPerformanceConfig() {
    const configs = {
      low: {
        maxConcurrentAnimations: 3,
        preferredDuration: 0.3,
        enableComplexEffects: false,
        useTransforms: true,
        enableStagger: false,
      },
      balanced: {
        maxConcurrentAnimations: 6,
        preferredDuration: 0.6,
        enableComplexEffects: true,
        useTransforms: true,
        enableStagger: true,
      },
      high: {
        maxConcurrentAnimations: 12,
        preferredDuration: 0.8,
        enableComplexEffects: true,
        useTransforms: true,
        enableStagger: true,
      },
    };

    return configs[this.performanceMode];
  }

  // Lazy load animations based on viewport
  createLazyAnimation(
    elementSelector: string,
    animationCallback: (element: Element) => void,
    options?: {
      rootMargin?: string;
      threshold?: number;
      once?: boolean;
    }
  ) {
    const { rootMargin = "50px", threshold = 0.1, once = true } = options || {};

    const observerId = `lazy-${elementSelector}-${Date.now()}`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in viewport, trigger animation
            animationCallback(entry.target);

            if (once) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    // Observe all matching elements
    const elements = document.querySelectorAll(elementSelector);
    elements.forEach((element) => observer.observe(element));

    this.observers.set(observerId, observer);

    // Return cleanup function
    return () => {
      const obs = this.observers.get(observerId);
      if (obs) {
        obs.disconnect();
        this.observers.delete(observerId);
      }
    };
  }

  // Batch DOM reads and writes
  batchDOMOperations(operations: Array<() => void>) {
    return new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        operations.forEach((operation) => operation());
        resolve();
      });
    });
  }

  // Optimize animation based on reduced motion preference
  optimizeForAccessibility(animation: gsap.core.Timeline | gsap.core.Tween) {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      animation.duration(0.1);
      if ("ease" in animation) {
        animation.ease("none");
      }
    }

    return animation;
  }

  // Memory management for animations
  cleanupInactiveAnimations() {
    // Kill all inactive timelines
    gsap.globalTimeline
      .getChildren(true, true, false)
      .forEach((tween: gsap.core.Timeline | gsap.core.Tween) => {
        if (!tween.isActive() && tween.progress() === 1) {
          tween.kill();
        }
      });

    // Clear unused ScrollTriggers (if available)
    if ("ScrollTrigger" in gsap) {
      const ScrollTrigger = (
        gsap as typeof gsap & {
          ScrollTrigger: {
            getAll: () => Array<{ isActive: boolean; kill: () => void }>;
          };
        }
      ).ScrollTrigger;
      ScrollTrigger.getAll().forEach((trigger) => {
        if (!trigger.isActive) {
          trigger.kill();
        }
      });
    }
  }

  // Performance monitoring
  startPerformanceMonitoring() {
    let frameCount = 0;
    let lastTime = performance.now();

    const monitor = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));

        // Adjust performance mode based on FPS
        if (fps < 30 && this.performanceMode !== "low") {
          console.warn("Low FPS detected, switching to low performance mode");
          this.performanceMode = "low";
          this.applyPerformanceSettings();
        } else if (fps > 55 && this.performanceMode === "low") {
          this.performanceMode = "balanced";
          this.applyPerformanceSettings();
        }

        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(monitor);
    };

    monitor();
  }

  // Preload critical animations
  preloadCriticalAnimations(animationNames: string[]) {
    animationNames.forEach((name) => {
      if (!this.loadedAnimations.has(name)) {
        // Mark as loaded to prevent duplicate loading
        this.loadedAnimations.add(name);
      }
    });
  }

  // Get current performance mode
  getPerformanceMode() {
    return this.performanceMode;
  }

  // Set performance mode manually
  setPerformanceMode(mode: "high" | "balanced" | "low") {
    this.performanceMode = mode;
    this.applyPerformanceSettings();
  }

  // Cleanup all observers
  cleanup() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers.clear();
    this.loadedAnimations.clear();
  }
}

// Utility functions for performance optimization
export const optimizeAnimationForDevice = (
  animation: gsap.TweenVars
): gsap.TweenVars => {
  const manager = AnimationPerformanceManager.getInstance();
  const config = manager.getPerformanceConfig();

  return {
    ...animation,
    duration: Math.min(
      typeof animation.duration === "number" ? animation.duration : 0.6,
      config.preferredDuration
    ),
    force3D: config.useTransforms,
    // Disable complex effects on low-end devices
    ...(config.enableComplexEffects
      ? {}
      : {
          scale: undefined,
          rotation: undefined,
          skew: undefined,
        }),
  };
};

// Create performance-aware animation
export const createPerformantAnimation = (
  target: gsap.TweenTarget,
  vars: gsap.TweenVars
): gsap.core.Tween | gsap.core.Timeline => {
  const optimizedVars = optimizeAnimationForDevice(vars);
  const animation = gsap.to(target, optimizedVars);

  return AnimationPerformanceManager.getInstance().optimizeForAccessibility(
    animation
  ) as gsap.core.Tween;
};

// Export singleton instance
export const performanceManager = AnimationPerformanceManager.getInstance();
