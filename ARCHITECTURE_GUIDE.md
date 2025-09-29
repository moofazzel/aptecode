# 🏗️ Animation Architecture Guide

## Overview

This guide outlines the comprehensive, performance-optimized animation architecture for React/Next.js applications using GSAP and Framer Motion with best practices for reusability, performance, and maintainability.

## 📋 Architecture Components

### 1. **Animation Context Provider** (`src/contexts/AnimationContext.tsx`)

- **Purpose**: Global state management for animation settings
- **Features**:
  - Reduced motion detection
  - Performance mode management
  - Global animation controls
  - Animation registry management

```tsx
import { AnimationProvider } from "@/contexts/AnimationContext";

// In your layout.tsx
<AnimationProvider initialSettings={{ performanceMode: "high" }}>
  {children}
</AnimationProvider>;
```

### 2. **Animation Registry** (`src/lib/animations/registry.ts`)

- **Purpose**: Centralized storage for reusable animation configurations
- **Features**:
  - Predefined animation presets
  - Custom animation registration
  - Animation merging and overrides
  - Category-based organization

```tsx
import { animationRegistry } from "@/lib/animations/registry";

// Register custom animation
animationRegistry.register("custom.slideUp", {
  from: { y: 100, opacity: 0 },
  to: { y: 0, opacity: 1, duration: 0.6 },
});

// Use animation
const config = animationRegistry.get("gsap.fadeIn");
```

### 3. **Animation Factory** (`src/lib/animations/factory.ts`)

- **Purpose**: Dynamic animation creation and management
- **Features**:
  - GSAP animation creation
  - Framer Motion config generation
  - Staggered animations
  - Responsive animations
  - Scroll-triggered animations

```tsx
import { animationFactory } from "@/lib/animations/factory";

// Create GSAP animation
const animation = animationFactory.createGSAPAnimation(
  element,
  "gsap.slideIn",
  { duration: 0.8 }
);

// Create staggered animation
const staggered = animationFactory.createStaggeredGSAP(
  elements,
  "gsap.fadeIn",
  0.1
);
```

### 4. **Performance Manager** (`src/lib/animations/performance.ts`)

- **Purpose**: Performance optimization and device adaptation
- **Features**:
  - Device capability detection
  - Performance mode adjustment
  - Lazy loading animations
  - Memory management
  - FPS monitoring

```tsx
import { performanceManager } from "@/lib/animations/performance";

// Create lazy animation
const cleanup = performanceManager.createLazyAnimation(
  ".my-element",
  (element) => {
    // Animation callback
  }
);

// Get performance recommendations
const config = performanceManager.getPerformanceConfig();
```

### 5. **Custom Hooks** (`src/hooks/useAnimations.ts`)

- **Purpose**: React-optimized animation hooks
- **Features**:
  - Automatic cleanup
  - Performance optimization
  - Context integration
  - Animation controls

```tsx
import { useGSAPAnimation, useMotionAnimation } from "@/hooks/useAnimations";

// GSAP hook
const { ref, controls } = useGSAPAnimation("gsap.fadeIn", {
  overrides: { duration: 0.8 },
  autoPlay: true,
});

// Motion hook
const motionConfig = useMotionAnimation("motion.slideIn");
```

## 🎯 Best Practices Implementation

### 1. **Component Structure**

```tsx
"use client";

import { useGSAPAnimation } from "@/hooks/useAnimations";
import { performanceManager } from "@/lib/animations/performance";

const MyComponent = () => {
  // Use hooks for animations
  const slideAnimation = useGSAPAnimation("gsap.slideIn", {
    dependencies: [someState],
    overrides: { duration: 0.6 },
  });

  // Performance-aware rendering
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cleanup = performanceManager.createLazyAnimation(
      ".my-component",
      () => setIsVisible(true)
    );
    return cleanup;
  }, []);

  if (!isVisible) {
    return <div className="my-component skeleton" />;
  }

  return (
    <div ref={slideAnimation.ref} className="my-component">
      {/* Content */}
    </div>
  );
};
```

### 2. **Performance Optimization Patterns**

#### Lazy Loading

```tsx
// Automatic lazy loading for viewport-based animations
const { ref } = useScrollAnimation("gsap.fadeIn", {
  start: "top 80%",
  end: "bottom 20%",
});
```

#### Memory Management

```tsx
// Automatic cleanup with context
useEffect(() => {
  return () => {
    // Cleanup is handled automatically by the context
  };
}, []);
```

#### Device Adaptation

```tsx
// Responsive animations
const responsiveAnimation = animationFactory.createResponsiveGSAP(
  element,
  "gsap.slideIn",
  {
    mobile: { duration: 0.3 },
    tablet: { duration: 0.5 },
    desktop: { duration: 0.8 },
  }
);
```

### 3. **Accessibility Integration**

```tsx
// Automatic reduced motion support
const motionConfig = useMotionAnimation("motion.fadeIn"); // Automatically respects prefers-reduced-motion

// Manual accessibility optimization
const accessibleAnimation =
  performanceManager.optimizeForAccessibility(animation);
```

## 🚀 Performance Benefits

### 1. **Automatic Optimizations**

- Device capability detection
- Performance mode adjustment
- Reduced motion support
- Memory cleanup
- FPS monitoring

### 2. **Lazy Loading**

- Viewport-based animation loading
- Intersection Observer integration
- Memory-efficient rendering

### 3. **Caching & Reusability**

- Animation config caching
- Registry-based reuse
- Factory pattern efficiency

### 4. **Bundle Optimization**

- Tree-shaking friendly
- Dynamic imports
- Conditional loading

## 📊 Performance Monitoring

```tsx
import { useAnimationPerformance } from "@/hooks/useAnimations";

const MyComponent = () => {
  const { startMonitoring, getPerformanceMetrics } = useAnimationPerformance();

  useEffect(() => {
    startMonitoring();
  }, []);

  const handleClick = () => {
    const metrics = getPerformanceMetrics();
    console.log(`Current FPS: ${metrics.fps}`);
    console.log(`Performance: ${metrics.isPerformant ? "Good" : "Poor"}`);
  };
};
```

## 🔧 Configuration Options

### Global Settings

```tsx
<AnimationProvider
  initialSettings={{
    reducedMotion: false,
    performanceMode: 'high', // 'high' | 'balanced' | 'low'
    globalDuration: 0.6,
    globalEasing: 'power2.out'
  }}
>
```

### Performance Modes

- **High**: Full effects, complex animations, 60fps target
- **Balanced**: Moderate effects, optimized animations, 45fps target
- **Low**: Minimal effects, simple animations, 30fps target

## 📱 Responsive Design

```tsx
// Automatic responsive adjustments
const config = performanceManager.getPerformanceConfig();

// Manual responsive control
const breakpointAnimation = animationFactory.createResponsiveGSAP(
  element,
  "gsap.slideIn",
  {
    mobile: { duration: 0.3, ease: "power1.out" },
    desktop: { duration: 0.8, ease: "power2.out" },
  }
);
```

## 🎨 Animation Categories

### GSAP Animations (Performance-Critical)

- Sliders and carousels
- Scroll-triggered effects
- Complex sequences
- SVG animations
- Performance-critical animations

### Framer Motion (UI-Focused)

- Component transitions
- Hover effects
- Layout animations
- Gesture handling
- Simple UI animations

## 🛠️ Development Tools

### Debug Mode

```tsx
// Performance monitoring in development
{
  process.env.NODE_ENV === "development" && (
    <div className="debug-panel">
      FPS: {getPerformanceMetrics().fps}
      Mode: {performanceManager.getPerformanceMode()}
    </div>
  );
}
```

### Animation Registry Inspector

```tsx
// View all available animations
const availableAnimations = animationRegistry.getAll();
console.log("Available animations:", availableAnimations);
```

## 📈 Migration Guide

### From Basic GSAP/Motion to Architecture

1. **Wrap your app with AnimationProvider**
2. **Replace direct GSAP/Motion calls with hooks**
3. **Register custom animations in registry**
4. **Use optimized components**
5. **Enable performance monitoring**

### Example Migration

```tsx
// Before
useEffect(() => {
  gsap.from(".element", { y: 50, opacity: 0, duration: 0.6 });
}, []);

// After
const { ref } = useGSAPAnimation("gsap.fadeIn");
return <div ref={ref} className="element" />;
```

## 🎯 Key Benefits

1. **Performance**: Automatic optimization and device adaptation
2. **Reusability**: Registry-based animation sharing
3. **Maintainability**: Centralized configuration and management
4. **Accessibility**: Built-in reduced motion support
5. **Developer Experience**: Simple hooks and intuitive API
6. **Memory Efficiency**: Automatic cleanup and lazy loading
7. **Scalability**: Factory patterns and performance monitoring

This architecture provides a solid foundation for building performant, accessible, and maintainable animations in React applications while leveraging the strengths of both GSAP and Framer Motion.
