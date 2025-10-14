"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

interface Testimonial {
  id: number;
  quote: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Site launched in 3 weeks. Leads started same day. Aptecode nailed it.",
    author: {
      name: "Sarah M.",
      title: "Founder, Local Service Co.",
      image: "/img/testi/testi-author-6.png",
    },
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Finally, a team that gets strategy and ships fast. No endless revisions.",
    author: {
      name: "James P.",
      title: "CEO, SaaS Startup",
      image: "/img/testi/testi-author-7.png",
    },
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Migrated from Squarespace without breaking SEO. Conversion rate up 22%.",
    author: {
      name: "Emily R.",
      title: "Owner, E-Commerce Brand",
      image: "/img/testi/testi-author-6.png",
    },
    rating: 5,
  },
];

function Clients() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const swiperRef = useRef<SwiperRef | null>(null);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    setCurrentTestimonial(swiper.activeIndex);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        backgroundImage: "url('/img/bg-img/testi-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Enhanced Overlay with Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(270deg, rgba(12, 24, 30, 0.35) 12.7%, rgba(12, 19, 30, 0.97) 68.39%)",
        }}
      ></div>

      {/* Animated Background Circles - Hidden on mobile for performance */}
      <motion.div
        className="hidden md:block absolute top-20 right-20 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="hidden md:block absolute bottom-20 left-20 w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left Content Section */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-start"
              >
                <SectionHeader
                  title="Client Stories"
                  className="mb-2 sm:mb-3 md:mb-4"
                  variant="secondary"
                />
              </motion.div>

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
              >
                What Our
                <span className="lg:block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </motion.h2>

              {/* Average Rating Display */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + i * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="text-white/90"
                >
                  <span className="text-xl sm:text-2xl font-bold">5.0</span>
                  <span className="text-xs sm:text-sm text-white/60 ml-2">
                    ({testimonials.length} reviews)
                  </span>
                </motion.div>
              </motion.div>

              {/* Navigation Dots */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex gap-2 sm:gap-3 pt-2 sm:pt-4 justify-center lg:justify-start"
              >
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className={`group relative transition-all duration-300 ${
                      index === currentTestimonial
                        ? "w-10 sm:w-12"
                        : "w-2.5 sm:w-3"
                    }`}
                  >
                    {/* Progress Bar */}
                    <div
                      className={`h-2.5 sm:h-3 rounded-full overflow-hidden backdrop-blur-sm ${
                        index === currentTestimonial
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/50"
                          : "bg-white/20 hover:bg-white/30"
                      }`}
                    >
                      {index === currentTestimonial && (
                        <motion.div
                          className="h-full bg-white/30"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 5,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Right Testimonial Card */}
            <div className="lg:col-span-7 mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Card Background with Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl" />

                {/* Decorative Quote Icon - Responsive sizing and positioning */}
                <motion.div
                  className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl z-10"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Quote className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </motion.div>

                {/* Swiper Container */}
                <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 pt-10 sm:pt-12">
                  <Swiper
                    ref={swiperRef}
                    modules={[EffectFade, Autoplay]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    onSlideChange={handleSlideChange}
                    className="testimonial-swiper"
                  >
                    {testimonials.map((testimonial) => (
                      <SwiperSlide key={testimonial.id}>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentTestimonial}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-5 sm:space-y-6 md:space-y-8"
                          >
                            {/* Individual Rating */}
                            <div className="flex items-center gap-0.5 sm:gap-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400"
                                />
                              ))}
                            </div>

                            {/* Testimonial Quote */}
                            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed font-medium">
                              &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>

                            {/* Author Info with Enhanced Design */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 pt-4 sm:pt-6 border-t border-white/10">
                              <motion.div
                                className="relative flex-shrink-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {/* Avatar Ring */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-75 blur" />
                                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 ring-white/20">
                                  <Image
                                    src={testimonial.author.image}
                                    alt={testimonial.author.name}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </motion.div>

                              <div className="flex-1 text-center sm:text-left">
                                <h4 className="text-white font-bold text-base sm:text-lg mb-1">
                                  {testimonial.author.name}
                                </h4>
                                <p className="text-purple-300 text-xs sm:text-sm font-medium">
                                  {testimonial.author.title}
                                </p>
                              </div>

                              {/* Verified Badge */}
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-green-500/20 border border-green-400/30 rounded-full flex-shrink-0"
                              >
                                <svg
                                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-xs text-green-300 font-semibold">
                                  Verified
                                </span>
                              </motion.div>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Decorative Corner Elements - Responsive sizes */}
                <div className="hidden sm:block absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-tr-2xl sm:rounded-tr-3xl" />
                <div className="hidden sm:block absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-bl-2xl sm:rounded-bl-3xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Clients;
