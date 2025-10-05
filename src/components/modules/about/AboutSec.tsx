"use client";

import { Button } from "@/components/ui/button";
import MotionCard from "@/components/ui/MotionCard";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import "../../../app/about/about.css";

/** ---- Timing control (easy to tweak) ---- */
const BASE = 0.15; // first thing to appear
const STEP = 0.12; // gap between siblings

export default function AboutSec() {
  return (
    <section className="relative bg-white text-black">
      <div className="max-w-[1405px] mx-auto px-[20px] lg:px-0 py-18 md:py-24 mb-[70px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[129px] items-center">
          {/* LEFT: stacked images (appear from RIGHT, one after another) */}
          <div className="order-2 lg:order-1 lg:col-span-5 abt_box relative">
            {/* shapes */}
            <MotionCard delay={BASE + STEP * 0} direction="right">
              <div className="shapes">
                <img
                  className="shape ab_shape1"
                  src="img/about/circ.png"
                  alt="about"
                />
                <img
                  className="shape ab_shape2"
                  src="img/about/round.png"
                  alt="about"
                />
              </div>
            </MotionCard>

            {/* big image */}
            <MotionCard delay={BASE + STEP * 1} direction="right">
              <div className="overflow-hidden img1">
                <Image
                  src="/img/about/ab1.jpg"
                  alt="Team collaborating"
                  width={880}
                  height={660}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </MotionCard>

            {/* small image overlaps */}
            <div className="img2">
              <Image
                src="/img/about/ab2.jpg"
                alt="Team discussing"
                width={560}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: copy (appear from LEFT, one after another) */}
          <div className="order-1 lg:order-2 lg:col-span-7 lg:mt-[90px]">
            {/* eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <MotionCard delay={BASE + STEP * 0} direction="left">
                <h3
                  className="text-xs md:text-sm font-semibold uppercase 
                  bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
                  bg-clip-text text-transparent sb_head relative"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  ABOUT APTECODE
                </h3>
              </MotionCard>
            </div>

            {/* heading */}
            <MotionCard delay={BASE + STEP * 1} direction="left">
              <h1 className="lg:text-[51px] text-[36px] font-semibold leading-[37px] md:leading-[1.05] lg:leading-[1.02]">
                We build modern web solutions
                <br className="hidden md:block" />
                and crypto services for digital
                <span className="block mt-2">success.</span>
              </h1>
            </MotionCard>

            {/* paragraph */}
            <MotionCard delay={BASE + STEP * 2} direction="left">
              <p className="mt-6 text-base md:text-lg text-[#74787C] max-w-2xl">
                Aptecode specializes in creating GEO &amp; SEO friendly web
                applications, custom software solutions, and crypto social
                services. We help businesses establish their digital presence
                and grow their online communities with cutting-edge technology
                and innovative approaches.
              </p>
            </MotionCard>

            {/* features (two items, staggered) */}
            <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 gap-6">
              <MotionCard delay={BASE + STEP * 3} direction="left">
                <Feature
                  icon="/img/about/ilus.png"
                  title="Expert Development Team"
                  subtitle="Seasoned engineers, designers & PMs."
                />
              </MotionCard>

              <MotionCard delay={BASE + STEP * 4} direction="left">
                <Feature
                  icon="/img/about/ilus.png"
                  title="Provide Market Standard"
                  subtitle="Service to client’s with real results."
                />
              </MotionCard>
            </div>

            {/* button */}
            <MotionCard delay={BASE + STEP * 5} direction="left">
              <div className="mt-[50px]">
                <Button className="flex items-center justify-center bg-[linear-gradient(135deg,#6EE7F9_0%,#A78BFA_60%,#F0ABFC_100%)] text-white hover:brightness-110 py-[30px] px-[34px] text-[17px]">
                  Get Started Now
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </Button>
              </div>
            </MotionCard>
          </div>
        </div>
      </div>
    </section>
  );
}

/** NOTE: icon is a string path; changed type and rendering to fit your usage */
function Feature({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex h-15 w-15 shrink-0 items-center justify-center">
        <img src={icon} alt="" />
      </div>
      <div>
        <p className="text-[21px] font-semibold">{title}</p>
        {subtitle ? <p className="text-sm text-black/60">{subtitle}</p> : null}
      </div>
    </div>
  );
}
