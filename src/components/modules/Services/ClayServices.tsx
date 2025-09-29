"use client";

import { useScrollAnimation, useStaggeredGSAP } from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const ClayServices = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Branding",
      description:
        "A brand is more than just a logo or some colors. It's how people recognize and connect with your business. We build strong visual and verbal identities, design the assets you need, and create clear brand guidelines so your message stays consistent everywhere.",
      icon: "🎨",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: 2,
      title: "Digital Products",
      description:
        "At Clay, we focus on creating real connections. We combine smart design with behavioral science to make digital products that feel human. Our senior UI and UX designers craft websites and apps that are not just beautiful, but meaningful, and help your brand succeed.",
      icon: "📱",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Websites",
      description:
        "Your digital presence starts with your website. That's where your brand comes to life. We design sites that clearly show who you are and what you stand for, all while giving users a smooth, engaging experience.",
      icon: "🌐",
      color: "from-pink-500 to-red-500",
    },
    {
      id: 4,
      title: "Development",
      description:
        "Our app and web developers care about both looks and performance. We build fast, reliable products that work great on every device. Whether it's the backend or the frontend, we aim for a seamless experience.",
      icon: "⚡",
      color: "from-red-500 to-orange-500",
    },
    {
      id: 5,
      title: "Content",
      description:
        "Great content is a big part of how people experience your brand. We create everything from words to visuals: copywriting, illustrations, 2D and 3D graphics, icons, animations, videos, and photography.",
      icon: "✍️",
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: 6,
      title: "Generative AI",
      description:
        "We use AI to work smarter and build better products. Our team leads the way in AI-powered UX, creating new ways for people to interact with digital tools and setting the standard for what's next.",
      icon: "🤖",
      color: "from-yellow-500 to-green-500",
    },
  ];

  // Scroll animations
  const titleAnimation = useScrollAnimation("gsap.fadeIn", {
    start: "top 80%",
    end: "bottom 20%",
  });

  const { addToRefs } = useStaggeredGSAP("gsap.fadeInUp", {
    staggerDelay: 0.1,
    overrides: { duration: 0.8, ease: "power2.out" },
  });

  return (
    <section ref={sectionRef} className="py-32 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div ref={titleAnimation.ref} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-8">Our Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              ref={addToRefs}
              className="group relative p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-500 cursor-pointer bg-white hover:shadow-2xl"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ y: -10 }}
            >
              {/* Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredService === service.id ? 0.05 : 0 }}
              />

              {/* Icon */}
              <div className="text-4xl mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-800 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>

              {/* Hover Effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredService === service.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div ref={addToRefs} className="text-center mt-20">
          <motion.button
            className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClayServices;
