// components/MarqueeProjects.tsx
"use client";

import { FaRegStar } from "react-icons/fa";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BG_IMAGE = "/img/about/marBg.jpg";

/** -------- Tuning -------- */
const GAP = 48;
const OUTLINED_TEXT_SIZE = "clamp(28px, 9vw, 120px)";
const FILLED_TEXT_SIZE = "clamp(28px, 9vw, 120px)";
const ICON_SIZE = "clamp(28px, 7vw, 96px)";

/** One chunk so seams never put stars next to each other */
function Chunk() {
  return (
    <div className="flex items-center" style={{ gap: GAP }}>
      {/* WEB DEVELOPMENT (outlined) */}
      <span
        className="stroke_txt uppercase font-extrabold tracking-tight text-transparent [-webkit-text-stroke:2px_white]"
        style={{ fontSize: OUTLINED_TEXT_SIZE }}
      >
        WEB DEVELOPMENT
      </span>

      {/* outlined star */}
      <FaRegStar
        className="text-white stroke_txt"
        style={{ width: ICON_SIZE, height: ICON_SIZE }}
        aria-hidden
      />

      {/* LATEST PROJECTS (filled) */}
      <span
        className="simple_txt uppercase font-extrabold tracking-tight text-white"
        style={{ fontSize: FILLED_TEXT_SIZE }}
      >
        LATEST PROJECTS
      </span>

      {/* filled star (keeping your current FaRegStar + stroke_txt styling.
          If you want truly filled: swap to FaStar and remove stroke_txt) */}
      <FaRegStar
        className="text-white stroke_txt"
        style={{ width: ICON_SIZE, height: ICON_SIZE }}
        aria-hidden
      />
    </div>
  );
}

export default function MarqueeSlider() {
  return (
    <section
      className="relative isolate w-full overflow-hidden overly"
      style={{
        backgroundImage: `url(${BG_IMAGE})`,
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
          speed={32000} // slower drift
          autoplay={{
            delay: 0,
            disableOnInteraction: false, // keep autoplay running always
            pauseOnMouseEnter: true, // pause when hovered
          }}
          spaceBetween={48}
          className="!px-4"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <Chunk />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
