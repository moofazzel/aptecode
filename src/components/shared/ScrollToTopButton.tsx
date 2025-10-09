"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

interface ScrollToTopButtonProps {
  className?: string;
  threshold?: number;
}

export default function ScrollToTopButton({
  className = "",
  threshold = 100,
}: ScrollToTopButtonProps) {
  const { y: scrollY, isScrolled } = useScrollPosition(threshold);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;

      if (scrollableHeight > 0) {
        const percentage = Math.round((scrollY / scrollableHeight) * 100);
        setScrollPercentage(Math.min(percentage, 100));
      }
    };

    updateScrollPercentage();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isScrolled) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 border-2 rounded-full flex items-center justify-center transition-all duration-300 group z-50 bg-white backdrop-blur-sm ${className}`}
      style={{ borderColor: "#a868fa" }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0, y: 20 }}
      transition={{ delay: 0.3 }}
    >
      {scrollPercentage >= 100 ? (
        <ArrowUp
          className="w-5 h-5 transition-colors"
          style={{ color: "#a868fa" }}
        />
      ) : (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Circular Progress Background */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90"
            viewBox="0 0 36 36"
          >
            {/* Background circle */}
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="rgba(168, 104, 250, 0.2)"
              strokeWidth="2"
            />
            {/* Progress circle */}
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#a868fa"
              strokeWidth="2"
              strokeDasharray={`${scrollPercentage}, 100`}
              className="transition-all duration-300 ease-out"
            />
          </svg>

          {/* Percentage text */}
          <span
            className="text-xs font-semibold transition-colors"
            style={{ color: "#a868fa" }}
          >
            {scrollPercentage}%
          </span>
        </div>
      )}
    </motion.button>
  );
}
