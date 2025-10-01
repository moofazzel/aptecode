"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import VideoThumbnail from "./VideoThumbnail";

const AnimatedImage = () => {
  return (
    <motion.div
      className="relative max-w-[660px] max-h-[580px] w-full h-full"
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <Image
        src="/img/images/about-img-12.jpg"
        width={600}
        height={500}
        className="w-full h-full object-cover"
        alt="Business professionals collaborating around a laptop in a modern office setting, discussing project details and strategies"
        priority
      />

      {/* Video Overlay - Client Component for interactivity */}
      <VideoThumbnail />
    </motion.div>
  );
};

export default AnimatedImage;
