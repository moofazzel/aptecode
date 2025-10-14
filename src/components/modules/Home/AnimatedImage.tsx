"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import VideoThumbnail from "./VideoThumbnail";

const AnimatedImage = () => {
  return (
    <motion.div
      className="relative w-full max-w-[660px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] mx-auto lg:mx-0"
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <Image
        src="/img/images/about-img-12.jpg"
        width={600}
        height={500}
        className="w-full h-full object-cover rounded-lg"
        alt="Business professionals collaborating around a laptop in a modern office setting, discussing project details and strategies"
        priority
      />

      {/* Video Overlay - Client Component for interactivity */}
      <VideoThumbnail />
    </motion.div>
  );
};

export default AnimatedImage;
