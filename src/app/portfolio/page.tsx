"use client";

import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  Github,
  Star,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Portfolio data
const portfolioData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/img/project/project-img-5.jpg",
    images: [
      "/img/project/project-img-5.jpg",
      "/img/project/project-img-6.jpg",
      "/img/project/project-img-7.jpg",
    ],
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration, featuring advanced search, user authentication, and real-time inventory management.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "/img/project/project-img-6.jpg",
    images: [
      "/img/project/project-img-6.jpg",
      "/img/project/project-img-7.jpg",
      "/img/project/project-img-8.jpg",
    ],
    description:
      "Secure mobile banking application with biometric authentication, real-time transactions, and advanced security features.",
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "JWT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "AI-Powered Dashboard",
    category: "Web Development",
    image: "/img/project/project-img-7.jpg",
    images: [
      "/img/project/project-img-7.jpg",
      "/img/project/project-img-8.jpg",
      "/img/project/project-img-5.jpg",
    ],
    description:
      "Intelligent dashboard with machine learning insights, real-time analytics, and predictive modeling capabilities.",
    technologies: ["React", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
    year: "2023",
  },
  {
    id: 4,
    title: "SaaS Platform",
    category: "Web Development",
    image: "/img/project/project-img-8.jpg",
    images: [
      "/img/project/project-img-8.jpg",
      "/img/project/project-img-5.jpg",
      "/img/project/project-img-6.jpg",
    ],
    description:
      "Comprehensive SaaS platform with multi-tenant architecture, subscription management, and advanced reporting.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    year: "2023",
  },
  {
    id: 5,
    title: "IoT Monitoring System",
    category: "IoT Development",
    image: "/img/project/project-img-5.jpg",
    images: [
      "/img/project/project-img-5.jpg",
      "/img/project/project-img-6.jpg",
    ],
    description:
      "Real-time IoT monitoring system with sensor data visualization, alerts, and predictive maintenance.",
    technologies: ["React", "Node.js", "MQTT", "InfluxDB", "Grafana"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
    year: "2023",
  },
  {
    id: 6,
    title: "Blockchain Wallet",
    category: "Blockchain",
    image: "/img/project/project-img-6.jpg",
    images: [
      "/img/project/project-img-6.jpg",
      "/img/project/project-img-7.jpg",
    ],
    description:
      "Secure cryptocurrency wallet with multi-chain support, DeFi integration, and advanced security features.",
    technologies: ["React", "Web3.js", "Solidity", "Ethers.js", "MetaMask"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    year: "2022",
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "IoT Development",
  "Blockchain",
];

const stats = [
  { number: "50+", label: "Projects Completed", icon: Award },
  { number: "30+", label: "Happy Clients", icon: Users },
  { number: "5+", label: "Years Experience", icon: Clock },
  { number: "4.9", label: "Client Rating", icon: Star },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content:
      "Exceptional work! The team delivered beyond our expectations with innovative solutions and outstanding attention to detail.",
    avatar: "/img/testi/testi-img-1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, StartupXYZ",
    content:
      "Professional, reliable, and incredibly talented. They transformed our vision into a stunning digital reality.",
    avatar: "/img/testi/testi-img-3.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager, InnovateLab",
    content:
      "Outstanding technical expertise and creative problem-solving. Highly recommend for any complex project.",
    avatar: "/img/testi/testi-img-1.png",
    rating: 5,
  },
];

function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof portfolioData)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter(
          (project) => project.category === selectedCategory
        );

  // Open project modal
  const openProjectModal = (project: (typeof portfolioData)[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  // Navigate to project details page
  const goToProjectDetails = (project: (typeof portfolioData)[0]) => {
    // Create slug from title
    const slug = project.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    window.location.href = `/portfolio/${slug}`;
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

  // GSAP Animations
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Hero animation
    const heroTl = gsap.timeline();
    heroTl
      .fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        ".hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );

    // Stats animation
    if (statsRef.current?.children) {
      gsap.fromTo(
        statsRef.current.children,
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Projects animation
    if (projectsRef.current?.children) {
      gsap.fromTo(
        projectsRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full mb-6">
              Award-Winning Portfolio
            </span>
          </motion.div>

          <motion.h1
            className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Creative
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h1>

          <motion.p
            className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Transforming ideas into digital masterpieces through innovative
            design, cutting-edge technology, and unparalleled attention to
            detail.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <GradientButton size="lg" className="text-lg px-8 py-4">
              View Our Work
            </GradientButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-2"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 group-hover:shadow-lg transition-shadow">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of projects that showcase innovation,
              creativity, and technical excellence.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <Tabs
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full max-w-2xl"
            >
              <TabsList className="grid w-full grid-cols-5 bg-gray-100 p-1 rounded-lg">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-300"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Projects Grid */}
          <div
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center space-x-4">
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div
                            className="bg-white rounded-full p-3 cursor-pointer"
                            onClick={() => goToProjectDetails(project)}
                          >
                            <ExternalLink className="w-6 h-6 text-gray-900" />
                          </div>
                        </motion.div>
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div
                            className="bg-white rounded-full p-3 cursor-pointer"
                            onClick={() => openProjectModal(project)}
                          >
                            <svg
                              className="w-6 h-6 text-gray-900"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description.substring(0, 100)}...
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          size="sm"
                          className="flex-1 text-xs"
                          onClick={() => goToProjectDetails(project)}
                        >
                          View Details
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 text-xs"
                          onClick={() => openProjectModal(project)}
                        >
                          Quick View
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our
              satisfied clients have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your vision to life with
              cutting-edge technology and innovative design solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton size="lg" className="text-lg px-8 py-4">
                Start Your Project
              </GradientButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900"
              >
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <div className="absolute inset-0 bg-black bg-opacity-75" />
            <motion.div
              className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600">{selectedProject.category}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={closeProjectModal}>
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image Gallery */}
                  <div className="space-y-4">
                    <div className="relative h-80 rounded-lg overflow-hidden">
                      <Image
                        src={selectedProject.images[currentImageIndex]}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                      />
                      {selectedProject.images.length > 1 && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100"
                            onClick={prevImage}
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100"
                            onClick={nextImage}
                          >
                            <ChevronRight className="w-5 h-5" />
                          </Button>
                        </>
                      )}
                    </div>
                    {selectedProject.images.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto">
                        {selectedProject.images.map((image, index) => (
                          <button
                            key={index}
                            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                              index === currentImageIndex
                                ? "border-blue-500"
                                : "border-gray-200"
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                          >
                            <Image
                              src={image}
                              alt={`${selectedProject.title} ${index + 1}`}
                              width={80}
                              height={80}
                              className="object-cover w-full h-full"
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
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button asChild className="flex-1">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="flex-1">
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
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
    </div>
  );
}

export default PortfolioPage;
