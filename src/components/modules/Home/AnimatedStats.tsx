"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedStats = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const hasAnimatedRef = useRef(false);

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

  useEffect(() => {
    if (!statsRef.current) return;

    // Wait for DOM to be fully ready and ensure this only runs once
    const timer = setTimeout(() => {
      if (!statsRef.current || hasAnimatedRef.current) return;

      const statNumbers = statsRef.current.querySelectorAll(".stat-number");
      const statLabels = statsRef.current.querySelectorAll(".stat-label");
      const progressBars = statsRef.current.querySelectorAll(".progress-bar");

      // Store original values before animation
      const originalValues: Array<{ value: number; suffix: string }> = [];
      statNumbers.forEach((number) => {
        const finalValue = number.textContent;
        const numericValue = parseInt(finalValue?.replace(/\D/g, "") || "0");
        const suffix = finalValue?.replace(/\d/g, "") || "";
        originalValues.push({ value: numericValue, suffix });
      });

      // Initial setup - hide elements
      gsap.set([statNumbers, statLabels], {
        opacity: 0,
        y: 30,
        scale: 0.8,
      });

      // Set initial progress bar width
      gsap.set(progressBars, { width: "0%" });

      // Set initial counter values to 0
      statNumbers.forEach((number, index) => {
        number.textContent = "0" + originalValues[index].suffix;
      });

      // Create timeline for coordinated animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
          onEnter: () => {
            hasAnimatedRef.current = true;
          },
        },
      });

      statNumbers.forEach((number, index) => {
        const { value: numericValue, suffix } = originalValues[index];

        // Add to timeline with stagger
        tl.to(
          number,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: isMobile ? 0.4 : 0.6,
            ease: "back.out(1.7)",
          },
          index * (isMobile ? 0.05 : 0.1)
        ).to(
          number,
          {
            innerHTML: numericValue,
            duration: isMobile ? 2 : 2.5,
            ease: "power1.out",
            snap: { innerHTML: 1 },
            onUpdate: function () {
              const currentValue = Math.round(this.targets()[0].innerHTML);
              number.innerHTML = currentValue + suffix;

              // Color transition during counting
              const progress = currentValue / numericValue;
              const hue = 200 + progress * 40; // Blue to cyan transition
              (number as HTMLElement).style.color = `hsl(${hue}, 70%, 60%)`;
            },
            onComplete: () => {
              // Play completion sound only once per counter
              if (index === 0) {
                playCompletionSound();
              }
            },
          },
          index * (isMobile ? 0.05 : 0.1) + 0.3
        );

        // Animate progress bar
        tl.to(
          progressBars[index],
          {
            width: "70%",
            duration: isMobile ? 2 : 2.5,
            ease: "power1.out",
          },
          index * (isMobile ? 0.05 : 0.1) + 0.3
        );

        // Animate corresponding label
        tl.to(
          statLabels[index],
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          index * (isMobile ? 0.05 : 0.1) + 0.2
        );
      });

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <div
      ref={statsRef}
      className="stats-container flex lg:justify-between gap-4"
    >
      <div className="text-center group cursor-pointer relative overflow-hidden rounded-lg p-4 sm:p-5 md:p-6 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-500/5 to-cyan-500/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:backdrop-blur-md"></div>
        <div className="relative z-10">
          <div className="stat-number text-5xl font-bold text-blue-400 mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
            300+
          </div>
          <div className="mx-auto progress-bar h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-400/50"></div>
          <div className="stat-label text-lg font-semibold tracking-wider uppercase text-gray-300 transition-colors duration-300 group-hover:text-white">
            Project Complete
          </div>
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
      </div>

      <div className="text-center group cursor-pointer relative overflow-hidden rounded-lg p-4 sm:p-5 md:p-6 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-500/5 to-cyan-500/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:backdrop-blur-md"></div>
        <div className="relative z-10">
          <div className="stat-number text-5xl font-bold text-blue-400 mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
            100+
          </div>
          <div className="mx-auto progress-bar h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-400/50"></div>
          <div className="stat-label text-lg font-semibold tracking-wider uppercase text-gray-300 transition-colors duration-300 group-hover:text-white">
            Happy Clients
          </div>
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
      </div>

      <div className="text-center group cursor-pointer relative overflow-hidden rounded-lg p-4 sm:p-5 md:p-6 transition-all duration-300 sm:col-span-2 lg:col-span-1">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-500/5 to-cyan-500/10 backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:backdrop-blur-md"></div>
        <div className="relative z-10">
          <div className="stat-number text-5xl font-bold text-blue-400 mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
            15+
          </div>
          <div className="mx-auto progress-bar h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-400/50"></div>
          <div className="stat-label text-lg font-semibold tracking-wider uppercase text-gray-300 transition-colors duration-300 group-hover:text-white">
            Countries Served
          </div>
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
      </div>
    </div>
  );
};

export default AnimatedStats;
