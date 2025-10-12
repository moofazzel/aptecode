// components/ServicesCard.tsx
"use client";

import { KeyboardEvent, useState } from "react";
import ReactCardFlip from "react-card-flip";
import type { IconType } from "react-icons";
import { FaBitcoin, FaCode, FaLaptopCode } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import "./serviceCard.css";

/** Service item type */
type ServiceItem = {
  title: string;
  href: string;
  imgSrc: string;
  icon?: IconType;
  backTitle: string;
  backText: string;
  highlight?: boolean;
};

/** Data */
const SERVICES: ServiceItem[] = [
  {
    title: "WEB DEVELOPMENT",
    href: "/web-development",
    imgSrc: "/img/service/sr1.jpg",
    icon: FaLaptopCode,
    backTitle: "Custom Websites that Convert",
    backText:
      "We build blazing-fast, SEO-friendly websites using Next.js/Tailwind with pixel-perfect design and strong on-page SEO foundations.",
  },
  {
    title: "WEB APPS",
    href: "/web-apps",
    imgSrc: "/img/service/sr2.jpg",
    icon: FaCode,
    backTitle: "Production Web Apps",
    backText:
      "From dashboards to portals, we ship secure, scalable apps with auth, data layers, and clean UI—ready for growth.",
  },
  {
    title: "MODERATION",
    href: "/moderation",
    imgSrc: "/img/service/sr3.jpg",
    icon: FaShieldHalved,
    highlight: true,
    backTitle: "Human + AI Moderation",
    backText:
      "Keep your platform healthy with proactive policy, smart tooling, and human-in-the-loop workflows tailored to your community.",
  },
  {
    title: "CRYPTO WEBSITES",
    href: "/crypto-websites",
    imgSrc: "/img/service/sr4.jpg",
    icon: FaBitcoin,
    backTitle: "Crypto/NFT Landing & Dapps",
    backText:
      "Landing pages, token/NFT sites, and dapps—clear messaging, fast performance, and compliance-aware content.",
  },
];

type ServiceFlipCardProps = ServiceItem;

function ServiceFlipCard({
  title,
  href,
  imgSrc,
  icon: Icon,
  backTitle,
  backText,
  highlight = false,
}: ServiceFlipCardProps) {
  // Only hover & focus control the flip.
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const isFlipped = hovered || focused;

  // Handlers
  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  // Double-click resets to front immediately
  const onDoubleClick = () => {
    setHovered(false);
    setFocused(false);
  };

  // Allow keyboard users to flip via focus; Enter/Space shouldn’t toggle (per request)
  const onKeyDownWrapper = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setHovered(false);
      setFocused(false);
    }
  };

  return (
    <div className="w-full lg:w-[25%] md:w-[50%] sm:w-[50%]">
      <div
        className={`serviceCard m-3 ${
          highlight ? "serviceCard--highlight" : ""
        }`}
      >
        <h4
          className={[
            "serviceCard__title",
            highlight ? "serviceCard__title--accent" : "",
          ].join(" ")}
        >
          <a href={href} className="sttl">
            {title}
          </a>
        </h4>

        <div
          className="serviceCard__thumb relative"
          role="button"
          tabIndex={0}
          aria-label={`${title.replace("/", "")} card`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={onFocus}
          onBlur={onBlur}
          onDoubleClick={onDoubleClick}
          onKeyDown={onKeyDownWrapper}
        >
          <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="vertical"
            containerClassName="flip-container"
          >
            {/* FRONT */}
            <div key="front" className="flip-face front">
              <img
                src={imgSrc}
                alt={title.replace("/", "")}
                className="serviceCard__img"
              />
              {Icon ? (
                <div className="serviceCard__icon">
                  <Icon className="text-4xl text-[#74787C]" />
                </div>
              ) : null}
            </div>

            {/* BACK */}
            <div
              key="back"
              className="flip-face back flex flex-col justify-between"
            >
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {backTitle}
                </h3>
                <p className="text-[15px] leading-6 text-white/80">
                  {backText}
                </p>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  );
}

export default function ServicesCard() {
  return (
    <section className="services md:py-[90px] py-[60px]">
      <div className="mx-auto max-w-[1405px] px-[15px] md:px-0">
        <div className="flex flex-wrap">
          {SERVICES.map((s, i) => (
            <ServiceFlipCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
