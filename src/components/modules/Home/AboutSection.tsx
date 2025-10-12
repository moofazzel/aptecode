"use client";
import { GradientButton } from "@/components/ui/gradient-button";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Image from "next/image";

function AboutSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-[url('/img/new-update-2/about-img-1.png')] opacity-5 bg-cover bg-center"></div>
        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* Left Section - Modern Image with Glassmorphism */}
          <motion.div
            className="relative w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Image Container */}
            <div className="relative max-w-[600px] w-full h-[500px] lg:h-[600px] mx-auto lg:mx-0">
              {/* Glassmorphism frame */}
              <div className="absolute inset-0 backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-white/5"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/img/new-update-2/about-img-1.png"
                    alt="Team working on laptop"
                    width={600}
                    height={700}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>

              {/* Floating Award Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 backdrop-blur-md bg-gradient-to-br from-yellow-400/90 to-orange-500/90 border border-white/30 rounded-2xl p-6 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-white" />
                  <div>
                    <div className="text-2xl font-black text-white">15+</div>
                    <div className="text-sm text-white/90 font-medium uppercase tracking-wide">
                      Awards Won
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating stats */}
              <motion.div
                className="absolute -top-6 -left-6 backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-2xl font-black text-gray-800">500+</div>
                  <div className="text-sm text-gray-600 font-medium">
                    Projects
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Modern Content */}
          <motion.div
            className="space-y-8 w-full lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Modern badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-semibold">
                About Aptecode
              </span>
            </motion.div>

            {/* Main Title with gradient */}
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Award-Winning
              </span>
              <br />
              <span className="text-gray-900">Digital Solutions</span>
            </motion.h2>

            {/* Enhanced Description */}
            <motion.p
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We craft exceptional digital experiences that combine cutting-edge
              technology with award-winning design. From web applications to
              crypto solutions, we deliver innovative, secure, and scalable
              solutions that drive real business results.
            </motion.p>

            {/* Enhanced Key Points */}
            <div className="space-y-6">
              {[
                {
                  number: "01",
                  title: "Innovation Excellence",
                  description:
                    "We leverage the latest technologies to build modern, scalable solutions that stand out in the market.",
                },
                {
                  number: "02",
                  title: "Strategic Partnership",
                  description:
                    "Your success is our mission. We work as an extension of your team to achieve your business goals.",
                },
              ].map((point, index) => (
                <motion.div
                  key={point.number}
                  className="group flex items-start space-x-4 p-2 hover:bg-white/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm font-bold">
                      {point.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <GradientButton
                href="/about"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Discover Our Story
              </GradientButton>

              <GradientButton
                href="/portfolio"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto text-lg px-8 py-4 border-2 border-gray-300 hover:border-blue-500 transition-all duration-300"
              >
                View Our Work
              </GradientButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
