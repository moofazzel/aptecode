// components/MarqueeProjects.tsx
"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

type Props = {
  bgImage: string;
  line1?: string;
  line2?: string;
  line3?: string;
};

export default function MarqeeSlider({
  bgImage = "/img/about/marBg.jpg",
  line1 = "BEST PROJECTS ☆",
  line2 = "WEB DEVELOPMENT",
  line3 = "LATEST PROJECTS",
}: Props) {
  const slides = Array.from({ length: 6 });

  return (
    <section
      className="relative isolate w-full overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(124,58,237,0.35), rgba(124,58,237,0.35)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
          {slides.map((_, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <div className="flex items-center gap-8">
                {/* Line 1 (filled) */}
                <span
                  className="uppercase font-extrabold tracking-tight text-white"
                  style={{ fontSize: "clamp(28px, 9vw, 120px)" }}
                >
                  {line1}
                </span>

                {/* Line 2 (outlined) */}
                <span
                  className="uppercase font-extrabold tracking-tight text-transparent
                             [-webkit-text-stroke:2px_white]"
                  style={{ fontSize: "clamp(28px, 9vw, 120px)" }}
                >
                  {line2}
                </span>

                {/* Line 3 (smaller filled) */}
                <span
                  className="uppercase font-bold tracking-tight text-white"
                  style={{ fontSize: "clamp(20px, 6vw, 80px)" }}
                >
                  {line3}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
