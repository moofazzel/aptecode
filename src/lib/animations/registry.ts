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

    // Fast Animation Presets for Snappy Feel
    this.presets.set("motion.fastSlideIn", {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      duration: 0.25,
      ease: "easeOut",
    });

    this.presets.set("motion.fastFadeIn", {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      duration: 0.2,
      ease: "easeOut",
    });

    this.presets.set("motion.fastScaleIn", {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      duration: 0.2,
      ease: "easeOut",
    });

    this.presets.set("motion.fastButtonHover", {
      whileHover: { scale: 1.05, y: -1 },
      whileTap: { scale: 0.98 },
      duration: 0.15,
      ease: "easeInOut",
    });

    this.presets.set("motion.fastIconHover", {
      whileHover: { scale: 1.1, rotate: 5 },
      whileTap: { scale: 0.95 },
      duration: 0.15,
      ease: "easeInOut",
    });

    this.presets.set("motion.fastItemHover", {
      whileHover: { scale: 1.02, x: 2 },
      whileTap: { scale: 0.98 },
      duration: 0.15,
      ease: "easeInOut",
    });

    // Sidebar-specific fast animations
    this.presets.set("motion.sidebarSlide", {
      initial: { x: "100%", scale: 0.98, opacity: 0 },
      animate: { x: 0, scale: 1, opacity: 1 },
      exit: { x: "100%", scale: 0.98, opacity: 0 },
      duration: 0.3,
      ease: "easeOut",
    });

    this.presets.set("motion.sidebarOverlay", {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      duration: 0.2,
      ease: "easeOut",
    });

    this.presets.set("motion.sidebarItem", {
      initial: { y: 15, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      duration: 0.2,
      ease: "easeOut",
    });

    // Navbar scroll animations
    this.presets.set("gsap.navbarSticky", {
      from: {
        position: "relative",
        top: "auto",
        left: "auto",
        right: "auto",
        zIndex: "auto",
      },
      to: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        duration: 0.3,
        ease: "power2.out",
      },
    });

    this.presets.set("gsap.navbarContainer", {
      from: {
        margin: "20px",
        borderRadius: "12px",
        backgroundColor: "#F2F3F4",
        backdropFilter: "none",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        border: "1px solid #E4E4E4",
      },
      to: {
        margin: 0,
        borderRadius: 0,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        duration: 0.4,
        ease: "power2.out",
      },
    });

    // Running text animations
    this.presets.set("gsap.runningText", {
      to: {
        x: "-50%",
        duration: 20,
        ease: "none",
        repeat: -1,
      },
    });

    this.presets.set("gsap.runningTextFast", {
      to: {
        x: "-50%",
        duration: 10,
        ease: "none",
        repeat: -1,
      },
    });

    this.presets.set("gsap.runningTextSlow", {
      to: {
        x: "-50%",
        duration: 30,
        ease: "none",
        repeat: -1,
      },
    });

    // Advanced scroll animations
    this.presets.set("gsap.slideInUp", {
      from: { y: 60, opacity: 0, scale: 0.95 },
      to: { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
    });

    this.presets.set("gsap.slideInDown", {
      from: { y: -60, opacity: 0, scale: 0.95 },
      to: { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
    });

    this.presets.set("gsap.parallaxUp", {
      to: {
        y: -100,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "self",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    });

    this.presets.set("gsap.parallaxDown", {
      to: {
        y: 100,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "self",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    });

    this.presets.set("gsap.revealFromLeft", {
      from: { x: -100, opacity: 0, rotation: -5 },
      to: { x: 0, opacity: 1, rotation: 0, duration: 1, ease: "power3.out" },
    });

    this.presets.set("gsap.revealFromRight", {
      from: { x: 100, opacity: 0, rotation: 5 },
      to: { x: 0, opacity: 1, rotation: 0, duration: 1, ease: "power3.out" },
    });

    this.presets.set("gsap.zoomIn", {
      from: { scale: 0.5, opacity: 0, rotation: 10 },
      to: {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
    });

    this.presets.set("gsap.flipIn", {
      from: { rotationX: 90, opacity: 0 },
      to: { rotationX: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    });

    this.presets.set("gsap.blurIn", {
      from: { filter: "blur(10px)", opacity: 0, scale: 1.1 },
      to: {
        filter: "blur(0px)",
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      },
    });

    this.presets.set("gsap.slideInStagger", {
      from: { y: 80, opacity: 0, scale: 0.9 },
      to: {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      },
    });

    this.presets.set("gsap.textReveal", {
      from: { y: 100, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    });

    this.presets.set("gsap.imageReveal", {
      from: { scale: 1.2, opacity: 0, filter: "brightness(0.5)" },
      to: {
        scale: 1,
        opacity: 1,
        filter: "brightness(1)",
        duration: 1.2,
        ease: "power2.out",
      },
    });

    this.presets.set("gsap.cardHover", {
      to: {
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.out",
      },
    });

    this.presets.set("gsap.buttonPulse", {
      to: {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      },
    });

    this.presets.set("gsap.progressBar", {
      from: { scaleX: 0 },
      to: { scaleX: 1, duration: 1, ease: "power2.out" },
    });

    this.presets.set("gsap.counterUp", {
      from: { innerHTML: 0 },
      to: {
        innerHTML: "100%",
        duration: 2,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        onUpdate: function () {
          this.targets()[0].innerHTML =
            Math.ceil(this.targets()[0].innerHTML) + "%";
        },
      },
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
