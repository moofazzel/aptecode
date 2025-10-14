"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { portfolioData } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface PortfolioFilterProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFilteredProjects: (projects: any[]) => void;
}

// Categories data
const categories = [
  "All",
  "Web Development",
  "E-Commerce",
  "SaaS",
  "Professional Services",
  "Founder",
];

export function PortfolioFilter({ onFilteredProjects }: PortfolioFilterProps) {
  const filterRef = useRef<HTMLDivElement>(null);
  const filterInView = useInView(filterRef, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabsListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter(
          (project) => project.category === selectedCategory
        );

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Update active tab index when category changes
  useEffect(() => {
    const index = categories.findIndex((cat) => cat === selectedCategory);
    setActiveTabIndex(index);
  }, [selectedCategory]);

  // Update indicator position and width based on active tab
  useEffect(() => {
    const updateIndicator = () => {
      const activeTab = tabRefs.current[activeTabIndex];
      const tabsList = tabsListRef.current;

      if (activeTab && tabsList) {
        const tabsListRect = tabsList.getBoundingClientRect();
        const activeTabRect = activeTab.getBoundingClientRect();

        setIndicatorStyle({
          left: activeTabRect.left - tabsListRect.left,
          width: activeTabRect.width,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTabIndex]);

  // Notify parent of filtered projects whenever category changes
  useEffect(() => {
    onFilteredProjects(filteredProjects);
  }, [selectedCategory, onFilteredProjects, filteredProjects]);

  return (
    <motion.section
      className=" bg-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={filterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl pt-16 md:pt-0 md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            See the
            <span className="ml-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Results
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Real results from real projects. See how we help new brands and SMBs
            build websites that convert visitors into customers.
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Tabs */}
        <motion.div
          ref={filterRef}
          className="flex justify-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Tabs
            value={selectedCategory}
            onValueChange={handleCategoryChange}
            className="w-full "
          >
            <TabsList
              ref={tabsListRef}
              className="flex w-full h-full bg-gray-100/80 backdrop-blur-md border border-gray-300/50 shadow-xl p-2 relative  overflow-visible rounded-none"
            >
              {/* Sliding Background Indicator */}
              <motion.div
                className="absolute bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600  shadow-2xl z-0"
                initial={false}
                animate={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.5,
                }}
                style={{
                  height: "calc(100% - 16px)",
                  top: "8px",
                }}
              />
              {categories.map((category, index) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  className="relative z-10 data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:bg-transparent data-[state=inactive]:text-gray-700 data-[state=inactive]:font-medium data-[state=inactive]:bg-transparent transition-all duration-300 px-3 sm:px-4 py-2 sm:py-3 hover:text-gray-900 hover:bg-transparent text-xs sm:text-sm flex-1 border-none shadow-none"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>
      </div>
    </motion.section>
  );
}
