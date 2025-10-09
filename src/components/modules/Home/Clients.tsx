"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
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
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "The Aptecode team built our crypto community site and helped moderate our group. Professional and reliable!",
    author: {
      name: "William Edward",
      title: "Crypto Project Lead",
      image: "/img/testi/testi-author-6.png",
    },
  },
  {
    id: 2,
    quote:
      "Exceptional development work and outstanding support. They delivered exactly what we needed for our project.",
    author: {
      name: "Sarah Johnson",
      title: "Product Manager",
      image: "/img/testi/testi-author-7.png",
    },
  },
  {
    id: 3,
    quote:
      "Working with Aptecode was a game-changer for our business. Their expertise and dedication are unmatched.",
    author: {
      name: "Michael Chen",
      title: "CEO & Founder",
      image: "/img/testi/testi-author-6.png",
    },
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
      className="py-20 relative overflow-hidden"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(270deg, rgba(12, 24, 30, 0.27) 12.7%, rgba(12, 19, 30, 0.99) 68.39%)",
        }}
      ></div>
      <div className="container relative z-10">
        <div className="ml-[50px]">
          {/* Left Content Section - Dark Background */}
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 "></div>
            </div>

            <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center lg:pr-20">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <SectionHeader
                  title="APTECODE CLIENTS"
                  className="mb-6"
                  variant="secondary"
                />
              </motion.div>

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight"
              >
                What Our Customers Say
              </motion.h2>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center mb-8"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Swiper Container */}
              <div className="relative">
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
                        >
                          {/* Testimonial Quote */}
                          <blockquote className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
                            &ldquo;{testimonial.quote}&rdquo;
                          </blockquote>

                          {/* Author Info */}
                          <div className="flex items-center mb-8">
                            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                              <Image
                                src={testimonial.author.image}
                                alt={testimonial.author.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-white font-semibold text-lg">
                                {testimonial.author.name}
                              </h4>
                              <p className="text-purple-300 text-sm">
                                {testimonial.author.title}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Navigation Dots */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col space-y-3 lg:absolute -left-12 lg:top-1/2 lg:-translate-y-1/2"
              >
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-purple-500 border-purple-500 text-white"
                        : "bg-transparent border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {index + 1}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Clients;
