"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import { motion } from "framer-motion";
import Image from "next/image";
import QuickViewModal from "./QuickViewModal";

interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  technologies: string[];
  liveUrl: string;
  featured: boolean;
  year: string;
  awards: string[];
  client: string;
  impact: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02]">
        {/* Project Image with Advanced Effects */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-fill transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 text-sm font-bold shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              ⭐ Featured
            </motion.div>
          )}
        </div>

        {/* Enhanced Project Info */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-blue-700 bg-blue-50 px-4 py-2 border border-blue-200">
              {project.category}
            </span>
            <span className="text-sm text-gray-500 font-medium">
              {project.year}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {project.description.substring(0, 120)}...
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 font-medium border border-gray-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-gray-500 font-medium">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          <div className="flex gap-3">
            <GradientButton
              href={`/portfolio/${project.slug}`}
              className="text-sm cursor-pointer"
              variant="primary"
            >
              See details →
            </GradientButton>

            <QuickViewModal project={project} />
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
      </div>
    </motion.div>
  );
}
