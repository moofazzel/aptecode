"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
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

interface ProjectModalProps {
  isOpen: boolean;
  project: Project | null;
  currentImageIndex: number;
  onClose: () => void;
  onNextImage: () => void;
  onPrevImage: () => void;
  onSetImageIndex: (index: number) => void;
}

export function ProjectModal({
  isOpen,
  project,
  currentImageIndex,
  onClose,
  onNextImage,
  onPrevImage,
  onSetImageIndex,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black bg-opacity-75" />
          <motion.div
            className="relative bg-white max-w-6xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.category}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div className="space-y-4">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.images[currentImageIndex]}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    {project.images.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100"
                          onClick={onPrevImage}
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100"
                          onClick={onNextImage}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </Button>
                      </>
                    )}
                  </div>
                  {project.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto">
                      {project.images.map((image, index) => (
                        <button
                          key={index}
                          className={`flex-shrink-0 w-20 h-20 overflow-hidden border-2 ${
                            index === currentImageIndex
                              ? "border-blue-500"
                              : "border-gray-200"
                          }`}
                          onClick={() => onSetImageIndex(index)}
                        >
                          <Image
                            src={image}
                            alt={`${project.title} ${index + 1}`}
                            width={80}
                            height={80}
                            className="object-fill w-full h-full"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Project Description
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild className="w-full">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
