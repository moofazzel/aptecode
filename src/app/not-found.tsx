"use client";

import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-9xl font-black text-gray-200 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <Search className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might
            have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <GradientButton href="/" showArrow>
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </GradientButton>

          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">
            Or try one of these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-2xl"></div>
      </div>
    </div>
  );
}
