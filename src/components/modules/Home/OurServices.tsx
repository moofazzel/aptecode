"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import { ChevronsRight, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";

function OurServices() {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      number: 1,
      title: " GEO & SEO Web App",
      description: "Optimized web apps for business growth and visibility.",
      image: "/img/service/service-12o.jpg",
    },
    {
      number: 2,
      title: "Custom Software",
      description: "Scalable, secure, and tailored software solutions.",
      image: "/img/service/service-12o.jpg",
    },
    {
      number: 3,
      title: "E-commerce Solutions",
      description: "Scalable, secure, and tailored software solutions.",
      image: "/img/service/service-12o.jpg",
    },
  ];

  // Create circular sliding by duplicating slides
  const circularServices = [...services, ...services, ...services];

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Initialize Swiper at the middle set for proper circular behavior
  useEffect(() => {
    if (swiperRef.current) {
      // Start at the middle set (index 3) for infinite loop
      swiperRef.current.swiper.slideTo(3, 0);
    }
  }, []);

  return (
    <section className="py-32">
      {/* service content */}
      <div className="w-full">
        <div className="container flex items-center justify-between">
          <div>
            <SectionHeader title="Our Services" />
            <h3 className="text-[#171717] text-5xl font-bold leading-[1.2] mb-14">
              What We Do For Your Business
            </h3>
          </div>
          {/* slider button */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <MoveLeft className="w-4 h-4" />
            </button>
            <span className="text-[#171717] text-base font-normal">
              {(currentSlide % 3) + 1}
            </span>
            / <span>3</span>
            <button
              onClick={nextSlide}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          className="w-full"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          {circularServices.map((service, index) => (
            <SwiperSlide key={`${service.number}-${index}`}>
              <div className="flex w-full h-[400px]">
                {/* Image on the left */}
                <div className="w-1/2 h-full relative">
                  <Image
                    src={service.image}
                    alt={`service-${service.number}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Content on the right */}
                <article className="w-1/2 bg-[#F2F3F4] p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-[#171717] text-4xl md:text-5xl font-extrabold opacity-[0.2] mb-4 inline-block">
                    {String(service.number).padStart(2, "0")}
                  </span>
                  <h3 className="text-[#171717] text-lg md:text-xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#74787c] font-normal text-sm md:text-base mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/"
                    className="text-[#3F5AF3] text-sm md:text-base font-normal flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More <ChevronsRight className="w-4 h-4" />
                  </Link>
                </article>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default OurServices;
