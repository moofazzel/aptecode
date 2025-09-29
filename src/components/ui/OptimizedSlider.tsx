"use client";

import {
  useAnimationPerformance,
  useGSAPAnimation,
} from "@/hooks/useAnimations";
import { performanceManager } from "@/lib/animations/performance";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

interface OptimizedSliderProps {
  slides: SlideData[];
  autoplay?: boolean;
  duration?: number;
  className?: string;
  lazy?: boolean;
}

const OptimizedSlider: React.FC<OptimizedSliderProps> = ({
  slides,
  autoplay = true,
  duration = 4000,
  className = "",
  lazy = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(!lazy);
  const { startMonitoring, getPerformanceMetrics } = useAnimationPerformance();

  // Use the optimized GSAP animation hook
  const slideAnimation = useGSAPAnimation("gsap.slideInLeft", {
    dependencies: [currentSlide],
    overrides: {
      duration: 0.8,
      ease: "power2.inOut",
    },
    autoPlay: false,
  });

  // Performance monitoring
  useEffect(() => {
    startMonitoring();
  }, [startMonitoring]);

  // Lazy loading setup
  useEffect(() => {
    if (!lazy) return;

    const cleanup = performanceManager.createLazyAnimation(
      ".optimized-slider",
      () => setIsVisible(true),
      {
        rootMargin: "100px",
        threshold: 0.1,
        once: true,
      }
    );

    return cleanup;
  }, [lazy]);

  // Auto-play functionality with performance awareness
  useEffect(() => {
    if (!autoplay || !isVisible || slides.length <= 1) return;

    const metrics = getPerformanceMetrics();
    const adjustedDuration = metrics.isPerformant ? duration : duration * 1.5;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, adjustedDuration);

    return () => clearInterval(interval);
  }, [autoplay, duration, slides.length, isVisible, getPerformanceMetrics]);

  // Slide navigation with optimized animations
  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentSlide) return;

      setCurrentSlide(index);
      slideAnimation.controls.restart();
    },
    [currentSlide, slideAnimation.controls]
  );

  const nextSlide = useCallback(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
  }, [currentSlide, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  }, [currentSlide, slides.length, goToSlide]);

  // Don't render until visible (lazy loading)
  if (!isVisible) {
    return (
      <div
        className={`optimized-slider w-full h-[600px] bg-gray-200 animate-pulse rounded-2xl ${className}`}
        aria-label="Loading slider..."
      />
    );
  }

  const currentSlideData = slides[currentSlide];

  return (
    <div
      className={`optimized-slider relative w-full h-[600px] overflow-hidden rounded-2xl ${className}`}
    >
      {/* Main slide container */}
      <div
        ref={slideAnimation.ref as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 w-full h-full flex items-center justify-center transition-colors duration-500"
        style={{ backgroundColor: currentSlideData.bgColor }}
      >
        <div className="text-center text-white px-8 max-w-4xl">
          <div className="mb-8">
            <Image
              src={currentSlideData.image}
              alt={currentSlideData.title}
              width={256}
              height={256}
              className="w-64 h-64 object-cover rounded-full mx-auto shadow-2xl"
              loading="lazy"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {currentSlideData.title}
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            {currentSlideData.description}
          </p>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Performance indicator (dev mode) */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
          FPS: {getPerformanceMetrics().fps}
        </div>
      )}
    </div>
  );
};

export default OptimizedSlider;
