"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";
import AnimatedStats from "./AnimatedStats";

const AnimatedContent = () => {
  return (
    <motion.div
      className="text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Header */}
      <motion.header
        className="mb-4"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionHeader title="Why Aptecode?" />
      </motion.header>

      {/* Main Title */}
      <motion.h2
        id="why-choose-us-heading"
        className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Websites that win customers{" "}
        <span className="text-blue-400">— not just look pretty.</span>
      </motion.h2>

      {/* Description Paragraphs */}
      <div className="space-y-6 mb-12">
        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Most sites look fine but don&apos;t convert. DIY feels cheap.
          Freelancers slip. Agencies talk big and ship slow.
        </motion.p>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Here&apos;s our fix: Discover → Design → Build → Launch & Improve.
          Fast timelines, conversion-ready pages, SEO fundamentals.
        </motion.p>
      </div>

      {/* Statistics - Client Component for animations */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <AnimatedStats />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedContent;
