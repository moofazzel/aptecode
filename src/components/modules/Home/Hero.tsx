"use client";

import { useGSAPAnimation, useStaggeredGSAP } from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(2);

  // GSAP animations
  const titleAnimation = useGSAPAnimation("gsap.fadeInUp", {
    overrides: { duration: 1.2, ease: "power3.out" },
  });

  const subtitleAnimation = useGSAPAnimation("gsap.fadeInUp", {
    overrides: { duration: 1, ease: "power3.out", delay: 0.3 },
  });

  useStaggeredGSAP("gsap.fadeInUp", {
    staggerDelay: 0.1,
    overrides: { duration: 0.8, ease: "power2.out" },
  });

  const slides = [
    {
      id: 1,
      subHeading: "Modern Web Development",
      title: "Professional Websites",
      description: "Fast, responsive websites that drive results.",
      buttonText: "Get Started",
      image: "/img/images/slider-img-1.png",
      alt: "modern web development",
    },
    {
      id: 2,
      subHeading: "UI/UX Design",
      title: "Beautiful Experiences",
      description: "User-focused design that converts visitors.",
      buttonText: "Get Started",
      image: "/img/images/hero-img-1.png",
      alt: "UI UX design",
    },
    {
      id: 3,
      subHeading: "SEO & Performance",
      title: "Get Found Online",
      description: "Optimized websites that rank higher in search.",
      buttonText: "Learn More",
      image: "/img/images/hero-img-2.png",
      alt: "SEO performance optimization",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="min-h-screen container flex items-center relative overflow-hidden"
    >
      {/* Left Section - Content */}
      <div className="w-1/2 h-screen relative flex items-center pl-16 pr-8">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100 via-blue-50 to-white" />

        {/* Small Blue Dot */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Navigation Indicators */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
          {slides.map((slide) => (
            <motion.button
              key={slide.id}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
                activeSection === slide.id
                  ? "bg-blue-500 border-blue-500 text-white"
                  : "bg-white border-gray-300 text-gray-600 hover:border-blue-300"
              }`}
              onClick={() => setActiveSection(slide.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {slide.id}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-lg">
          {/* Dynamic Content based on active slide */}
          {slides.map((slide) => (
            <motion.div
              key={slide.id}
              className={`${activeSection === slide.id ? "block" : "hidden"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeSection === slide.id ? 1 : 0,
                y: activeSection === slide.id ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Sub Heading */}
              <motion.div ref={titleAnimation.ref} className="mb-4">
                <motion.p
                  className="text-lg font-medium text-blue-600 uppercase tracking-wide"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {slide.subHeading}
                </motion.p>
              </motion.div>

              {/* Main Heading */}
              <motion.div ref={titleAnimation.ref} className="mb-8">
                <motion.h1
                  className="text-6xl md:text-7xl font-black leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <span className="block text-gray-900">{slide.title}</span>
                </motion.h1>
              </motion.div>

              {/* Description */}
              <motion.p
                ref={subtitleAnimation.ref}
                className="text-xl text-gray-600 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slide.description}
              </motion.p>

              {/* CTA Button */}
              <motion.button
                className="group flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span>{slide.buttonText}</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-1/2 h-screen relative bg-white flex items-center justify-center overflow-hidden">
        {/* Dynamic Image Composition */}
        <div className="relative w-full h-full">
          {/* Dynamic Slide Images */}
          {slides.map((slide) => (
            <motion.div
              key={slide.id}
              className={`absolute inset-0 flex items-center justify-center ${
                activeSection === slide.id ? "block" : "hidden"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: activeSection === slide.id ? 1 : 0,
                scale: activeSection === slide.id ? 1 : 0.8,
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Main Image Shape */}
              <motion.div
                className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl"
                initial={{ rotate: -5, scale: 0.8, opacity: 0 }}
                animate={{ rotate: -5, scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={activeSection === slide.id}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          ))}

          {/* Floating Elements */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
