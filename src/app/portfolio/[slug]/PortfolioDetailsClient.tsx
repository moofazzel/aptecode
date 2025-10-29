"use client";

import QuickViewModal from "@/components/modules/Portfolio/QuickViewModal";
import { Button } from "@/components/ui/button";
import { CaseStudy, Project } from "@/types/portfolio";
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  pdf,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  Award,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Download,
  Info,
  Lightbulb,
  Star,
  User,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PortfolioDetailsClientProps {
  project: Project;
}

// Accordion item component for Agency Value Propositions
// Expanded Accordion component to handle FAQ too
function FAQAccordion({
  faq,
}: {
  faq: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-b border-gray-300">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto">
        {faq.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              layout
              initial={{ borderColor: "#ddd" }}
              animate={{ borderColor: isOpen ? "#5c63fa " : "#ddd" }}
              transition={{ duration: 0.3 }}
              className="border border-gray-300 bg-white"
              style={{ borderRadius: 0 }} // no rounding
            >
              <button
                onClick={() => toggle(idx)}
                className={`w-full flex justify-between items-center px-5 py-4 cursor-pointer focus:outline-none ${
                  isOpen ? "bg-blue-50 text-blue-700" : "text-gray-900"
                }`}
                aria-expanded={isOpen}
              >
                <span className="text-lg font-medium">{item.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-blue-700" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <motion.div
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  height: isOpen ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="px-5 overflow-hidden text-gray-700 border-t border-gray-300"
              >
                <p className="py-4 leading-relaxed">{item.answer}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
const tabs = ["Features", "Future Improvements", "Awards"];

// PDF Document styles
const pdfStyles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#2c3e50",
  },
  text: {
    color: "#34495e",
  },
});

// PDF Document component for Case Study
const CaseStudyPdf = ({ caseStudy }: { caseStudy: CaseStudy }) => (
  <Document>
    <Page style={pdfStyles.page}>
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.heading}>Overview</Text>
        <Text style={pdfStyles.text}>{caseStudy.overview}</Text>
      </View>
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.heading}>Challenges</Text>
        <Text style={pdfStyles.text}>{caseStudy.challenges}</Text>
      </View>
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.heading}>Solutions</Text>
        <Text style={pdfStyles.text}>{caseStudy.solutions}</Text>
      </View>
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.heading}>Results</Text>
        <Text style={pdfStyles.text}>{caseStudy.results}</Text>
      </View>
    </Page>
  </Document>
);

export default function PortfolioDetailsClient({
  project,
}: PortfolioDetailsClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

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

  // Generate and download the PDF
  const downloadCaseStudy = async () => {
    if (!project.caseStudy) return;
    const blob = await pdf(
      <CaseStudyPdf caseStudy={project.caseStudy} />
    ).toBlob();
    saveAs(blob, `${project.slug}-case-study.pdf`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded">
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-fill rounded"
                  priority
                />

                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                      aria-label="Next Image"
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
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <span className="text-gray-700 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study with Download Button */}
      {project.caseStudy && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6 pb-16">
            <h2 className="text-3xl font-bold text-gray-900">Case Study</h2>
            <Button
              variant="outline"
              onClick={downloadCaseStudy}
              className="flex items-center gap-2 "
            >
              <Download className="w-5 h-5" /> Download PDF
            </Button>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Deep dive into project challenges, solutions, and outcomes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
            {[
              {
                title: "Overview",
                content: project.caseStudy.overview,
                icon: <Info className="text-blue-600 w-6 h-6" />,
              },
              {
                title: "Challenges",
                content: project.caseStudy.challenges,
                icon: <AlertTriangle className="text-yellow-600 w-6 h-6" />,
              },
              {
                title: "Solutions",
                content: project.caseStudy.solutions,
                icon: <Lightbulb className="text-green-600 w-6 h-6" />,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="bg-white rounded shadow-md p-6 border border-gray-200 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p>{item.content}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded p-6 shadow-lg max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-2">Results</h3>
            <p className="text-green-900 font-semibold">
              {project.caseStudy.results}
            </p>
          </motion.div>
        </section>
      )}

      {/* Tabbed Features, Future Improvements, Awards Sections */}
      <section className="py-16 bg-gray-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 pb-8 border-b border-gray-300">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === idx
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                aria-selected={activeTab === idx}
                role="tab"
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Tab Panels */}
          <div className="mt-6">
            {activeTab === 0 && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 max-w-4xl mx-auto">
                {project.features?.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.07 }}
                    className="bg-white rounded px-6 py-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
                  >
                    <CheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            )}
            {activeTab === 1 && (
              <ul className="max-w-xl mx-auto text-gray-700 space-y-3 list-none">
                {project.futureImprovements?.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.07 }}
                    className="bg-white rounded p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
                  >
                    <Star className="text-yellow-500 w-5 h-5 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            )}
            {activeTab === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {project.awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-6 bg-white shadow-sm border border-gray-200 rounded"
                  >
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-yellow-600" />
                    </div>
                    <span className="text-gray-800 font-medium">{award}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Impact Section with Animated Progress Bar */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Project Impact
          </h2>
          <p className="text-lg text-gray-600">
            Measurable results and achievements
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 border border-green-200 shadow-lg rounded max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">Impact</h3>
          </div>
          <p className="text-lg text-gray-700 font-medium mb-6">
            {project.impact}
          </p>
          <div className="w-full bg-green-200 rounded-full h-6 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="bg-green-600 h-6"
              aria-label="Progress bar showing conversion increase"
            />
          </div>
        </motion.div>
      </section>

      {/* Accordion for Agency Value Propositions */}

      {project.faq && project.faq.length > 0 && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 max-w-4xl mx-auto">
            <FAQAccordion faq={project.faq} />
          </div>
        </section>
      )}

      {/* Back to Portfolio */}
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
