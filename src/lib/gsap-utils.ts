import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

// Register GSAP plugins on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// GSAP animation presets
export const gsapPresets = {
  slideIn: {
    from: { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
  },
  slideOut: {
    from: { x: 0, opacity: 1 },
    to: { x: -100, opacity: 0, duration: 0.6, ease: "power2.out" }
  },
  fadeIn: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
  },
  scaleIn: {
    from: { scale: 0, opacity: 0 },
    to: { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
  }
};

// Hook for GSAP cleanup
export const useGSAP = (callback: () => gsap.core.Timeline | void, deps: React.DependencyList = []) => {
  useEffect(() => {
    const tl = callback();
    
    return () => {
      if (tl) {
        tl.kill();
      }
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, deps);
};

// Utility functions
export const createSlideAnimation = (
  current: HTMLElement,
  next: HTMLElement,
  direction: 'left' | 'right' = 'left'
) => {
  const tl = gsap.timeline();
  const slideDistance = direction === 'left' ? -100 : 100;
  
  tl.to(current, {
    xPercent: slideDistance,
    opacity: 0,
    duration: 0.6,
    ease: "power2.inOut"
  })
  .set(next, { xPercent: -slideDistance })
  .to(next, {
    xPercent: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power2.inOut"
  }, "-=0.3");
  
  return tl;
};

export const createScrollAnimation = (
  element: HTMLElement,
  animation: gsap.TweenVars,
  trigger?: string
) => {
  return gsap.fromTo(element, 
    { opacity: 0, y: 50 },
    {
      ...animation,
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
};
