// components/cta/ServiceCta.tsx
"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import "./ctaSection.css";

type Props = {
  bgSrc?: string;
  titleTop?: string; // first line
  titleBottom?: string; // second line
  ctaText?: string;
  ctaHref?: string;
};

export default function CtaSection({
  titleTop = "Have Any Projects On Minds!",
  titleBottom = "Contact Us",
  ctaText = "Make Appointment",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="relative w-full z-[1] lg:py-[100px] py-[60px]">
      <div
        className="cta_bg"
        aria-label="service background"
        style={{ backgroundImage: "url('/img/service/cta.png')" }}
      ></div>
      <div className="cta_overlay"></div>
      {/* Background image */}
      <div className="relative  w-full overflow-hidden">
        {/* Purple overlay */}

        {/* Content */}
        <div className="mx-auto flex h-full w-full max-w-[1405px] items-center px-4 sm:px-6 lg:px-8">
          {/* Left: Title */}
          <div className="flex-1">
            <h2 className="leading-tight text-white">
              <span className="block text-3xl font-extrabold tracking-tight md:text-[48px]">
                {titleTop}
              </span>
              <span className="block text-3xl font-extrabold tracking-tight md:text-[48px]">
                {titleBottom}
              </span>
            </h2>
          </div>

          {/* Right: Button */}
          <div className="hidden sm:flex">
            <GradientButton
              href={ctaHref}
              showArrow
              className="py-[10px]"
              style={{
                fontFamily: "var(--font-hind-madurai), system-ui, sans-serif",
                padding: "15px 30px",
              }}
            >
              {ctaText}
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Mobile button (below title, centered) */}
      <div className="sm:hidden mt-[54px]">
        <div className="mx-auto -mt-6 flex w-full max-w-7xl  px-4 sm:px-6 lg:px-8">
          <GradientButton
            href={ctaHref}
            showArrow
            className=" py-[10px]"
            style={{
              fontFamily: "var(--font-hind-madurai), system-ui, sans-serif",
              padding: "15px 30px",
            }}
          >
            {ctaText}
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
