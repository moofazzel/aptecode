# 🎨 Hybrid Animation Guide: GSAP + Framer Motion

This guide shows you how to use both GSAP and Framer Motion together in your Next.js project for maximum animation power and flexibility.

## 🚀 Quick Start

### Installation
```bash
npm install gsap framer-motion @types/gsap
```

### Basic Usage

#### GSAP for Complex Sliders
```tsx
import GSAPSlider from '@/components/ui/GSAPSlider';

const slides = [
  {
    id: 1,
    title: "Slide 1",
    description: "Description here",
    image: "/path/to/image.jpg",
    bgColor: "#667eea"
  }
];

<GSAPSlider slides={slides} autoplay={true} duration={4000} />
```

#### Framer Motion for UI Transitions
```tsx
import MotionCard from '@/components/ui/MotionCard';
import MotionButton from '@/components/ui/MotionButton';

<MotionCard delay={0.2} direction="up">
  <div className="p-6 bg-white rounded-lg">
    <h3>Animated Card</h3>
    <MotionButton variant="primary">
      Click Me
    </MotionButton>
  </div>
</MotionCard>
```

## 🎯 When to Use What

### Use GSAP for:
- **Sliders & Carousels** - Superior performance for continuous animations
- **Scroll-triggered animations** - ScrollTrigger plugin is unmatched
- **Complex sequences** - Timeline control and precise timing
- **SVG animations** - Better SVG morphing and drawing capabilities
- **Performance-critical animations** - 60fps guaranteed

### Use Framer Motion for:
- **UI component transitions** - Declarative API fits React perfectly
- **Hover/click interactions** - Built-in gesture support
- **Layout animations** - Automatic layout transitions
- **Page transitions** - React Router integration
- **Simple animations** - Faster to implement

## 📚 Component Reference

### GSAPSlider Props
```typescript
interface GSAPSliderProps {
  slides: SlideData[];
  autoplay?: boolean;      // Default: true
  duration?: number;       // Default: 4000ms
  className?: string;
}
```

### MotionCard Props
```typescript
interface MotionCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;          // Default: 0
  direction?: 'up' | 'down' | 'left' | 'right'; // Default: 'up'
  hover?: boolean;         // Default: true
}
```

### MotionButton Props
```typescript
interface MotionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline'; // Default: 'primary'
  className?: string;
  disabled?: boolean;      // Default: false
}
```

## 🛠️ Advanced Usage

### Custom GSAP Animations
```tsx
import { useGSAP, gsapPresets } from '@/lib/gsap-utils';

const MyComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (elementRef.current) {
      gsap.fromTo(elementRef.current, 
        gsapPresets.fadeIn.from, 
        gsapPresets.fadeIn.to
      );
    }
  }, []);

  return <div ref={elementRef}>Animated content</div>;
};
```

### Complex Framer Motion Animations
```tsx
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map((item, index) => (
    <motion.div key={index} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

## 🎨 Styling Integration

### With Tailwind CSS
Both components work seamlessly with Tailwind CSS:

```tsx
<MotionCard className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl shadow-2xl">
  <h2 className="text-white text-2xl font-bold mb-4">Beautiful Card</h2>
</MotionCard>

<GSAPSlider 
  slides={slides} 
  className="max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden"
/>
```

## ⚡ Performance Tips

1. **Use GSAP for heavy animations** - Better performance for complex sequences
2. **Use Framer Motion for simple UI** - Easier to maintain and debug
3. **Avoid animating layout properties** - Use transforms instead
4. **Use `will-change` sparingly** - Only when necessary
5. **Clean up animations** - Both libraries provide cleanup methods

## 🔧 Troubleshooting

### Common Issues

**GSAP not working on server-side:**
```tsx
// Always check for window
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
```

**Framer Motion layout shift:**
```tsx
// Use layout prop for automatic layout animations
<motion.div layout>
  Content that changes size
</motion.div>
```

**Performance issues:**
```tsx
// Use transform instead of changing position
// ❌ Don't do this
animate={{ left: 100 }}

// ✅ Do this instead
animate={{ x: 100 }}
```

## 📱 Responsive Considerations

Both libraries handle responsive design well:

```tsx
// GSAP with responsive breakpoints
const mm = gsap.matchMedia();
mm.add("(min-width: 768px)", () => {
  // Desktop animations
});
mm.add("(max-width: 767px)", () => {
  // Mobile animations
});

// Framer Motion with responsive variants
const variants = {
  desktop: { scale: 1.2 },
  mobile: { scale: 1.1 }
};
```

## 🎯 Best Practices

1. **Start with Framer Motion** for most UI animations
2. **Upgrade to GSAP** when you need more control or performance
3. **Use both strategically** - Don't animate everything
4. **Test on mobile devices** - Performance can vary
5. **Keep animations subtle** - Less is often more
6. **Provide reduced motion options** - Accessibility is important

## 📖 Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Web Animation Performance](https://web.dev/animations/)
- [Accessibility Guidelines](https://web.dev/prefers-reduced-motion/)

---

Happy animating! 🎉
