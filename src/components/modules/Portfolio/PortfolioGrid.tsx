"use client";

import { useScrollAnimation, useStaggeredGSAP } from "@/hooks/useAnimations";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  awards: string[];
  stats: {
    performance: number;
    accessibility: number;
    seo: number;
  };
  link: string;
  featured: boolean;
}

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Sample portfolio projects
  const projects: Project[] = [
    {
      id: 1,
      title: "TechCorp Enterprise",
      category: "enterprise",
      description:
        "Award-winning enterprise platform with advanced animations and performance optimization",
      image: "/img/logo/aptecode.png",
      technologies: ["Next.js", "GSAP", "Three.js", "TypeScript"],
      awards: ["Awwwards SOTD", "CSS Design Awards"],
      stats: { performance: 100, accessibility: 98, seo: 100 },
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "LuxuryBrand Boutique",
      category: "ecommerce",
      description:
        "High-end e-commerce platform with immersive 3D product visualization",
      image: "/img/logo/aptecode.png",
      technologies: ["Shopify", "WebGL", "Framer Motion", "React"],
      awards: ["FWA of the Day"],
      stats: { performance: 95, accessibility: 96, seo: 98 },
      link: "#",
      featured: true,
    },
    {
      id: 3,
      title: "StartupHub Platform",
      category: "webapp",
      description:
        "Dynamic startup ecosystem platform with real-time data visualization",
      image: "/img/logo/aptecode.png",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      awards: ["Webby Nominee"],
      stats: { performance: 92, accessibility: 94, seo: 96 },
      link: "#",
      featured: false,
    },
    {
      id: 4,
      title: "CreativeStudio Portfolio",
      category: "portfolio",
      description:
        "Interactive portfolio with scroll-triggered animations and dynamic layouts",
      image: "/img/logo/aptecode.png",
      technologies: ["GSAP", "ScrollTrigger", "CSS Grid", "Vanilla JS"],
      awards: ["CSS Design Awards", "Site Inspire"],
      stats: { performance: 98, accessibility: 100, seo: 95 },
      link: "#",
      featured: false,
    },
    {
      id: 5,
      title: "FinTech Dashboard",
      category: "webapp",
      description:
        "Sophisticated financial dashboard with real-time analytics and data visualization",
      image: "/img/logo/aptecode.png",
      technologies: ["Vue.js", "Chart.js", "WebSocket", "TypeScript"],
      awards: ["UX Design Awards"],
      stats: { performance: 94, accessibility: 97, seo: 93 },
      link: "#",
      featured: true,
    },
    {
      id: 6,
      title: "RestaurantChain App",
      category: "ecommerce",
      description:
        "Multi-location restaurant platform with online ordering and delivery tracking",
      image: "/img/logo/aptecode.png",
      technologies: ["Next.js", "Stripe", "Google Maps API", "PWA"],
      awards: ["Mobile Excellence"],
      stats: { performance: 96, accessibility: 95, seo: 97 },
      link: "#",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "enterprise",
      label: "Enterprise",
      count: projects.filter((p) => p.category === "enterprise").length,
    },
    {
      id: "ecommerce",
      label: "E-commerce",
      count: projects.filter((p) => p.category === "ecommerce").length,
    },
    {
      id: "webapp",
      label: "Web Apps",
      count: projects.filter((p) => p.category === "webapp").length,
    },
    {
      id: "portfolio",
      label: "Portfolio",
      count: projects.filter((p) => p.category === "portfolio").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Animations
  const titleAnimation = useScrollAnimation("gsap.fadeIn");
  const { addToRefs } = useStaggeredGSAP("gsap.scaleIn", {
    staggerDelay: 0.1,
    overrides: { duration: 0.8, ease: "back.out(1.7)" },
  });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div ref={titleAnimation.ref} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Work
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Award-winning projects that showcase our expertise in creating
            exceptional digital experiences with cutting-edge technology and
            stunning design.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                ref={addToRefs}
                className={`relative group cursor-pointer ${
                  project.featured ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-500">
                  {/* Project Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  </div>

                  {/* Awards Badge */}
                  {project.awards.length > 0 && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        🏆 {project.awards[0]}
                      </div>
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies
                        .slice(0, 4)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-slate-700/80 text-gray-300 text-xs rounded-md backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-slate-700/80 text-gray-300 text-xs rounded-md backdrop-blur-sm">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Performance Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-slate-800/80 rounded-lg p-2 backdrop-blur-sm"
                        >
                          <div className="text-lg font-bold text-white">
                            {value}
                          </div>
                          <div className="text-xs text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-blue-600/90 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-center"
                        >
                          <div className="text-4xl mb-4">👁️</div>
                          <div className="text-white text-lg font-semibold mb-2">
                            View Project
                          </div>
                          <div className="text-white/80 text-sm">
                            Click to explore details
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 mb-8 text-lg">
            Ready to create your award-winning project?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
