// src/components/RunningCards.tsx
"use client";

import { useAnimationContext } from "@/contexts/AnimationContext";
import { animationFactory } from "@/lib/animations/factory";
import { performanceManager } from "@/lib/animations/performance";
import { gsap } from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface RunningCardItem {
  title: string;
  imageSrc: string;
  alt?: string;
}

interface RunningCardsProps {
  items?: RunningCardItem[];
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  cardClassName?: string;
}

const DEFAULT_ITEMS: RunningCardItem[] = [
  { title: "Healthcare & Wellness", imageSrc: "/img/service/health.avif" },
  { title: "Event & Travel", imageSrc: "/img/service/event.avif" },
  { title: "Finance and Insurance", imageSrc: "/img/service/fin.avif" },
  { title: "SaaS & Tech Startups", imageSrc: "/img/service/sas.avif" },
  { title: "E-commerce & Retail", imageSrc: "/img/service/ecom.avif" },
  { title: "Portfolio Websites", imageSrc: "/img/service/tem.avif" },
];

const RunningCards: React.FC<RunningCardsProps> = ({
  items = DEFAULT_ITEMS,
  className = "",
  speed = 20,
  direction = "left",
  cardClassName = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const { isGSAPReady, registerAnimation, unregisterAnimation } =
    useAnimationContext();

  // duplicate for seamless loop
  const duplicatedItems = React.useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    if (!isGSAPReady || !ulRef.current || !containerRef.current) return;

    const ul = ulRef.current;
    const container = containerRef.current;

    // width of the first set to loop over
    const firstSetWidth = ul.scrollWidth / 2;

    gsap.set(ul, { x: 0 });

    const animation = animationFactory.createGSAPAnimation(
      ul,
      "gsap.runningText", // reuse your preset from the registry
      {
        to: {
          x: direction === "left" ? -firstSetWidth : firstSetWidth,
          duration: speed,
          ease: "none",
          repeat: -1,
        },
      }
    );
    if (!animation) return;

    const optimized = performanceManager.optimizeForAccessibility(animation);

    const onEnter = () => optimized.pause();
    const onLeave = () => optimized.resume();

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    const cleanup = () => {
      optimized.kill();
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };

    registerAnimation("running-cards", cleanup);
    return () => unregisterAnimation("running-cards");
  }, [
    speed,
    direction,
    items,
    isGSAPReady,
    registerAnimation,
    unregisterAnimation,
  ]);

  return (
    <div
      ref={containerRef}
      className={`bg-transparent py-0 overflow-x-hidden ${className}`}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          Design That Speaks
          <span className="ml-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your Industry
          </span>
        </h2>
      </div>
      <div className="overflow-x-hidden bg-gray-100 py-10">
        <ul
          ref={ulRef}
          className="flex gap-8 sm:gap-10 md:gap-14 items-stretch"
          style={{ width: "max-content" }}
        >
          {duplicatedItems.map((item, i) => (
            <li
              key={`${item.title}-${i}`}
              className="flex-shrink-0 py-8"
              style={{ width: "min(420px, 80vw)" }}
              aria-hidden={i >= items.length ? true : undefined}
              {...(i >= items.length ? { tabIndex: -1 } : {})}
            >
              <div
                className={`h-full  border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur
                            hover:bg-white/7 transition-colors ${cardClassName}`}
              >
                <h3 className="text-gray-700 text-center text-xl md:text-2xl font-semibold tracking-tight mb-4 pb-6">
                  {item.title}
                </h3>

                <div className="relative  overflow-hidden bg-black/20 aspect-[16/10]">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt ?? item.title}
                    fill // fills the parent (which has position: relative)
                    className="object-cover"
                    sizes="(max-width: 640px) 80vw, 420px"
                    priority={i < 3} // (optional) eagerly load a few above the fold
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RunningCards;
