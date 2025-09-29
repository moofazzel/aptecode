"use client";

import { useGSAPAnimation, useStaggeredGSAP } from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ClayHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // GSAP animations
  const titleAnimation = useGSAPAnimation("gsap.fadeInUp", {
    overrides: { duration: 1.2, ease: "power3.out" },
  });

  const subtitleAnimation = useGSAPAnimation("gsap.fadeInUp", {
    overrides: { duration: 1, ease: "power3.out", delay: 0.3 },
  });

  const { addToRefs } = useStaggeredGSAP("gsap.fadeInUp", {
    staggerDelay: 0.1,
    overrides: { duration: 0.8, ease: "power2.out" },
  });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-black text-white relative overflow-hidden flex items-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { duration: 0.3 },
            y: { duration: 0.3 },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 1.5,
            y: -mousePosition.y * 1.5,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            x: { duration: 0.3 },
            y: { duration: 0.3 },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          {/* Main Title */}
          <motion.h1
            ref={titleAnimation.ref}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Clay
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            ref={subtitleAnimation.ref}
            className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-12 leading-relaxed"
          >
            is a global branding and UX design agency
          </motion.p>

          {/* Description */}
          <motion.p
            ref={addToRefs}
            className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl leading-relaxed"
          >
            We build transformative digital experiences for the world's leading
            brands by blending AI, design, and technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            ref={addToRefs}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.button
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.button>

            <motion.button
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:border-white/60 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            ref={addToRefs}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
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
    </section>
  );
};

export default ClayHero;
