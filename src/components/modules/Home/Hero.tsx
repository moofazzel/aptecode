"use client";

import RunningText from "@/components/shared/RunningText";
import { GradientButton } from "@/components/ui/gradient-button";
import { useGSAP } from "@/lib/gsap-utils";
import { gsap } from "gsap";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"forward" | "backward">(
    "forward"
  );
  const [autoPlayInterval, setAutoPlayInterval] =
    useState<NodeJS.Timeout | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const slides = [
    {
      id: 1,
      subHeading: "Modern Web Development",
      title: "Professional Websites",
      description: "Fast, responsive websites that drive results.",
      buttonText: "Get Started",
      image: "/img/images/hero-img-1.png",
      alt: "modern web development",
    },
    {
      id: 2,
      subHeading: "UI/UX Design",
      title: "Beautiful Experiences",
      description: "User-focused design that converts visitors.",
      buttonText: "Get Started",
      image: "/img/images/hero-img-2.png",
      alt: "UI UX design",
    },
    {
      id: 3,
      subHeading: "SEO & Performance",
      title: "Get Found Online",
      description: "Optimized websites that rank higher in search.",
      buttonText: "Learn More",
      image: "/img/images/hero-img-3.png",
      alt: "SEO performance optimization",
    },
  ];

  // Navigation functions
  const goToSlide = useCallback(
    (index: number, direction: "forward" | "backward" = "forward") => {
      if (isAnimating || index === activeSection) return;

      setIsAnimating(true);
      setSlideDirection(direction);
      setActiveSection(index);

      // Reset animation state after transition (synchronized with animation duration)
      setTimeout(() => setIsAnimating(false), 1200);
    },
    [activeSection, isAnimating]
  );

  const nextSlide = useCallback(() => {
    const nextIndex = (activeSection + 1) % slides.length;
    goToSlide(nextIndex, "forward");
  }, [activeSection, slides.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = (activeSection - 1 + slides.length) % slides.length;
    goToSlide(prevIndex, "backward");
  }, [activeSection, slides.length, goToSlide]);

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlayInterval) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    setAutoPlayInterval(interval);
  }, [autoPlayInterval, nextSlide]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      setAutoPlayInterval(null);
    }
  }, [autoPlayInterval]);

  // Touch/swipe and mouse drag support
  const [mouseStart, setMouseStart] = useState<number | null>(null);
  const [mouseEnd, setMouseEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide(); // Swipe left = forward
    } else if (isRightSwipe) {
      prevSlide(); // Swipe right = backward
    }
  };

  // Mouse drag support
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setMouseEnd(null);
    setMouseStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setMouseEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging || !mouseStart || !mouseEnd) {
      setIsDragging(false);
      return;
    }

    const distance = mouseStart - mouseEnd;
    const isLeftDrag = distance > 50;
    const isRightDrag = distance < -50;

    if (isLeftDrag) {
      nextSlide(); // Drag left = forward
    } else if (isRightDrag) {
      prevSlide(); // Drag right = backward
    }

    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    },
    [prevSlide, nextSlide]
  );

  // Effects
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // GSAP slide animation with micro-animations
  useGSAP(() => {
    if (!contentRef.current || !imageRef.current) return;

    const tl = gsap.timeline();

    // Get all text elements within content
    const subHeading = contentRef.current.querySelector("h3");
    const title = contentRef.current.querySelector("h2");
    const description = contentRef.current.querySelector("p");
    const buttonContainer = contentRef.current.querySelector("div:last-child");

    // Determine slide direction and set initial positions
    const isForward = slideDirection === "forward";

    // Set specific initial positions for each element
    gsap.set(subHeading, {
      y: -100,
      opacity: 0,
      scale: 0.9,
    });

    gsap.set(title, {
      x: isForward ? -150 : 150,
      opacity: 0,
      scale: 0.95,
    });

    gsap.set([description, buttonContainer], {
      y: 80,
      opacity: 0,
      scale: 0.9,
    });

    // Water-filling glass effect for image
    gsap.set(imageRef.current, {
      y: 200,
      opacity: 0,
      scale: 0.8,
      transformOrigin: "bottom center",
      clipPath: "inset(100% 0 0 0)", // Start with image completely hidden from top
    });

    // Animate h3 from top
    tl.to(subHeading, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    })
      // Animate h2 from left/right
      .to(
        title,
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.3"
      )
      // Animate p and button from bottom
      .to(
        [description, buttonContainer],
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.5"
      )
      // Water-filling glass effect for image
      .to(
        imageRef.current,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0 0 0)", // Reveal image from top to bottom like water filling
          duration: 1.5,
          ease: "power2.out",
        },
        "-=0.6"
      )
      // Add subtle bounce to title for emphasis
      .to(
        title,
        {
          scale: 1.02,
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.8"
      )
      .to(
        title,
        {
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      )
      // Add micro-animation to button
      .to(
        buttonContainer,
        {
          y: -5,
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        buttonContainer,
        {
          y: 0,
          duration: 0.3,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      );

    return tl;
  }, [activeSection, slideDirection]);

  const currentSlide = slides[activeSection];

  return (
    <>
      <section
        ref={heroRef}
        className="-mt-28 relative overflow-x-hidden"
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {/* Shape background */}
        <div className="absolute top-0 left-0 z-[-1] inset-0 h-full w-full">
          <Image
            className="max-w-full h-full object-cover"
            src="/img/shapes/slider-shape-3.png"
            alt="slider shape"
            fill
          />
        </div>
        <div className="flex items-center  overflow-hidden  select-none relative">
          {/* Navigation Indicators - Desktop */}
          <div className="hidden lg:flex absolute left-[150px] top-[55%] transform -translate-y-1/2 flex-col space-y-4 z-10">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  activeSection === index
                    ? "bg-[#a868fa]  text-white shadow-lg scale-110"
                    : "bg-white border-gray-300 text-gray-600 hover:border-[#a768fa89] hover:bg-[#a768fa2c]"
                }`}
                onClick={() => {
                  const direction =
                    index > activeSection ? "forward" : "backward";
                  goToSlide(index, direction);
                }}
                aria-label={`Go to slide ${index + 1}`}
                onMouseEnter={(e) => {
                  if (activeSection !== index) {
                    gsap.to(e.currentTarget, {
                      scale: 1.1,
                      duration: 0.2,
                      ease: "power2.out",
                    });
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== index) {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      duration: 0.2,
                      ease: "power2.out",
                    });
                  }
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Loading overlay */}
          {isAnimating && (
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}

          {/* Slider Content */}
          <div
            className={`flex justify-between items-center w-4/5 mx-auto pt-[200px] pb-[130px] relative transition-opacity duration-300 ${
              isAnimating ? "opacity-90" : "opacity-100"
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            {/* Content */}
            <div ref={contentRef} className="pl-10 lg:pl-20 flex-1 max-w-2xlf">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-5 italic opacity-0">
                {currentSlide.subHeading}
              </h3>
              <h2 className="text-5xl md:text-7xl lg:text-7xl font-extrabold mb-2.5 leading-tight opacity-0">
                {currentSlide.title}
              </h2>
              <p className="text-base md:text-lg text-[#74787C] font-bold mb-8 md:mb-14 max-w-lg opacity-0">
                {currentSlide.description}
              </p>
              <div className="opacity-0">
                <GradientButton href="/contact" showArrow={true}>
                  Let&apos;s Talk For Collaboration
                </GradientButton>
              </div>
            </div>

            {/* Image */}
            <div
              ref={imageRef}
              className="max-w-[570px] w-full h-[370px] hidden lg:block opacity-0"
              style={{ pointerEvents: "none" }}
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.alt}
                width={600}
                height={600}
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
          </div>
        </div>
        <RunningText speed={130} />
      </section>
    </>
  );
};

export default Hero;
