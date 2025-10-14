"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import ContactForm from "../Contact/ContactForm";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const HomeContact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.name) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 334-200-7299",
      description: "Mon-Fri from 8am to 5pm",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "support@ivey.solutions",
      description: "We'll reply within 24 hours",
      color:
        "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Ozark, AL, United States",
      description: "Schedule a meeting",
      color:
        "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      description: "8:00 AM - 5:00 PM CST",
      color:
        "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="lrd" />
              <h3
                className="text-xs md:text-sm font-semibold uppercase 
                bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
                bg-clip-text text-transparent h-[30px] relative"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                Get In Touch
              </h3>
              <span className="rrd" />
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Ready to start your
              <span
                className="block
                bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
                bg-clip-text text-transparent"
                style={{ WebkitTextFillColor: "transparent" }}
              >
                next project?
              </span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s discuss your ideas and turn them into reality.
              We&apos;re here to help you build something amazing that drives
              results.
            </p>
          </motion.div>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeContact;
