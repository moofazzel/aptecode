"use client";

import { CTASection } from "@/components/modules/Portfolio/CTASection";
import { HeroSection } from "@/components/modules/Portfolio/HeroSection";
import { PortfolioFilter } from "@/components/modules/Portfolio/PortfolioFilter";
import { ProjectCard } from "@/components/modules/Portfolio/ProjectCard";
import { ProjectModal } from "@/components/modules/Portfolio/ProjectModal";
import { TestimonialsSection } from "@/components/modules/Portfolio/TestimonialsSection";
import { portfolioData, testimonials } from "@/data/portfolio";
import { Project } from "@/types/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

function PortfolioPage() {
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsRef = useRef<HTMLDivElement>(null);

  // Handle filtered projects from PortfolioFilter
  const handleFilteredProjects = (projects: Project[]) => {
    setFilteredProjects(projects);
  };

  // Close project modal
  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Navigate project images
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="bg-white -mt-[90px]">
      {/* Hero Section */}
      <HeroSection />

      {/* Portfolio Filter */}
      <PortfolioFilter onFilteredProjects={handleFilteredProjects} />

      {/* Projects Grid */}
      <section className="pb-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* CTA Section */}
      <CTASection />

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        currentImageIndex={currentImageIndex}
        onClose={closeProjectModal}
        onNextImage={nextImage}
        onPrevImage={prevImage}
        onSetImageIndex={setCurrentImageIndex}
      />
    </div>
  );
}

export default PortfolioPage;
