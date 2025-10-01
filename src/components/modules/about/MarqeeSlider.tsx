// components/MarqueeProjects.tsx
"use client";

import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BG_IMAGE = "/img/about/marBg.jpg";

type Variant = "filled" | "outlined" | "small";
type Piece = { text: string; variant: Variant };

const PHRASES: Piece[] = [
  { text: "BEST PROJECTS ☆", variant: "filled" }, // left chunk (filled)
  { text: "☆", variant: "outlined" }, // star BEFORE
  { text: "WEB DEVELOPMENT", variant: "outlined" }, // outlined middle
  { text: "☆", variant: "outlined" }, // star AFTER
  { text: "LATEST PROJECTS", variant: "small" }, // right chunk (smaller filled)
];

export default function MarqueeProjects() {
  // duplicate groups so the band stays continuous
  const groups = Array.from({ length: 6 });

  return (
    <section
      className="relative isolate w-full overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(124,58,237,0.35), rgba(124,58,237,0.35)), url(${BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* thin borders like the ref */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-white/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-white/70" />

      <div className="py-6 md:py-8">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          allowTouchMove={false}
          slidesPerView="auto"
          freeMode={{ enabled: true, momentum: false }}
          speed={12000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          spaceBetween={48}
          className="!px-4"
        >
          {groups.map((_, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <div className="flex items-center gap-8">
                {PHRASES.map((p, idx) => {
                  const bigSize = { fontSize: "clamp(28px, 9vw, 120px)" };
                  const smallSize = { fontSize: "clamp(20px, 6vw, 80px)" };

                  if (p.variant === "outlined") {
                    return (
                      <span
                        key={idx}
                        className="uppercase font-extrabold tracking-tight text-transparent [-webkit-text-stroke:2px_white]"
                        style={bigSize}
                      >
                        {p.text}
                      </span>
                    );
                  }

                  if (p.variant === "small") {
                    return (
                      <span
                        key={idx}
                        className="uppercase font-bold tracking-tight text-white"
                        style={smallSize}
                      >
                        {p.text}
                      </span>
                    );
                  }

                  // filled (default)
                  return (
                    <span
                      key={idx}
                      className="uppercase font-extrabold tracking-tight text-white"
                      style={bigSize}
                    >
                      {p.text}
                    </span>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
