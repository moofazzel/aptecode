"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  hover?: boolean;

  /** On-scroll controls (defaults give ‘animate once when ~30% visible’) */
  inView?: boolean; // keep API simple: true => use whileInView
  once?: boolean;
  amount?: number; // 0..1: how much must be visible
  rootMargin?: string; // e.g. "0px 0px -10% 0px"
}

const MotionCard: React.FC<MotionCardProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  hover = true,
  inView = true,
  once = true,
  amount = 0.3,
  rootMargin,
}) => {
  const prefersReduced = useReducedMotion();

  const directionVariants: Record<
    NonNullable<MotionCardProps["direction"]>,
    { x?: number; y?: number; opacity: number }
  > = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
  };

  const hoverVariants = hover
    ? {
        scale: 1.05,
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }
    : {};

  const initial = prefersReduced
    ? { opacity: 0 }
    : directionVariants[direction];
  const final = { x: 0, y: 0, opacity: 1 };

  return (
    <motion.div
      initial={initial}
      /* If inView=true, animate on scroll; else fall back to on-mount animate */
      animate={inView ? undefined : final}
      whileInView={inView ? final : undefined}
      viewport={inView ? { once, amount, margin: rootMargin } : undefined}
      whileHover={hoverVariants}
      transition={{
        duration: prefersReduced ? 0.001 : 0.6,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard;
