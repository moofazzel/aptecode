"use client";

import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={heroRef}
      className="relative flex items-center justify-center overflow-hidden pt-[200px] pb-[150px]"
      initial={{ opacity: 0, y: 50 }}
      animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Advanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-pink-600/20"></div>
      </div>

      {/* Hero Content with Glassmorphism Card */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
        <motion.div
          className="hero-subtitle mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-6 py-3 shadow-xl">
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-semibold text-sm tracking-wide">
              Websites that Win Customers
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="hero-title text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-8 leading-[0.85] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Work that
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            wins customers
          </span>
        </motion.h1>

        <motion.p
          className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Selected website projects for new brands and SMBs. Fast builds, clean
          UX, SEO-ready. See outcomes and process that drive real business
          results.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <GradientButton
            size="lg"
            className="text-lg px-10 py-5 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
          >
            <span className="flex items-center gap-2">
              See Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </GradientButton>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-10 py-5 border-2 border-gray-300 hover:border-gray-400 backdrop-blur-sm bg-white/50 hover:bg-white/80 transition-all duration-300"
          >
            Book Strategy Call
          </Button>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs text-gray-500 font-medium tracking-wider">
            SCROLL
          </div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center backdrop-blur-sm bg-white/20">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
