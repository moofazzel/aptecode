"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import "../../about.css";

export default function MissionVision() {
  const [activeTab, setActiveTab] = useState("mission");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabsListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const tabsData = useMemo(
    () => [
      { value: "mission", label: "Our Mission" },
      { value: "vision", label: "Our Vision" },
      { value: "goal", label: "Our Goal" },
    ],
    []
  );

  // Update active tab index when tab changes
  useEffect(() => {
    const index = tabsData.findIndex((tab) => tab.value === activeTab);
    setActiveTabIndex(index);
  }, [activeTab, tabsData]);

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

  return (
    <section className="about-company-section relative overflow-hidden">
      <div className="mx-auto max-w-[1405px] px-4 py-20 md:py-28">
        {/* FLEX LAYOUT */}
        <div className="md:flex flex-col  gap-12 lg:flex-row lg:items-center">
          {/* LEFT: Copy + Tabs */}
          <div className="about-copy md:w-[50%] w-full">
            {/* eyebrow */}
            <div className="mb-5 inline-flex items-center gap-3">
              <h3
                className="text-xs md:text-sm font-semibold uppercase 
      bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
      bg-clip-text text-transparent sb_head relative"
                style={{ WebkitTextFillColor: "transparent" }} // Safari fix
              >
                ABOUT Company
              </h3>
            </div>

            {/* Title */}
            <h2 className="mt-4 md:mb-14 mb-[30px] ab_ttl md:text-[48px] font-[700] md:leading-[60px] leading-[45px] text-[32px]">
              Our Main Goal to Satisfied <br /> local &amp; Global Clients
            </h2>

            {/* Tabs (shadcn) */}
            <Tabs
              defaultValue="mission"
              value={activeTab}
              onValueChange={setActiveTab}
              className="mt-6"
            >
              <TabsList
                ref={tabsListRef}
                className="about-tabs-list lg:flex md:w-[74%] w-[85%] block justify-start gap-3 rounded-none bg-transparent p-0 lg:mb-0 relative overflow-visible"
              >
                {/* Sliding Background Indicator */}
                <motion.div
                  className="absolute bg-[#a868fa] shadow-lg z-0"
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
                    height: "calc(100% - 8px)",
                    top: "4px",
                    borderRadius: "4px",
                  }}
                />
                {tabsData.map((tab, index) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    className="relative z-10 data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:bg-transparent data-[state=inactive]:text-gray-700 data-[state=inactive]:font-medium data-[state=inactive]:bg-transparent transition-all duration-300 px-3 sm:px-4 py-2 sm:py-3 hover:text-gray-900 hover:bg-transparent text-xs sm:text-sm flex-1 border-none shadow-none rounded-none"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="mission" className="pt-6 md:mt-0">
                <motion.div
                  key="mission"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.h3
                    className=" text-[24px] font-[700] mb-[30px] text-[#11151c]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    Empowering Businesses Through Innovation
                  </motion.h3>
                  <motion.p
                    className="mb-[20px] text-[#74787C] text-[16px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    Our mission is to transform ideas into powerful digital
                    experiences that drive growth and create lasting impact. We
                    believe in the power of technology to revolutionize how
                    businesses connect with their audience, streamline
                    operations, and achieve their full potential.
                  </motion.p>
                  <motion.p
                    className="mb-[20px] text-[#74787C] text-[16px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    By combining cutting-edge technology with strategic thinking
                    and creative excellence, we deliver solutions that
                    don&apos;t just meet expectations—they exceed them. Every
                    project we undertake is an opportunity to push boundaries
                    and set new standards in digital innovation.
                  </motion.p>
                </motion.div>
              </TabsContent>

              <TabsContent value="vision" className="pt-6  md:mt-0">
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.h3
                    className=" text-[24px] font-[700] mb-[30px] text-[#11151c]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    Shaping the Future of Digital Excellence
                  </motion.h3>
                  <motion.p
                    className="mb-[20px] text-[#74787C] text-[16px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    We envision a world where every business, regardless of
                    size, has access to world-class digital solutions that
                    propel them forward. Our vision is to be the catalyst for
                    digital transformation, empowering organizations to thrive
                    in an ever-evolving technological landscape.
                  </motion.p>
                  <motion.p
                    className="mb-[20px] text-[#74787C] text-[16px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    Through continuous innovation, unwavering commitment to
                    quality, and a deep understanding of emerging technologies,
                    we&apos;re building a future where digital excellence is not
                    just an advantage—it&apos;s a standard that elevates entire
                    industries.
                  </motion.p>
                </motion.div>
              </TabsContent>

              <TabsContent value="goal" className="pt-6  md:mt-0">
                <motion.div
                  key="goal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.h3
                    className=" text-[24px] font-[700] mb-[30px] text-[#11151c]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    Building Lasting Partnerships & Success
                  </motion.h3>
                  <motion.p
                    className="mb-[20px] text-[#74787C] text-[16px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    Our goal is simple yet ambitious: to become the most trusted
                    technology partner for businesses worldwide. We measure our
                    success not in projects completed, but in the transformative
                    impact we create for our clients and the long-term
                    relationships we build.
                  </motion.p>
                  <motion.p
                    className="mb-[20px] text-[#74787C] text-[16px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    We&apos;re committed to delivering exceptional value through
                    innovative solutions, transparent communication, and
                    relentless dedication to our clients&apos; success.
                    Together, we don&apos;t just build software—we build
                    futures, one partnership at a time.
                  </motion.p>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>

          {/* RIGHT: Overlapping Images */}
          <div className="abt_img  md:w-[50%] w-full min-w-0 ">
            <div className="shaps">
              <div className="shape shp_1">
                <img src="img/about/circ.png" alt="shape" />
              </div>
              <div className="shape shp_2">
                <img src="img/about/round.png" alt="shape" />
              </div>
            </div>

            {/* big image */}
            <div className="right_img1 pos ">
              <img
                src="img/about/ms1.jpg"
                alt="Team collaborating around a laptop"
                className="rimg1"
              />
            </div>

            {/* small framed image (overlapping) */}
            <div className="right_img2  pos ">
              <img
                src="img/about/ms2.jpg"
                alt="Developers discussing in office"
                className="rimg2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
