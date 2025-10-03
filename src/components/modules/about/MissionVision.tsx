"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MissionVision() {
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
              >
                <h3 className=" text-[24px] font-[700] mb-[30px] text-[#11151c] ">
                  Digital Web Design Agency
                </h3>
                <p className="mb-[20px] text-[#74787C] text-[16px]">
                  A web design agency is a multifaceted entity that plays a
                  pivotal role in shaping the digital presence of businesses and
                  individuals alike. These agencies are dynamic hubs of
                  creativity, technical expertise, and strategic thinking.
                </p>
                <p className="mb-[20px] text-[#74787C] text-[16px]">
                  At the core of a web design agency&apos;s essence lies the
                  artistry of visual storytelling and user experience creation.
                </p>
              </TabsContent>

              <TabsContent
                value="vision"
                className="md:pt-6  mt-[75px] md:mt-0"
              >
                <h3 className=" text-[24px] font-[700] mb-[30px] text-[#11151c]">
                  Digital Web Design Agency
                </h3>
                <p className="mb-[20px] text-[#74787C] text-[16px]">
                  A web design agency is a multifaceted entity that plays a
                  pivotal role in shaping the digital presence of businesses and
                  individuals alike. These agencies are dynamic hubs of
                  creativity, technical expertise, and strategic thinking.
                </p>
                <p className="mb-[20px] text-[#74787C] text-[16px]">
                  At the core of a web design agency&apos;s essence lies the
                  artistry of visual storytelling and user experience creation.
                </p>
              </TabsContent>

              <TabsContent value="goal" className="md:pt-6  mt-[75px] md:mt-0">
                <h3 className=" text-[24px] font-[700] mb-[30px] text-[#11151c]">
                  Digital Web Design Agency
                </h3>
                <p className="mb-[20px] text-[#74787C] text-[16px]">
                  A web design agency is a multifaceted entity that plays a
                  pivotal role in shaping the digital presence of businesses and
                  individuals alike. These agencies are dynamic hubs of
                  creativity, technical expertise, and strategic thinking.
                </p>
                <p className="mb-[20px] text-[#74787C] text-[16px]">
                  At the core of a web design agency&apos;s essence lies the
                  artistry of visual storytelling and user experience creation.
                </p>
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
  );
}
