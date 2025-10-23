"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { generateServicesJsonLd, servicesData } from "../../../servicesData";
import "./serviceCard.css";

export default function ServicesCard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const jsonLd = generateServicesJsonLd();

  // Featured service (center) - Website Development
  const featuredService =
    servicesData.find((s) => s.id === 1) || servicesData[0];

  // Other services arranged around it
  const otherServices = servicesData.filter((s) => s.id !== 1);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="services bg-gradient-to-brf from-blue-50f via-purple-50f to-pink-50f relative overflow-hidden py-10">
      {/* Background Effects */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]"></div> */}

      <div className="mx-auto max-w-[1400px] px-4 md:px-6 relative z-10">
        {/* Header Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {servicesData.length} comprehensive solutions designed to power your
            digital transformation
          </p>
        </motion.div> */}

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bento-grid"
        >
          {/* Featured Center Card - Large */}
          <motion.div
            variants={cardVariants}
            className="bento-item bento-featured"
            onMouseEnter={() => setHoveredCard(featuredService.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <a
              href={`/services/${featuredService.slug}`}
              className="block h-full group"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="bento-card h-full relative overflow-hidden bg-white border border-gray-200 shadow-xl">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={featuredService.image}
                    alt={featuredService.title}
                    fill
                    className="object-cover opacity-30 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>

                {/* Animated Orb Background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <div className="orb-container">
                    <div className="orb orb-1"></div>
                    <div className="orb orb-2"></div>
                    <div className="orb orb-3"></div>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/90 group-hover:from-white/70 group-hover:via-white/65 group-hover:to-white/70 transition-all duration-500"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                      <featuredService.icon className="text-3xl text-white" />
                    </div>
                    <FaStar className="w-6 h-6 text-yellow-500 animate-pulse" />
                  </div>

                  <div>
                    <h3
                      className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
                      itemProp="name"
                    >
                      {featuredService.title}
                    </h3>
                    <p
                      className="text-gray-700 text-base mb-6 leading-relaxed"
                      itemProp="description"
                    >
                      {featuredService.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredService.features?.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-700 "
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                      <span>Explore Service</span>
                      <FaArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <meta itemProp="serviceType" content={featuredService.title} />
                <meta
                  itemProp="url"
                  content={`/services/${featuredService.slug}`}
                />
              </div>
            </a>
          </motion.div>

          {/* Other Services - Small Cards */}
          {otherServices.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === service.id;
            // Determine card size class
            const sizeClass =
              index === 0 || index === 4 ? "bento-medium" : "bento-small";

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`bento-item ${sizeClass}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link
                  // href={`/services/${service.slug}`}
                  href={`#`}
                  className="block h-full group"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className="bento-card h-full relative overflow-hidden bg-white border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 touch-manipulation">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover opacity-25 group-hover:opacity-65 group-hover:scale-110 transition-all duration-600 ease-out"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/70 to-purple-50/80 group-hover:from-white/70 group-hover:via-blue-50/40 group-hover:to-purple-50/50 transition-all duration-500"></div>

                    <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-6">
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                          <IconComponent className="text-xl text-blue-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                        {service.highlight && (
                          <div className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-orange-500  flex items-center justify-center shadow-md">
                            <FaStar className="w-2.5 h-2.5 text-white" />
                          </div>
                        )}
                      </div>

                      <div>
                        <h3
                          className="text-gray-900 font-bold text-lg mb-2"
                          itemProp="name"
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`text-gray-600 text-sm leading-snug overflow-hidden transition-all duration-300 ${
                            isHovered ? "max-h-24" : "max-h-12"
                          }`}
                          itemProp="description"
                        >
                          {service.description}
                        </p>

                        {/* <div className="mt-3 flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-semibold">
                            Learn more
                          </span>
                          <FaArrowRight className="w-3 h-3" />
                        </div> */}
                      </div>
                    </div>

                    <meta itemProp="serviceType" content={service.title} />
                    <meta
                      itemProp="url"
                      content={`/services/${service.slug}`}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
