// app/services/moderation/page.tsx
"use client";

import Image from "next/image";
import { Fragment } from "react";

// -----------------------------
// Types
// -----------------------------
type KPI = { label: string; value: string; hint?: string };
type Pill = { label: string };
type Playbook = { title: string; points: string[] };
type Coverage = { title: string; desc: string; icon?: string };
type FAQ = { q: string; a: string };

// -----------------------------
// Static Data (Crypto-focused moderation)
// -----------------------------
const KPIS: KPI[] = [
  { label: "Communities Managed", value: "180+", hint: "crypto & web3" },
  {
    label: "Avg. Response (Live)",
    value: "< 45s",
    hint: "Telegram & X replies",
  },
  { label: "Spam/Scam Removal", value: "97%", hint: "proactive + reactive" },
  {
    label: "24/7 Coverage",
    value: "3 Regions",
    hint: "Americas · EMEA · APAC",
  },
];

const WHAT_WE_MODERATE: Pill[] = [
  { label: "Scams / Phishing / Impersonation" },
  { label: "NSFW / Hate / Abuse" },
  { label: "FUD / Market-Manipulation Claims" },
  { label: "Airdrop / Giveaway Spam" },
  { label: "Fake Support / Wallet Drainers" },
  { label: "Bot Raids / Sybil Attacks" },
];

const TELEGRAM_PLAYBOOK: Playbook = {
  title: "Telegram: Real-time Community Guard",
  points: [
    "Tiered ruleset: warning → mute → temp ban → perma ban, with appeal context logged.",
    "Raid/bot sweeps, link & media gating, captcha/onboarding flows for new members.",
    "Pinned updates & FAQ macros for tokenomics, utilities, listings, roadmap, audits.",
    "Mod macros for repeat questions; escalate to core team via tagged summary notes.",
    "Proactive chatter nudge before critical events (AMA, listing, snapshot, claim).",
  ],
};

const X_PLAYBOOK: Playbook = {
  title: "X/Twitter: Brand Safety + Conversion",
  points: [
    "Replies & mentions moderation for misleading claims, FUD, and impersonation.",
    "Report & suppress policy-violating content; coordinate with X Safety where relevant.",
    "Ad comments cleanup during campaigns: pre/post-flight watch windows.",
    "CTA-friendly responses with approved copy; route high-intent leads to Discord/TG.",
    "Crisis comms: fast alignment with founders/PM for unified public stance.",
  ],
};

const COVERAGE: Coverage[] = [
  {
    title: "24/7 Follow-the-Sun",
    desc: "Ops in 3 time bands to keep every launch, listing, and AMA protected.",
  },
  {
    title: "Crypto-Native Mods",
    desc: "Moderators who understand token mechanics, wallets, chain lingo, and scams.",
  },
  {
    title: "Runbooks & Logs",
    desc: "Per-incident notes, takedown evidence, and weekly moderation reports.",
  },
  {
    title: "Escalation Ladder",
    desc: "Clear thresholds for legal, PR, & dev-team escalation.",
  },
];

const FAQS: FAQ[] = [
  {
    q: "Do you only moderate Telegram and X?",
    a: "Yes. We specialize in Telegram and X/Twitter for crypto projects, including replies, mentions, DMs (if access provided), and ad comments.",
  },
  {
    q: "Can you publish as our brand?",
    a: "We can post as your brand with proper access controls or act as named mods. All messaging uses approved copy banks and tone guides.",
  },
  {
    q: "How do you handle false positives?",
    a: "Every action is logged with evidence. We use a warn→mute→ban ladder, and we revert actions if appeal context proves valid.",
  },
  {
    q: "Can you help during launches or listings?",
    a: "Absolutely. We create special watch windows, staff standby mods, and coordinate with your core team for real-time comms.",
  },
];

// -----------------------------
// Page
// -----------------------------
export default function ModerationServicePage() {
  return (
    <main className="bg-white text-zinc-800">
      {/* <Hero /> */}
      <EvidenceBar />
      <ModerationScope />
      <SplitChannels />
      <CoverageSLA />
      <ComplianceRisk />
      {/* Pricing: shared module path from your project */}
      {/* // comment this for deploy issues */}
      {/* <PricingSection /> */}
      <Faqs />
      <CTA />
    </main>
  );
}

function EvidenceBar() {
  return (
    <section className="bg-white border-b border-zinc-200">
      <div className="w-full max-w-7xl mx-auto pt-[20px]">
        {/* Bonus: visual band */}
        <div className="my-8 overflow-hidden rounded border border-zinc-200 bg-[url('/img/service/sr1.jpg')] bg-cover bg-center min-h-[640px]" />
      </div>
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {KPIS.map((kpi) => (
            <li
              key={kpi.label}
              className="rounded border border-zinc-200 bg-white px-5 py-4 shadow-sm flex items-center justify-between"
            >
              <div className="text-md text-zinc-500">{kpi.label}</div>
              <div className="text-xl font-semibold text-zinc-900">
                {kpi.value}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ModerationScope() {
  return (
    <section className="bg-zinc-50 pt-16">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <header className="max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-zinc-900 pt-10">
            What we moderate
          </h2>
          <p className="mt-3 text-zinc-600">
            Clear rules. Consistent enforcement. Transparent logs. We focus on
            Telegram and X/Twitter where your crypto community lives —
            especially during sensitive windows.
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-2">
          {WHAT_WE_MODERATE.map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center rounded bg-white border border-zinc-200 px-4 py-2 text-md text-zinc-700"
            >
              {p.label}
            </span>
          ))}
        </div>

        {/* Visual strip (different art than other pages) */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 min-h-[320px] bg-[url('/img/service/mod-strip.jpg')] bg-cover bg-center" />
      </div>
    </section>
  );
}

function SplitChannels() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* TELEGRAM BLOCK */}
          <div className="rounded-2xl border border-zinc-200 bg-white">
            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-[url('/img/service/telegram.jpg')] bg-cover bg-center" />
            <div className="p-6">
              <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-900">
                {TELEGRAM_PLAYBOOK.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {TELEGRAM_PLAYBOOK.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-3 text-md text-zinc-700"
                  >
                    <span className="mt-2 inline-block h-2 w-2 rounded bg-indigo-600" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* X/TWITTER BLOCK */}
          <div className="rounded-2xl border border-zinc-200 bg-white">
            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-[url('/img/service/x-twitter.jpg')] bg-cover bg-center" />
            <div className="p-6">
              <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-900">
                {X_PLAYBOOK.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {X_PLAYBOOK.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-3 text-md text-zinc-700"
                  >
                    <span className="mt-2 inline-block h-2 w-2 rounded bg-indigo-600" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Campaign note */}
        <div className="mt-6 rounded border border-indigo-200 bg-indigo-50 p-5 text-md text-indigo-900">
          <strong>Ad campaign safety:</strong> We pre-brief the rules, staff a
          watch window during flights, and clean replies for your promoted posts
          to protect CTR and credibility.
        </div>
      </div>
    </section>
  );
}

function CoverageSLA() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-zinc-900">
          Coverage & SLAs
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COVERAGE.map((c) => (
            <div
              key={c.title}
              className="rounded border border-zinc-200 bg-white p-6"
            >
              <div className="text-lg font-semibold text-zinc-900">
                {c.title}
              </div>
              <p className="mt-2 text-zinc-600 text-md leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline strip (different visual) */}
        <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 p-6">
          <div className="text-md text-zinc-500">
            Launch / Listing watch windows
          </div>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "T-24h prep",
              "T-0 go-live",
              "T+24h surge",
              "T+72h cool-down",
            ].map((t) => (
              <div
                key={t}
                className="rounded-lg bg-white border border-zinc-200 px-4 py-3 text-center text-md text-zinc-700"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplianceRisk() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-zinc-900">
          Compliance, Risk & Evidence
        </h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ul className="rounded-2xl border border-zinc-200 bg-white p-6 space-y-3">
            {[
              "Per-action logs: rule triggered, actor, evidence, and moderator ID.",
              "Approved copy banks for answers about tokenomics, taxes, and listings.",
              "Blocked-list & allow-list governance with review cadence.",
              "Crisis comms runbook (breaches, exploits, market events).",
              "Weekly reports with metrics: spam removed, response time, escalations.",
              "Data handling: access separation, least privilege, and audit trails.",
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-md text-zinc-700"
              >
                <span className="mt-2 inline-block h-2 w-2 rounded bg-indigo-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-zinc-200 p-0 overflow-hidden">
            <div className="relative aspect-[16/9]">
              {/* Replace with a real image or diagram */}
              <Image
                src="/img/service/sr3.jpg"
                alt="Moderation evidence and reporting"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-md text-zinc-600">
                Example snapshot of incident evidence and weekly KPI rollups for
                stakeholders.
              </div>
            </div>
          </div>
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
            <Fragment key={f.q}>
              <details className="group open:bg-zinc-50">
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5">
                  <span className="text-zinc-900 text-xl font-medium">
                    {f.q}
                  </span>
                  <span className="ml-6 inline-flex h-6 w-6 items-center justify-center rounded border border-zinc-300 text-zinc-500 group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-md text-zinc-600 leading-relaxed">
                  {f.a}
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
            Need trusted Telegram & X mods?
          </h2>
          <p className="mt-3 text-zinc-300">
            We’ll audit your channels, define rules, and put 24/7 coverage in
            place with clean evidence trails.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:info@aptecode.com"
              className="inline-flex items-center justify-center bg-indigo-600 px-5 py-3 text-white text-md font-medium hover:bg-indigo-700 transition"
            >
              Email us your brief
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-gray-700 px-5 py-3 text-white text-md font-medium hover:bg-white/20 transition"
            >
              Book a moderation audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
