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
      subHeading: "Websites for New Brands",
      title: "Launch a site that sells.",
      description:
        "Strategy-led builds for founders and SMBs. Clean UX, fast load, SEO included.",
      buttonText: "Get a Free Strategy Call",
      image: "/img/images/hero-img-1.png",
      alt: "Strategy-led website design for new brands and founders",
    },
    {
      id: 2,
      subHeading: "Conversion-Focused Design",
      title: "Pretty isn't enough.",
      description:
        "We design for leads and sales—clear pages, strong CTAs, mobile-ready.",
      buttonText: "Get a Free Strategy Call",
      image: "/img/images/hero-img-2.png",
      alt: "Conversion-focused website design with clear CTAs and mobile optimization",
    },
    {
      id: 3,
      subHeading: "Speed & SEO Fundamentals",
      title: "Get found. Load fast.",
      description:
        "Core Web Vitals friendly. Clean structure. On-page SEO you don't have to babysit.",
      buttonText: "See Work",
      image: "/img/images/hero-img-3.png",
      alt: "Fast loading website with Core Web Vitals optimization and SEO structure",
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
        className="-mt-[100px] sm:-mt-24 md:-mt-28 relative overflow-x-hidden"
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
        <div className="max-w-[1780px] mx-auto flex items-center overflow-hidden select-none relative pt-16 md:pt-0">
          {/* Navigation Indicators - Desktop */}
          <div className="hidden xl:flex absolute left-4 2xl:left-[150px] top-[55%] transform -translate-y-1/2 flex-col space-y-3 z-10">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`w-10 h-10 xl:w-12 xl:h-12 rounded-full border-2 flex items-center justify-center text-base xl:text-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  activeSection === index
                    ? "bg-[#a868fa] text-white shadow-lg scale-110"
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
          {/* {isAnimating && (
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )} */}

          {/* Slider Content */}
          <div
            className={`flex flex-col lg:flex-row justify-between items-center w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-4/5 mx-auto pt-28 sm:pt-32 md:pt-40 lg:pt-48 xl:pt-[200px] pb-20 sm:pb-24 md:pb-28 lg:pb-32 xl:pb-[130px] px-4 sm:px-6 md:px-8 lg:px-0 relative transition-opacity duration-300 ${
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
            <div
              ref={contentRef}
              className="w-full lg:pl-10 xl:pl-20 text-center lg:text-left"
            >
              <h3 className="text-3xl md:text-4xl lg:text-3xl 2xl:text-4xl font-extralight mb-4 italic opacity-0">
                {currentSlide.subHeading}
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-4xl 2xl:text-6xl font-extrabold mb-3 leading-tight opacity-0">
                {currentSlide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#74787C] font-bold mb-8 md:mb-10 2xl:mb-14 max-w-full lg:max-w-lg mx-auto lg:mx-0 opacity-0">
                {currentSlide.description}
              </p>
              <div className="opacity-0 flex justify-center lg:justify-start">
                <GradientButton href="/contact" showArrow={true}>
                  <span className="hidden sm:inline">
                    Let&apos;s Talk For Collaboration
                  </span>
                  <span className="sm:hidden">Let&apos;s Collaborate</span>
                </GradientButton>
              </div>
            </div>

            {/* Image */}
            <div
              ref={imageRef}
              className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[400px] xl:max-w-[570px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[370px] mt-8 lg:mt-0 hidden md:block opacity-0"
              style={{ pointerEvents: "none" }}
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.alt}
                width={600}
                height={600}
                className="w-full h-full object-contain"
                draggable={false}
                priority
              />
            </div>
          </div>
        </div>
        <RunningText defaultStrokeColor="#4f39f6" speed={100} />
      </section>
    </>
  );
};

export default Hero;
