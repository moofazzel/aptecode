"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "../../about.css";

export default function MissionVision() {
  // Structured data for organization mission, vision, and goals
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://aptecode.com/#organization",
    "name": "Aptecode",
    "description": "Digital Web Design Agency focused on creating exceptional web experiences for local and global clients",
    "mission": "To provide innovative web design solutions that transform digital presence for businesses and individuals through creativity, technical expertise, and strategic thinking.",
    "vision": "To be the leading web design agency that shapes the future of digital experiences through artistry of visual storytelling and user experience creation.",
    "goals": [
      "Satisfy local and global clients with exceptional web solutions",
      "Create dynamic hubs of creativity and technical expertise",
      "Deliver strategic thinking in every project"
    ],
    "serviceType": [
      "Web Design",
      "Digital Strategy",
      "User Experience Design",
      "Visual Storytelling"
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      
      <section className="about-company-section relative overflow-hidden" itemScope itemType="https://schema.org/Organization">
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
            <h2 className="mt-4 md:mb-14 mb-[30px] ab_ttl md:text-[48px] font-[700] md:leading-[60px] leading-[45px] text-[32px]" itemProp="description">
              Our Main Goal to Satisfied <br /> local &amp; Global Clients
            </h2>

            {/* Tabs (shadcn) */}
            <Tabs defaultValue="mission" className="mt-6">
              <TabsList className="about-tabs-list lg:flex md:w-[74%] w-[85%] block justify-start gap-3 rounded-none bg-transparent p-0 lg:mb-0  ">
                <TabsTrigger
                  value="mission"
                  className="mr-[16px] lg:mr-0 mb-[16px] lg:mb-0  cursor-pointer about-tab inline-flex  bg-[#f2f3f4]  px-[20px] py-[21px] text-sm font-[600] text-[#11151c] transition  data-[state=active]:border-[#a868fa] data-[state=active]:bg-[#a868fa] data-[state=active]:text-white"
                >
                  Our Mission
                </TabsTrigger>
                <TabsTrigger
                  value="vision"
                  className="mr-[16px] lg:mr-0 mb-[16px] lg:mb-0 cursor-pointer about-tab inline-flex  bg-[#f2f3f4]  px-[20px] py-[21px] text-sm font-[600] text-[#11151c] transition  data-[state=active]:border-[#a868fa] data-[state=active]:bg-[#a868fa] data-[state=active]:text-white"
                >
                  Our Vision
                </TabsTrigger>
                <TabsTrigger
                  value="goal"
                  className="mr-[16px] lg:mr-0 mb-[16px] lg:mb-0  cursor-pointer about-tab inline-flex  bg-[#f2f3f4]  px-[20px] py-[21px] text-sm font-[600] text-[#11151c] transition  data-[state=active]:border-[#a868fa] data-[state=active]:bg-[#a868fa] data-[state=active]:text-white"
                >
                  Our Goal
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="mission"
                className="md:pt-6  mt-[75px] md:mt-0"
                itemScope 
                itemType="https://schema.org/Mission"
              >
                <h3 className=" text-[24px] font-[700] mb-[30px] text-[#11151c] " itemProp="name">
                  Our Mission: Excellence in Digital Solutions
                </h3>
                <div itemProp="description">
                  <p className="mb-[20px] text-[#74787C] text-[16px]">
                    Our mission is to provide innovative web design solutions that transform digital presence for businesses and 
                    individuals alike. We are a dynamic hub of creativity, technical expertise, and strategic thinking.
                  </p>
                  <p className="mb-[20px] text-[#74787C] text-[16px]">
                    At the core of our mission lies the artistry of visual storytelling and exceptional user experience creation 
                    that drives meaningful results for our clients.
                  </p>
                </div>
              </TabsContent>

              <TabsContent
                value="vision"
                className="md:pt-6  mt-[75px] md:mt-0"
                itemScope 
                itemType="https://schema.org/Vision"
              >
                <h3 className=" text-[24px] font-[700] mb-[30px] text-[#11151c]" itemProp="name">
                  Our Vision: Leading Digital Innovation
                </h3>
                <div itemProp="description">
                  <p className="mb-[20px] text-[#74787C] text-[16px]">
                    Our vision is to be the leading web design agency that shapes the future of digital experiences. 
                    We envision a world where every business has access to cutting-edge digital solutions that drive growth.
                  </p>
                  <p className="mb-[20px] text-[#74787C] text-[16px]">
                    We strive to set industry standards through innovative design approaches and technological excellence 
                    that create lasting impact for our clients worldwide.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="goal" className="md:pt-6  mt-[75px] md:mt-0" itemScope itemType="https://schema.org/Goal">
                <h3 className=" text-[24px] font-[700] mb-[30px] text-[#11151c]" itemProp="name">
                  Our Goals: Client Satisfaction & Excellence
                </h3>
                <div itemProp="description">
                  <p className="mb-[20px] text-[#74787C] text-[16px]">
                    Our primary goal is to satisfy both local and global clients through exceptional web design solutions. 
                    We are committed to delivering projects that exceed expectations and drive meaningful business results.
                  </p>
                  <p className="mb-[20px] text-[#74787C] text-[16px]">
                    We focus on building long-term partnerships by consistently delivering high-quality work, 
                    maintaining transparent communication, and ensuring every project achieves its strategic objectives.
                  </p>
                </div>
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

            {/* purple dot */}
            <span className="absolute -right-2 bottom-8 hidden h-2 w-2 rounded-full bg-violet-500 lg:block" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
