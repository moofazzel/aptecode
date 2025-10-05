"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import "./pricingSection.css";

export default function PricingSection() {
  const PLANS = [
    { tier: "Basic Plan", price: "$39" },
    { tier: "Standard Plan", price: "$49" },
    { tier: "Premium Plan", price: "$59" },
  ];

  return (
    <section className="pricingSection lg:py-[100px] py-[60px]">
      <div className="mx-auto max-w-[1405px] px-[15px] md:px-0">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="lrd" />

          <h3
            className="text-xs md:text-sm font-semibold uppercase 
      bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
      bg-clip-text text-transparent  h-[30px] relative z-50"
            style={{ WebkitTextFillColor: "transparent" }} // Safari fix
          >
            our pricing plans
          </h3>
          <span className="rrd" />
        </div>
        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl font-[700] tracking-tight text-neutral-900 lg:mb-[90px] mb-[60px] uppercase">
          Our flexible pricing
        </h2>

        <div className="pricingGrid flex flex-wrap items-center ">
          {PLANS.map((p) => (
            <div key={p.tier} className="lg:w-[33%] md:w-[50%] w-full">
              <article className="pricingCard">
                <h4 className="pricingPlan">{p.tier}</h4>
                <div className="pricingValue">{p.price}</div>
                <p className="pricingSubtitle">
                  Basic features for up to 10 Users
                </p>

                <div className="pricingCtaWrap my-[30px]">
                  <GradientButton
                    href="/contact"
                    showArrow
                    className="w-full py-[10px] text-[17px] font-[600]"
                  >
                    Get In Touch
                  </GradientButton>
                </div>

                <h5 className="pricingFeatureLabel mb-[10px]">Features:</h5>
                <p className="pricingFeatureText">
                  Everything in our free plan it’s included with all premium
                  packages.
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
