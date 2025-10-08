"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  freezeOnceVisible?: boolean;
}

interface IntersectionObserverResult {
  ref: React.RefObject<HTMLElement | null>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
}

// Hook for intersection observer with performance optimizations
export const useIntersectionObserver = (
  options: IntersectionObserverOptions = {}
): IntersectionObserverResult => {
  const {
    root = null,
    rootMargin = "0px",
    threshold = 0.1,
    freezeOnceVisible = false,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setEntry(entry);
      setIsIntersecting(entry.isIntersecting);

      // Freeze observer once visible if requested
      if (freezeOnceVisible && entry.isIntersecting && observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    },
    [freezeOnceVisible]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create observer with performance optimizations
    observerRef.current = new IntersectionObserver(handleIntersection, {
      root,
      rootMargin,
      threshold,
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [handleIntersection, root, rootMargin, threshold]);

  return { ref, isIntersecting, entry };
};

// Hook for multiple elements intersection observer
export const useMultipleIntersectionObserver = (
  options: IntersectionObserverOptions = {}
) => {
  const {
    root = null,
    rootMargin = "0px",
    threshold = 0.1,
    freezeOnceVisible = false,
  } = options;

  const [intersections, setIntersections] = useState<Map<string, boolean>>(
    new Map()
  );
  const [entries, setEntries] = useState<
    Map<string, IntersectionObserverEntry>
  >(new Map());
  const refs = useRef<Map<string, HTMLElement>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const elementId = entry.target.getAttribute("data-observer-id");
        if (elementId) {
          setIntersections(
            (prev) => new Map(prev.set(elementId, entry.isIntersecting))
          );
          setEntries((prev) => new Map(prev.set(elementId, entry)));

          // Freeze observer once visible if requested
          if (
            freezeOnceVisible &&
            entry.isIntersecting &&
            observerRef.current
          ) {
            observerRef.current.unobserve(entry.target);
          }
        }
      });
    },
    [freezeOnceVisible]
  );

  useEffect(() => {
    if (refs.current.size === 0) return;

    // Create observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      root,
      rootMargin,
      threshold,
    });

    // Observe all elements
    refs.current.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [handleIntersection, root, rootMargin, threshold]);

  const addRef = useCallback((id: string, element: HTMLElement | null) => {
    if (element) {
      element.setAttribute("data-observer-id", id);
      refs.current.set(id, element);

      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    } else {
      const existingElement = refs.current.get(id);
      if (existingElement && observerRef.current) {
        observerRef.current.unobserve(existingElement);
      }
      refs.current.delete(id);
    }
  }, []);

  const removeRef = useCallback((id: string) => {
    const element = refs.current.get(id);
    if (element && observerRef.current) {
      observerRef.current.unobserve(element);
    }
    refs.current.delete(id);
    setIntersections((prev) => {
      const newMap = new Map(prev);
      newMap.delete(id);
      return newMap;
    });
    setEntries((prev) => {
      const newMap = new Map(prev);
      newMap.delete(id);
      return newMap;
    });
  }, []);

  const isIntersecting = useCallback(
    (id: string) => {
      return intersections.get(id) || false;
    },
    [intersections]
  );

  const getEntry = useCallback(
    (id: string) => {
      return entries.get(id) || null;
    },
    [entries]
  );

  return {
    addRef,
    removeRef,
    isIntersecting,
    getEntry,
    intersections,
    entries,
  };
};

// Hook for lazy loading with intersection observer
export const useLazyLoading = (options: IntersectionObserverOptions = {}) => {
  const { root = null, rootMargin = "50px", threshold = 0.1 } = options;

  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    root,
    rootMargin,
    threshold,
    freezeOnceVisible: true,
  });

  useEffect(() => {
    if (isIntersecting && !isLoaded) {
      setIsLoaded(true);
    }
  }, [isIntersecting, isLoaded]);

  return { ref, isLoaded, isIntersecting };
};

// Hook for scroll-based animations with intersection observer
export const useScrollBasedAnimation = (
  animationCallback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverOptions = {}
) => {
  const {
    root = null,
    rootMargin = "0px",
    threshold = [0, 0.25, 0.5, 0.75, 1],
  } = options;

  const { ref, entry } = useIntersectionObserver({
    root,
    rootMargin,
    threshold,
  });

  useEffect(() => {
    if (entry) {
      animationCallback(entry);
    }
  }, [entry, animationCallback]);

  return { ref, entry };
};

// Hook for viewport-based animations
export const useViewportAnimation = (
  options: IntersectionObserverOptions = {}
) => {
  const {
    root = null,
    rootMargin = "-10% 0px -10% 0px",
    threshold = 0,
  } = options;

  const [isInViewport, setIsInViewport] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({
    root,
    rootMargin,
    threshold,
  });

  useEffect(() => {
    setIsInViewport(isIntersecting);
  }, [isIntersecting]);

  return { ref, isInViewport };
};

// Hook for element visibility percentage
export const useVisibilityPercentage = (
  options: IntersectionObserverOptions = {}
) => {
  const {
    root = null,
    rootMargin = "0px",
    threshold = Array.from({ length: 101 }, (_, i) => i / 100),
  } = options;

  const [visibilityPercentage, setVisibilityPercentage] = useState(0);
  const { ref, entry } = useIntersectionObserver({
    root,
    rootMargin,
    threshold,
  });

  useEffect(() => {
    if (entry) {
      const percentage = Math.round(entry.intersectionRatio * 100);
      setVisibilityPercentage(percentage);
    }
  }, [entry]);

  return { ref, visibilityPercentage, entry };
};

// Hook for sticky element detection
export const useStickyDetection = (
  options: IntersectionObserverOptions = {}
) => {
  const { root = null, rootMargin = "0px", threshold = 0 } = options;

  const [isSticky, setIsSticky] = useState(false);
  const { ref, entry } = useIntersectionObserver({
    root,
    rootMargin,
    threshold,
  });

  useEffect(() => {
    if (entry) {
      const rect = entry.boundingClientRect;
      const rootRect = entry.rootBounds;

      if (rootRect) {
        // Element is sticky when it's at the top of the viewport
        setIsSticky(rect.top <= rootRect.top && rect.bottom > rootRect.top);
      }
    }
  }, [entry]);

  return { ref, isSticky, entry };
};

// Performance-optimized hook for large lists
export const useVirtualizedIntersectionObserver = (
  itemCount: number,
  options: IntersectionObserverOptions = {}
) => {
  const { root = null, rootMargin = "100px", threshold = 0.1 } = options;

  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const { addRef, removeRef, isIntersecting } = useMultipleIntersectionObserver(
    {
      root,
      rootMargin,
      threshold,
    }
  );

  const addItemRef = useCallback(
    (index: number, element: HTMLElement | null) => {
      const id = `item-${index}`;
      addRef(id, element);

      if (element && isIntersecting(id)) {
        setVisibleItems((prev) => new Set(prev.add(index)));
      }
    },
    [addRef, isIntersecting]
  );

  const removeItemRef = useCallback(
    (index: number) => {
      const id = `item-${index}`;
      removeRef(id);
      setVisibleItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    },
    [removeRef]
  );

  const isItemVisible = useCallback(
    (index: number) => {
      return visibleItems.has(index);
    },
    [visibleItems]
  );

  return {
    addItemRef,
    removeItemRef,
    isItemVisible,
    visibleItems,
  };
};
