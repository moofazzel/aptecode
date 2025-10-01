// components/ProcessSection.tsx
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

type Step = {
  id: string; // "01", "02", ...
  title: string;
  desc: string;
  href?: string;
};

const STEPS: Step[] = [
  {
    id: "01",
    title: "Discovery & Planning",
    desc: "We analyze your requirements and create a strategic roadmap for your digital project.",
    href: "#",
  },
  {
    id: "02",
    title: "Development & Testing",
    desc: "Our expert team builds your solution using modern technologies and rigorous testing.",
    href: "#",
  },
  {
    id: "03",
    title: "Launch & Support",
    desc: "We deploy your project and provide ongoing support for continued success.",
    href: "#",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative pb-16 lg:pb-[96px] md:py-24">
      {/* Watermark word behind the heading (optional) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 lg:top-[97px]  top-[65px] flex justify-center text-[18vw] md:text-[11vw] font-extrabold tracking-tight text-black/5 select-none lg_txt"
      >
        APTECODE
      </div>

      <div className=" mx-auto max-w-[1405px] px-4 md:px-6">
        {/* Eyebrow label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="lrd" />

          <h3
            className="text-xs md:text-sm font-semibold uppercase 
      bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
      bg-clip-text text-transparent  h-[30px] relative z-50"
            style={{ WebkitTextFillColor: "transparent" }} // Safari fix
          >
            Work Process
          </h3>
          <span className="rrd" />
        </div>

        {/* Title */}
        <h2 className="relative z-10 text-center text-3xl lg:text-[48px] font-[700] tracking-tight text-[#11151c]">
          Our Development Process
          <br className="hidden sm:block" />
          <span className="block">For Digital Success</span>
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          {STEPS.map((step) => (
            <article
              key={step.id}
              className=" bg-[#f2f3f4] p-8 md:p-10 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
            >
              {/* Number pill */}
              <div className="mb-6 inline-flex items-center justify-center rounded-xl border border-[#a868fa] px-4 py-2 text-[#a868fa] h-[40px] w-[60px]">
                <span className="text-[16px] font-medium">{step.id}</span>
              </div>

              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[#74787c] leading-relaxed">{step.desc}</p>

              {/* Read more */}
              <div className="mt-6">
                <Link
                  href={step.href || "#"}
                  className="group flex items-center gap-2 text-[#a868fa] font-[600] text-[16px] "
                >
                  Read More
                  <FaChevronRight
                    className="h-3 w-3 mt-[4px]"
                    aria-hidden="true"
                  />
                  {/* <span className="transition-transform group-hover:translate-x-0.5">
                  
                  </span> */}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
