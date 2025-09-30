// components/TestimonialsSection.tsx

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string; // /public path or remote (configure next.config.ts)
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

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-[1405px] mx-auto  px-4 md:px-6">
        {/* Eyebrow */}

        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="lrd" />

          <h3
            className="text-xs md:text-sm font-semibold uppercase 
      bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
      bg-clip-text text-transparent  h-[30px] relative z-50"
            style={{ WebkitTextFillColor: "transparent" }} // Safari fix
          >
            Testimonials
          </h3>
          <span className="rrd" />
        </div>
        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-[150px]">
          Clients Feedback
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          {ITEMS.map((t, i) => (
            <article
              key={i}
              className="relative overflow-visible  bg-[#f2f3f4] px-6 pb-[60px] pt-16 text-center md:px-10"
            >
              {/* Avatar (overlapping) */}
              <div className="absolute -top-[33%] left-1/2 -translate-x-1/2">
                <div className="rounded-full border-10 border-white ">
                  <img
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    className="h-[130px] w-[130px] rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="mt-[20px] text-xl md:text-2xl font-semibold text-neutral-900">
                {t.name}
              </h3>

              {/* Role */}
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-wider text-indigo-600">
                {t.role}
              </p>

              {/* Quote */}
              <p className="mx-auto mt-5 max-w-md leading-relaxed text-neutral-600">
                {t.quote}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Optional decorative purple dot (as in screenshot) */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[18%] top-40 hidden h-2 w-2 rounded-full bg-indigo-500 md:block"
      />
    </section>
  );
}
