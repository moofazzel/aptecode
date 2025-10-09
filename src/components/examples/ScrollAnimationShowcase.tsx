"use client";

import {
  ScrollProgressIndicator,
  ScrollToTopButton,
} from "@/components/shared/ScrollProgressIndicator";
import {
  useAdvancedScrollAnimation,
  useCounterAnimation,
  useImageRevealAnimation,
  useParallaxAnimation,
  useProgressBarAnimation,
  useTextRevealAnimation,
} from "@/hooks/useAdvancedScrollAnimations";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";

export const ScrollAnimationShowcase: React.FC = () => {
  // Various scroll animations
  const { ref: revealUpRef } = useAdvancedScrollAnimation("revealUp");
  const { ref: revealLeftRef } = useAdvancedScrollAnimation("revealLeft");
  const { ref: revealRightRef } = useAdvancedScrollAnimation("revealRight");
  const { ref: zoomInRef } = useAdvancedScrollAnimation("zoomIn");
  const { ref: flipInRef } = useAdvancedScrollAnimation("flipIn");
  const { ref: blurInRef } = useAdvancedScrollAnimation("blurIn");

  // Parallax effects
  const { ref: parallaxUpRef } = useParallaxAnimation({
    speed: 0.5,
    direction: "up",
  });
  const { ref: parallaxDownRef } = useParallaxAnimation({
    speed: 0.3,
    direction: "down",
  });

  // Text reveal animations
  const { ref: textRevealRef } = useTextRevealAnimation({
    direction: "up",
    distance: 50,
  });

  // Image reveal animations
  const { ref: imageRevealRef } = useImageRevealAnimation({
    direction: "up",
    distance: 60,
  });

  // Counter animation
  const { ref: counterRef } = useCounterAnimation(100, {
    suffix: "%",
    duration: 2,
  });

  // Progress bar animation
  const { ref: progressRef } = useProgressBarAnimation(85, { duration: 1.5 });

  // Intersection observer example
  const { ref: intersectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator
        position="top"
        height={4}
        color="linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
        showPercentage={true}
      />

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={parallaxUpRef}
          className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl font-bold mb-6">Scroll Animation Showcase</h1>
          <p className="text-xl opacity-90">
            Experience professional scroll animations
          </p>
        </div>
      </section>

      {/* Reveal Up Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={revealUpRef} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Reveal Up Animation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This content slides up from below with a smooth, professional
              animation that triggers when it comes into view.
            </p>
          </div>
        </div>
      </section>

      {/* Side by Side Reveals */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div ref={revealLeftRef} className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Reveal from Left
              </h3>
              <p className="text-gray-600">
                This content slides in from the left with a subtle rotation
                effect, creating an engaging visual experience.
              </p>
            </div>
            <div ref={revealRightRef} className="text-center md:text-right">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Reveal from Right
              </h3>
              <p className="text-gray-600">
                This content slides in from the right with a counter-rotation,
                balancing the layout beautifully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zoom In Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={zoomInRef} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Zoom In Effect
            </h2>
            <div className="max-w-md mx-auto bg-gradient-to-r from-purple-500 to-blue-500 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Featured Card</h3>
              <p>
                This card zooms in with a bounce effect, drawing attention to
                important content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flip In Animation */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div ref={flipInRef} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              3D Flip Effect
            </h2>
            <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">3D Card</h3>
              <p className="text-gray-600">
                This card flips in with a 3D rotation effect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blur In Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={blurInRef} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Blur to Focus
            </h2>
            <div className="max-w-lg mx-auto">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Sharp Focus</h3>
                <p>
                  This content starts blurred and comes into sharp focus as you
                  scroll.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Reveal Animation */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div ref={textRevealRef} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Text Reveal Animation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This text reveals word by word with a smooth animation, creating
              an engaging reading experience that draws attention to each word
              as it appears.
            </p>
          </div>
        </div>
      </section>

      {/* Image Reveal Animation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={imageRevealRef} className="max-w-2xl mx-auto">
            <Image
              src="/img/blog/post-15.jpg"
              alt="Image reveal example"
              width={800}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Counter and Progress Bar */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Animated Counter
              </h3>
              <div className="text-6xl font-bold text-purple-600 mb-4">
                <span ref={counterRef}>0</span>
              </div>
              <p className="text-gray-600">Completion Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Progress Bar
              </h3>
              <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
                <div
                  ref={progressRef}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full origin-left"
                  style={{ transform: "scaleX(0)" }}
                />
              </div>
              <p className="text-gray-600">Project Progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intersection Observer Example */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div ref={intersectionRef} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Intersection Observer
            </h2>
            <div
              className={`max-w-md mx-auto p-8 rounded-lg transition-all duration-500 ${
                isIntersecting
                  ? "bg-green-500 text-white transform scale-105"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">
                {isIntersecting ? "In View!" : "Out of View"}
              </h3>
              <p>
                {isIntersecting
                  ? "This element is currently visible in the viewport!"
                  : "This element is not visible in the viewport."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Background Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          ref={parallaxDownRef}
          className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500"
        />
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Parallax Background</h2>
            <p className="text-xl">
              This background moves at a different speed than the content
            </p>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTopButton
        threshold={300}
        className="hover:scale-110 transition-transform duration-300"
      />

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Scroll Animation Showcase</h3>
          <p className="text-gray-400">
            Professional scroll animations powered by GSAP and React hooks
          </p>
        </div>
      </footer>
    </div>
  );
};
