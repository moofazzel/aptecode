// src/app/blog/page.tsx
"use client";

import Breadcrumb from "@/components/modules/Blog/Breadcrumb";
import CategoriesWidget from "@/components/modules/Blog/CategoriesWidget";
import RecentPostsWidget from "@/components/modules/Blog/RecentPostsWidget";

// <-- ensure this path matches your project
import { GradientButton } from "@/components/ui/gradient-button";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { blogPosts } from "../../../data/blogs";

function formatDate(d?: string) {
  // Prefer updatedAt if present
  if (!d) return "";
  try {
    // Accept both "2025-10-13" and "13 OCT, 2025"
    const isoish = /\d{4}-\d{2}-\d{2}/.test(d) ? d : d.replace(/,/g, "");
    const date = new Date(isoish);
    if (isNaN(date.getTime())) return d;
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return d;
  }
}

export default function BlogPage() {
  // Sort posts by updatedAt/date desc
  const posts = useMemo(() => {
    const copy = [...blogPosts];
    copy.sort((a, b) => {
      const ad = new Date(a.updatedAt || a.date || 0).getTime();
      const bd = new Date(b.updatedAt || b.date || 0).getTime();
      return bd - ad;
    });
    return copy;
  }, []);

  // Build categories map
  const categories = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of posts) map.set(p.category, (map.get(p.category) || 0) + 1);
    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }, [posts]);

  // Recent posts (top 5)
  const recent = useMemo(() => posts.slice(0, 5), [posts]);

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      {/* <div className="w-full  border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1405px] px-4 py-4">
          <nav className="text-sm text-neutral-600">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="opacity-60">/</li>
              <li className="text-neutral-900 font-medium">Blog</li>
            </ol>
          </nav>
        </div>
      </div> */}
      <div className="text-center mx-auto max-w-5xl px-4 py-16 md:py-25 ">
        <h1
          className="text-2xl md:text-7xl font-bold uppercase text-black mb-[30px]
      "
        >
          ALL{" "}
          <span
            className="text-2xl md:text-7xl font-bold uppercase
      bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
      bg-clip-text text-transparent  relative "
            style={{ WebkitTextFillColor: "transparent" }}
          >
            {" "}
            BLOGS
          </span>
        </h1>

        <div className="flex justify-center mb-4">
          <Breadcrumb />
        </div>

        <p className="hero-subtitle text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
          Insights, guides, and playbooks on building modern web apps — from
          product design and architecture to automation, analytics, and SEO.
        </p>
      </div>

      {/* Content + Sidebar */}
      <div className="mx-auto max-w-[1405px] px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main */}
          <section className="w-full lg:w-[70%]">
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 grid-cols-1">
              {posts.map((p) => (
                <article
                  key={p.id}
                  className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    {/* Use next/image if your assets live in /public */}
                    <Image
                      src={p.image}
                      alt={p.imageAlt || p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 700px, 100vw"
                      priority={p.featured}
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      {p.category}
                    </span>
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                      <time dateTime={p.updatedAt || p.date}>
                        {formatDate(p.updatedAt || p.date)}
                      </time>
                      {typeof p.readTime === "number" && (
                        <>
                          <span className="opacity-50">•</span>
                          <span>{p.readTime} min read</span>
                        </>
                      )}
                      {p.tags?.length ? (
                        <>
                          <span className="opacity-50">•</span>
                          <div className="flex flex-wrap gap-1.5">
                            {p.tags.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] text-neutral-700"
                              >
                                #{t}
                              </span>
                            ))}
                          </div>
                        </>
                      ) : null}
                    </div>

                    <h2 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight text-neutral-900">
                      <Link
                        href={`/blog/${p.slug}`}
                        className="decoration-2 underline-offset-4 hover:underline"
                      >
                        {p.title}
                      </Link>
                    </h2>

                    {p.excerpt && (
                      <p className="mt-3 line-clamp-3 text-neutral-700">
                        {p.excerpt}
                      </p>
                    )}

                    <div className="mt-5">
                      <Link href={`/blog/${p.slug}`}>
                        <GradientButton>Read Article</GradientButton>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="w-full lg:w-[30%]">
            <div className="lg:sticky lg:top-[85px] flex flex-col gap-6">
              <CategoriesWidget categories={categories} />
              <RecentPostsWidget posts={recent} />

              {/* Optional CTA / Newsletter */}
              {/* <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Get product playbooks
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Monthly, no fluff. Architecture, analytics, APIs, and growth.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="mt-3 flex gap-2"
                >
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-400"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-black px-3 py-2 text-sm font-medium text-white hover:opacity-90"
                  >
                    Subscribe
                  </button>
                </form>
              </div> */}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
