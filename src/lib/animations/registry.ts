// Animation configuration types
export interface AnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
  repeat?: number;
  yoyo?: boolean;
  stagger?: number;
}

export interface GSAPAnimationConfig extends AnimationConfig {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  timeline?: boolean;
}

export interface MotionAnimationConfig extends AnimationConfig {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  exit?: Record<string, unknown>;
  whileHover?: Record<string, unknown>;
  whileTap?: Record<string, unknown>;
  transition?: Record<string, unknown>;
}

// Animation registry for reusable animations
export class AnimationRegistry {
  private static instance: AnimationRegistry;
  private animations = new Map<
    string,
    GSAPAnimationConfig | MotionAnimationConfig
  >();
  private presets = new Map<
    string,
    GSAPAnimationConfig | MotionAnimationConfig
  >();

  private constructor() {
    this.initializePresets();
  }

  static getInstance(): AnimationRegistry {
    if (!AnimationRegistry.instance) {
      AnimationRegistry.instance = new AnimationRegistry();
    }
    return AnimationRegistry.instance;
  }

  // Initialize common animation presets
  private initializePresets() {
    // GSAP Presets
    this.presets.set("gsap.fadeIn", {
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
    });

    this.presets.set("gsap.slideInLeft", {
      from: { x: -100, opacity: 0 },
      to: { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    });

    this.presets.set("gsap.slideInRight", {
      from: { x: 100, opacity: 0 },
      to: { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    });

    this.presets.set("gsap.scaleIn", {
      from: { scale: 0, opacity: 0 },
      to: { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
    });

    this.presets.set("gsap.rotateIn", {
      from: { rotation: -180, scale: 0, opacity: 0 },
      to: {
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
    });

    // Framer Motion Presets
    this.presets.set("motion.fadeIn", {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      duration: 0.6,
      ease: "easeOut",
    });

    this.presets.set("motion.slideIn", {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      duration: 0.6,
      ease: "easeOut",
    });

    this.presets.set("motion.scaleIn", {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      duration: 0.5,
      ease: "easeOut",
    });

    this.presets.set("motion.buttonHover", {
      whileHover: { scale: 1.05, y: -2 },
      whileTap: { scale: 0.95 },
      duration: 0.2,
      ease: "easeInOut",
    });

    this.presets.set("motion.cardHover", {
      whileHover: {
        scale: 1.03,
        y: -5,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      },
      duration: 0.3,
      ease: "easeOut",
    });
  }

  // Register custom animation
  register(
    name: string,
    config: GSAPAnimationConfig | MotionAnimationConfig
  ): void {
    this.animations.set(name, config);
  }

  // Get animation configuration
  get(name: string): GSAPAnimationConfig | MotionAnimationConfig | undefined {
    return this.animations.get(name) || this.presets.get(name);
  }

  // Get all available animations
  getAll(): string[] {
    return [
      ...Array.from(this.presets.keys()),
      ...Array.from(this.animations.keys()),
    ];
  }

  // Remove custom animation
  unregister(name: string): boolean {
    return this.animations.delete(name);
  }

  // Merge animations
  merge(
    name: string,
    overrides: Partial<GSAPAnimationConfig | MotionAnimationConfig>
  ): GSAPAnimationConfig | MotionAnimationConfig | undefined {
    const base = this.get(name);
    if (!base) return undefined;

    return { ...base, ...overrides };
  }

  // Get animations by category
  getByCategory(
    category: "gsap" | "motion"
  ): Array<[string, GSAPAnimationConfig | MotionAnimationConfig]> {
    const all = [
      ...Array.from(this.presets.entries()),
      ...Array.from(this.animations.entries()),
    ];
    return all.filter(([name]) => name.startsWith(category + "."));
  }
}

// Export singleton instance
export const animationRegistry = AnimationRegistry.getInstance();
