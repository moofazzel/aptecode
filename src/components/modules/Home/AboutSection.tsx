"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import { GradientButton } from "@/components/ui/gradient-button";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";

function AboutSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Section - Image with Award Badge */}
          <motion.div
            className="relative w-full lg:w-1/2 "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Image */}
            <div className="max-w-[750px] w-full h-[400px] sm:h-[500px] lg:h-[610px] mx-auto lg:mx-0">
              <div className="w-full lg:max-w-[680px] h-full absolute top-0 right-0 lg:right-0">
                <Image
                  src="/img/new-update-2/about-img-1.png"
                  alt="Team working on laptop"
                  width={600}
                  height={700}
                  className="w-full h-full border-4 sm:border-6 lg:border-8 border-black object-cover"
                  priority
                />
              </div>
            </div>

            {/* Award Badge Overlay */}
            <motion.div
              className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 lg:bottom-[90px] lg:left-0 bg-[#a868fa] p-3 sm:p-4 shadow-lg border-4 sm:border-6 lg:border-8 border-black"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    121+
                  </div>
                  <div className="text-xs text-white/90 uppercase tracking-wide">
                    AWARDS WE WON
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            className="space-y-6 md:space-y-8 w-full lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Subtitle */}
            <SectionHeader variant="secondary" title="About Aptecode" />

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Web Apps & Crypto Solutions
              <br />
              <span className="text-gray-900">Experts</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
              Aptecode delivers GEO & SEO friendly web apps, custom software,
              and crypto services. We help businesses and communities grow
              online with innovative, secure solutions.
            </p>

            {/* Key Points */}
            <div className="space-y-4 sm:space-y-6">
              {/* Point 1 */}
              <motion.div
                className="flex items-start space-x-3 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-[#a868fa] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">
                    01
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                    Innovation:
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We build modern, scalable solutions for every client.
                  </p>
                </div>
              </motion.div>

              {/* Point 2 */}
              <motion.div
                className="flex items-start space-x-3 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-[#a868fa] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-bold">
                    02
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                    Partnership:
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Your goals drive our work and results.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <GradientButton
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              >
                Learn More
              </GradientButton>

              <GradientButton
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              >
                Explore More
              </GradientButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
