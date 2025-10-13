// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../../data/blogs";
import ArticleView from "./ArticleView";

type Blog = (typeof blogPosts)[number];

function getBySlug(slug: string): Blog | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return blogPosts.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBySlug(params.slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description:
      post.excerpt ??
      "Insights on product, engineering, and growth from the Aptecode team.",
    openGraph: {
      title: post.title,
      description:
        post.excerpt ??
        "Insights on product, engineering, and growth from the Aptecode team.",
      url,
      type: "article",
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description:
        post.excerpt ??
        "Insights on product, engineering, and growth from the Aptecode team.",
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getBySlug(params.slug);
  if (!post) notFound();
  return <ArticleView post={post} />;
}
