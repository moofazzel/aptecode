"use client";

import { useScrollAnimation, useStaggeredGSAP } from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ClayContact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const offices = [
    { city: "San Francisco", address: "300 Broadway, San Francisco, CA 94133" },
    { city: "New York", address: "148 Lafayette St, New York, NY 10013" },
    { city: "Austin", address: "600 Congress Ave, Austin, TX 78701" },
    { city: "Denver", address: "1700 Lincoln St 17th fl, Denver, CO 80203" },
    { city: "Lisbon", address: "Av. Alm. Reis 139, 1150-015 Lisbon, Portugal" },
    { city: "Belgrade", address: "Nušićeva 15, 11000 Belgrade, Serbia" },
  ];

  // Scroll animations
  const titleAnimation = useScrollAnimation("gsap.fadeIn", {
    start: "top 80%",
    end: "bottom 20%",
  });

  const { addToRefs } = useStaggeredGSAP("gsap.fadeInUp", {
    staggerDelay: 0.1,
    overrides: { duration: 0.8, ease: "power2.out" },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section ref={sectionRef} className="py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div ref={titleAnimation.ref} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-8">Let's Talk</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch with our team
            of experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div ref={addToRefs} className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  placeholder="Your company"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>

            {/* Contact Info */}
            <div className="pt-8 border-t border-gray-200">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
                  <a
                    href="mailto:hey@clay.global"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    hey@clay.global
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Phone</h3>
                  <a
                    href="tel:+14157966262"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    +1 415 796 6262
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Office Locations */}
          <motion.div ref={addToRefs} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8">Our Offices</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.city}
                    ref={addToRefs}
                    className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    <h4 className="font-semibold text-lg mb-2">
                      {office.city}
                    </h4>
                    <p className="text-gray-600">{office.address}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-6">Quick Questions?</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gray-50">
                  <h4 className="font-semibold mb-2">
                    What's your typical project timeline?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Most projects range from 8-16 weeks depending on scope and
                    complexity.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <h4 className="font-semibold mb-2">
                    Do you work with startups?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Yes! We work with companies of all sizes, from startups to
                    Fortune 100.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50">
                  <h4 className="font-semibold mb-2">
                    What's your design process?
                  </h4>
                  <p className="text-sm text-gray-600">
                    We follow a collaborative approach with research, strategy,
                    design, and development phases.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClayContact;
