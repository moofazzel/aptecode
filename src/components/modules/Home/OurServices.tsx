"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";
import { ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
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
      title: "Website Design & Build",
      description: "Pro look, built to convert—fast, clear, and easy to edit.",
      image: "/img/service/service-13o.jpg",
      color: "bg-blue-400",
    },
    {
      number: 2,
      title: "Performance & SEO Fundamentals",
      description: "Speed + structure so you rank and load fast from day one.",
      image: "/img/service/service-13.jpg",
      color: "bg-purple-400",
    },
    {
      number: 3,
      title: "Migrations & Rebuilds",
      description: "Move platforms safely—URLs, SEO, and analytics intact.",
      image: "/img/service/service-12o.jpg",
      color: "bg-teal-400",
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
    <section className="py-32 px-4 lg:px-0">
      {/* service content */}
      <div className="w-full">
        <div className="container flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <SectionHeader title="Our Services" />
            </motion.div>
            <motion.h3
              className="text-[#171717] text-5xl font-bold leading-[1.2] mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                What We Build
              </motion.span>
              <motion.span
                className="inline-block ml-2"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                for Your
              </motion.span>
              <motion.span
                className="inline-block ml-2 bg-gradient-to-r from-[#3F5AF3] to-[#8B5CF6] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: 1.0,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                Business
              </motion.span>
            </motion.h3>
          </motion.div>

          {/* slider button */}
          <motion.div
            className="hidden md:flex items-center gap-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
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
          </motion.div>
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
            1550: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
        >
          {circularServices.map((service, index) => (
            <SwiperSlide key={`${service.number}-${index}`}>
              <div className=" xl:flex w-full 2xl:h-[300px]">
                {/* Modern Content on the right */}
                <article className="xl:w-1/2 bg-[#F2F3F4] relative backdrop-blur-sm border border-white/20 p-6 md:p-8 flex flex-col justify-center mr-4">
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-12 h-12 ${service.color} flex items-center justify-center`}
                      >
                        <span className="text-white text-lg font-bold">
                          {service.number}
                        </span>
                      </div>
                      <div className="w-16 h-3 bg-gradient-to-r from-gray-300 to-transparent "></div>
                    </div>
                    <h3 className="text-[#171717] text-xl md:text-2xl font-bold mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#74787c] font-medium text-base md:text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <a
                      href="/services"
                      className="flex items-center gap-2 text-[#3F5AF3] font-semibold text-sm md:text-base hover:gap-3 transition-all cursor-pointer hover:text-[#8B5CF6] underline underline-offset-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>

                {/* Image on the left */}
                <div className="xl:w-1/2 h-[300px] md:h-[400px] xl:h-full relative mr-4">
                  <Image
                    src={service.image}
                    alt={`service-${service.number}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default OurServices;
