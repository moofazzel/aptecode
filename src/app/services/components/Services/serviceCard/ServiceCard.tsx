// src/components/ServicesCard.tsx
"use client";

import { FaArrowRight, FaBitcoin, FaCode, FaLaptopCode } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import "./serviceCard.css";

export default function ServicesCard() {
  // ——— Invisible JSON-LD (no UI change) ———
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Web Development",
          url: "/services/web-development",
          image: "/img/service/sr1.jpg",
          areaServed: { "@type": "Place", name: "Dhaka" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Web Apps",
          url: "/services/web-apps",
          image: "/img/service/sr2.jpg",
          areaServed: { "@type": "Place", name: "Dhaka" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Moderation",
          url: "/services/moderation",
          image: "/img/service/sr3.jpg",
          areaServed: { "@type": "Place", name: "Dhaka" },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Crypto Websites",
          url: "/services/crypto-websites",
          image: "/img/service/sr4.jpg",
          areaServed: { "@type": "Place", name: "Dhaka" },
        },
      },
    ],
  };

  return (
    <section className="services md:py-[90px] py-[60px]">
      <div className="mx-auto max-w-[1405px] px-[15px] md:px-0">
        <div className="flex flex-wrap ">
          {/* Item 1 */}
          <div className="w-full lg:w-[25%] md:w-[50%] sm:w-[50%]">
            <div
              className="serviceCard m-3"
              itemScope
              itemType="https://schema.org/Service"
            >
              <h4 className="serviceCard__title" itemProp="name">
                <a
                  href="/services/web-development"
                  className="sttl"
                  itemProp="url"
                  aria-label="Web Development service in Dhaka"
                >
                  WEB DEVELOPMENT
                </a>
              </h4>

              <div className="serviceCard__thumb">
                <span className="serviceCard__overlay" />
                <div className="trans_shape">
                  <img src="/img/service/shp.png" alt="shape" />
                </div>

                {/* keep your original image & classes to preserve effects */}
                <img
                  src="/img/service/sr1.jpg"
                  alt="Web Development — responsive websites for SMBs in Dhaka"
                  className="serviceCard__img"
                  itemProp="image"
                />

                <div className="serviceCard__icon">
                  <FaLaptopCode className="text-4xl  text-[#74787C]" />
                </div>

                <a
                  href="/services/web-development"
                  className="serviceCard__btn"
                  aria-label="Read details about Web Development in Dhaka"
                >
                  <span>Read Details</span>
                  <FaArrowRight className="serviceCard__btnIcon rotate" />
                </a>
              </div>

              {/* Invisible GEO semantics */}
              <meta itemProp="serviceType" content="Web Development" />
              <span
                itemProp="areaServed"
                itemScope
                itemType="https://schema.org/Place"
                hidden
              >
                <meta itemProp="name" content="Dhaka" />
              </span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="w-full lg:w-[25%] md:w-[50%] sm:w-[50%]">
            <div
              className="serviceCard m-3"
              itemScope
              itemType="https://schema.org/Service"
            >
              <h4 className="serviceCard__title" itemProp="name">
                <a
                  href="/services/web-apps"
                  className="sttl"
                  itemProp="url"
                  aria-label="Web Apps development service in Dhaka"
                >
                  WEB APPS
                </a>
              </h4>

              <div className="serviceCard__thumb">
                <span className="serviceCard__overlay" />
                <div className="trans_shape">
                  <img src="/img/service/shp.png" alt="shape" />
                </div>

                <img
                  src="/img/service/sr2.jpg"
                  alt="High-performance web apps with clean UX — Dhaka"
                  className="serviceCard__img"
                  itemProp="image"
                />

                <div className="serviceCard__icon">
                  <FaCode className="text-4xl  text-[#74787C]" />
                </div>

                <a
                  href="/services/web-apps"
                  className="serviceCard__btn flex items-center gap-2"
                  aria-label="Read details about Web Apps in Dhaka"
                >
                  <span>Read Details</span>
                  <FaArrowRight className="text-sm rotate" />
                </a>
              </div>

              <meta itemProp="serviceType" content="Web Apps" />
              <span
                itemProp="areaServed"
                itemScope
                itemType="https://schema.org/Place"
                hidden
              >
                <meta itemProp="name" content="Dhaka" />
              </span>
            </div>
          </div>

          {/* Item 3 (highlight) */}
          <div className="w-full lg:w-[25%] md:w-[50%] sm:w-[50%]">
            <div
              className="serviceCard serviceCard--highlight m-3 "
              itemScope
              itemType="https://schema.org/Service"
            >
              <h4
                className="serviceCard__title serviceCard__title--accent"
                itemProp="name"
              >
                <a
                  href="/services/moderation"
                  className="sttl"
                  itemProp="url"
                  aria-label="Moderation service in Dhaka"
                >
                  MODERATION
                </a>
              </h4>

              <div className="serviceCard__thumb">
                <span className="serviceCard__overlay" />
                <div className="trans_shape">
                  <img src="/img/service/shp.png" alt="shape" />
                </div>

                <img
                  src="/img/service/sr3.jpg"
                  alt="Content moderation and safety operations — Dhaka"
                  className="serviceCard__img"
                  itemProp="image"
                />

                <div className="serviceCard__icon">
                  <FaShieldHalved className="text-4xl  text-[#74787C]" />
                </div>

                <a
                  href="/services/moderation"
                  className="serviceCard__btn flex items-center gap-2"
                  aria-label="Read details about Moderation in Dhaka"
                >
                  <span>Read Details</span>
                  <FaArrowRight className="text-sm rotate" />
                </a>
              </div>

              <meta itemProp="serviceType" content="Moderation" />
              <span
                itemProp="areaServed"
                itemScope
                itemType="https://schema.org/Place"
                hidden
              >
                <meta itemProp="name" content="Dhaka" />
              </span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="w-full lg:w-[25%] md:w-[50%] sm:w-[50%]">
            <div
              className="serviceCard m-3"
              itemScope
              itemType="https://schema.org/Service"
            >
              <h4 className="serviceCard__title" itemProp="name">
                <a
                  href="/services/crypto-websites"
                  className="sttl"
                  itemProp="url"
                  aria-label="Crypto Websites service in Dhaka"
                >
                  CRYPTO WEBSITES
                </a>
              </h4>

              <div className="serviceCard__thumb">
                <span className="serviceCard__overlay" />
                <div className="trans_shape">
                  <img src="/img/service/shp.png" alt="shape" />
                </div>

                <img
                  src="/img/service/sr4.jpg"
                  alt="Crypto project websites and token landing pages — Dhaka"
                  className="serviceCard__img"
                  itemProp="image"
                />

                <div className="serviceCard__icon">
                  <FaBitcoin className="text-4xl  text-[#74787C]" />
                </div>

                <a
                  href="/services/crypto-websites"
                  className="serviceCard__btn flex items-center gap-2"
                  aria-label="Read details about Crypto Websites in Dhaka"
                >
                  <span>Read Details</span>
                  <FaArrowRight className="text-sm rotate" />
                </a>
              </div>

              <meta itemProp="serviceType" content="Crypto Websites" />
              <span
                itemProp="areaServed"
                itemScope
                itemType="https://schema.org/Place"
                hidden
              >
                <meta itemProp="name" content="Dhaka" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD (invisible) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </section>
  );
}
