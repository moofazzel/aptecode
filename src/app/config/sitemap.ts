// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { blogPosts } from "../../../data/blogs";
import { abs } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: abs("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: abs("/blog"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...blogPosts.map((p) => ({
      url: abs(`/blog/${p.slug}`),
      lastModified: new Date(p.updatedAt || p.date || now),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
