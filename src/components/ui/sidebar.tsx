"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { GradientButton } from "./gradient-button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Services",
      href: "/services",
    },

    {
      label: "Blogs",
      href: "/blog",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/aptecode2025",
      delay: 0,
    },
    { icon: Twitter, href: "https://www.twitter.com/aptecode", delay: 0.08 },
    {
      icon: Instagram,
      href: "https://www.instagram.com/aptecode",
      delay: 0.16,
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/aptecode/",
      delay: 0.24,
    },
  ];

  // Smooth animation variants for elegant feel
  const sidebarVariants = {
    closed: {
      x: "100%",
      scale: 0.98,
      opacity: 0,
    },
    open: {
      x: 0,
      scale: 1,
      opacity: 1,
    },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const itemVariants = {
    closed: { y: 8, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  const staggerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              staggerChildren: 0.08,
              delayChildren: 0.3,
            }}
            className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 border-l border-gray-100/50"
            style={{
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <motion.div
                variants={itemVariants}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex items-center justify-between p-6 border-b"
              >
                <div className="flex items-center space-x-2">
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      rotate: 8,
                      transition: {
                        duration: 0.4,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-sm">A</span>
                  </motion.div>
                  <motion.span
                    variants={itemVariants}
                    className="text-xl font-bold text-gray-900"
                  >
                    APTECODE
                  </motion.span>
                </div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    rotate: 45,
                    transition: {
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={staggerVariants}
                transition={{
                  staggerChildren: 0.08,
                  delayChildren: 0.3,
                }}
                className="flex-1 overflow-y-auto p-6 space-y-8"
              >
                {/* Navigation Items - Visible on mobile and tablet */}
                <motion.div
                  variants={itemVariants}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="md:hidden lg:hidden"
                >
                  <motion.h2
                    variants={itemVariants}
                    className="text-lg font-semibold text-gray-900 mb-4"
                  >
                    Navigation
                  </motion.h2>
                  <motion.div
                    variants={staggerVariants}
                    transition={{
                      staggerChildren: 0.08,
                      delayChildren: 0.1,
                    }}
                    className="space-y-2"
                  >
                    {navItems.map((item) => (
                      <motion.div
                        key={item.href}
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.01,
                          x: 2,
                          transition: {
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1],
                          },
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg transition-colors"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Get Started Button - Visible on tablet and mobile */}
                <motion.div
                  variants={itemVariants}
                  className="md:block lg:hidden"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.01,
                      transition: {
                        duration: 0.4,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <GradientButton
                      href="/contact#meeting"
                      onClick={onClose}
                      showArrow
                      fullWidth
                    >
                      Book a Meeting Now
                    </GradientButton>
                  </motion.div>
                </motion.div>

                {/* About Us Section */}
                <motion.div
                  variants={itemVariants}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    About Us
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-gray-600 text-sm leading-relaxed mb-6"
                  >
                    Ready to turn visitors into loyal clients? Don&apos;t let
                    your competitors get ahead—partner with Aptecode and unlock
                    real growth now.
                  </motion.p>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      transition: {
                        duration: 0.4,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                      Contact Us
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Contact Us Section */}
                <motion.div
                  variants={itemVariants}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl font-bold text-gray-900 mb-4"
                  >
                    Contact Us
                  </motion.h2>
                  <motion.div
                    variants={staggerVariants}
                    transition={{
                      staggerChildren: 0.08,
                      delayChildren: 0.1,
                    }}
                    className="space-y-4"
                  >
                    <motion.div
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.01,
                        x: 2,
                        transition: {
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      }}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          rotate: 3,
                          transition: {
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1],
                          },
                        }}
                      >
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </motion.div>
                      <span className="text-gray-600 text-sm">
                        Ozark, AL, United States
                      </span>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.01,
                        x: 2,
                        transition: {
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      }}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          rotate: 3,
                          transition: {
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1],
                          },
                        }}
                      >
                        <Phone className="w-5 h-5 text-blue-600" />
                      </motion.div>
                      <span className="text-gray-600 text-sm">
                        +1 334-200-7299
                      </span>
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.01,
                        x: 2,
                        transition: {
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      }}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          rotate: 3,
                          transition: {
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1],
                          },
                        }}
                      >
                        <Mail className="w-5 h-5 text-blue-600" />
                      </motion.div>
                      <span className="text-gray-600 text-sm">
                        support@ivey.solutions
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Social Media Icons */}
                  <motion.div
                    variants={itemVariants}
                    transition={{
                      staggerChildren: 0.08,
                      delayChildren: 0.2,
                    }}
                    className="flex space-x-3 mt-6"
                  >
                    {socialLinks.map(({ icon: Icon, delay, href }, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          rotate: [0, -5, 5, 0],
                          transition: {
                            duration: 0.4,
                            ease: [0.25, 0.1, 0.25, 1],
                          },
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ delay }}
                      >
                        <Link href={href}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-10 h-10 p-0 rounded-lg border-gray-300 hover:bg-gray-50 hover:border-blue-300"
                          >
                            <Icon className="w-4 h-4 text-gray-600 hover:text-blue-600 transition-colors" />
                          </Button>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
