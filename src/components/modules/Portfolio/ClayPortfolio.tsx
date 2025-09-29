"use client";

import { useScrollAnimation, useStaggeredGSAP } from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  color: string;
}

const ClayPortfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Slack Interactive Demo",
      client: "Slack",
      description: "Designing and building Slack's interactive demo experience",
      category: "Web Design",
      image: "💬",
      tags: ["Enterprise", "Development"],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Yahoo! Games Platform",
      client: "Yahoo! Games",
      description: "Website design and development for Yahoo Games",
      category: "Web Design",
      image: "🎮",
      tags: ["Design System", "Illustration", "Development"],
      color: "from-blue-500 to-purple-500",
    },
    {
      id: 3,
      title: "Snapchat AR Commerce",
      client: "Snapchat",
      description: "Integrating augmented reality to elevate social commerce",
      category: "UI/UX",
      image: "📸",
      tags: ["Mobile App", "Ecommerce"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 4,
      title: "Grayscale Redesign",
      client: "Grayscale",
      description: "Web redesign for the world's largest crypto asset manager",
      category: "Web Design",
      image: "₿",
      tags: ["Design System", "Illustration"],
      color: "from-gray-500 to-blue-500",
    },
    {
      id: 5,
      title: "Discover Mobile Innovation",
      client: "Discover",
      description: "Design partnership focused on mobile app innovation",
      category: "UI/UX",
      image: "💳",
      tags: ["Design System", "Fintech"],
      color: "from-green-500 to-blue-500",
    },
    {
      id: 6,
      title: "Joe & The Juice App",
      client: "Joe & The Juice",
      description:
        "A digital commerce and loyalty app for a global coffee shop chain",
      category: "UI/UX",
      image: "☕",
      tags: ["Mobile App", "Consumer"],
      color: "from-orange-500 to-red-500",
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
    <section ref={sectionRef} className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div ref={titleAnimation.ref} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Featured Work
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of transformative digital experiences for
            leading brands
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={addToRefs}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              whileHover={{ y: -10 }}
            >
              {/* Project Image/Icon */}
              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <motion.div
                  className="text-8xl"
                  animate={{
                    scale: activeProject === project.id ? 1.1 : 1,
                    rotate: activeProject === project.id ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.image}
                </motion.div>

                {/* Overlay Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeProject === project.id ? 0.2 : 0 }}
                />
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Category */}
                <div className="text-sm text-gray-400 mb-2">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Client */}
                <div className="text-lg text-gray-300 mb-4">
                  {project.client}
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full group-hover:bg-gray-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Case Study Button */}
                <motion.button
                  className="mt-6 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  View Case Study →
                </motion.button>
              </div>

              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-2xl"
                animate={{
                  borderColor:
                    activeProject === project.id
                      ? "rgba(255,255,255,0.1)"
                      : "transparent",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div ref={addToRefs} className="text-center mt-20">
          <motion.button
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClayPortfolio;
