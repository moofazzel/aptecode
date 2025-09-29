"use client";

import { useGSAPAnimation, useStaggeredGSAP } from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Advanced GSAP animations for hero elements
  const titleAnimation = useGSAPAnimation("gsap.fadeIn", {
    overrides: { duration: 1.2, delay: 0.5, ease: "power3.out" },
    autoPlay: false,
  });

  const subtitleAnimation = useGSAPAnimation("gsap.slideInLeft", {
    overrides: { duration: 1, delay: 0.8, ease: "power2.out" },
    autoPlay: false,
  });

  const ctaAnimation = useGSAPAnimation("gsap.scaleIn", {
    overrides: { duration: 0.8, delay: 1.2, ease: "back.out(1.7)" },
    autoPlay: false,
  });

  // Staggered animation for floating elements
  const { addToRefs } = useStaggeredGSAP("gsap.fadeIn", {
    staggerDelay: 0.2,
    overrides: { duration: 1.5, ease: "power2.out" },
    autoPlay: false,
  });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 2,
        y: (clientY / innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Trigger animations on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      titleAnimation.controls.play();
      subtitleAnimation.controls.play();
      ctaAnimation.controls.play();
    }, 300);

    return () => clearTimeout(timer);
  }, [
    titleAnimation.controls,
    subtitleAnimation.controls,
    ctaAnimation.controls,
  ]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating geometric shapes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            ref={addToRefs}
            className="absolute w-32 h-32 border border-purple-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              transform: `translate(${mousePosition.x * (i + 1) * 10}px, ${
                mousePosition.y * (i + 1) * 10
              }px)`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            left: "10%",
            top: "20%",
            transform: `translate(${mousePosition.x * 30}px, ${
              mousePosition.y * 30
            }px)`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
          style={{
            right: "15%",
            bottom: "25%",
            transform: `translate(${mousePosition.x * -20}px, ${
              mousePosition.y * -20
            }px)`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Company Name */}
        <div
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-4 tracking-tight">
            APTECODE
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Tagline */}
        <div
          ref={subtitleAnimation.ref as React.RefObject<HTMLDivElement>}
          className="mb-12"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light leading-relaxed">
            We craft{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">
              award-winning
            </span>{" "}
            digital experiences
          </p>
          <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
            Cutting-edge web development with performance-first animations,
            accessibility, and user experiences that win awards
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          ref={ctaAnimation.ref as React.RefObject<HTMLDivElement>}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
          >
            View Our Work
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(139, 92, 246, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-purple-400 text-purple-300 text-lg font-semibold rounded-full hover:text-white transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Performance indicator for development */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-2 rounded-lg text-sm font-mono">
          <div>Hero Loaded: {isLoaded ? "✓" : "..."}</div>
          <div>
            Mouse: {mousePosition.x.toFixed(2)}, {mousePosition.y.toFixed(2)}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
