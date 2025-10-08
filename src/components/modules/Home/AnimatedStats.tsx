"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedStats = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!statsRef.current) return;

    const statNumbers = statsRef.current.querySelectorAll(".stat-number");

    statNumbers.forEach((number) => {
      const finalValue = number.textContent;
      const numericValue = parseInt(finalValue?.replace(/\D/g, "") || "0");

      gsap.fromTo(
        number,
        { textContent: 0 },
        {
          textContent: numericValue,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function () {
            const currentValue = Math.round(this.targets()[0].textContent);
            number.textContent = currentValue + "+";
          },
          scrollTrigger: {
            trigger: number,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={statsRef} className="stats-container grid grid-cols-3 gap-8">
      <div className="text-center">
        <div className="stat-number text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
          568+
        </div>
        <div className="text-sm font-semibold tracking-wider uppercase text-gray-300">
          Project Complete
        </div>
      </div>

      <div className="text-center">
        <div className="stat-number text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
          2352+
        </div>
        <div className="text-sm font-semibold tracking-wider uppercase text-gray-300">
          Awesome Clients
        </div>
      </div>

      <div className="text-center">
        <div className="stat-number text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
          165+
        </div>
        <div className="text-sm font-semibold tracking-wider uppercase text-gray-300">
          Award Won
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;
