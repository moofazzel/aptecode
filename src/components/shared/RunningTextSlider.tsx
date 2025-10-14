"use client";

import { useEffect, useRef } from "react";

interface RunningTextSliderProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  itemClassName?: string;
}

const RunningTextSlider = ({
  items,
  speed = 50,
  direction = "left",
  className = "",
  itemClassName = "",
}: RunningTextSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const sliderWidth = slider.scrollWidth;

    // Create the running animation
    const animate = () => {
      if (direction === "left") {
        slider.style.transform = `translateX(-${sliderWidth / 2}px)`;
      } else {
        slider.style.transform = `translateX(${sliderWidth / 2}px)`;
      }
    };

    // Set initial position
    animate();

    // Start animation
    const animation = slider.animate(
      [
        {
          transform:
            direction === "left"
              ? `translateX(-${sliderWidth / 2}px)`
              : `translateX(${sliderWidth / 2}px)`,
        },
        {
          transform:
            direction === "left"
              ? `translateX(0px)`
              : `translateX(-${sliderWidth / 2}px)`,
        },
      ],
      {
        duration: (sliderWidth / 2) * speed,
        iterations: Infinity,
        easing: "linear",
      }
    );

    return () => {
      animation.cancel();
    };
  }, [items, speed, direction]);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        ref={sliderRef}
        className="inline-flex items-center gap-8"
        style={{ willChange: "transform" }}
      >
        {[...items, ...items].map((item, index) => (
          <span key={index} className={`inline-block ${itemClassName}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RunningTextSlider;
