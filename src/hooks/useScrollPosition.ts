"use client";

import { useEffect, useState } from "react";

interface ScrollPosition {
  y: number;
  direction: "up" | "down";
  isScrolled: boolean;
}

export const useScrollPosition = (threshold: number = 100) => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    y: 0,
    direction: "up",
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      const isScrolled = currentScrollY > threshold;

      setScrollPosition({
        y: currentScrollY,
        direction,
        isScrolled,
      });

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return scrollPosition;
};
