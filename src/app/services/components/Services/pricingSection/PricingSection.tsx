// src/components/PricingSection.tsx
"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import "./pricingSection.css";

export default function PricingSection() {
  // Keep your exact visible plan copy; only used below to build invisible JSON-LD.
  const PLANS = [
    { tier: "Basic Plan", price: "$39" },
    { tier: "Standard Plan", price: "$49" },
    { tier: "Premium Plan", price: "$59" },
  ];

  // —— Invisible JSON-LD for the whole section (no UI change) ——
  const CURRENCY = "USD"; // change to "BDT" if you show ৳ later
  const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Pricing Plans",
    itemListElement: PLANS.map((p, i) => ({
      "@type": "Offer",
      name: p.tier,
      position: i + 1,
      priceCurrency: CURRENCY,
      price: Number(String(p.price).replace(/[^0-9.]/g, "")),
      url: "/contact",
      areaServed: { "@type": "Place", name: "Dhaka" },
    })),
  };

  return (
    <section className="pricingSection lg:py-[100px] py-[60px]">
      <div className="mx-auto max-w-[1405px] px-[15px] md:px-0">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="lrd" />
          <h3
            className="text-xs md:text-sm font-semibold uppercase 
            bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
            bg-clip-text text-transparent h-[30px] relative z-50"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            our pricing plans
          </h3>
          <span className="rrd" />
        </div>

        <h2 className="text-center text-3xl md:text-5xl font-[700] tracking-tight text-neutral-900 lg:mb-[90px] mb-[60px] uppercase">
          Our flexible pricing
        </h2>

        <div className="pricingGrid flex flex-wrap items-center ">
          {/* Card 1 */}
          <div className="lg:w-[33%] md:w-[50%] w-full">
            <article
              className="pricingCard"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <h4 className="pricingPlan" itemProp="name">
                Basic Plan
              </h4>

              <div className="pricingValue">$39</div>

              <p className="pricingSubtitle" itemProp="description">
                Basic features for up to 10 Users
              </p>

              <div className="pricingCtaWrap my-[30px]">
                <GradientButton
                  href="/contact"
                  showArrow
                  className="w-full py-[10px] text-[17px] font-[600]"
                  aria-label="Contact us about the Basic Plan in Dhaka"
                >
                  Get In Touch
                </GradientButton>
              </div>

              <h5 className="pricingFeatureLabel mb-[10px]">Features:</h5>
              <p className="pricingFeatureText">
                Everything in our free plan it’s included with all premium
                packages.
              </p>

              {/* Invisible price + GEO semantics (no UI change) */}
              <meta itemProp="priceCurrency" content={CURRENCY} />
              <meta itemProp="price" content="39" />
              <link itemProp="url" href="/contact" />
              <span
                itemProp="areaServed"
                itemScope
                itemType="https://schema.org/Place"
                hidden
              >
                <meta itemProp="name" content="Dhaka" />
              </span>
            </article>
          </div>

          {/* Card 2 */}
          <div className="lg:w-[33%] md:w-[50%] w-full">
            <article
              className="pricingCard"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <h4 className="pricingPlan" itemProp="name">
                Standard Plan
              </h4>

              <div className="pricingValue">$49</div>

              <p className="pricingSubtitle" itemProp="description">
                Basic features for up to 10 Users
              </p>

              <div className="pricingCtaWrap my-[30px]">
                <GradientButton
                  href="/contact"
                  showArrow
                  className="w-full py-[10px] text-[17px] font-[600]"
                  aria-label="Contact us about the Standard Plan in Dhaka"
                >
                  Get In Touch
                </GradientButton>
              </div>

              <h5 className="pricingFeatureLabel mb-[10px]">Features:</h5>
              <p className="pricingFeatureText">
                Everything in our free plan it’s included with all premium
                packages.
              </p>

              <meta itemProp="priceCurrency" content={CURRENCY} />
              <meta itemProp="price" content="49" />
              <link itemProp="url" href="/contact" />
              <span
                itemProp="areaServed"
                itemScope
                itemType="https://schema.org/Place"
                hidden
              >
                <meta itemProp="name" content="Dhaka" />
              </span>
            </article>
          </div>

          {/* Card 3 */}
          <div className="lg:w-[33%] md:w-[50%] w-full">
            <article
              className="pricingCard"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <h4 className="pricingPlan" itemProp="name">
                Premium Plan
              </h4>

              <div className="pricingValue">$59</div>

              <p className="pricingSubtitle" itemProp="description">
                Basic features for up to 10 Users
              </p>

              <div className="pricingCtaWrap my-[30px]">
                <GradientButton
                  href="/contact"
                  showArrow
                  className="w-full py-[10px] text-[17px] font-[600]"
                  aria-label="Contact us about the Premium Plan in Dhaka"
                >
                  Get In Touch
                </GradientButton>
              </div>

              <h5 className="pricingFeatureLabel mb-[10px]">Features:</h5>
              <p className="pricingFeatureText">
                Everything in our free plan it’s included with all premium
                packages.
              </p>

              <meta itemProp="priceCurrency" content={CURRENCY} />
              <meta itemProp="price" content="59" />
              <link itemProp="url" href="/contact" />
              <span
                itemProp="areaServed"
                itemScope
                itemType="https://schema.org/Place"
                hidden
              >
                <meta itemProp="name" content="Dhaka" />
              </span>
            </article>
          </div>
        </div>
      </div>

      {/* —— Section-level JSON-LD (OfferCatalog) —— */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
    </section>
  );
}
