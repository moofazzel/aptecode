// types/blog.ts
export type BlogCategory =
  | "Web App"
  | "Data Analytics"
  | "API & Integrations"
  | "Automations"
  | "SEO / GEO"
  | "Web Audit";

export interface BlogAuthor {
  name: string;
  role?: string;
  avatar?: string; // /public path
}

export interface BlogPost {
  // your original keys (kept for compatibility)
  id: number;
  title: string;
  date: string; // display date
  author: string; // "POST BY: APTECODE"
  image: string;
  imageAlt: string;

  // new “real” fields
  slug: string; // /blog/[slug]
  category: BlogCategory;
  excerpt: string; // short teaser for cards/meta
  content: string; // long markdown/HTML-ish text
  tags: string[]; // for filtering
  readTime: number; // minutes
  updatedAt?: string; // ISO
  featured?: boolean; // highlight on top
  authorInfo?: BlogAuthor; // optional richer author
}
