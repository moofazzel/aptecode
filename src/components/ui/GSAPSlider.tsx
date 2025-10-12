"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

interface GSAPSliderProps {
  slides: SlideData[];
  autoplay?: boolean;
  duration?: number;
  className?: string;
}

const GSAPSlider: React.FC<GSAPSliderProps> = ({
  slides,
  autoplay = true,
  duration = 4000,
  className = "",
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize slider
  useEffect(() => {
    if (!sliderRef.current) return;

    const slideElements = slidesRef.current;

    // Create GSAP timeline
    timelineRef.current = gsap.timeline({ paused: true });

    // Set initial positions
    gsap.set(slideElements, { xPercent: 100, opacity: 0 });
    gsap.set(slideElements[0], { xPercent: 0, opacity: 1 });

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && slides.length > 1) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, duration);

      return () => {
        if (autoplayRef.current) {
          clearInterval(autoplayRef.current);
        }
      };
    }
  }, [autoplay, duration, slides.length]);

  const animateToSlide = (index: number) => {
    const current = slidesRef.current[currentSlide];
    const next = slidesRef.current[index];

    if (!current || !next) return;

    // Create smooth transition animation
    const tl = gsap.timeline();

    tl.to(current, {
      xPercent: -100,
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
    })
      .set(next, { xPercent: 100 })
      .to(
        next,
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
        },
        "-=0.3"
      );

    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    animateToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    animateToSlide(prevIndex);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      animateToSlide(index);
    }
  };

  return (
    <div
      className={`relative w-full h-[600px] overflow-hidden rounded-2xl ${className}`}
    >
      {/* Slider Container */}
      <div ref={sliderRef} className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            ref={(el) => {
              if (el) slidesRef.current[index] = el;
            }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            style={{ backgroundColor: slide.bgColor }}
          >
            <div className="text-center text-white px-8">
              <div className="mb-8">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-64 h-64 object-cover rounded-full mx-auto shadow-2xl"
                />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
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
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GSAPSlider;
