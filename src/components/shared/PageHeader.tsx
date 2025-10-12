"use client";

import { useEffect, useRef, useState } from "react";

/**
 * PageHeader (Tailwind + TypeScript)
 * - Mobile: all centered
 * - ≥lg: big word centered, paragraph aligned left
 */
export default function PageHeader({
  title,
  content,
  bgWord,
  align = "left", // preserved
  size = "xl",
  className = "",
}: {
  title: string;
  content: string;
  bgWord?: string;
  align?: "left" | "center";
  size?: "xl" | "lg" | "md";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null!);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Smooth scaling for the huge word
  const sizeClass =
    size === "xl"
      ? "text-[clamp(56px,16vw,260px)] leading-[1]"
      : size === "lg"
      ? "text-[clamp(48px,12vw,180px)] leading-[1]"
      : "text-[clamp(40px,10vw,140px)] leading-[1]";

  return (
    <section
      ref={ref}
      className={[
        // IMPORTANT: allow horizontal overflow so letters aren't cut
        "relative w-full overflow-x-visible overflow-y-hidden pt-[80px] pb-[60px] bg-gray-900",
        className,
      ].join(" ")}
    >
      <div className="w-full max-w-[1336px] px-5 mx-auto">
        {/* Base (mobile): center everything; ≥lg: left-align paragraph */}
        <div className="relative w-full flex items-center justify-center text-center lg:items-start">
          {/* Huge background word */}
          <h1
            aria-hidden
            className={[
              // inline-block + max-w-none prevent container from clipping width
              "font-semibold inline-block max-w-none m-0 w-auto text-center",
              // allow wrap on small, force single line on large
              "break-words lg:whitespace-nowrap",
              sizeClass,
              "text-slate-600",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              "transition-all duration-700 ease-out",
              // a touch of tighter tracking helps long words fit without looking cramped
              "tracking-[-0.01em]",
            ].join(" ")}
          >
            {bgWord || title}
          </h1>

          {/* Info paragraph — centered on mobile, left on large screens */}
          {/* <p
            className={[
              "absolute bottom-[-40px] m-0 text-[#d9d9d9]",
              "w-full max-w-[90%] sm:max-w-[70%] lg:max-w-[40%]",
              "left-1/2 -translate-x-1/2 text-center",
              "lg:left-0 lg:translate-x-0 lg:text-left",
              "text-[22px] leading-[1.5]",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              "transition-all duration-700 ease-out delay-100",
            ].join(" ")}
          >
            {content}
          </p> */}

          <span className="sr-only">{title}</span>
        </div>
      </div>
    </section>
  );
}
