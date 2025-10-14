"use client";

import { useAnimationContext } from "@/contexts/AnimationContext";
import { animationFactory } from "@/lib/animations/factory";
import { performanceManager } from "@/lib/animations/performance";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

interface RunningTextItem {
  text: string;
  strokeColor?: string;
}

interface RunningTextProps {
  items?: RunningTextItem[];
  className?: string;
  defaultStrokeColor?: string;
  speed?: number;
  direction?: "left" | "right";
  defaultStockStyle?: React.CSSProperties;
}

const DEFAULT_STROKE_COLOR = "#74787C";

const DEFAULT_ITEMS: RunningTextItem[] = [
  { text: "Websites that Win Customers" },
  { text: "Fast Builds, Real Results" },
  { text: "Strategy-led, conversion-designed" },
];

const getDefaultStockStyle = (): React.CSSProperties => ({
  WebkitTextFillColor: "transparent",
  WebkitTextStrokeWidth: "1px",
  fontSize: "180px",
  fontWeight: "800",
  fontStyle: "italic",
  whiteSpace: "nowrap",
  display: "inline-block",
});

const RunningText: React.FC<RunningTextProps> = ({
  items = DEFAULT_ITEMS,
  className = "",
  defaultStrokeColor = DEFAULT_STROKE_COLOR,
  defaultStockStyle,
  speed = 20,
  direction = "left",
}) => {
  const stockStyle = {
    ...getDefaultStockStyle(),
    ...defaultStockStyle,
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const { isGSAPReady, registerAnimation, unregisterAnimation } =
    useAnimationContext();

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    if (!isGSAPReady || !ulRef.current) return;

    const ul = ulRef.current;
    const container = containerRef.current;

    if (!container) return;

    // Calculate the width of the first set of items
    const firstSetWidth = ul.scrollWidth / 2;

    // Set initial position
    gsap.set(ul, { x: 0 });

    // Create animation using factory with custom config
    const animation = animationFactory.createGSAPAnimation(
      ul,
      "gsap.runningText", // Use the preset from registry
      {
        to: {
          x: direction === "left" ? -firstSetWidth : firstSetWidth,
          duration: speed,
          ease: "none",
          repeat: -1,
        },
      }
    );

    if (!animation) return;

    // Optimize for performance and accessibility
    const optimizedAnimation =
      performanceManager.optimizeForAccessibility(animation);

    // Pause on hover
    const handleMouseEnter = () => {
      optimizedAnimation.pause();
    };

    const handleMouseLeave = () => {
      optimizedAnimation.resume();
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Register animation for cleanup
    const cleanup = () => {
      optimizedAnimation.kill();
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };

    registerAnimation("running-text", cleanup);

    return () => {
      unregisterAnimation("running-text");
    };
  }, [
    speed,
    direction,
    items,
    isGSAPReady,
    registerAnimation,
    unregisterAnimation,
  ]);

  return (
    <div
      ref={containerRef}
      className={`bg-transparent pb-[80px] mt-[-80px] pt-0 overflow-x-hidden ${className}`}
    >
      <div className="overflow-x-hidden">
        <ul
          ref={ulRef}
          className="flex text-[#a868fa] bgsize-[20px] overflow-hidden gap-16"
          style={{ width: "max-content" }}
        >
          {duplicatedItems.map((item, index) => (
            <li
              key={`${item.text}-${index}`}
              style={{
                ...stockStyle,
                WebkitTextStrokeColor: item.strokeColor || defaultStrokeColor,
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RunningText;
