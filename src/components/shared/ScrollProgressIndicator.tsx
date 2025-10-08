"use client";

import { useAnimationContext } from "@/contexts/AnimationContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

interface ScrollProgressIndicatorProps {
  position?: "top" | "bottom";
  height?: number;
  color?: string;
  backgroundColor?: string;
  showPercentage?: boolean;
  className?: string;
}

export const ScrollProgressIndicator: React.FC<
  ScrollProgressIndicatorProps
> = ({
  position = "top",
  height = 4,
  color = "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
  backgroundColor = "rgba(0, 0, 0, 0.1)",
  showPercentage = false,
  className = "",
}) => {
  const { settings, registerAnimation, unregisterAnimation } =
    useAnimationContext();
  const progressRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);
  const [, setScrollProgress] = useState(0);
  const animationId = useRef(`scroll-progress-${Date.now()}-${Math.random()}`);

  useEffect(() => {
    if (settings.reducedMotion) return;

    const currentAnimationId = animationId.current;

    // Create scroll progress animation
    const progressAnimation = gsap.to(progressRef.current, {
      scaleX: 1,
      duration: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);

          if (percentageRef.current) {
            percentageRef.current.textContent = `${Math.round(
              progress * 100
            )}%`;
          }
        },
      },
    });

    const cleanupFn = () => {
      if (progressAnimation) {
        progressAnimation.kill();
      }
    };

    registerAnimation(currentAnimationId, cleanupFn);

    return () => {
      unregisterAnimation(currentAnimationId);
    };
  }, [settings.reducedMotion, registerAnimation, unregisterAnimation]);

  const positionClasses = position === "top" ? "top-0" : "bottom-0";

  return (
    <div
      className={`fixed left-0 right-0 z-50 ${positionClasses} ${className}`}
      style={{ height: `${height}px` }}
    >
      {/* Background bar */}
      <div className="absolute inset-0 w-full" style={{ backgroundColor }} />

      {/* Progress bar */}
      <div
        ref={progressRef}
        className="absolute inset-0 origin-left"
        style={{
          background: color,
          transform: "scaleX(0)",
          transformOrigin: "left center",
        }}
      />

      {/* Percentage display */}
      {showPercentage && (
        <div
          ref={percentageRef}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs font-medium text-white bg-black/20 px-2 py-1 rounded"
          style={{ fontSize: "10px" }}
        >
          0%
        </div>
      )}
    </div>
  );
};

// Smooth scroll component
interface SmoothScrollProps {
  children: React.ReactNode;
  className?: string;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({
  children,
  className = "",
}) => {
  const { settings, registerAnimation, unregisterAnimation } =
    useAnimationContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const animationId = useRef(`smooth-scroll-${Date.now()}-${Math.random()}`);

  useEffect(() => {
    if (settings.reducedMotion || !containerRef.current) return;

    const currentAnimationId = animationId.current;
    const container = containerRef.current;

    // Enable smooth scrolling
    container.style.scrollBehavior = "smooth";

    // Add momentum scrolling for mobile
    (
      container.style as CSSStyleDeclaration & {
        webkitOverflowScrolling?: string;
      }
    ).webkitOverflowScrolling = "touch";

    const cleanupFn = () => {
      if (container) {
        container.style.scrollBehavior = "auto";
        (
          container.style as CSSStyleDeclaration & {
            webkitOverflowScrolling?: string;
          }
        ).webkitOverflowScrolling = "auto";
      }
    };

    registerAnimation(currentAnimationId, cleanupFn);

    return () => {
      unregisterAnimation(currentAnimationId);
    };
  }, [settings.reducedMotion, registerAnimation, unregisterAnimation]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

// Scroll to top button component
interface ScrollToTopButtonProps {
  threshold?: number;
  className?: string;
  children?: React.ReactNode;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  threshold = 300,
  className = "",
  children,
}) => {
  const { settings, registerAnimation, unregisterAnimation } =
    useAnimationContext();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationId = useRef(`scroll-to-top-${Date.now()}-${Math.random()}`);

  useEffect(() => {
    if (settings.reducedMotion) return;

    const currentAnimationId = animationId.current;

    // Show/hide button based on scroll position
    const scrollTrigger = ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const shouldShow = self.scroll() > threshold;
        setIsVisible(shouldShow);

        if (buttonRef.current) {
          gsap.to(buttonRef.current, {
            opacity: shouldShow ? 1 : 0,
            scale: shouldShow ? 1 : 0.8,
            duration: 0.3,
            ease: "power2.out",
            pointerEvents: shouldShow ? "auto" : "none",
          });
        }
      },
    });

    const cleanupFn = () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };

    registerAnimation(currentAnimationId, cleanupFn);

    return () => {
      unregisterAnimation(currentAnimationId);
    };
  }, [
    threshold,
    settings.reducedMotion,
    registerAnimation,
    unregisterAnimation,
  ]);

  const scrollToTop = () => {
    if (settings.reducedMotion) {
      window.scrollTo(0, 0);
      return;
    }

    gsap.to(window, {
      scrollTo: { y: 0, autoKill: false },
      duration: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg
        bg-gradient-to-r from-purple-500 to-blue-500
        text-white hover:from-purple-600 hover:to-blue-600
        transition-all duration-300 transform
        ${
          isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }
        ${className}
      `}
      aria-label="Scroll to top"
    >
      {children || (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      )}
    </button>
  );
};

// Scroll spy component for navigation highlighting
interface ScrollSpyProps {
  sections: string[];
  offset?: number;
  className?: string;
  onSectionChange?: (sectionId: string) => void;
}

export const ScrollSpy: React.FC<ScrollSpyProps> = ({
  sections,
  offset = 100,
  className = "",
  onSectionChange,
}) => {
  const { settings, registerAnimation, unregisterAnimation } =
    useAnimationContext();
  const [activeSection, setActiveSection] = useState<string>("");
  const animationId = useRef(`scroll-spy-${Date.now()}-${Math.random()}`);

  useEffect(() => {
    if (settings.reducedMotion) return;

    const currentAnimationId = animationId.current;

    // Create scroll spy triggers for each section
    const triggers = sections.map((sectionId) => {
      return ScrollTrigger.create({
        trigger: `#${sectionId}`,
        start: `top ${offset}px`,
        end: `bottom ${offset}px`,
        onEnter: () => {
          setActiveSection(sectionId);
          onSectionChange?.(sectionId);
        },
        onEnterBack: () => {
          setActiveSection(sectionId);
          onSectionChange?.(sectionId);
        },
      });
    });

    const cleanupFn = () => {
      triggers.forEach((trigger) => trigger.kill());
    };

    registerAnimation(currentAnimationId, cleanupFn);

    return () => {
      unregisterAnimation(currentAnimationId);
    };
  }, [
    sections,
    offset,
    onSectionChange,
    settings.reducedMotion,
    registerAnimation,
    unregisterAnimation,
  ]);

  return (
    <div className={className}>
      {sections.map((sectionId) => (
        <div
          key={sectionId}
          className={`scroll-spy-item ${
            activeSection === sectionId ? "active" : ""
          }`}
          data-section={sectionId}
        />
      ))}
    </div>
  );
};
