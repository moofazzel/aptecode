"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function AboutSec() {
  return (
    <section className="relative bg-white text-black">
      <div className="max-w-[1405px] mx-auto px-[20px] lg:px-0 py-16 md:py-24 mb-[70px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[129px] items-center">
          {/* LEFT: stacked images */}
          <div className="order-2 lg:order-1 lg:col-span-5 relative">
            {/* big image */}
            <div className="  overflow-hidden ">
              <Image
                src="/img/about/ab1.jpg"
                alt="Team collaborating"
                width={880}
                height={660}
                className="h-auto w-full object-cover img1"
                priority
              />
            </div>

            {/* small image overlaps */}
            <div className="absolute -bottom-[36%] right-[-6%] w-[68%] max-w-[420px] hidden md:block">
              <div className=" image_2">
                <Image
                  src="/img/about/ab2.jpg"
                  alt="Team discussing"
                  width={560}
                  height={420}
                  className="h-auto w-full object-cover img2"
                />
              </div>
            </div>

            {/* subtle dotted arc (decor) */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-10 top-1/3 hidden xl:block"
            >
              <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
                <path
                  d="M10 110a100 100 0 0 1 200 0"
                  stroke="url(#g)"
                  strokeDasharray="6 10"
                  strokeOpacity="0.6"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="220" y2="0">
                    <stop stopColor="#4F46E5" />
                    <stop offset="1" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* RIGHT: copy */}
          <div className="order-1 lg:order-2 lg:col-span-7 lg:mt-[90px] ">
            {/* pre-title */}
            {/* pre-title */}
            <div className="mb-6 flex items-center gap-3">
              {/* tiny square */}

              {/* gradient text */}
              <h3
                className="text-xs md:text-sm font-semibold uppercase 
      bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
      bg-clip-text text-transparent sb_head relative"
                style={{ WebkitTextFillColor: "transparent" }} // Safari fix
              >
                ABOUT APTECODE
              </h3>
            </div>

            {/* heading */}
            <h1 className="lg:text-[53px] text-[36px] font-semibold leading-[37px]  md:leading-[1.05] lg:leading-[1.02]">
              We build modern web solutions
              <br className="hidden md:block" />
              and crypto services for digital
              <span className="block mt-2">success.</span>
            </h1>

            {/* paragraph */}
            <p className="mt-6 text-base md:text-lg text-[#74787C] max-w-2xl">
              Aptecode specializes in creating GEO &amp; SEO friendly web
              applications, custom software solutions, and crypto social
              services. We help businesses establish their digital presence and
              grow their online communities with cutting-edge technology and
              innovative approaches.
            </p>

            {/* features */}
            <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Feature
                icon="/img/about/ilus.png"
                title="Expert Development Team"
                subtitle="Seasoned engineers, designers & PMs."
              />
              <Feature
                icon="/img/about/ilus.png"
                title="Provide Market Standard"
                subtitle="Service to client’s with real results."
              />
            </div>

            {/* button */}
            <div className="mt-[50px]">
              <Button className="flex items-center justify-center bg-[linear-gradient(135deg,#6EE7F9_0%,#A78BFA_60%,#F0ABFC_100%)] text-white hover:brightness-110 py-[30px] px-[34px] text-[17px]">
                Get Started Now
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex h-15 w-15 shrink-0 items-center justify-center ">
        <img src={icon} alt="" fill />
      </div>
      <div>
        <p className="text-[21px] font-semibold">{title}</p>
        {subtitle ? <p className="text-sm text-black/60">{subtitle}</p> : null}
      </div>
    </div>
  );
}
