// src/app/blog/page.tsx  (Server Component)
import type { Metadata } from "next";

import BlogPageClient from "@/components/modules/Blog/BlogPageClient";
import { blogPosts } from "../../../data/blogs";
import { abs } from "../config/seo"; // adjust if your path differs

export const revalidate = 3600; // cache = SEO + perf

export const metadata: Metadata = {
  title: "Blog — Insights on Modern Web & Growth",
  description:
    "Guides and playbooks on web architecture, UX, automation, analytics, and SEO.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: abs("/blog"),
    title: "Blog — Insights on Modern Web & Growth",
    description:
      "Practical, no-fluff articles on web architecture, UX, automation, analytics, and SEO.",
    images: [{ url: abs("/og.jpg"), width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function Page() {
  // minimal JSON-LD for the listing (optional but nice)
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog — Insights on Modern Web & Growth",
    url: abs("/blog"),
    hasPart: [...blogPosts]
      .sort(
        (a, b) =>
          new Date(b.updatedAt || b.date || 0).getTime() -
          new Date(a.updatedAt || a.date || 0).getTime()
      )
      .slice(0, 10)
      .map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        datePublished: p.date,
        dateModified: p.updatedAt || p.date,
        url: abs(`/blog/${p.slug}`),
        image: p.image?.startsWith("http") ? p.image : abs(p.image),
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <BlogPageClient />
    </>
  );
}
