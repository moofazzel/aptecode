"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { Button } from "../ui/button";
import { GradientButton } from "../ui/gradient-button";
import { Sidebar } from "../ui/sidebar";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isScrolled } = useScrollPosition(50);
  const pathname = usePathname();

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

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  // Helper function to determine if the nav item is active
  function isActiveNavItem(href: string) {
    // Handle root
    if (href === "/") {
      return pathname === "/";
    }
    // For other paths, check substring matching at start & "/"
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full flex justify-center">
          <div
            className={`px-4 shadow-sm border border-[#E4E4E4] transition-all duration-500 ease-out ${
              isScrolled
                ? "m-0 max-w-full w-full bg-white/95 backdrop-blur-xl shadow-lg border-white/20"
                : "my-5 max-w-[1530px] w-full bg-[#F2F3F4]"
            }`}
          >
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div
                className={`flex-shrink-0 transition-transform duration-400 ease-out ${
                  isScrolled ? "scale-90" : "scale-100"
                }`}
              >
                <Link href="/" className="block">
                  <Image
                    className="w-[180px]"
                    src="/img/logo/aptecode.png"
                    alt="Aptecode Logo"
                    width={150}
                    height={50}
                  />
                </Link>
              </div>

              {/* Desktop Navigation Items - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => {
                  const isActive = isActiveNavItem(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-3 py-2 font-medium transition-all duration-200 ease-out hover:scale-105 text-lg relative z-10 ${
                        isActive
                          ? "text-blue-700 underline underline-offset-8 decoration-2"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                      style={{
                        fontFamily:
                          "var(--font-hind-madurai), system-ui, sans-serif",
                      }}
                      aria-current={isActive ? "page" : undefined}
                      onClick={(e) => {
                        // Ensure click event is properly handled
                        e.stopPropagation();
                        // Close sidebar if open
                        if (isSidebarOpen) {
                          setIsSidebarOpen(false);
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Desktop Actions - Hidden on tablet and mobile */}
              <div className="flex items-center space-x-4">
                <GradientButton
                  href="/contact#meeting"
                  showArrow
                  className="hidden lg:flex"
                  style={{
                    fontFamily:
                      "var(--font-hind-madurai), system-ui, sans-serif",
                  }}
                >
                  Book a Meeting Now
                </GradientButton>
                <Button
                  variant="ghost"
                  onClick={handleSidebarToggle}
                  className="p-2 hover:bg-gray-100 transition-all duration-200 ease-out hover:scale-110"
                >
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#5c63fa" />
                        <stop offset="50%" stopColor="#a868fa" />
                        <stop offset="100%" stopColor="#3dabf4" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0.5 0.5H4.5V4.5H0.5V0.5ZM0.5 9.5H4.5V13.5H0.5V9.5ZM0.5 18.5H4.5V22.5H0.5V18.5ZM9.5 0.5H13.5V4.5H9.5V0.5ZM9.5 9.5H13.5V13.5H9.5V9.5ZM9.5 18.5H13.5V22.5H9.5V18.5ZM18.5 0.5H22.5V4.5H18.5V0.5ZM18.5 9.5H22.5V13.5H18.5V9.5ZM18.5 18.5H22.5V22.5H18.5V18.5Z"
                      fill="url(#gradient)"
                      stroke="url(#gradient)"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
    </>
  );
}

export default Navbar;
