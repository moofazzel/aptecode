"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import Image from "next/image";
import "../../../app/about/about.css";

export default function AboutSec() {
  return (
    <section className="relative bg-white text-black">
      <div className="max-w-[1405px] mx-auto px-[20px] lg:px-0 py-16 md:py-24 mb-[70px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[129px] items-center">
          {/* LEFT: stacked images */}
          <div className="order-2 lg:order-1 lg:col-span-5  abt_box relative">
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
            {/* big image */}
            <div className="  overflow-hidden img1 ">
              <Image
                src="/img/about/ab1.jpg"
                alt="Team collaborating"
                width={880}
                height={660}
                className="h-auto w-full object-cover "
                priority
              />
            </div>

            {/* small image overlaps */}
            <div className="img2">
              <Image
                src="/img/about/ab2.jpg"
                alt="Team discussing"
                width={560}
                height={420}
                className="h-auto w-full object-cover img2"
              />
            </div>

            {/* subtle dotted arc (decor) */}
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
              <GradientButton>Get Started Now</GradientButton>
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
  icon: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex h-15 w-15 shrink-0 items-center justify-center ">
        <Image src={icon} alt="" width={60} height={60} />
      </div>
      <div>
        <p className="text-[21px] font-semibold">{title}</p>
        {subtitle ? <p className="text-sm text-black/60">{subtitle}</p> : null}
      </div>
    </div>
  );
}
