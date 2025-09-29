"use client";

import { useScrollAnimation, useStaggeredGSAP } from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import { useRef } from "react";

const ClayClients = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const clients = [
    { name: "Meta", logo: "M" },
    { name: "Google", logo: "G" },
    { name: "Discover", logo: "D" },
    { name: "Stripe", logo: "S" },
    { name: "Coca-Cola", logo: "C" },
    { name: "Coinbase", logo: "C" },
    { name: "Uber", logo: "U" },
    { name: "Sony", logo: "S" },
    { name: "Slack", logo: "S" },
    { name: "Amazon", logo: "A" },
    { name: "Fiverr", logo: "F" },
    { name: "Credit Karma", logo: "C" },
    { name: "Cisco", logo: "C" },
    { name: "ADP", logo: "A" },
    { name: "UPS", logo: "U" },
    { name: "VMware", logo: "V" },
    { name: "Fossil", logo: "F" },
    { name: "Western Digital", logo: "W" },
    { name: "Toyota", logo: "T" },
    { name: "Samsung", logo: "S" },
    { name: "Grayscale", logo: "G" },
  ];

  // Scroll animations
  const titleAnimation = useScrollAnimation("gsap.fadeIn", {
    start: "top 80%",
    end: "bottom 20%",
  });

  const { addToRefs } = useStaggeredGSAP("gsap.fadeInUp", {
    staggerDelay: 0.05,
    overrides: { duration: 0.6, ease: "power2.out" },
  });

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div ref={titleAnimation.ref} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've had the privilege of working with some of the world's most
            innovative companies
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              ref={addToRefs}
              className="group flex items-center justify-center p-6 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Logo Placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg group-hover:from-blue-100 group-hover:to-purple-100 group-hover:text-blue-600 transition-all duration-300">
                {client.logo}
              </div>

              {/* Client Name (hidden by default, shown on hover) */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                {client.name}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div ref={addToRefs} className="text-center mt-16">
          <p className="text-lg text-gray-600">
            And many more innovative companies worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClayClients;
