'use client';

import { motion } from 'framer-motion';
import GSAPSlider from '@/components/ui/GSAPSlider';
import MotionCard from '@/components/ui/MotionCard';
import MotionButton from '@/components/ui/MotionButton';

const HybridAnimationDemo = () => {
  // Sample slider data
  const sliderData = [
    {
      id: 1,
      title: "GSAP Power",
      description: "High-performance animations with precise control and smooth transitions",
      image: "/img/logo/aptecode.png",
      bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Framer Magic",
      description: "Declarative animations that integrate seamlessly with React components",
      image: "/img/logo/aptecode.png",
      bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Hybrid Approach",
      description: "The best of both worlds - GSAP for complex animations, Framer for UI",
      image: "/img/logo/aptecode.png",
      bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
      {/* Header Section with Framer Motion */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center py-16 px-4"
      >
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Hybrid Animation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-purple-200 mb-8"
        >
          GSAP + Framer Motion Working Together
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MotionButton variant="primary">
            Explore GSAP Slider
          </MotionButton>
          <MotionButton variant="outline">
            See Framer Motion
          </MotionButton>
        </motion.div>
      </motion.div>

      {/* GSAP Slider Section */}
      <div className="px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <GSAPSlider 
            slides={sliderData} 
            autoplay={true} 
            duration={5000}
            className="shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Feature Cards with Framer Motion */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 pb-16"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Why This Hybrid Approach?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "GSAP for Complex Animations",
                description: "Use GSAP for performance-critical animations like sliders, scroll triggers, and complex sequences.",
                icon: "⚡",
                color: "from-yellow-400 to-orange-500"
              },
              {
                title: "Framer Motion for UI",
                description: "Use Framer Motion for declarative UI animations, gestures, and layout transitions.",
                icon: "🎨",
                color: "from-pink-400 to-purple-500"
              },
              {
                title: "Best Performance",
                description: "Combine both libraries strategically to get maximum performance and developer experience.",
                icon: "🚀",
                color: "from-blue-400 to-cyan-500"
              }
            ].map((feature, index) => (
              <MotionCard
                key={index}
                delay={index * 0.2}
                direction="up"
                className="h-full"
              >
                <motion.div
                  variants={cardVariants}
                  custom={index}
                  className={`bg-gradient-to-br ${feature.color} p-8 rounded-2xl h-full shadow-xl`}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                    className="text-4xl mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </MotionCard>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Interactive Demo Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-4 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            Interactive Elements
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Hover Me', 'Click Me', 'Touch Me', 'Try Me'].map((text, index) => (
              <MotionCard key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-white font-semibold"
                  >
                    {text}
                  </motion.p>
                </motion.div>
              </MotionCard>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HybridAnimationDemo;
