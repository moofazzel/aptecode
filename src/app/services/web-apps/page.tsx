// app/services/web-apps/page.tsx
"use client";

import Image from "next/image";
import { Fragment } from "react";
import CtaSection from "../components/Services/ctasection";

// -----------------------------
// Types (unchanged)
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

// --------------------------------
// Data (unchanged content)
// --------------------------------
const STATS: Stat[] = [
  { label: "Apps Shipped", value: "60+" },
  { label: "Avg. Uptime (12m)", value: "99.95%", hint: "monitored" },
  { label: "Time to First Release", value: "3–6 wks", hint: "MVP" },
  { label: "Active Users Served", value: "2M+", hint: "cumulative" },
];

const FEATURES: Feature[] = [
  {
    title: "Production-Ready Architecture",
    desc: "App Router with Server Components, API Routes, typed contracts, and separation of concerns for long-term maintainability.",
  },
  {
    title: "Auth & Access Control",
    desc: "JWT/session, role-based access (RBAC), SSO, 2FA, and audit trails with secure data boundaries for multi-tenant apps.",
  },
  {
    title: "Real-time & Offline",
    desc: "WebSockets/SSE for live updates, optimistic UI, background sync, and PWA/offline support for robust UX.",
  },
  {
    title: "Data & Integrations",
    desc: "Postgres/Mongo with Prisma, caching via Redis, file/image/CDN flows, and third-party integrations (Stripe, SendGrid, etc.).",
  },
  {
    title: "Observability",
    desc: "Structured logs, metrics, tracing, error boundaries, and alerting so you see issues before users do.",
  },
  {
    title: "CRO & Experiments",
    desc: "Feature flags, A/B tests, and analytics funnels to iterate toward better activation, retention, and revenue.",
  },
];

const PROCESS: Step[] = [
  {
    step: 1,
    title: "Requirements & Domain Modeling",
    desc: "User roles, entities, permissions, KPIs, and non-functional requirements.",
  },
  {
    step: 2,
    title: "UX Flows & Prototyping",
    desc: "Auth flows, dashboards, data tables, forms, settings — rapid prototyping and sign-off.",
  },
  {
    step: 3,
    title: "Architecture & Data Design",
    desc: "Schemas, API contracts, caching, queues, and multi-tenant boundaries.",
  },
  {
    step: 4,
    title: "Implementation",
    desc: "Next.js + TypeScript app, server actions/APIs, integrations, testing, and seed data.",
  },
  {
    step: 5,
    title: "Hardening",
    desc: "Security pass, load tests, a11y, Lighthouse, observability wiring, and runbooks.",
  },
  {
    step: 6,
    title: "Launch & Iterate",
    desc: "Rollout strategy, SLOs, incident plan, experiment backlog, and feedback loops.",
  },
];

const TECHS: Tech[] = [
  { name: "Next.js", icon: "/img/tech/next.svg" },
  { name: "React", icon: "/img/tech/react.svg" },
  { name: "TypeScript", icon: "/img/tech/ts.svg" },
  { name: "Tailwind CSS", icon: "/img/tech/tailwind.svg" },
  { name: "Node.js", icon: "/img/tech/node.svg" },
  { name: "Prisma", icon: "/img/tech/prisma.svg" },
  { name: "PostgreSQL", icon: "/img/tech/postgres.svg" },
  { name: "MongoDB", icon: "/img/tech/mongo.svg" },
  { name: "Redis", icon: "/img/tech/bootstrap.svg" }, // replace with /img/tech/redis.svg if available
  { name: "Vercel", icon: "/img/tech/vercel.svg" },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Marketplace: Multi-Tenant Web App",
    result: "Scaled to 300k MAU",
    summary:
      "Tenant-isolated data, role-based controls, and image/CDN flows. Real-time notifications and audit logs reduced support tickets by 47%.",
    img: "/images/cases/marketplace.jpg",
    stats: [
      { label: "MAU", value: "300k" },
      { label: "Uptime", value: "99.97%" },
      { label: "Tickets", value: "-47%" },
    ],
  },
  {
    title: "Ops Dashboard: Realtime + Offline",
    result: "↑ Task Throughput 2.4×",
    summary:
      "WebSockets + background sync + optimistic UI enabled field teams to continue working offline and sync when connectivity returned.",
    img: "/images/cases/ops.jpg",
    stats: [
      { label: "Throughput", value: "2.4×" },
      { label: "Error Rate", value: "-38%" },
      { label: "LCP", value: "1.1s" },
    ],
  },
];

const FAQS: FAQ[] = [
  {
    q: "What kinds of web apps do you build?",
    a: "Dashboards, CRMs, marketplaces, booking platforms, portals, internal tools, and partner apps with role-based access.",
  },
  {
    q: "How do you handle multi-tenant security?",
    a: "Tenant IDs in every query, per-tenant scoping at the ORM layer, row-level filters, and integration tests that assert isolation.",
  },
  {
    q: "Can you work with my existing backend?",
    a: "Yes. We can integrate with REST/GraphQL, add serverless APIs, or progressively refactor into a modular service architecture.",
  },
  {
    q: "What’s your testing approach?",
    a: "Unit, integration, and e2e where it counts (critical paths). We also wire observability to catch regressions early.",
  },
];

// GEO constant (non-visual)
const CITY = "Dhaka";

// -----------------------------
// Page
// -----------------------------
export default function WebAppsServicePage() {
  // ——— JSON-LD (invisible) ———
  // 1) WebPage + Service entity for this page
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Web Apps",
    description:
      "We design & build production-grade web applications — secure auth, real-time UX, offline resilience, and observability by default.",
    mainEntity: {
      "@type": "Service",
      name: "Web Apps",
      serviceType: "Web Apps",
      areaServed: { "@type": "Place", name: CITY },
    },
  };

  // 2) Breadcrumbs
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Web Apps",
        item: "/services/web-apps",
      },
    ],
  };

  // 3) FAQPage
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
      {/* HERO */}
      {/* <Hero /> */}

      {/* VISUAL + STATS */}
      <TrustStats />

      {/* VALUE */}
      <FeatureGrid />

      {/* ARCHITECTURE SNAPSHOT */}
      {/* <ArchSnapshot /> */}

      {/* PROCESS */}
      <ProcessTimeline />

      {/* TECH */}
      <TechStrip />

      {/* CASES (commented for parity; enable if needed) */}
      {/* <CaseStudies /> */}

      {/* PRICING — shared component */}
      {/* <PricingSection /> */}

      {/* FAQ */}
      <Faqs />

      {/* CTA */}
      {/* <CTA /> */}
      <CtaSection
        titleTop="Have Any Projects On Minds!"
        titleBottom="Contact Us"
        ctaText="Make Appointment"
        ctaHref="/contact"
      />

      {/* ——— Invisible JSON-LD blocks (no UI impact) ——— */}
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
// Components (additive semantics only)
// -----------------------------
function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28 relative">
        <span className="inline-block text-indigo-400/80 text-xs tracking-[0.24em] uppercase">
          Services
        </span>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight uppercase">
          Web Apps
        </h1>
        <p className="mt-5 max-w-3xl text-zinc-300 text-lg leading-relaxed">
          We design & build production-grade web applications — secure auth,
          real-time UX, offline resilience, and observability by default. The
          result: reliable apps that scale.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-indigo-600 px-5 py-3 text-white text-sm font-medium hover:bg-indigo-700 transition"
            aria-label={`See engagement options for Web Apps in ${CITY}`}
          >
            See Engagement Options
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white/10 px-5 py-3 text-white text-sm font-medium hover:bg-white/20 transition"
            aria-label={`Plan my Web Apps MVP — ${CITY}`}
          >
            Plan my MVP →
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustStats() {
  return (
    <section className="bg-white border-b border-zinc-200">
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        {/* Visual band */}
        <div
          className="my-8 overflow-hidden rounded border border-zinc-200 bg-[url('/img/service/sr1.jpg')] bg-cover bg-center min-h-[640px]"
          role="img"
          aria-label="Web apps hero — production-grade applications"
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
            Everything you need for a durable product: auth, data, performance,
            real-time updates, background jobs, and a component system that
            keeps shipping fast and safe.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <li
              key={f.title}
              className="rounded-lg bg-white border border-zinc-200 p-6 transition duration-300 hover:shadow-lg"
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
              {/* GEO signal */}
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

function ArchSnapshot() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-zinc-900">
          Reference Architecture (snapshot)
        </h2>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Diagram placeholder */}
          <div className="rounded-lg border border-zinc-200 p-4 bg-zinc-50">
            <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-dashed border-zinc-300 flex items-center justify-center">
              <div className="text-sm text-zinc-500 px-6 text-center">
                Replace with your diagram (PNG/SVG).
                <br />
                <span className="text-zinc-700 font-medium">Clients</span> →
                Next.js App Router → API Routes/Server Actions →{" "}
                <span className="text-zinc-700 font-medium">Prisma</span> → DB
                (Postgres/Mongo), Cache (Redis), Queue, 3P APIs.
                <br />
                Auth (RBAC), Observability, Feature Flags.
              </div>
            </div>
          </div>

          {/* Bullets */}
          <ul className="rounded-lg border border-zinc-200 bg-white p-6 space-y-4">
            {[
              "App Router + RSC for speed & DX; server actions for trusted mutations.",
              "RBAC with per-tenant data scoping; audit logs; rate-limits & input validation.",
              "Postgres + Prisma for relational; Redis for caching/sessions; S3/CDN for assets.",
              "WebSockets/SSE for real-time; background jobs for long-running work.",
              "Observability (logs, traces, metrics) + runbooks and error boundaries.",
              "Feature flags & A/B tests to safely ship and learn fast.",
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-md text-zinc-700"
              >
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
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
              <Image
                src={t.icon}
                alt={t.name}
                width={56}
                height={56}
                className="opacity-80 hover:opacity-100 transition"
              />
              {/* GEO hint (invisible) */}
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
            href="/contact"
            className="text-md text-indigo-600 hover:text-indigo-700 font-medium"
            aria-label={`Discuss replicating these results for your web app in ${CITY}`}
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
              {/* GEO tag */}
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

function Faqs() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-zinc-900">
          FAQs
        </h2>
        <div className="mt-8 divide-y divide-zinc-200 rounded border border-zinc-200 bg-white">
          {FAQS.map((f, i) => (
            <Fragment key={f.q}>
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
            </Fragment>
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
            Ready to ship your web app?
          </h2>
          <p className="mt-3 text-zinc-300">
            We’ll map your MVP, propose an architecture, and give you a plan to
            launch fast — with room to scale.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:info@aptecode.com"
              className="inline-flex items-center justify-center bg-indigo-600 px-5 py-3 text-white text-md font-medium hover:bg-indigo-700 transition"
              aria-label={`Email us your brief — Web Apps in ${CITY}`}
            >
              Email us your brief
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-gray-700 px-5 py-3 text-white text-md font-medium hover:bg-white/20 transition"
              aria-label={`Book a scope call — Web Apps in ${CITY}`}
            >
              Book a scope call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
