"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Projects.module.css";

function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Local Service Business Site",
      image: "/img/project/project-img-5o.jpg",
      category: "Service Business",
      description:
        "New brand. Went live in 3 weeks. Leads up 38% in first 60 days.",
    },
    {
      id: 2,
      title: "E-Commerce Rebuild",
      image: "/img/project/project-img-5.jpg",
      category: "E-Commerce",
      description:
        "Migrated from Wix. Faster checkout, better SEO, 22% bump in conversions.",
    },
    {
      id: 3,
      title: "SaaS Marketing Site",
      image: "/img/project/project-img-6.jpg",
      category: "SaaS",
      description: "Founder-led startup. Clean IA, demo-ready in 4 weeks.",
    },
    {
      id: 4,
      title: "Professional Services Firm",
      image: "/img/project/project-img-7.jpg",
      category: "Professional Services",
      description:
        "Credibility refresh. Modern design, clear service pages, mobile-first.",
    },
    {
      id: 5,
      title: "Bootstrapped Founder Site",
      image: "/img/project/project-img-8.jpg",
      category: "Founder",
      description:
        "Solo founder, tight budget. Launched fast, looks pro, easy to edit.",
    },
  ];

  const handleProjectClick = (projectId: number) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeader title="what we do for you" />
        </motion.div>
        <motion.h3
          className="text-[#171717] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-8 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Let&apos;s Look Our Recent <br className="hidden sm:block" /> Project
          Gallery
        </motion.h3>
      </div>
      {/* Projects Grid */}
      <motion.div
        className="max-w-[1750px] mx-auto px-4 flex flex-col lg:flex-row gap-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        {/* first image */}
        <motion.div
          className="w-full lg:flex-1 grid grid-cols-1 gap-4 relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <div
            key={projects[0].id}
            className={`${styles.projectCard} relative group ${
              activeProject === projects[0].id ? styles.isActive : ""
            }`}
            onClick={() => handleProjectClick(projects[0].id)}
            onMouseEnter={() => setActiveProject(projects[0].id)}
            onMouseLeave={() => setActiveProject(null)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${projects[0].title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleProjectClick(projects[0].id);
              }
            }}
          >
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            {/* Blue overlay with multiply blend */}
            <div className={styles.blueOverlay} />
            {/* Content overlay */}
            <div className={`${styles.contentOverlay} p-6 md:p-8 lg:p-10`}>
              <h4
                className={`${styles.contentTitle} text-white text-xs md:text-sm mb-3 md:mb-5 font-bold`}
              >
                {projects[0].title}
              </h4>
              <p
                className={`${styles.contentDescription} text-white text-xl md:text-2xl lg:text-3xl mb-4 md:mb-7 font-bold`}
              >
                {projects[0].description}
              </p>
              <Link
                className={`${styles.contentLink} bg-white rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center hover:scale-110 hover:bg-gray-100`}
                href="/portfolio"
                onClick={(e) => e.stopPropagation()}
                aria-label="View full portfolio"
              >
                <ArrowRight className="text-[#a868fa] transition-all duration-300 hover:translate-x-1 hover:scale-110 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
            {/* Touch indicator for mobile */}
            <div className={styles.touchIndicator}>Tap to view</div>
          </div>
        </motion.div>
        {/* others images */}
        <motion.div
          className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          {projects.slice(1, 5).map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} relative group ${
                activeProject === project.id ? styles.isActive : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 1.0 + index * 0.1,
                ease: "easeOut",
              }}
              onClick={() => handleProjectClick(project.id)}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleProjectClick(project.id);
                }
              }}
            >
              <Image
                className="w-full h-full object-cover"
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
              />
              {/* Blue overlay with multiply blend */}
              <div className={styles.blueOverlay} />
              {/* Content overlay */}
              <div className={`${styles.contentOverlay} p-4 md:p-6`}>
                <h4
                  className={`${styles.contentTitle} text-white text-xs mb-2 md:mb-3 font-bold`}
                >
                  {project.title}
                </h4>
                <p
                  className={`${styles.contentDescription} text-white text-sm md:text-lg mb-3 md:mb-4 font-bold`}
                >
                  {project.description}
                </p>
                <Link
                  className={`${styles.contentLink} bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:scale-110 hover:bg-gray-100`}
                  href="/portfolio"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="View full portfolio"
                >
                  <ArrowRight className="text-[#a868fa] transition-all duration-300 hover:translate-x-1 hover:scale-110 w-3 h-3 md:w-4 md:h-4" />
                </Link>
              </div>
              {/* Touch indicator for mobile */}
              <div className={styles.touchIndicator}>Tap to view</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
