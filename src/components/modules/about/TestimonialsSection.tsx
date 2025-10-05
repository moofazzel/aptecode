"use client";

import MotionCard from "@/components/ui/MotionCard";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

const ITEMS: Testimonial[] = [
  {
    name: "Daniel Joseph",
    role: "WRITER",
    quote:
      "Excellent service and professional development. Aptecode delivered exactly what we needed for our business.",
    avatar: "/img/about/author.png",
  },
  {
    name: "Victoria Madison",
    role: "BUSINESS OWNER",
    quote:
      "Professional team that understands our business needs. Great communication throughout the project.",
    avatar: "/img/about/author.png",
  },
  {
    name: "Nicholas Thomas",
    role: "MARKETING MANAGER",
    quote:
      "Outstanding web development services. Our website performance improved significantly after working with Aptecode.",
    avatar: "/img/about/author.png",
  },
];

/** ---- Timing control (same structure as other sections) ---- */
const BASE = 0.15;
const STEP = 0.12;

export default function TestimonialsSection() {
  return (
    <section className="relative py-[30px] md:py-24">
      <div className="max-w-[1405px] mx-auto px-4 md:px-6">
        {/* Eyebrow */}
        <MotionCard delay={BASE + STEP * 0} direction="left">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="lrd" />
            <h3
              className="text-xs md:text-sm font-semibold uppercase 
                bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
                bg-clip-text text-transparent h-[30px] relative z-50"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Testimonials
            </h3>
            <span className="rrd" />
          </div>
        </MotionCard>

        {/* Title */}
        <MotionCard delay={BASE + STEP * 1} direction="left">
          <h2 className="text-center text-3xl md:text-5xl font-[700] tracking-tight text-neutral-900 lg:mb-[150px] mb-[113px]">
            Clients Feedback
          </h2>
        </MotionCard>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          {ITEMS.map((t, i) => (
            <MotionCard
              key={i}
              delay={BASE + STEP * (2 + i)} // stagger after title
              direction="up"
            >
              <article className="relative overflow-visible bg-[#f2f3f4] px-6 pb-[60px] pt-16 text-center md:px-10 mb-[65px] lg:mb-0">
                {/* Avatar (overlapping) */}
                <div className="absolute lg:-top-[33%] left-1/2 -translate-x-1/2 -top-[22%]">
                  <div className="rounded-full lg:border-10 lg:border-white">
                    <img
                      src={t.avatar}
                      alt={`${t.name} avatar`}
                      className="h-[130px] w-[130px] rounded-full lg:object-cover border-10 border-white lg:border-0 "
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="mt-[20px] text-xl md:text-2xl font-[700] text-neutral-900">
                  {t.name}
                </h3>

                {/* Role */}
                <p className="mt-3 text-[12px] font-[700] uppercase tracking-wider text-[#a868fa]">
                  {t.role}
                </p>

                {/* Quote */}
                <p className="mx-auto mt-5 max-w-md leading-relaxed text-[#74787c]">
                  {t.quote}
                </p>
              </article>
            </MotionCard>
          ))}
        </div>
      </div>

      {/* Optional decorative dot */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[18%] top-40 hidden h-2 w-2 rounded-full bg-indigo-500 md:block"
      />
    </section>
  );
}
