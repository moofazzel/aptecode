"use client";

import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  ExternalLink,
  Github,
  Target,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Extended portfolio data with more details
const portfolioData = {
  "e-commerce-platform": {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    slug: "e-commerce-platform",
    heroImage: "/img/project/project-img-5.jpg",
    images: [
      "/img/project/project-img-5.jpg",
      "/img/project/project-img-6.jpg",
      "/img/project/project-img-7.jpg",
      "/img/project/project-img-8.jpg",
    ],
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration, featuring advanced search, user authentication, and real-time inventory management.",
    longDescription:
      "This comprehensive e-commerce solution revolutionizes online shopping with cutting-edge technology and user-centric design. Built from the ground up with performance and scalability in mind, the platform handles thousands of concurrent users while maintaining lightning-fast load times.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    year: "2024",
    duration: "4 months",
    team: "5 developers",
    client: "TechCorp",
    challenge:
      "Create a scalable e-commerce platform that could handle high traffic while providing an exceptional user experience.",
    solution:
      "Implemented a modern tech stack with Next.js for SSR/SSG, Stripe for secure payments, and Redis for caching to ensure optimal performance.",
    results: [
      "300% increase in conversion rate",
      "50% reduction in page load time",
      "99.9% uptime achieved",
      "40% increase in user engagement",
    ],
    features: [
      "Advanced product search and filtering",
      "Real-time inventory management",
      "Secure payment processing",
      "User authentication and profiles",
      "Order tracking and management",
      "Admin dashboard",
      "Mobile-responsive design",
      "SEO optimization",
    ],
    process: [
      {
        phase: "Discovery & Planning",
        description: "Conducted user research and defined project requirements",
        duration: "2 weeks",
      },
      {
        phase: "Design & Prototyping",
        description: "Created wireframes and interactive prototypes",
        duration: "3 weeks",
      },
      {
        phase: "Development",
        description: "Built the platform using modern web technologies",
        duration: "10 weeks",
      },
      {
        phase: "Testing & Launch",
        description: "Comprehensive testing and deployment",
        duration: "3 weeks",
      },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        role: "CEO, TechCorp",
        content:
          "The e-commerce platform exceeded our expectations. The team delivered a solution that not only met our requirements but also provided insights we didn't know we needed.",
        avatar: "/img/testi/testi-img-1.png",
      },
    ],
    relatedProjects: [
      {
        title: "Mobile Banking App",
        image: "/img/project/project-img-6.jpg",
        slug: "mobile-banking-app",
      },
      {
        title: "SaaS Platform",
        image: "/img/project/project-img-8.jpg",
        slug: "saas-platform",
      },
    ],
  },
  "mobile-banking-app": {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    slug: "mobile-banking-app",
    heroImage: "/img/project/project-img-6.jpg",
    images: [
      "/img/project/project-img-6.jpg",
      "/img/project/project-img-7.jpg",
      "/img/project/project-img-8.jpg",
      "/img/project/project-img-5.jpg",
    ],
    description:
      "Secure mobile banking application with biometric authentication, real-time transactions, and advanced security features.",
    longDescription:
      "A comprehensive mobile banking solution that prioritizes security and user experience. The app features cutting-edge biometric authentication, real-time transaction processing, and advanced fraud detection systems.",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "JWT",
      "Biometric Auth",
      "Push Notifications",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    year: "2024",
    duration: "6 months",
    team: "8 developers",
    client: "SecureBank",
    challenge:
      "Create a secure mobile banking app that users can trust with their financial data while providing an intuitive user experience.",
    solution:
      "Implemented multi-layer security with biometric authentication, end-to-end encryption, and real-time fraud monitoring.",
    results: [
      "Zero security breaches",
      "95% user satisfaction rate",
      "60% reduction in support tickets",
      "200% increase in mobile transactions",
    ],
    features: [
      "Biometric authentication",
      "Real-time transaction processing",
      "Advanced fraud detection",
      "Push notifications",
      "Bill payment system",
      "Investment tracking",
      "Customer support chat",
      "Offline mode capability",
    ],
    process: [
      {
        phase: "Security Analysis",
        description:
          "Conducted comprehensive security audit and compliance review",
        duration: "3 weeks",
      },
      {
        phase: "UI/UX Design",
        description: "Designed intuitive and secure user interfaces",
        duration: "4 weeks",
      },
      {
        phase: "Development",
        description: "Built the app with focus on security and performance",
        duration: "16 weeks",
      },
      {
        phase: "Security Testing",
        description: "Extensive security testing and penetration testing",
        duration: "4 weeks",
      },
    ],
    testimonials: [
      {
        name: "Michael Chen",
        role: "CTO, SecureBank",
        content:
          "The security implementation is outstanding. Our customers feel confident using the app, and we've seen a significant increase in mobile banking adoption.",
        avatar: "/img/testi/testi-img-3.png",
      },
    ],
    relatedProjects: [
      {
        title: "E-Commerce Platform",
        image: "/img/project/project-img-5.jpg",
        slug: "e-commerce-platform",
      },
      {
        title: "Blockchain Wallet",
        image: "/img/project/project-img-6.jpg",
        slug: "blockchain-wallet",
      },
    ],
  },
};

interface PortfolioDetailsPageProps {
  params: {
    slug: string;
  };
}

function PortfolioDetailsPage({ params }: PortfolioDetailsPageProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const project = portfolioData[params.slug as keyof typeof portfolioData];

  // GSAP Animations
  useEffect(() => {
    if (typeof window === "undefined" || !project) return;

    // Hero animation
    const heroTl = gsap.timeline();
    heroTl
      .fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        ".hero-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

    // Content animation
    if (contentRef.current?.children) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Stats animation
    if (statsRef.current?.children) {
      gsap.fromTo(
        statsRef.current.children,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Navigation */}
        <div className="absolute top-8 left-8 z-10">
          <Link href="/portfolio">
            <Button
              variant="ghost"
              className="text-white hover:bg-white hover:bg-opacity-20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6">
              {project.category}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <GradientButton size="lg" className="text-lg px-8 py-4">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Live Demo
              </GradientButton>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Github className="w-5 h-5 mr-2" />
                View Code
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {project.year}
              </h3>
              <p className="text-gray-600 font-medium">Year Completed</p>
            </motion.div>

            <motion.div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {project.duration}
              </h3>
              <p className="text-gray-600 font-medium">Duration</p>
            </motion.div>

            <motion.div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {project.team}
              </h3>
              <p className="text-gray-600 font-medium">Team Size</p>
            </motion.div>

            <motion.div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {project.client}
              </h3>
              <p className="text-gray-600 font-medium">Client</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="results">Results</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Project Overview
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {project.longDescription}
                    </p>

                    <div className="bg-gray-50 rounded-2xl p-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Challenge
                      </h4>
                      <p className="text-gray-600 mb-6">{project.challenge}</p>

                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Solution
                      </h4>
                      <p className="text-gray-600">{project.solution}</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="process" className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Development Process
                    </h3>
                    <div className="space-y-6">
                      {project.process.map((phase, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {phase.phase}
                            </h4>
                            <p className="text-gray-600 mb-2">
                              {phase.description}
                            </p>
                            <span className="text-sm text-blue-600 font-medium">
                              {phase.duration}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="results" className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Project Results
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.results.map((result, index) => (
                        <motion.div
                          key={index}
                          className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            <span className="text-lg font-semibold text-gray-900">
                              {result}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Project Gallery
                </h3>
                <div className="space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                    {project.images.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100"
                          onClick={prevImage}
                        >
                          <ChevronRight className="w-4 h-4 rotate-180" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100"
                          onClick={nextImage}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                  </div>
                  {project.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto">
                      {project.images.map((image, index) => (
                        <button
                          key={index}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                            index === currentImageIndex
                              ? "border-blue-500"
                              : "border-gray-200"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <Image
                            src={image}
                            alt={`${project.title} ${index + 1}`}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Testimonial */}
              {project.testimonials && project.testimonials.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Client Testimonial
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 italic">
                      &ldquo;{project.testimonials[0].content}&rdquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {project.testimonials[0].name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {project.testimonials[0].name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {project.testimonials[0].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {project.relatedProjects && project.relatedProjects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Related Projects
              </h2>
              <p className="text-xl text-gray-600">Explore more of our work</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Link href={`/portfolio/${relatedProject.slug}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {relatedProject.title}
                        </h3>
                        <div className="flex items-center mt-2 text-blue-600">
                          <span className="text-sm font-medium">
                            View Project
                          </span>
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
                View All Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioDetailsPage;
