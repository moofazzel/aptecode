"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import { GradientButton } from "@/components/ui/gradient-button";
import { motion } from "framer-motion";
import { Clock, User } from "lucide-react";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How GEO & SEO Web Apps Boost Your Business",
    date: "25 JUNE, 2024",
    author: "POST BY: APTECODE",
    image: "/img/blog/post-15.jpg",
    imageAlt: "Young man and woman in office setting with laptop",
  },
  {
    id: 2,
    title: "Custom Software: Why Your Brand Needs It",
    date: "25 JUNE, 2024",
    author: "POST BY: APTECODE",
    image: "/img/blog/post-16.jpg",
    imageAlt: "Group of people around table looking at laptop",
  },
  {
    id: 3,
    title: "Crypto Social Services: Building Strong Communities",
    date: "25 JUNE, 2024",
    author: "POST BY: APTECODE",
    image: "/img/blog/post-17.jpg",
    imageAlt: "Diverse group of young people in office space",
  },
];

// Enhanced Blog Post Card Component with Professional Motion Animations
interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

function BlogPostCard({ post, index }: BlogPostCardProps) {
  // Animation variants for different elements
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
      rotateY: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
      filter: "brightness(0.5)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "brightness(1)",
    },
  };

  const metadataVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.article
      className="bg-[#f2f3f4] p-4 overflow-hidden group cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Blog Image with Enhanced Animation */}
      <motion.div
        className="relative h-64 w-full overflow-hidden "
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: index * 0.1,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
        />
        {/* Enhanced overlay with gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Enhanced Metadata Bar */}
      <motion.div
        className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-3 flex items-center justify-between"
        variants={metadataVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.1 + 0.2,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="flex items-center font-semibold text-white text-sm"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Clock className="w-4 h-4 mr-2" />
          </motion.div>
          <span>{post.date}</span>
        </motion.div>
        <motion.div
          className="flex items-center font-semibold text-white text-sm"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <User className="w-4 h-4 mr-2" />
          </motion.div>
          <span>{post.author}</span>
        </motion.div>
      </motion.div>

      {/* Enhanced Content */}
      <motion.div
        className="p-6"
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.1 + 0.4,
          ease: "easeOut",
        }}
      >
        <motion.h3
          className="text-xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-purple-600 transition-colors duration-300 relative inline-block"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <span className="relative">
            {post.title}
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-purple-600"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </span>
        </motion.h3>

        {/* Enhanced Read More Button */}
        <motion.div
          className="flex justify-start"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <GradientButton
              variant="ghost"
              size="md"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 group-hover:shadow-xl transition-all duration-300"
              showArrow={true}
            >
              Read More
            </GradientButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

function LatestNewsAndTips() {
  // Animation variants for section header
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Animation variants for main title with text reveal effect
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <SectionHeader
            title="APTECODE INSIGHTS"
            variant="secondary"
            className="justify-center mb-4"
          />
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Latest News & Tips
          </motion.h2>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default LatestNewsAndTips;
