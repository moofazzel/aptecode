// src/app/blog/[slug]/page.tsx
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import ArticleView from "./ArticleView";

// Your data (named export)
import { blogPosts } from "../../../../data/blogs";

// Derive the post type from the array
type Blog = (typeof blogPosts)[number];

function getBySlug(slug: string): Blog | undefined {
  return blogPosts.find((p: Blog) => p.slug === slug);
}

export async function generateStaticParams() {
  return blogPosts.map((b: Blog) => ({ slug: b.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = getBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description:
      post.excerpt ?? "Insights on product, engineering, and growth.",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBySlug(slug);
  if (!post) notFound();
  return <ArticleView post={post} />;
}
