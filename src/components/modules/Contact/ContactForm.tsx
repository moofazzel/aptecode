"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Phone } from "lucide-react";
import { useState } from "react";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("General Inquiry");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const topicOptions = [
    { value: "", label: "General Inquiry" },
    { value: "web", label: "Web Development" },
    { value: "crypto", label: "Crypto Services" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear any previous error or success messages when user starts typing
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const handleTopicSelect = (value: string, label: string) => {
    setFormData((prev) => ({
      ...prev,
      topic: value,
    }));
    setSelectedTopic(label);
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.phone || !formData.firstname) {
      setSubmitStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          phone: formData.phone,
          topic: formData.topic || "General Inquiry",
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          topic: "",
          message: "",
        });
        setSelectedTopic("General Inquiry");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }
    } catch (error) {
      setSubmitStatus("error");
      const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again later.";
      setErrorMessage(errorMessage);
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonSubmit = () => {
    // Create a synthetic form event for the button click
    const form = document.querySelector("form");
    if (form) {
      const event = new Event("submit", { bubbles: true, cancelable: true });
      form.dispatchEvent(event);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Structured Data for LocalBusiness and ContactPage
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://aptecode.com/#organization",
        "name": "Aptecode",
        "alternateName": "Aptecode Web Development",
        "description": "Fast, conversion-ready websites for new brands and founders. No fluff. Just strategy, clean UX, and sites that sell.",
        "url": "https://aptecode.com",
        "telephone": "+13342007299",
        "email": "support@ivey.solutions",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "",
          "addressLocality": "Ozark",
          "addressRegion": "AL", 
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "31.4593",
          "longitude": "-85.6405"
        },
        "areaServed": "United States",
        "serviceType": [
          "Web Development",
          "Digital Strategy", 
          "Custom Software Development",
          "E-commerce Solutions"
        ],
        "priceRange": "$$"
      },
      {
        "@type": "ContactPage",
        "@id": "https://aptecode.com/contact/#webpage",
        "url": "https://aptecode.com/contact",
        "name": "Contact Aptecode | Get Your Free Strategy Call Today",
        "description": "Ready to build something great? Contact Aptecode for web development, digital strategy, and custom solutions.",
        "mainEntity": {
          "@type": "Organization", 
          "@id": "https://aptecode.com/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://aptecode.com/#website",
        "url": "https://aptecode.com",
        "name": "Aptecode",
        "publisher": {
          "@id": "https://aptecode.com/#organization"
        }
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <section className="py-20 lg:py-32 " itemScope itemType="https://schema.org/ContactPage">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Contact Information */}
          <div className="lg:col-span-4">
            <motion.div
              className="space-y-8 bg-[#f2f4f5] border border-[#e8eaeb] dark:bg-slate-800 dark:border-slate-600 p-8 lg:p-10"
              variants={fadeInUp}
            >
              {/* Section Heading */}
              <div className="space-y-6">
                {/* Eyebrow label */}
                <div className="flex items-center justify-start gap-3 mb-4">
                  <span className="lrd" />

                  <h3
                    className="text-xs md:text-sm font-semibold uppercase 
      bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
      bg-clip-text text-transparent  h-[30px] relative z-50"
                    style={{ WebkitTextFillColor: "transparent" }} // Safari fix
                  >
                    Contact Aptecode
                  </h3>
                  <span className="rrd" />
                </div>
                <motion.h2
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white leading-tight"
                  variants={fadeInUp}
                >
                  Let{"'"}s build something great together
                </motion.h2>
                <motion.p
                  className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                  variants={fadeInUp}
                >
                  Thank you for your interest in Aptecode. Reach out and let
                  {"'"}s create your next digital success story.
                </motion.p>
              </div>

              {/* Contact List */}
              <motion.div className="space-y-6" variants={fadeInUp}>
                {/* Address */}
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                    <div className="space-y-1" itemScope itemType="https://schema.org/PostalAddress">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Our Address
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300" itemProp="address">
                      <span itemProp="addressLocality">Ozark</span>, <span itemProp="addressRegion">AL</span>, <span itemProp="addressCountry">United States</span>
                    </p>
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Phone & Email
                    </h4>
                    <div className="space-y-1">
                      <a
                        href="tel:+13342007299"
                        className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        itemProp="telephone"
                      >
                        +1 334-200-7299
                      </a>
                      <a
                        href="mailto:support@ivey.solutions"
                        className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        itemProp="email"
                      >
                        support@ivey.solutions
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-5">
            <motion.div
              className="bg-white dark:bg-slate-800 border border-[#e8eaeb] p-8 lg:p-10"
              variants={fadeInUp}
            >
              <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="Contact form">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstname" className="sr-only">
                      First Name (required)
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      placeholder="First Name*"
                      required
                      aria-required="true"
                      aria-describedby="firstname-error"
                      className="w-full px-4 py-3 bg-[#f2f4f5] dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastname" className="sr-only">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      aria-describedby="lastname-error"
                      className="w-full px-4 py-3 bg-[#f2f4f5] dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="sr-only">
                      Email address (required)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email address*"
                      required
                      aria-required="true"
                      aria-describedby="email-error"
                      autoComplete="email"
                      className="w-full px-4 py-3 bg-[#f2f4f5] dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="sr-only">
                      Phone number (required)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone number*"
                      required
                      aria-required="true"
                      aria-describedby="phone-error"
                      autoComplete="tel"
                      className="w-full px-4 py-3 bg-[#f2f4f5] dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Custom Select Dropdown */}
                <div className="space-y-2">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 bg-[#f2f4f5] dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200 flex items-center justify-between"
                    >
                      <span
                        className={
                          selectedTopic === "Select Query Topic"
                            ? "text-slate-500 dark:text-slate-400"
                            : ""
                        }
                      >
                        {selectedTopic}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 shadow-lg z-10">
                        {topicOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() =>
                              handleTopicSelect(option.value, option.label)
                            }
                            className="w-full px-4 py-3 text-left text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="sr-only">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    aria-describedby="message-help"
                    className="w-full px-4 py-3 bg-[#f2f4f5] dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none"
                  />
                  <div id="message-help" className="sr-only">
                    Optional: Tell us more about your project or inquiry
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 space-y-4">
                  <GradientButton
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={handleButtonSubmit}
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    className="py-4"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </GradientButton>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center"
                    >
                      <p className="font-semibold">
                        Thank you for your message!
                      </p>
                      <p className="text-sm">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-center"
                    >
                      <p className="font-semibold">
                        Oops! Something went wrong.
                      </p>
                      <p className="text-sm">{errorMessage}</p>
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default ContactForm;
