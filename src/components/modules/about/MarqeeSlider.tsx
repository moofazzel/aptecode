// components/MarqueeProjects.tsx
"use client";

import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaRegStar, FaStar } from "react-icons/fa";

const BG_IMAGE = "/img/about/marBg.jpg";

/** -------- Tuning -------- */
const SPEED_MS = 24000; // higher = slower when delay is 0 (smooth drift)
const GAP = 48; // space between pieces
const DUPES = 6; // how many chunks to duplicate to fill the band
const OUTLINED_TEXT_SIZE = "clamp(28px, 9vw, 120px)";
const FILLED_TEXT_SIZE = "clamp(28px, 9vw, 120px)";
const ICON_SIZE = "clamp(28px, 7vw, 96px)";

/** One chunk so seams never put stars next to each other */
function Chunk() {
  return (
    <div className="flex items-center" style={{ gap: GAP }}>
      {/* WEB DEVELOPMENT (outlined) */}
      <span
        className="uppercase font-extrabold tracking-tight text-transparent [-webkit-text-stroke:2px_white]"
        style={{ fontSize: OUTLINED_TEXT_SIZE }}
      >
        WEB DEVELOPMENT
      </span>

      {/* outlined star */}
      <FaRegStar
        className="text-white"
        style={{ width: ICON_SIZE, height: ICON_SIZE }}
        aria-hidden
      />

      {/* LATEST PROJECTS (filled) */}
      <span
        className="uppercase font-extrabold tracking-tight text-white"
        style={{ fontSize: FILLED_TEXT_SIZE }}
      >
        LATEST PROJECTS
      </span>

      {/* filled star */}
      <FaStar
        className="text-white"
        style={{ width: ICON_SIZE, height: ICON_SIZE }}
        aria-hidden
      />
    </div>
  );
}

export default function MarqueeProjects() {
  return (
    <section
      className="relative isolate w-full overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(124,58,237,0.35), rgba(124,58,237,0.35)), url(${BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* thin top/bottom borders */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-white/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-white/70" />

      <div className="py-6 md:py-8">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          allowTouchMove={false}
          slidesPerView="auto"
          freeMode={{ enabled: true, momentum: false }}
          speed={SPEED_MS}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          spaceBetween={GAP}
          className="!px-4"
        >
          {Array.from({ length: DUPES }).map((_, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <Chunk />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
