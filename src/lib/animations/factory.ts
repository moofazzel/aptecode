import { gsap } from "gsap";
import {
  animationRegistry,
  GSAPAnimationConfig,
  MotionAnimationConfig,
} from "./registry";

// Animation factory for creating dynamic animations
export class AnimationFactory {
  private static instance: AnimationFactory;

  private constructor() {}

  static getInstance(): AnimationFactory {
    if (!AnimationFactory.instance) {
      AnimationFactory.instance = new AnimationFactory();
    }
    return AnimationFactory.instance;
  }

  // Create GSAP animation from registry
  createGSAPAnimation(
    element: HTMLElement | HTMLElement[],
    animationName: string,
    overrides?: Partial<GSAPAnimationConfig>
  ): gsap.core.Timeline | gsap.core.Tween | null {
    const config = animationRegistry.get(animationName) as GSAPAnimationConfig;
    if (!config || !animationName.startsWith("gsap.")) {
      console.warn(`GSAP animation "${animationName}" not found in registry`);
      return null;
    }

    const mergedConfig = overrides ? { ...config, ...overrides } : config;

    if (mergedConfig.timeline) {
      const tl = gsap.timeline();
      if (mergedConfig.from && mergedConfig.to) {
        tl.fromTo(element, mergedConfig.from, mergedConfig.to);
      }
      return tl;
    }

    if (mergedConfig.from && mergedConfig.to) {
      return gsap.fromTo(element, mergedConfig.from, mergedConfig.to);
    }

    if (mergedConfig.to) {
      return gsap.to(element, mergedConfig.to);
    }

    return null;
  }

  // Create Motion animation config from registry
  createMotionConfig(
    animationName: string,
    overrides?: Partial<MotionAnimationConfig>
  ): MotionAnimationConfig | null {
    const config = animationRegistry.get(
      animationName
    ) as MotionAnimationConfig;
    if (!config || !animationName.startsWith("motion.")) {
      console.warn(`Motion animation "${animationName}" not found in registry`);
      return null;
    }

    return overrides ? { ...config, ...overrides } : config;
  }

  // Create staggered animation
  createStaggeredGSAP(
    elements: HTMLElement[],
    animationName: string,
    staggerDelay: number = 0.1,
    overrides?: Partial<GSAPAnimationConfig>
  ): gsap.core.Timeline | null {
    const config = animationRegistry.get(animationName) as GSAPAnimationConfig;
    if (!config || !animationName.startsWith("gsap.")) return null;

    const tl = gsap.timeline();
    const mergedConfig = overrides ? { ...config, ...overrides } : config;

    elements.forEach((element, index) => {
      const delay = index * staggerDelay;
      const animConfig = { ...mergedConfig };

      if (animConfig.to) {
        animConfig.to.delay = delay;
      }

      if (mergedConfig.from && mergedConfig.to) {
        tl.fromTo(
          element,
          mergedConfig.from,
          animConfig.to || {},
          index === 0 ? 0 : "<"
        );
      } else if (mergedConfig.to) {
        tl.to(element, animConfig.to || {}, index === 0 ? 0 : "<");
      }
    });

    return tl;
  }

  // Create responsive animation
  createResponsiveGSAP(
    element: HTMLElement | HTMLElement[],
    animationName: string,
    breakpoints: {
      mobile?: Partial<GSAPAnimationConfig>;
      tablet?: Partial<GSAPAnimationConfig>;
      desktop?: Partial<GSAPAnimationConfig>;
    }
  ): gsap.core.Timeline | null {
    const baseConfig = animationRegistry.get(
      animationName
    ) as GSAPAnimationConfig;
    if (!baseConfig) return null;

    const mm = gsap.matchMedia();
    const tl = gsap.timeline();

    // Mobile
    if (breakpoints.mobile) {
      mm.add("(max-width: 767px)", () => {
        const config = { ...baseConfig, ...breakpoints.mobile };
        if (config.from && config.to) {
          tl.fromTo(element, config.from, config.to);
        }
      });
    }

    // Tablet
    if (breakpoints.tablet) {
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        const config = { ...baseConfig, ...breakpoints.tablet };
        if (config.from && config.to) {
          tl.fromTo(element, config.from, config.to);
        }
      });
    }

    // Desktop
    if (breakpoints.desktop) {
      mm.add("(min-width: 1024px)", () => {
        const config = { ...baseConfig, ...breakpoints.desktop };
        if (config.from && config.to) {
          tl.fromTo(element, config.from, config.to);
        }
      });
    }

    return tl;
  }

  // Create scroll-triggered animation
  createScrollTriggeredGSAP(
    element: HTMLElement | HTMLElement[],
    animationName: string,
    scrollConfig?: {
      trigger?: string | HTMLElement;
      start?: string;
      end?: string;
      scrub?: boolean | number;
      pin?: boolean;
      markers?: boolean;
    },
    overrides?: Partial<GSAPAnimationConfig>
  ): gsap.core.Tween | null {
    const config = animationRegistry.get(animationName) as GSAPAnimationConfig;
    if (!config) return null;

    const mergedConfig = overrides ? { ...config, ...overrides } : config;

    if (mergedConfig.to) {
      mergedConfig.to.scrollTrigger = {
        trigger: scrollConfig?.trigger || element,
        start: scrollConfig?.start || "top 80%",
        end: scrollConfig?.end || "bottom 20%",
        scrub: scrollConfig?.scrub || false,
        pin: scrollConfig?.pin || false,
        markers: scrollConfig?.markers || false,
        toggleActions: "play none none reverse",
      };
    }

    if (mergedConfig.from && mergedConfig.to) {
      return gsap.fromTo(element, mergedConfig.from, mergedConfig.to);
    }

    return null;
  }

  // Batch create animations
  batchCreate(
    animations: Array<{
      element: HTMLElement | HTMLElement[];
      animationName: string;
      overrides?: Partial<GSAPAnimationConfig>;
      delay?: number;
    }>
  ): gsap.core.Timeline {
    const tl = gsap.timeline();

    animations.forEach(({ element, animationName, overrides, delay = 0 }) => {
      const config = animationRegistry.get(
        animationName
      ) as GSAPAnimationConfig;
      if (!config) return;

      const mergedConfig = overrides ? { ...config, ...overrides } : config;

      if (mergedConfig.to) {
        mergedConfig.to.delay = delay;
      }

      if (mergedConfig.from && mergedConfig.to) {
        tl.fromTo(
          element,
          mergedConfig.from,
          mergedConfig.to,
          delay > 0 ? `+=${delay}` : 0
        );
      } else if (mergedConfig.to) {
        tl.to(element, mergedConfig.to, delay > 0 ? `+=${delay}` : 0);
      }
    });

    return tl;
  }
}

// Export singleton instance
export const animationFactory = AnimationFactory.getInstance();
