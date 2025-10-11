"use client";

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAnimationContext } from "../../contexts/AnimationContext";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { Button } from "../ui/button";
import { GradientButton } from "../ui/gradient-button";
import { Sidebar } from "../ui/sidebar";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  const { isGSAPReady, registerAnimation, unregisterAnimation } =
    useAnimationContext();
  const { isScrolled } = useScrollPosition(50);

  const navItems = [
    {
      label: "Home",
      href: "/",
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
      label: "About",
      href: "/about",
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

  // Professional navbar scroll animation
  useEffect(() => {
    if (!isGSAPReady || !navRef.current || !containerRef.current) return;

    const nav = navRef.current;
    const container = containerRef.current;
    const logo = logoRef.current;
    const navItems = navItemsRef.current;
    const actions = actionsRef.current;

    const animateToSticky = () => {
      // Navbar is already fixed, just animate the properties
      gsap.set(nav, {
        y: -10,
        opacity: 0.8,
      });

      const tl = gsap.timeline({ ease: "power2.out" });

      // Animate the visual properties smoothly
      tl.to(nav, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      })
        .to(
          container,
          {
            margin: "0",
            maxWidth: "100%",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            duration: 0.5,
            ease: "power2.out",
          },
          0
        )
        .to(
          logo,
          {
            scale: 0.9,
            duration: 0.4,
            ease: "back.out(1.2)",
          },
          0.1
        )
        .to(
          [navItems, actions],
          {
            opacity: 0.95,
            duration: 0.4,
            ease: "power2.out",
          },
          0.1
        );
    };

    const animateToNormal = () => {
      const tl = gsap.timeline({ ease: "power2.out" });

      // First, animate the container to its final centered state
      tl.to(
        container,
        {
          margin: "20px 0",
          maxWidth: "1280px",
          width: "100%",
          backgroundColor: "#F2F3F4",
          backdropFilter: "none",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #E4E4E4",
          duration: 0.5,
          ease: "power2.out",
        },
        0
      )
        .to(
          logo,
          {
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.2)",
          },
          0
        )
        .to(
          [navItems, actions],
          {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          0
        )
        .to(
          nav,
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          0
        );
    };

    // Register animation cleanup
    const cleanup = () => {
      gsap.killTweensOf([nav, container, logo, navItems, actions]);
    };

    registerAnimation("navbar-scroll", cleanup);

    // Apply animation based on scroll state
    if (isScrolled) {
      animateToSticky();
    } else {
      animateToNormal();
    }

    return () => {
      unregisterAnimation("navbar-scroll");
    };
  }, [isScrolled, isGSAPReady, registerAnimation, unregisterAnimation]);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full flex justify-center">
          <div
            ref={containerRef}
            className="px-4 shadow-sm border border-[#E4E4E4] "
            style={{ margin: "20px 0", maxWidth: "1280px", width: "100%" }}
          >
            <div className="flex items-center justify-between h-24">
              {/* Logo */}
              <div ref={logoRef} className="flex-shrink-0">
                <Link href="/">
                  <Image
                    className="h-8 w-auto"
                    src="/img/logo/aptecode.png"
                    alt="Aptecode Logo"
                    width={150}
                    height={50}
                  />
                </Link>
              </div>

              {/* Desktop Navigation Items - Hidden on mobile */}
              <div
                ref={navItemsRef}
                className="hidden md:flex items-center space-x-8"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-200 ease-out hover:scale-105"
                    style={{
                      fontFamily:
                        "var(--font-hind-madurai), system-ui, sans-serif",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Desktop Actions - Hidden on tablet and mobile */}
              <div ref={actionsRef} className="flex items-center space-x-4">
                <GradientButton
                  href="/"
                  showArrow
                  className="hidden lg:flex"
                  style={{
                    fontFamily:
                      "var(--font-hind-madurai), system-ui, sans-serif",
                  }}
                >
                  Get Started Now
                </GradientButton>
                <Button
                  variant="ghost"
                  onClick={handleSidebarToggle}
                  className="p-2 hover:bg-gray-100 transition-all duration-200 ease-out hover:scale-105"
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
