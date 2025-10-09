"use client";

import { motion } from "framer-motion";

interface WhyChooseUsAnimationsProps {
  children: React.ReactNode;
}

const WhyChooseUsAnimations = ({ children }: WhyChooseUsAnimationsProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default WhyChooseUsAnimations;
