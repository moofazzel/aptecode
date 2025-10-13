"use client";

import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Code,
  Star,
  Target,
  User,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PortfolioDetailsPageProps {
  params: {
    slug: string;
  };
}

function PortfolioDetailsPage({ params }: PortfolioDetailsPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find project by slug from our centralized data
  const project = portfolioData.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/portfolio">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-white -mt-[96px]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover scale-105 transition-transform duration-[10s] ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

          {/* Animated Overlay Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Enhanced Navigation */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
          <div className="sticky top-[104px] left-8 pointer-events-auto inline-block">
            <Link href="/portfolio">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 shadow-lg"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Enhanced Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8">
              <Code className="w-4 h-4" />
              {project.category}
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              {project.title}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {project.description}
          </motion.p>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="text-xs text-white/60 font-medium tracking-widest">
              EXPLORE PROJECT
            </div>
            <div className="w-6 h-12 border-2 border-white/30 flex justify-center backdrop-blur-sm">
              <motion.div
                className="w-1.5 h-4 bg-gradient-to-b from-white to-white/50 mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Project Details */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/5 to-purple-400/5 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Enhanced Project Gallery */}
            <div className="space-y-8">
              <motion.div
                className="relative aspect-video  overflow-hidden shadow-2xl bg-white p-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-full h-full  overflow-hidden">
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Enhanced Navigation Arrows */}
                  {project.images.length > 1 && (
                    <>
                      <motion.button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 shadow-xl transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-900" />
                      </motion.button>
                      <motion.button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 shadow-xl transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ChevronRight className="w-5 h-5 text-gray-900" />
                      </motion.button>
                    </>
                  )}

                  {/* Image Counter */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 text-sm">
                      {currentImageIndex + 1} / {project.images.length}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Image Thumbnails */}
              {project.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-24 h-24  overflow-hidden border-3 transition-all duration-300 ${
                        currentImageIndex === index
                          ? "border-blue-500 scale-105"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Enhanced Project Info */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h2 className="text-5xl font-black text-gray-900">
                    Project Overview
                  </h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-10 font-light">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <motion.div
                    className="bg-gradient-to-br from-blue-50 to-blue-100 p-8  border border-blue-200 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="w-6 h-6 text-blue-600" />
                      <span className="font-bold text-gray-900 text-lg">
                        Year
                      </span>
                    </div>
                    <p className="text-3xl font-black text-gray-900">
                      {project.year}
                    </p>
                  </motion.div>
                  <motion.div
                    className="bg-gradient-to-br from-purple-50 to-purple-100 p-8  border border-purple-200 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <User className="w-6 h-6 text-purple-600" />
                      <span className="font-bold text-gray-900 text-lg">
                        Client
                      </span>
                    </div>
                    <p className="text-xl font-bold text-gray-900">
                      {project.client}
                    </p>
                  </motion.div>
                </div>

                {/* Enhanced Impact Section */}
                <motion.div
                  className="bg-gradient-to-r from-green-50 to-emerald-50 p-8  border border-green-200 shadow-lg mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-green-600" />
                    <h3 className="text-2xl font-black text-gray-900">
                      Impact
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 font-medium">
                    {project.impact}
                  </p>
                </motion.div>

                {/* Enhanced Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Code className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-black text-gray-900">
                      Technologies Used
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-6 py-3 text-sm font-bold border border-blue-300 shadow-md"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Enhanced Awards */}
                {project.awards.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Award className="w-6 h-6 text-yellow-600" />
                      <h3 className="text-2xl font-black text-gray-900">
                        Awards & Recognition
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {project.awards.map((award, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50  border border-yellow-200"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Star className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-800 font-medium">
                            {award}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-white/5 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Project?
              </span>
            </motion.h2>

            <motion.p
              className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let&apos;s create something amazing together. Get in touch to
              discuss your next project and bring your vision to life.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <GradientButton
                href="/contact"
                showArrow={true}
                size="lg"
                variant="secondary"
              >
                Start Your Project Now
              </GradientButton>
            </motion.div>

            {/* Additional Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-12 mt-16 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold">300+</div>
                <div className="text-sm uppercase tracking-wider">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm uppercase tracking-wider">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-sm uppercase tracking-wider">
                  Average Rating
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioDetailsPage;
