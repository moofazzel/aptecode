"use client";

import QuickViewModal from "@/components/modules/Portfolio/QuickViewModal";
import ResultInfo from "@/components/modules/Portfolio/ResultInfo";

import { Button } from "@/components/ui/button";
import { Project } from "@/types/portfolio";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Gauge,
  Globe2,
  Search,
  ShieldCheck,
  Target,
  User,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PortfolioDetailsClientProps {
  project: Project;
}

export default function PortfolioDetailsClient({
  project,
}: PortfolioDetailsClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      {/* Hero Section (UNCHANGED) */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {project.category}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-semibold text-gray-900">
                      {project.year}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-semibold text-gray-900">
                      {project.client}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-semibold text-gray-900">
                      {project.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Awards</p>
                    <p className="font-semibold text-gray-900">
                      {project.awards.length}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {project.liveUrl && (
                  <QuickViewModal gradientButton={true} project={project} />
                )}
              </div>
            </div>

            {/* Right: Image Gallery */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                  </>
                )}
              </div>

              {/* Image Indicators */}
              {project.images.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-blue-600 w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section (UNCHANGED) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies Used
            </h2>
            <p className="text-lg text-gray-600">
              Modern tools and frameworks for optimal performance
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <span className="text-gray-700 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section (UNCHANGED) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Project Impact
            </h2>
            <p className="text-lg text-gray-600">
              Measurable results and achievements
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 border border-green-200 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">Impact</h3>
            </div>
            <p className="text-lg text-gray-700 font-medium">
              {project.impact}
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Features */}
      {project.features?.length ? (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Features
              </h2>
              <p className="text-lg text-gray-600">
                Productized capabilities designed for conversion and scale
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((f, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="p-6 bg-white border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <Gauge className="w-5 h-5 text-blue-600 mt-1" />
                    <p className="text-gray-800">{f}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* NEW: Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {" "}
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Results
            </h2>{" "}
            <p className="text-lg text-gray-600">
              {" "}
              Outcomes after launch and optimization{" "}
            </p>{" "}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results!.map((r, i) => (
              <ResultInfo key={i} text={r} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Performance & SEO */}
      {(project.performance || project.seo) && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {project.performance && (
                <div className="p-8 bg-white border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Performance
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {project.performance.lighthouseTarget && (
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-500">Performance</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {project.performance.lighthouseTarget.performance ??
                              "-"}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-500">Accessibility</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {project.performance.lighthouseTarget
                              .accessibility ?? "-"}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-500">SEO</p>
                          <p className="text-lg font-semibold text-gray-900">
                            {project.performance.lighthouseTarget.seo ?? "-"}
                          </p>
                        </div>
                      </div>
                    )}
                    {project.performance.imageStrategy && (
                      <div className="border-t pt-4">
                        <p className="text-sm text-gray-500 mb-1">
                          Image Strategy
                        </p>
                        <p className="text-gray-800">
                          {project.performance.imageStrategy}
                        </p>
                      </div>
                    )}
                    {project.performance.caching && (
                      <div className="border-t pt-4">
                        <p className="text-sm text-gray-500 mb-1">Caching</p>
                        <p className="text-gray-800">
                          {project.performance.caching}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {project.seo && (
                <div className="p-8 bg-white border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe2 className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">SEO</h3>
                  </div>
                  <div className="space-y-6">
                    {project.seo.schema?.length ? (
                      <div>
                        <p className="text-sm text-gray-500 mb-2">
                          Structured Data
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.seo.schema.map((s, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-sm"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {project.seo.metaHighlights?.length ? (
                      <div className="border-t pt-4">
                        <p className="text-sm text-gray-500 mb-2">
                          Meta Highlights
                        </p>
                        <ul className="space-y-2">
                          {project.seo.metaHighlights.map((m, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Search className="w-5 h-5 text-blue-600 mt-0.5" />
                              <span className="text-gray-800">{m}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* NEW: Timeline */}
      {project.timeline && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Timeline</h3>
              </div>
              <p className="text-gray-800">{project.timeline}</p>
            </div>
          </div>
        </section>
      )}

      {/* Awards Section (UNCHANGED) */}
      {project.awards.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Awards & Recognition
              </h2>
              <p className="text-lg text-gray-600">
                Industry recognition and achievements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-white shadow-sm border border-gray-200"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <span className="text-gray-800 font-medium">{award}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Portfolio (UNCHANGED) */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/portfolio">
            <Button variant="outline" size="lg" className="rounded-none">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
