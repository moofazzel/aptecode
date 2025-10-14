"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const socialLinks = [
    {
      name: "FACEBOOK",
      url: "https://www.facebook.com/aptecode2025",
    },
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/aptecode",
    },
    {
      name: "TWITTER",
      url: "https://www.twitter.com/aptecode",
    },
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/company/aptecode/",
    },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background wavy elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10">
        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="min-[400px]:flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl md:leading-24 leading-16 font-bold uppercase tracking-wider">
                  Ready to Launch a Site that Sells?
                </h2>
              </div>
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="w-24 lg:w-28 h-24 lg:h-28 border-2 border-purple-500 rounded-full flex items-center justify-center hover:bg-purple-500/10 transition-all duration-300 group"
                >
                  <motion.div
                    className="group-hover:rotate-45 transition-transform duration-500 ease-out"
                    animate={{
                      color: "#ffffff",
                    }}
                    whileHover={{
                      color: "#a855f7", // purple-400
                    }}
                  >
                    <ArrowUpRight className="w-8 h-8" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="py-8 px-6 border-y border-gray-700">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-center space-x-4 md:space-x-12 lg:space-x-16">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="text-sm md:text-base font-medium uppercase tracking-wider hover:text-purple-400 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Logo and Copyright Section */}
        <section className="py-8 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="sm:flex justify-center items-center sm:justify-between">
              {/* Logo */}
              <div className="flex justify-center items-center sm:flex-none">
                <Image
                  src="/img/logo/aptecode.png"
                  alt="Aptecode"
                  width={200}
                  height={200}
                />
              </div>

              {/* Copyright */}
              <div className="text-sm text-center sm:text-left text-gray-400">
                ©2025 Aptecode. We build websites that win customers.
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
