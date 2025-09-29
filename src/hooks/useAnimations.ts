"use client";

import { useAnimationContext } from "@/contexts/AnimationContext";
import { animationFactory } from "@/lib/animations/factory";
import {
  GSAPAnimationConfig,
  MotionAnimationConfig,
} from "@/lib/animations/registry";
import { useCallback, useEffect, useMemo, useRef } from "react";

// Hook for GSAP animations with performance optimizations
export const useGSAPAnimation = (
  animationName: string,
  options?: {
    dependencies?: React.DependencyList;
    overrides?: Partial<GSAPAnimationConfig>;
    autoPlay?: boolean;
    cleanup?: boolean;
  }
) => {
  const { settings, registerAnimation, unregisterAnimation } =
    useAnimationContext();
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | gsap.core.Tween | null>(
    null
  );
  const animationId = useRef(`gsap-${Date.now()}-${Math.random()}`);

  const {
    dependencies = [],
    overrides = {},
    autoPlay = true,
    cleanup = true,
  } = options || {};

  // Use dependencies in effect
  useEffect(() => {
    depsRef.current = dependencies;
  });
  const depsRef = useRef(dependencies);

  // Apply global settings to overrides
  const mergedOverrides = useMemo(
    () => ({
      ...overrides,
      duration: overrides.duration || settings.globalDuration,
      ease: overrides.ease || settings.globalEasing,
      ...(settings.reducedMotion && { duration: 0.1, ease: "none" }),
    }),
    [overrides, settings]
  );

  // Create animation
  const createAnimation = useCallback(() => {
    if (!elementRef.current || settings.reducedMotion) return null;

    const animation = animationFactory.createGSAPAnimation(
      elementRef.current,
      animationName,
      mergedOverrides
    );

    if (animation && !autoPlay) {
      animation.pause();
    }

    return animation;
  }, [animationName, mergedOverrides, autoPlay, settings.reducedMotion]);

  // Initialize animation
  useEffect(() => {
    const currentAnimationId = animationId.current;
    animationRef.current = createAnimation();

    if (animationRef.current && cleanup) {
      const cleanupFn = () => {
        if (animationRef.current) {
          animationRef.current.kill();
          animationRef.current = null;
        }
      };

      registerAnimation(currentAnimationId, cleanupFn);

      return () => {
        unregisterAnimation(currentAnimationId);
      };
    }
  }, [createAnimation, cleanup, registerAnimation, unregisterAnimation]);

  // Animation controls
  const controls = useMemo(
    () => ({
      play: () => animationRef.current?.play(),
      pause: () => animationRef.current?.pause(),
      reverse: () => animationRef.current?.reverse(),
      restart: () => animationRef.current?.restart(),
      kill: () => {
        if (animationRef.current) {
          animationRef.current.kill();
          animationRef.current = null;
        }
      },
      isActive: () => animationRef.current?.isActive() || false,
      progress: (value?: number) => {
        if (value !== undefined) {
          animationRef.current?.progress(value);
        }
        return animationRef.current?.progress() || 0;
      },
    }),
    []
  );

  return {
    ref: elementRef,
    animation: animationRef.current,
    controls,
    isReady: !!animationRef.current,
  };
};

// Hook for Framer Motion animations
export const useMotionAnimation = (
  animationName: string,
  overrides?: Partial<MotionAnimationConfig>
) => {
  const { settings } = useAnimationContext();

  const config = useMemo(() => {
    const baseConfig = animationFactory.createMotionConfig(
      animationName,
      overrides
    );

    if (!baseConfig) return null;

    // Apply global settings and reduced motion
    if (settings.reducedMotion) {
      return {
        ...baseConfig,
        duration: 0,
        initial: baseConfig.animate || {},
        animate: baseConfig.animate || {},
        transition: { duration: 0 },
      };
    }

    return {
      ...baseConfig,
      transition: {
        duration: baseConfig.duration || settings.globalDuration,
        ease: baseConfig.ease || settings.globalEasing,
        ...baseConfig.transition,
      },
    };
  }, [animationName, overrides, settings]);

  return config;
};

// Hook for staggered animations
export const useStaggeredGSAP = (
  animationName: string,
  options?: {
    staggerDelay?: number;
    dependencies?: React.DependencyList;
    overrides?: Partial<GSAPAnimationConfig>;
    autoPlay?: boolean;
  }
) => {
  const { settings, registerAnimation, unregisterAnimation } =
    useAnimationContext();
  const elementsRef = useRef<HTMLDivElement[]>([]);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  const animationId = useRef(`stagger-${Date.now()}-${Math.random()}`);

  const {
    staggerDelay = 0.1,
    dependencies = [],
    overrides = {},
    autoPlay = true,
  } = options || {};

  // Use dependencies in effect
  useEffect(() => {
    staggerDepsRef.current = dependencies;
  });
  const staggerDepsRef = useRef(dependencies);

  // Create staggered animation
  const createStaggeredAnimation = useCallback(() => {
    if (elementsRef.current.length === 0 || settings.reducedMotion) return null;

    const mergedOverrides = {
      ...overrides,
      duration: overrides.duration || settings.globalDuration,
      ease: overrides.ease || settings.globalEasing,
    };

    const animation = animationFactory.createStaggeredGSAP(
      elementsRef.current,
      animationName,
      settings.reducedMotion ? 0 : staggerDelay,
      mergedOverrides
    );

    if (animation && !autoPlay) {
      animation.pause();
    }

    return animation;
  }, [animationName, staggerDelay, overrides, autoPlay, settings]);

  // Initialize animation
  useEffect(() => {
    const currentAnimationId = animationId.current;
    animationRef.current = createStaggeredAnimation();

    if (animationRef.current) {
      const cleanupFn = () => {
        if (animationRef.current) {
          animationRef.current.kill();
          animationRef.current = null;
        }
      };

      registerAnimation(currentAnimationId, cleanupFn);

      return () => {
        unregisterAnimation(currentAnimationId);
      };
    }
  }, [createStaggeredAnimation, registerAnimation, unregisterAnimation]);

  // Ref callback to collect elements
  const addToRefs = useCallback((element: HTMLDivElement | null) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
    }
  }, []);

  // Clear refs
  const clearRefs = useCallback(() => {
    elementsRef.current = [];
  }, []);

  const controls = useMemo(
    () => ({
      play: () => animationRef.current?.play(),
      pause: () => animationRef.current?.pause(),
      reverse: () => animationRef.current?.reverse(),
      restart: () => animationRef.current?.restart(),
      kill: () => {
        if (animationRef.current) {
          animationRef.current.kill();
          animationRef.current = null;
        }
      },
    }),
    []
  );

  return {
    addToRefs,
    clearRefs,
    animation: animationRef.current,
    controls,
    elementsCount: elementsRef.current.length,
  };
};

// Hook for scroll-triggered animations
export const useScrollAnimation = (
  animationName: string,
  scrollConfig?: {
    trigger?: string;
    start?: string;
    end?: string;
    scrub?: boolean | number;
  },
  overrides?: Partial<GSAPAnimationConfig>
) => {
  const { settings, registerAnimation, unregisterAnimation } =
    useAnimationContext();
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const animationId = useRef(`scroll-${Date.now()}-${Math.random()}`);

  useEffect(() => {
    if (!elementRef.current || settings.reducedMotion) return;

    const currentAnimationId = animationId.current;
    const mergedOverrides = {
      ...overrides,
      duration: overrides?.duration || settings.globalDuration,
      ease: overrides?.ease || settings.globalEasing,
    };

    animationRef.current = animationFactory.createScrollTriggeredGSAP(
      elementRef.current,
      animationName,
      scrollConfig,
      mergedOverrides
    );

    if (animationRef.current) {
      const cleanupFn = () => {
        if (animationRef.current) {
          animationRef.current.kill();
          animationRef.current = null;
        }
      };

      registerAnimation(currentAnimationId, cleanupFn);

      return () => {
        unregisterAnimation(currentAnimationId);
      };
    }
  }, [
    animationName,
    scrollConfig,
    overrides,
    settings,
    registerAnimation,
    unregisterAnimation,
  ]);

  return {
    ref: elementRef,
    animation: animationRef.current,
    isReady: !!animationRef.current,
  };
};

// Hook for performance monitoring
export const useAnimationPerformance = () => {
  const performanceRef = useRef({
    frameCount: 0,
    lastTime: 0,
    fps: 60,
  });

  const startMonitoring = useCallback(() => {
    const monitor = () => {
      const now = performance.now();
      const delta = now - performanceRef.current.lastTime;

      if (delta >= 1000) {
        performanceRef.current.fps = Math.round(
          (performanceRef.current.frameCount * 1000) / delta
        );
        performanceRef.current.frameCount = 0;
        performanceRef.current.lastTime = now;
      }

      performanceRef.current.frameCount++;
      requestAnimationFrame(monitor);
    };

    monitor();
  }, []);

  const getPerformanceMetrics = useCallback(
    () => ({
      fps: performanceRef.current.fps,
      isPerformant: performanceRef.current.fps >= 55,
    }),
    []
  );

  return {
    startMonitoring,
    getPerformanceMetrics,
  };
};
