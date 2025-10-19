"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const AnimatedStats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(statsRef, { once: true, margin: "-15%" });

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sound effect function
  const playCompletionSound = () => {
    if (typeof window !== "undefined" && window.AudioContext) {
      const audioContext = new (window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        1200,
        audioContext.currentTime + 0.1
      );

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.1
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    }
  };

  const statsData = [
    { value: 150, suffix: "+", label: "Projects Completed" },
    { value: 50, suffix: "+", label: "Happy Customers" },
    { value: 11, suffix: "+", label: "Countries Served" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "70%",
      transition: {
        duration: isMobile ? 2 : 2.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      ref={statsRef}
      className="stats-container flex lg:justify-between gap-4"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {statsData.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center group cursor-pointer relative overflow-hidden rounded-lg p-4 sm:p-5 md:p-6 transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-500/5 to-cyan-500/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:backdrop-blur-md"></div>
          <div className="relative z-10">
            <motion.div
              className="stat-number text-5xl font-bold text-blue-400 mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400"
              variants={itemVariants}
            >
              <CountUp
                end={stat.value}
                suffix={stat.suffix}
                duration={isMobile ? 2 : 3}
                enableScrollSpy
                scrollSpyOnce
                onEnd={() => {
                  if (index === 0) {
                    playCompletionSound();
                  }
                }}
              />
            </motion.div>
            <motion.div
              className="mx-auto progress-bar h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-400/50"
              variants={progressVariants}
            ></motion.div>
            <motion.div
              className="stat-label text-lg font-semibold tracking-wider uppercase text-gray-300 transition-colors duration-300 group-hover:text-white"
              variants={itemVariants}
            >
              {stat.label}
            </motion.div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:w-96 group-hover:h-96 group-hover:-top-48 group-hover:-left-48"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(59,130,246,0.2) 30%, rgba(6,182,212,0.1) 60%, transparent 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.3), 0 8px 32px rgba(59,130,246,0.3)",
              }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full opacity-0 transition-all duration-1000 group-hover:opacity-60 group-hover:w-80 group-hover:h-80 group-hover:-top-40 group-hover:-left-40"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(6,182,212,0.15) 50%, transparent 100%)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            ></div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedStats;
