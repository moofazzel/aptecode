"use client";

import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Sparkles,
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

// Award-Winning Portfolio Data
const portfolioData = [
  {
    id: 1,
    title: "Award-Winning E-Commerce Platform",
    category: "Web Development",
    image: "/img/project/project-img-5.jpg",
    images: [
      "/img/project/project-img-5.jpg",
      "/img/project/project-img-6.jpg",
      "/img/project/project-img-7.jpg",
    ],
    description:
      "Industry-recognized e-commerce platform that won the 'Best Digital Innovation' award. Features advanced AI-powered recommendations, seamless checkout experience, and 99.9% uptime.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Tailwind CSS",
      "Prisma",
      "OpenAI",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    year: "2024",
    awards: ["Best Digital Innovation 2024", "E-commerce Excellence Award"],
    client: "TechCorp",
    impact: "300% increase in conversion rate",
  },
  {
    id: 2,
    title: "Secure Banking Revolution",
    category: "Mobile Development",
    image: "/img/project/project-img-6.jpg",
    images: [
      "/img/project/project-img-6.jpg",
      "/img/project/project-img-7.jpg",
      "/img/project/project-img-8.jpg",
    ],
    description:
      "Revolutionary mobile banking app that set new industry standards for security and user experience. Winner of 'Fintech Innovation Award' and 'Best Mobile App' recognition.",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "JWT",
      "Biometric Auth",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    year: "2024",
    awards: ["Fintech Innovation Award", "Best Mobile App 2024"],
    client: "SecureBank",
    impact: "2M+ active users, 99.99% security rating",
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    category: "Web Development",
    image: "/img/project/project-img-7.jpg",
    images: [
      "/img/project/project-img-7.jpg",
      "/img/project/project-img-8.jpg",
      "/img/project/project-img-5.jpg",
    ],
    description:
      "Cutting-edge AI dashboard that revolutionized data analytics. Features real-time machine learning insights, predictive modeling, and won 'Best Data Visualization' award.",
    technologies: [
      "React",
      "Python",
      "TensorFlow",
      "D3.js",
      "PostgreSQL",
      "ML Pipeline",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
    year: "2023",
    awards: ["Best Data Visualization", "AI Innovation Award"],
    client: "DataCorp",
    impact: "50% faster decision making",
  },
  {
    id: 4,
    title: "Enterprise SaaS Excellence",
    category: "Web Development",
    image: "/img/project/project-img-8.jpg",
    images: [
      "/img/project/project-img-8.jpg",
      "/img/project/project-img-5.jpg",
      "/img/project/project-img-6.jpg",
    ],
    description:
      "Comprehensive SaaS platform that achieved 'Enterprise Solution of the Year' award. Features multi-tenant architecture, advanced analytics, and seamless scalability.",
    technologies: [
      "Vue.js",
      "Laravel",
      "MySQL",
      "Redis",
      "AWS",
      "Microservices",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    year: "2023",
    awards: ["Enterprise Solution of the Year", "SaaS Excellence Award"],
    client: "Enterprise Solutions Inc.",
    impact: "500+ enterprise clients, $10M+ ARR",
  },
  {
    id: 5,
    title: "Smart IoT Monitoring System",
    category: "IoT Development",
    image: "/img/project/project-img-5.jpg",
    images: [
      "/img/project/project-img-5.jpg",
      "/img/project/project-img-6.jpg",
    ],
    description:
      "Innovative IoT monitoring system that won 'IoT Innovation Award'. Features real-time sensor data visualization, predictive maintenance, and advanced alerting systems.",
    technologies: [
      "React",
      "Node.js",
      "MQTT",
      "InfluxDB",
      "Grafana",
      "Edge Computing",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: false,
    year: "2023",
    awards: ["IoT Innovation Award", "Smart Technology Excellence"],
    client: "Smart Industries",
    impact: "40% reduction in maintenance costs",
  },
  {
    id: 6,
    title: "Next-Gen Blockchain Wallet",
    category: "Blockchain",
    image: "/img/project/project-img-6.jpg",
    images: [
      "/img/project/project-img-6.jpg",
      "/img/project/project-img-7.jpg",
    ],
    description:
      "Revolutionary blockchain wallet that won 'Blockchain Innovation Award'. Features multi-chain support, DeFi integration, and military-grade security protocols.",
    technologies: [
      "React",
      "Web3.js",
      "Solidity",
      "Ethers.js",
      "MetaMask",
      "Zero-Knowledge Proofs",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    featured: true,
    year: "2022",
    awards: ["Blockchain Innovation Award", "Crypto Excellence Award"],
    client: "CryptoVault",
    impact: "1M+ transactions, $100M+ assets secured",
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
  { number: "150+", label: "Award-Winning Projects", icon: Award },
  { number: "100+", label: "Enterprise Clients", icon: Users },
  { number: "25+", label: "Industry Awards", icon: Sparkles },
  { number: "99%", label: "Client Satisfaction", icon: Star },
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
  const [isLoading, setIsLoading] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter(
          (project) => project.category === selectedCategory
        );

  // Open project modal with loading state
  const openProjectModal = (project: (typeof portfolioData)[0]) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProject(project);
      setCurrentImageIndex(0);
      setIsModalOpen(true);
      setIsLoading(false);
    }, 300);
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
    <div className="min-h-screen bg-white -mt-[90px]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Advanced Background with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          {/* Animated mesh gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-pink-600/20"></div>

          {/* Floating glassmorphism orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Content with Glassmorphism Card */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <motion.div
            className="hero-subtitle mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-6 py-3 shadow-xl">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-semibold text-sm tracking-wide">
                Award-Winning Portfolio
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="hero-title text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-8 leading-[0.85] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Creative
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h1>

          <motion.p
            className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Transforming ideas into digital masterpieces through innovative
            design, cutting-edge technology, and unparalleled attention to
            detail. Every project is a testament to our commitment to
            excellence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <GradientButton
              size="lg"
              className="text-lg px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                View Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </GradientButton>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-5 border-2 border-gray-300 hover:border-gray-400 rounded-2xl backdrop-blur-sm bg-white/50 hover:bg-white/80 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "15+", label: "Awards Won" },
              { number: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="text-xs text-gray-500 font-medium tracking-wider">
              SCROLL
            </div>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center backdrop-blur-sm bg-white/20">
              <motion.div
                className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Glassmorphism Card */}
                <div className="relative backdrop-blur-md bg-white/40 border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:bg-white/60">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent"></div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </h3>
                    <p className="text-gray-600 font-semibold text-lg">
                      {stat.label}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Portfolio Filter */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 font-semibold text-sm tracking-wide">
                Our Work
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our diverse range of projects that showcase innovation,
              creativity, and technical excellence. Each project tells a unique
              story.
            </motion.p>
          </motion.div>

          {/* Enhanced Filter Tabs */}
          <motion.div
            ref={filterRef}
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Tabs
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full max-w-4xl"
            >
              <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-md border border-gray-200/50 p-2 rounded-2xl shadow-xl">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 rounded-xl font-semibold py-3 hover:bg-gray-50"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Enhanced Projects Grid */}
          <motion.div
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02]">
                    {/* Project Image with Advanced Effects */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <motion.div
                          className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          ⭐ Featured
                        </motion.div>
                      )}

                      {/* Action Buttons */}
                      <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 cursor-pointer shadow-xl hover:bg-white transition-colors duration-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              goToProjectDetails(project);
                            }}
                          >
                            <ExternalLink className="w-6 h-6 text-gray-900" />
                          </div>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 cursor-pointer shadow-xl hover:bg-white transition-colors duration-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              openProjectModal(project);
                            }}
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

                    {/* Enhanced Project Info */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
                          {project.category}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-base leading-relaxed mb-6">
                        {project.description.substring(0, 120)}...
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium border border-gray-200"
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
                        <Button
                          size="sm"
                          className="flex-1 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            goToProjectDetails(project);
                          }}
                        >
                          View Details
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 text-sm font-semibold rounded-xl border-2 hover:bg-gray-50 transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            openProjectModal(project);
                          }}
                        >
                          Quick View
                        </Button>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-blue-700 font-semibold text-sm tracking-wide">
                Client Testimonials
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              What Our Clients
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Say About Us
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Don&apos;t just take our word for it. Here&apos;s what industry
              leaders say about our award-winning digital solutions and
              exceptional service.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative backdrop-blur-md bg-white/80 border border-white/20 rounded-3xl p-8 h-full hover:bg-white/90 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg mb-8">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-black text-gray-900 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold text-sm tracking-wide">
                Ready to Get Started?
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Ready to Start Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Project?
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let&apos;s collaborate to bring your vision to life with
              cutting-edge technology and innovative design solutions. Your
              success is our mission.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <GradientButton
                size="lg"
                className="text-lg px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </GradientButton>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-5 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-2xl backdrop-blur-sm transition-all duration-300"
              >
                View Case Studies
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Loading Overlay */}
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-900 font-semibold">
                Loading project...
              </span>
            </div>
          </div>
        </motion.div>
      )}

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
