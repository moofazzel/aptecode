"use client";

import PricingSection from "@/components/modules/Services/pricingSection/PricingSection";
import Image from "next/image";

// -----------------------------
// Types
// -----------------------------
type Stat = { label: string; value: string; hint?: string };
type Category = { title: string; desc: string; bullets: string[]; img: string };
type Funnel = { title: string; desc: string };
type TokenomicsItem = { label: string; value: string; hint?: string };
type Integration = { name: string; icon: string };
type Step = { step: number; title: string; desc: string };
type FAQ = { q: string; a: string };

// -----------------------------
// Data (static) — crypto-specific
// -----------------------------
const KPIS: Stat[] = [
  {
    label: "Crypto Sites Delivered",
    value: "95+",
    hint: "meme, utility, DeFi, NFT",
  },
  {
    label: "Avg. TTF Launch",
    value: "10–21 days",
    hint: "from approved scope",
  },
  {
    label: "Perf (Lighthouse)",
    value: "90–100",
    hint: "Perf/Best-Practices/SEO",
  },
  {
    label: "Listings Support",
    value: "DEX → CEX",
    hint: "assets & flows ready",
  },
];

const CATEGORIES: Category[] = [
  {
    title: "Meme Coin Sites",
    desc: "Fast, viral-ready landing pages that convert curiosity into holders.",
    bullets: [
      "Hero punchline + animated mascots",
      "How-to-Buy flow (1-click anchors)",
      "Live price/MC/holders widgets",
      "Multi-chain links & socials",
    ],
    img: "/img/crypto/meme.jpg",
  },
  {
    title: "Utility Token",
    desc: "Explain real utility with diagrams, docs, and a crisp roadmap.",
    bullets: [
      "Feature diagrams, token gates",
      "Docs + API sections",
      "Integrations & partners strip",
      "Staking/claim modules (UI-ready)",
    ],
    img: "/img/crypto/utility.jpg",
  },
  {
    title: "DeFi Protocol",
    desc: "Trust, clarity, and conversion for serious DeFi users.",
    bullets: [
      "Audit/KYC badges & risk notes",
      "Docs + metrics dashboards",
      "Security model explainer",
      "Governance/vesting visuals",
    ],
    img: "/img/crypto/defi.jpg",
  },
  {
    title: "NFT & Collectibles",
    desc: "Story + scarcity + mint flow with a focus on community.",
    bullets: [
      "Mint status & countdown",
      "Rarity/traits preview",
      "Creator/roadmap sections",
      "WL/Allowlist UX",
    ],
    img: "/img/crypto/nft.jpg",
  },
  {
    title: "DAO & Governance",
    desc: "Clear proposals, token voting, and treasury transparency.",
    bullets: [
      "Proposal feeds & summaries",
      "Vote/connect wallet prompts",
      "Treasury embeds",
      "Constitution & docs",
    ],
    img: "/img/crypto/dao.jpg",
  },
  {
    title: "Launchpad / Presale",
    desc: "Presale/airdrop pages with conversion-first design.",
    bullets: [
      "KYC & SAFU badges",
      "Soft/Hard cap visuals",
      "Multi-tier rounds",
      "Claim page UX",
    ],
    img: "/img/crypto/launchpad.jpg",
  },
];

const FUNNEL: Funnel[] = [
  {
    title: "Awareness → Interest",
    desc: "Hero headline + social proof + quick reasons to believe.",
  },
  {
    title: "Interest → Consideration",
    desc: "Tokenomics + roadmap + audit/KYC + working demo/previews.",
  },
  {
    title: "Consideration → Action",
    desc: "Prominent ‘Buy’ & ‘How to Buy’ jumps + live price/links.",
  },
  {
    title: "Post-Buy Engagement",
    desc: "Announcements, updates, milestones, & community widgets.",
  },
];

const TOKENOMICS: TokenomicsItem[] = [
  { label: "Total Supply", value: "1,000,000,000", hint: "customizable" },
  { label: "Buy/Sell Tax", value: "0% / 0%", hint: "or your values" },
  {
    label: "Liquidity Lock",
    value: "12–36 months",
    hint: "Unicrypt/Team Finance",
  },
  { label: "Ownership", value: "Renounced", hint: "or multi-sig" },
  {
    label: "Vesting",
    value: "Team/Partners Linear",
    hint: "chart/CSV supported",
  },
];

const INTEGRATIONS: Integration[] = [
  { name: "DEXTools", icon: "/img/tech/dextools.png" },
  { name: "DexScreener", icon: "/img/tech/dexscreener.png" },
  { name: "Uniswap / Pancake", icon: "/img/tech/uniswap.svg" },
  { name: "Etherscan / BscScan", icon: "/img/tech/etherscan.svg" },
  { name: "PinkSale / Unicrypt", icon: "/img/tech/pinksale.png" },
  { name: "CoinGecko / CMC", icon: "/img/tech/coingecko.png" },
];

const HOW_TO_BUY: Step[] = [
  {
    step: 1,
    title: "Create a Wallet",
    desc: "Install MetaMask or Trust Wallet. Keep your seed phrase safe.",
  },
  {
    step: 2,
    title: "Fund Your Wallet",
    desc: "Buy ETH/BNB on an exchange and transfer to your wallet.",
  },
  {
    step: 3,
    title: "Swap on DEX",
    desc: "Open Uniswap/PancakeSwap, paste our contract address, confirm slippage.",
  },
  {
    step: 4,
    title: "Add Token",
    desc: "Add custom token to your wallet to see your balance.",
  },
];

const FAQS: FAQ[] = [
  {
    q: "Do you also write smart contracts?",
    a: "We focus on websites and launch UX. We can collaborate with your solidity team or refer partners for audits and contracts.",
  },
  {
    q: "Can you show live price and holders?",
    a: "Yes. We integrate with public APIs/widgets (DEXTools/DexScreener, Etherscan/BscScan) or a custom lightweight display.",
  },
  {
    q: "Do you support presales/airdrops?",
    a: "Yes. We build presale and claim pages, integrate KYC/audit badges, and wire trust elements for conversions.",
  },
  {
    q: "What about SEO for crypto?",
    a: "We ship the site SEO-ready (metadata, sitemap, OG, speed). We also structure content for CoinGecko/CMC submissions.",
  },
];

// -----------------------------
// Page
// -----------------------------
export default function CryptoWebsitesServicePage() {
  return (
    <main className="bg-white text-zinc-800">
      {/* <Hero /> */}
      <KPIBand />
      <CategoryGrid />
      <FunnelSection />
      <TokenomicsSection />
      <IntegrationsStrip />
      <HowToBuy />
      {/* Optional: case studies for crypto (commented for parity) */}
      {/* <CaseStudies /> */}
      <Faqs />
      <PricingSection />
      <CTA />
    </main>
  );
}

function KPIBand() {
  return (
    <section className="bg-white border-b border-zinc-200 w-full max-w-7xl mx-auto">
      {/* Bonus: visual band */}
      <div className="my-8 overflow-hidden rounded border border-zinc-200 bg-[url('/img/service/sr1.jpg')] bg-cover bg-center min-h-[640px]" />
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        {/* different than others: cards with subtle gradient borders */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {KPIS.map((k) => (
            <li
              key={k.label}
              className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm relative overflow-hidden"
            >
              <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-indigo-600/10 blur-2xl" />
              <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                {k.label}
              </div>
              <div className="mt-1 text-2xl font-semibold text-zinc-900">
                {k.value}
              </div>
              {k.hint && (
                <div className="mt-1 text-xs text-zinc-400">{k.hint}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CategoryGrid() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <header className="max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-zinc-900">
            Site styles we build (crypto)
          </h2>
          <p className="mt-3 text-zinc-600">
            Each category ships with the components and trust elements its
            audience expects.
          </p>
        </header>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((c) => (
            <li
              key={c.title}
              className="rounded-2xl border border-zinc-200 bg-white overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-36 w-full bg-zinc-100">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900">{c.title}</h3>
                <p className="mt-1 text-zinc-600 text-md">{c.desc}</p>
                <ul className="mt-3 space-y-2">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-md text-zinc-700"
                    >
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FunnelSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-zinc-900">
          Conversion funnel (crypto)
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {FUNNEL.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-zinc-200 bg-white p-6"
            >
              <div className="text-sm text-zinc-500">{f.title}</div>
              <div className="mt-2 text-md text-zinc-700">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* add a thin visual line unique to this page */}
        <div className="mt-10 rounded-xl border border-dashed border-zinc-300 p-4 text-sm text-zinc-500">
          Tip: Pair hero + live stats + “Buy Now” + “How to Buy” above-the-fold
          for best conversions.
        </div>
      </div>
    </section>
  );
}

function TokenomicsSection() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-zinc-900">
          Tokenomics & Trust Elements
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
          {TOKENOMICS.map((t) => (
            <div
              key={t.label}
              className="rounded-xl border border-zinc-200 bg-white p-5 text-center"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                {t.label}
              </div>
              <div className="mt-1 text-2xl font-semibold text-zinc-900">
                {t.value}
              </div>
              {t.hint && (
                <div className="mt-1 text-xs text-zinc-400">{t.hint}</div>
              )}
            </div>
          ))}
        </div>

        {/* badges row */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Audit-Ready",
            "KYC (Optional)",
            "SAFU Badge",
            "Multi-Sig / Renounced",
          ].map((b) => (
            <div
              key={b}
              className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-center text-sm text-zinc-700"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationsStrip() {
  return (
    <section className="bg-white border-y border-zinc-200">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <h3 className="text-zinc-800 font-medium">Integrations we wire</h3>
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
          {INTEGRATIONS.map((i) => (
            <div key={i.name} className="flex items-center justify-center">
              <Image
                src={i.icon}
                alt={i.name}
                width={56}
                height={56}
                className="opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToBuy() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-zinc-900">
          How to buy (UX section for holders)
        </h2>
        <ol className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOW_TO_BUY.map((s) => (
            <li
              key={s.step}
              className="relative rounded border border-zinc-200 bg-white p-6"
            >
              <span className="absolute -top-3 -left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white text-md font-semibold shadow">
                {s.step}
              </span>
              <h3 className="pl-8 text-xl font-bold text-zinc-900">
                {s.title}
              </h3>
              <p className="pl-8 mt-2 text-zinc-600 text-md leading-relaxed">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>

        {/* optional CTA strip */}
        <div className="mt-10 rounded-xl border border-indigo-200 bg-indigo-50 p-5 text-indigo-900 text-sm">
          We’ll connect your Buy buttons (Uniswap/Pancake) and surface live
          stats so users act fast.
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
            <div key={f.q}>
              <details className="group open:bg-zinc-50">
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5">
                  <span className="text-zinc-900 text-xl font-medium">
                    {f.q}
                  </span>
                  <span className="ml-6 inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-md text-zinc-600 leading-relaxed">
                  {f.a}
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
            Planning a crypto launch or revamp?
          </h2>
          <p className="mt-3 text-zinc-300">
            We’ll turn your content into a high-conversion site with tokenomics,
            trust badges, and a launch flow that converts.
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
              Get a launch checklist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
