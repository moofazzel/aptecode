"use client";

import { useMotionAnimation } from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface OptimizedMotionCardProps {
  children: ReactNode;
  className?: string;
  animationName?: string;
  delay?: number;
  staggerChildren?: boolean;
  childrenCount?: number;
  hover?: boolean;
  onClick?: () => void;
}

const OptimizedMotionCard = forwardRef<
  HTMLDivElement,
  OptimizedMotionCardProps
>(
  (
    {
      children,
      className = "",
      animationName = "motion.fadeIn",
      delay = 0,
      staggerChildren = false,
      childrenCount = 0,
      hover = true,
      onClick,
    },
    ref
  ) => {
    // Get optimized motion config from registry
    const motionConfig = useMotionAnimation(animationName, {
      transition: { delay },
    });

    // Get hover animation config if enabled
    const hoverConfig = useMotionAnimation("motion.cardHover");

    if (!motionConfig) {
      // Fallback to static div if animation config not found
      return (
        <div ref={ref} className={className} onClick={onClick}>
          {children}
        </div>
      );
    }

    // Container variants for staggered children
    const containerVariants = staggerChildren
      ? {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: delay,
            },
          },
        }
      : undefined;

    // Child variants for staggered animation
    const childVariants = staggerChildren
      ? {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          },
        }
      : undefined;

    return (
      <motion.div
        ref={ref}
        initial={motionConfig.initial}
        animate={motionConfig.animate}
        exit={motionConfig.exit}
        whileHover={hover && hoverConfig ? hoverConfig.whileHover : undefined}
        whileTap={onClick ? { scale: 0.98 } : undefined}
        variants={containerVariants}
        transition={motionConfig.transition}
        className={`cursor-${onClick ? "pointer" : "default"} ${className}`}
        onClick={onClick}
        // Performance optimizations
        style={{ willChange: "transform" }}
        layout={false} // Disable layout animations for better performance
      >
        {staggerChildren ? (
          // Render children with stagger animation
          <>
            {Array.from({ length: childrenCount }, (_, index) => (
              <motion.div key={index} variants={childVariants}>
                {Array.isArray(children) ? children[index] : children}
              </motion.div>
            ))}
          </>
        ) : (
          children
        )}
      </motion.div>
    );
  }
);

OptimizedMotionCard.displayName = "OptimizedMotionCard";

export default OptimizedMotionCard;
