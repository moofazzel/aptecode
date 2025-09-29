"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

// Animation performance settings
interface AnimationSettings {
  reducedMotion: boolean;
  performanceMode: "high" | "balanced" | "low";
  globalDuration: number;
  globalEasing: string;
}

// Animation context type
interface AnimationContextType {
  settings: AnimationSettings;
  updateSettings: (newSettings: Partial<AnimationSettings>) => void;
  isGSAPReady: boolean;
  registerAnimation: (id: string, cleanup: () => void) => void;
  unregisterAnimation: (id: string) => void;
  pauseAllAnimations: () => void;
  resumeAllAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextType | null>(null);

// Animation provider component
interface AnimationProviderProps {
  children: ReactNode;
  initialSettings?: Partial<AnimationSettings>;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({
  children,
  initialSettings = {},
}) => {
  // Default animation settings
  const defaultSettings: AnimationSettings = {
    reducedMotion: false,
    performanceMode: "high",
    globalDuration: 0.6,
    globalEasing: "power2.out",
    ...initialSettings,
  };

  const [settings, setSettings] = useState<AnimationSettings>(defaultSettings);
  const [isGSAPReady, setIsGSAPReady] = useState(false);
  const animationRegistry = useRef<Map<string, () => void>>(new Map());

  // Initialize GSAP on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      setIsGSAPReady(true);

      // Check for reduced motion preference
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setSettings((prev) => ({ ...prev, reducedMotion: mediaQuery.matches }));

      const handleChange = (e: MediaQueryListEvent) => {
        setSettings((prev) => ({ ...prev, reducedMotion: e.matches }));
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  // Update settings
  const updateSettings = useCallback(
    (newSettings: Partial<AnimationSettings>) => {
      setSettings((prev) => ({ ...prev, ...newSettings }));
    },
    []
  );

  // Animation registry management
  const registerAnimation = useCallback((id: string, cleanup: () => void) => {
    animationRegistry.current.set(id, cleanup);
  }, []);

  const unregisterAnimation = useCallback((id: string) => {
    const cleanup = animationRegistry.current.get(id);
    if (cleanup) {
      cleanup();
      animationRegistry.current.delete(id);
    }
  }, []);

  // Global animation controls
  const pauseAllAnimations = useCallback(() => {
    gsap.globalTimeline.pause();
  }, []);

  const resumeAllAnimations = useCallback(() => {
    gsap.globalTimeline.resume();
  }, []);

  // Cleanup all animations on unmount
  useEffect(() => {
    return () => {
      animationRegistry.current.forEach((cleanup) => cleanup());
      animationRegistry.current.clear();
      ScrollTrigger.killAll();
    };
  }, []);

  const contextValue = useMemo(
    () => ({
      settings,
      updateSettings,
      isGSAPReady,
      registerAnimation,
      unregisterAnimation,
      pauseAllAnimations,
      resumeAllAnimations,
    }),
    [
      settings,
      isGSAPReady,
      updateSettings,
      registerAnimation,
      unregisterAnimation,
      pauseAllAnimations,
      resumeAllAnimations,
    ]
  );

  return (
    <AnimationContext.Provider value={contextValue}>
      {children}
    </AnimationContext.Provider>
  );
};

// Hook to use animation context
export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error(
      "useAnimationContext must be used within AnimationProvider"
    );
  }
  return context;
};

// Export for direct import
export { AnimationContext };
