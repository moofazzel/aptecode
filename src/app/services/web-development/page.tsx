// src/app/web-development/page.tsx
"use client";

import Image from "next/image";
import CtaSection from "../components/Services/ctasection";

// -----------------------------
// Types
// -----------------------------
type Stat = { label: string; value: string; hint?: string };
type Feature = { title: string; desc: string };
type Step = { step: number; title: string; desc: string };
type Tech = { name: string; icon: string };
type CaseStudy = {
  title: string;
  result: string;
  summary: string;
  img: string;
  stats: { label: string; value: string }[];
};
type FAQ = { q: string; a: string };

// Accent color: Tailwind Indigo; adjust in your Tailwind config if needed

// -----------------------------
// Data (static)
// -----------------------------
const STATS: Stat[] = [
  { label: "Delivered Projects", value: "120+" },
  {
    label: "Avg. Lighthouse Score",
    value: "95+",
    hint: "Performance/Best-Practices",
  },
  { label: "Release Velocity", value: "2–3 wks", hint: "MVP timeline" },
  { label: "Client Retention", value: "92%" },
];

const FEATURES: Feature[] = [
  {
    title: "Modern Stacks, Real Speed",
    desc: "Next.js, React 19 patterns, API Routes, edge-ready caching, and image/CDN optimization for sub-second loads.",
  },
  {
    title: "Clean Architecture",
    desc: "Feature-based folders, typed contracts, and DX-friendly patterns for maintainable, scalable codebases.",
  },
  {
    title: "SEO + GEO Ready",
    desc: "Structured metadata, sitemap, robots, OG tags, and Generative Engine Optimization baked in.",
  },
  {
    title: "Accessibility First",
    desc: "Semantics, focus management, keyboard nav, and color-contrast standards (WCAG 2.1 AA).",
  },
  {
    title: "Analytics & Insights",
    desc: "Plausible/GA4, conversion tracking, and event funnels to inform roadmap decisions.",
  },
  {
    title: "Security & Reliability",
    desc: "Input validation, rate limiting, auth patterns, and production-grade error boundaries.",
  },
];

const PROCESS: Step[] = [
  {
    step: 1,
    title: "Discovery & Scope",
    desc: "Goals, audience, success metrics, and content inventory.",
  },
  {
    step: 2,
    title: "IA & UX Wireframes",
    desc: "Sitemaps, flows, and low-fi wireframes for feedback loops.",
  },
  {
    step: 3,
    title: "UI & Components",
    desc: "Design tokens, states, and interactive prototypes for sign-off.",
  },
  {
    step: 4,
    title: "Build & Integrate",
    desc: "Next.js pages/routes, APIs, CMS, payments, and 3P services.",
  },
  {
    step: 5,
    title: "QA & Lighthouse",
    desc: "Perf, a11y, SEO audits; cross-browser and device testing.",
  },
  {
    step: 6,
    title: "Launch & Iterate",
    desc: "Release plan, observability, and a 30-day stabilization runway.",
  },
];

const TECHS: Tech[] = [
  { name: "Next.js", icon: "/img/tech/next.svg" },
  { name: "React", icon: "/img/tech/react.svg" },
  { name: "TypeScript", icon: "/img/tech/ts.svg" },
  { name: "Tailwind CSS", icon: "/img/tech/tailwind.svg" },
  { name: "Node.js", icon: "/img/tech/node.svg" },
  { name: "Prisma", icon: "/img/tech/bootstrap.svg" },
  { name: "PostgreSQL", icon: "/img/tech/postgres.svg" },
  { name: "MongoDB", icon: "/img/tech/mongo.svg" },
  { name: "Stripe", icon: "/img/tech/stripe.svg" },
  { name: "Vercel", icon: "/img/tech/vercel.svg" },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "DTC Retail: Conversion-Focused Storefront",
    result: "41% lift in conversion",
    summary:
      "Rebuilt storefront with Next.js App Router, edge caching, image optimization, and a streamlined checkout.",
    img: "/images/cases/retail.jpg",
    stats: [
      { label: "Page Speed", value: "0.9s LCP" },
      { label: "Conversion", value: "+41%" },
      { label: "AOV", value: "+18%" },
    ],
  },
  {
    title: "SaaS Marketing Site: MQL Growth",
    result: "3× more MQLs",
    summary:
      "Componentized sections for rapid landing page experiments and integrated analytics for funnel visibility.",
    img: "/images/cases/saas.jpg",
    stats: [
      { label: "MQLs", value: "3×" },
      { label: "Bounce", value: "-29%" },
      { label: "Time on Page", value: "+35%" },
    ],
  },
];

const PRICING_MODELS = [
  {
    title: "Fixed-Scope Project",
    desc: "Clear deliverables and timeline. Best for a defined site or re-platform.",
    points: [
      "Milestone billing",
      "Design → Build → Launch",
      "2–8 weeks typical",
    ],
  },
  {
    title: "Monthly Product Partner",
    desc: "Ongoing roadmap building with a dedicated team.",
    points: ["Backlog ownership", "A/B testing & CRO", "Continuous delivery"],
  },
  {
    title: "Day-Rate Sprints",
    desc: "Short, focused sprints to ship fast or unblock teams.",
    points: ["1–2 week bursts", "Timeboxed outcomes", "Great for experiments"],
  },
];

const FAQS: FAQ[] = [
  {
    q: "How long does a typical project take?",
    a: "Marketing sites ship in 2–6 weeks depending on scope. Apps or stores can take 4–12 weeks.",
  },
  {
    q: "Do you support CMS integrations?",
    a: "Yes — we work with headless CMS (Sanity, Contentful), or minimal file-based MDX for performance.",
  },
  {
    q: "Will you improve my Lighthouse scores?",
    a: "We design for performance by default. 90–100 on Performance/Best-Practices/SEO is our standard bar.",
  },
  {
    q: "What about ongoing support?",
    a: "We offer retainers and monthly partner plans for roadmap execution, optimizations, and experiments.",
  },
];

// GEO constant (non-visual)
const CITY = "Dhaka";

// -----------------------------
// Page
// -----------------------------
export default function WebDevelopmentServicePage() {
  // ——— JSON-LD (invisible) ———
  // 1) WebPage + Service entity for this page
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Web Development",
    description:
      "We build reliable, high-performance web experiences for scale. Production-grade builds with performance, accessibility, and SEO baked in.",
    mainEntity: {
      "@type": "Service",
      name: "Web Development",
      serviceType: "Web Development",
      areaServed: { "@type": "Place", name: CITY },
      // You can add "provider" later when your Organization schema lives site-wide
    },
  };

  // 2) Breadcrumbs (invisible, no visible UI added)
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Web Development",
        item: "/services/web-development",
      },
    ],
  };

  // 3) FAQPage (built from your FAQS array)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main
      className="bg-white text-zinc-800"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* <PageHeader ... /> */}

      <TrustStats />
      <FeatureGrid />
      <ProcessTimeline />
      <TechStrip />
      {/* <CaseStudies /> */}
      {/* <Pricing /> */}
      {/* <PricingSection /> */}
      <Faqs />
      {/* <CTA /> */}
      <CtaSection
        titleTop="Have Any Projects On Minds!"
        titleBottom="Contact Us"
        ctaText="Make Appointment"
        ctaHref="/contact"
      />

      {/* ——— Invisible JSON-LD blocks (additive; no UI impact) ——— */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}

// -----------------------------
// Components
// -----------------------------

function TrustStats() {
  return (
    <section className="bg-white border-b border-zinc-200">
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        {/* visual band */}
        <div
          className="my-8 overflow-hidden rounded border border-zinc-200 bg-[url('/img/service/sr1.jpg')] bg-cover bg-center min-h-[640px]"
          role="img"
          aria-label="Web development hero — project highlights"
        />
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <li
              key={s.label}
              className="rounded border border-zinc-200 p-6 bg-white shadow-sm"
              itemScope
              itemType="https://schema.org/QuantitativeValue"
            >
              <div
                className="text-3xl font-semibold tracking-tight text-zinc-900"
                itemProp="value"
              >
                {s.value}
              </div>
              <div className="mt-1 text-md text-zinc-500" itemProp="name">
                {s.label}
              </div>
              {s.hint && (
                <div className="mt-2 text-xs text-zinc-400" aria-hidden="true">
                  {s.hint}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <header className="max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-zinc-900">
            What you get
          </h2>
          <p className="mt-3 text-zinc-600">
            Production-grade builds with performance, accessibility, and SEO
            baked in. Modular components and typed APIs for teams that want to
            move fast—without breaking quality.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <li
              key={f.title}
              className="rounded-lg bg-white border border-zinc-200 p-6 transition duration-300 hover:shadow-lg "
              itemScope
              itemType="https://schema.org/Offer"
            >
              <h3 className="text-xl font-bold text-zinc-900" itemProp="name">
                {f.title}
              </h3>
              <p
                className="mt-2 text-zinc-600 text-md leading-relaxed"
                itemProp="description"
              >
                {f.desc}
              </p>
              {/* GEO signal tied to features (invisible) */}
              <span
                itemProp="areaServed"
                itemScope
                itemType="https://schema.org/Place"
                hidden
              >
                <meta itemProp="name" content={CITY} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-zinc-900">
          How we build (our process)
        </h2>
        <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROCESS.map((s) => (
            <li
              key={s.step}
              className="relative rounded border border-zinc-200 bg-white p-6"
              itemScope
              itemType="https://schema.org/HowToStep"
            >
              <span className="absolute -top-3 -left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white text-md font-semibold shadow">
                {s.step}
              </span>
              <h3
                className="pl-8 text-xl font-bold text-zinc-900"
                itemProp="name"
              >
                {s.title}
              </h3>
              <p
                className="pl-8 mt-2 text-zinc-600 text-md leading-relaxed"
                itemProp="text"
              >
                {s.desc}
              </p>
              {/* GEO signal for service delivery */}
              <span
                itemProp="areaServed"
                itemScope
                itemType="https://schema.org/Place"
                hidden
              >
                <meta itemProp="name" content={CITY} />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TechStrip() {
  return (
    <section className="bg-zinc-50 border-y border-zinc-200">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <h3 className="text-zinc-800 font-medium">Tech we love</h3>
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-6 items-center">
          {TECHS.map((t) => (
            <div key={t.name} className="flex items-center justify-center">
              {/* Put your real logos in /public/images/tech */}
              <Image
                src={t.icon}
                alt={t.name}
                width={56}
                height={56}
                className="opacity-80 hover:opacity-100 transition"
              />
              {/* small, invisible hint that these tools are used in Dhaka projects as well */}
              <meta itemProp="areaServed" content={CITY} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="bg-white" id="work">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
            Selected results
          </h2>
          <a
            href="#contact"
            className="text-md text-indigo-600 hover:text-indigo-700 font-medium"
            aria-label="Discuss replicating these results for your project in Dhaka"
          >
            Let’s replicate this →
          </a>
        </div>

        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((c) => (
            <li
              key={c.title}
              className="overflow-hidden rounded-3xl border border-zinc-200 bg-white hover:shadow-xl transition"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-indigo-600 font-semibold">
                  {c.result}
                </div>
                <h3
                  className="mt-1 text-lg font-semibold text-zinc-900"
                  itemProp="name"
                >
                  {c.title}
                </h3>
                <p className="mt-2 text-md text-zinc-600" itemProp="abstract">
                  {c.summary}
                </p>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  {c.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-zinc-200 p-3 text-center"
                    >
                      <div className="text-base font-semibold text-zinc-900">
                        {s.value}
                      </div>
                      <div className="text-xs text-zinc-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* GEO tag (invisible) */}
              <span
                itemProp="spatialCoverage"
                itemScope
                itemType="https://schema.org/Place"
                hidden
              >
                <meta itemProp="name" content={CITY} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-zinc-50" id="pricing">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
          Engagement options
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_MODELS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-lg transition"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <h3
                className="text-lg font-semibold text-zinc-900"
                itemProp="name"
              >
                {p.title}
              </h3>
              <p className="mt-2 text-md text-zinc-600" itemProp="description">
                {p.desc}
              </p>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-md text-zinc-700"
                  >
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    {pt}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white text-md font-medium hover:bg-indigo-700 transition"
                aria-label={`Get a tailored estimate for ${p.title} in ${CITY}`}
              >
                Get a tailored estimate
              </a>

              {/* GEO semantics for offers */}
              <span
                itemProp="areaServed"
                itemScope
                itemType="https://schema.org/Place"
                hidden
              >
                <meta itemProp="name" content={CITY} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-zinc-900">
          FAQs
        </h2>
        <div className="mt-8 divide-y divide-zinc-200 rounded border border-zinc-200 bg-white">
          {FAQS.map((f, i) => (
            <div key={f.q} itemScope itemType="https://schema.org/Question">
              <details className="group open:bg-zinc-50">
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5">
                  <span
                    className="text-zinc-900 text-xl font-medium"
                    itemProp="name"
                  >
                    {f.q}
                  </span>
                  <span className="ml-6 inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
                <div
                  className="px-6 pb-6 text-md text-zinc-600 leading-relaxed"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <span itemProp="text">{f.a}</span>
                </div>
              </details>
              {i < FAQS.length - 1 && <div className="h-px bg-zinc-200" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 right-16 h-64 w-64 bg-indigo-600/10 blur-3xl" />
      </div>
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="rounded border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mt-3 text-zinc-300">
            Share your goals and content. We’ll respond with a mini-scope,
            timeline, and implementation plan—free.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:info@aptecode.com"
              className="inline-flex items-center justify-center bg-indigo-600 px-5 py-3 text-white text-md font-medium hover:bg-indigo-700 transition"
              aria-label={`Email us your brief — Web Development in ${CITY}`}
            >
              Email us your brief
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center  bg-gray-700 px-5 py-3 text-white text-md font-medium hover:bg-white/20 transition"
              aria-label={`Get started now — Web Development in ${CITY}`}
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
