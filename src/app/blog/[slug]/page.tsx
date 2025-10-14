// src/app/blog/[slug]/page.tsx  (Server Component)
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../../data/blogs"; // <-- adjust if needed
import { SITE, abs } from "../../config/seo"; // <-- adjust if needed
import ArticleView from "./ArticleView";

type Blog = (typeof blogPosts)[number];

function getBySlug(slug: string): Blog | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const revalidate = 3600;

export async function generateStaticParams() {
  return blogPosts.map((b) => ({ slug: b.slug }));
}

// ✅ Correct param types (no Promise here)
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBySlug(params.slug);
  if (!post) return {};

  const url = abs(`/blog/${post.slug}`);
  const title = post.title;
  const description =
    post.excerpt ?? "Insights on product, engineering, and growth.";

  return {
    metadataBase: new URL(SITE.baseUrl),
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
      // Add these only if you truly have localized routes:
      // languages: {
      //   "en-US": `/en/blog/${post.slug}`,
      //   "bn-BD": `/bn/blog/${post.slug}`,
      //   "x-default": `/blog/${post.slug}`,
      // },
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: SITE.name,
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      images: [
        {
          url: post.image?.startsWith("http") ? post.image : abs(post.image),
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.image?.startsWith("http") ? post.image : abs(post.image)],
    },
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getBySlug(params.slug);
  if (!post) notFound();

  // -------- JSON-LD: BlogPosting + BreadcrumbList --------
  const ldArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description:
      post.excerpt ?? "Insights on product, engineering, and growth.",
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: post.authorInfo?.name
      ? [{ "@type": "Person", name: post.authorInfo.name }]
      : [{ "@type": "Organization", name: SITE.name }],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": abs(`/blog/${post.slug}`),
    },
    image: post.image?.startsWith("http") ? post.image : abs(post.image),
    keywords: post.tags?.join(", "),
  };

  const ldBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.baseUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: abs("/blog") },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: abs(`/blog/${post.slug}`),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumb) }}
      />

      <ArticleView post={post} />
    </>
  );
}
