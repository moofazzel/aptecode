"use client";

import { useScrollAnimation, useStaggeredGSAP } from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  color: string;
  features: string[];
}

const ServicesShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState(0);

  // Services data
  const services: Service[] = [
    {
      id: 1,
      title: "Award-Winning Web Development",
      description:
        "Custom websites that win awards and drive results with cutting-edge technology and stunning design.",
      technologies: ["Next.js", "React", "TypeScript", "GSAP", "Framer Motion"],
      icon: "🏆",
      color: "from-purple-600 to-blue-600",
      features: [
        "Performance Optimization",
        "SEO Excellence",
        "Accessibility First",
        "Mobile Responsive",
      ],
    },
    {
      id: 2,
      title: "Interactive Animations",
      description:
        "Breathtaking animations that engage users and create memorable experiences using advanced techniques.",
      technologies: ["GSAP", "Three.js", "WebGL", "CSS Animations", "Lottie"],
      icon: "✨",
      color: "from-pink-600 to-purple-600",
      features: [
        "Scroll Animations",
        "Micro-interactions",
        "3D Effects",
        "Performance Optimized",
      ],
    },
    {
      id: 3,
      title: "E-commerce Solutions",
      description:
        "High-converting online stores with seamless user experiences and powerful backend systems.",
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Analytics"],
      icon: "🛒",
      color: "from-green-600 to-teal-600",
      features: [
        "Conversion Optimization",
        "Payment Integration",
        "Inventory Management",
        "Analytics Dashboard",
      ],
    },
    {
      id: 4,
      title: "Performance Optimization",
      description:
        "Lightning-fast websites that score 100/100 on Core Web Vitals and provide exceptional user experiences.",
      technologies: [
        "Lighthouse",
        "WebPack",
        "Vite",
        "CDN",
        "Image Optimization",
      ],
      icon: "⚡",
      color: "from-yellow-600 to-orange-600",
      features: [
        "Core Web Vitals",
        "Bundle Optimization",
        "Lazy Loading",
        "Caching Strategies",
      ],
    },
  ];

  // Scroll-triggered animations
  const titleAnimation = useScrollAnimation("gsap.fadeIn", {
    start: "top 80%",
    end: "bottom 20%",
  });

  const { addToRefs } = useStaggeredGSAP("gsap.slideInLeft", {
    staggerDelay: 0.2,
    overrides: { duration: 1, ease: "power2.out" },
  });

  // Auto-rotate active service
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div ref={titleAnimation.ref} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver exceptional web solutions that combine cutting-edge
            technology with award-winning design to create digital experiences
            that drive results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                ref={addToRefs}
                className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  activeService === index
                    ? "bg-gradient-to-r " +
                      service.color +
                      " border-transparent shadow-2xl scale-105"
                    : "bg-slate-800/50 border-slate-700 hover:border-slate-600"
                }`}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: activeService === index ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        activeService === index ? "text-white" : "text-gray-200"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm mb-4 ${
                        activeService === index
                          ? "text-gray-100"
                          : "text-gray-400"
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs rounded-full ${
                            activeService === index
                              ? "bg-white/20 text-white"
                              : "bg-slate-700 text-gray-300"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`text-xs flex items-center ${
                            activeService === index
                              ? "text-gray-100"
                              : "text-gray-500"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full mr-2 ${
                              activeService === index
                                ? "bg-white"
                                : "bg-purple-400"
                            }`}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Visualization */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
              {/* Animated Background */}
              <div className="absolute inset-0">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${services[activeService].color} opacity-20`}
                  key={activeService}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Floating Elements */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={`${activeService}-${i}`}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      left: `${10 + i * 12}%`,
                      top: `${15 + (i % 3) * 25}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>

              {/* Service Details */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-6xl mb-4">
                    {services[activeService].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {services[activeService].title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {services[activeService].description}
                  </p>
                </motion.div>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-4 left-8 right-8">
                <div className="flex space-x-2">
                  {services.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-1 rounded-full ${
                        index === activeService ? "bg-white" : "bg-white/30"
                      }`}
                      style={{ flex: 1 }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: index === activeService ? 1 : 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="mt-8 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                Discuss Your Project
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
