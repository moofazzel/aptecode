// src/app/blog/[slug]/ArticleView.tsx
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Send,
  Star,
  Tag,
  Twitter,
  User2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Blog = {
  id: number;
  slug: string;
  category: string;
  title: string;
  date: string;
  updatedAt?: string;
  author: string;
  authorInfo?: { name: string; role?: string; avatarUrl?: string };
  image: string;
  imageAlt?: string;
  excerpt?: string;
  tags?: string[];
  readTime?: number;
  featured?: boolean;
  content: string;
};

export default function ArticleView({ post }: { post: Blog }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // --- utils ---
  const readingMins = useMemo(() => {
    if (post.readTime) return post.readTime;
    const words = post.content?.trim().split(/\s+/).length || 0;
    return Math.max(1, Math.round(words / 200));
  }, [post.readTime, post.content]);

  const paragraphs = useMemo(
    () =>
      post.content
        .trim()
        .split(/\n\s*\n/)
        .map((p) => p.trim()),
    [post.content]
  );

  const toc = useMemo(() => {
    const lines = post.content.split("\n");
    return lines
      .map((l) => l.trim())
      .filter((l) => /^##\s+/.test(l))
      .map((l) => l.replace(/^##\s+/, ""))
      .slice(0, 8);
  }, [post.content]);

  const canonical = `https://example.com/blog/${post.slug}`;
  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    post.title
  )}&url=${encodeURIComponent(canonical)}`;
  const shareTelegram = `https://t.me/share/url?url=${encodeURIComponent(
    canonical
  )}&text=${encodeURIComponent(post.title)}`;

  // reading progress
  useEffect(() => {
    const onScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      const total = el.scrollHeight - window.innerHeight * 0.6;
      const passed = Math.min(
        total,
        Math.max(0, window.scrollY - (el.offsetTop - window.innerHeight * 0.2))
      );
      setProgress(Math.max(0, Math.min(100, (passed / total) * 100)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // split the title roughly in half to mimic "Creative\nExcellence" look
  const [titleTop, titleBottom] = useMemo(() => {
    const words = post.title.trim().split(/\s+/);
    if (words.length < 3) return [post.title, ""];
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
  }, [post.title]);

  return (
    <main className="bg-white text-zinc-800">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 z-40 h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500"
        style={{ width: `${progress}%` }}
      />

      {/* ===== HERO (portfolio-style) ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F9FF] to-white">
        {/* mesh bubbles */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(109,92,246,0.28),transparent_60%)] blur-2xl" />
          <div className="absolute -top-24 right-16 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(243,58,160,0.22),transparent_60%)] blur-2xl" />
          <div className="absolute bottom-[-120px] left-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)] blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-14 text-center">
          {/* top badge */}
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-[0_6px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/5 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-700">
              Aptecode Blog • {post.category}
            </span>
            <span className="ml-1 inline-flex items-center gap-0.5 text-[11px] text-yellow-500">
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
            </span>
          </motion.div>

          {/* headline (two-line with gradient on second line) */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="mx-auto max-w-5xl font-black tracking-tight leading-tight"
          >
            <span className="block text-[40px] md:text-[72px] text-zinc-900">
              {titleTop}
            </span>
            {titleBottom && (
              <span className="block text-[40px] md:text-[72px] bg-gradient-to-r from-[#6D5CF6] via-[#8A54F7] to-[#F33AA0] bg-clip-text text-transparent">
                {titleBottom}
              </span>
            )}
          </motion.h1>

          {/* supporting copy */}
          {post.excerpt && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-zinc-600"
            >
              {post.excerpt}
            </motion.p>
          )}

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.22 }}
            className="mx-auto mt-7 flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#read"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#6D5CF6] to-[#F33AA0] px-6 py-3 text-white text-sm font-semibold shadow-[0_8px_30px_rgba(109,92,246,0.35)] hover:opacity-95 transition"
            >
              Start Reading <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
            >
              All Posts <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          {/* quick stats row (date / read time / tags count) */}
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.28 }}
            className="mx-auto mt-10 grid w-full max-w-4xl grid-cols-3 gap-4"
          >
            <li className="rouded-xl bg-white/70 px-4 py-4 text-sm text-zinc-700 ring-1 ring-black/5 backdrop-blur">
              <div className="text-2xl font-semibold text-zinc-900">
                {new Date(post.updatedAt || post.date).toLocaleDateString(
                  undefined,
                  {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  }
                )}
              </div>
              <div className="mt-1 text-xs text-zinc-500">Published</div>
            </li>
            <li className="rouded-xl bg-white/70 px-4 py-4 text-sm text-zinc-700 ring-1 ring-black/5 backdrop-blur">
              <div className="flex items-center gap-2 text-2xl font-semibold text-zinc-900">
                <Clock className="h-5 w-5 text-zinc-500" />
                {readingMins} min
              </div>
              <div className="mt-1 text-xs text-zinc-500">Read Time</div>
            </li>
            <li className="rouded-xl bg-white/70 px-4 py-4 text-sm text-zinc-700 ring-1 ring-black/5 backdrop-blur">
              <div className="text-2xl font-semibold text-zinc-900">
                {post.tags?.length ?? 0}
              </div>
              <div className="mt-1 text-xs text-zinc-500">Tags</div>
            </li>
          </motion.ul>
        </div>
      </section>
      {/* ===== /HERO ===== */}

      {/* HERO IMAGE */}
      <section className="bg-white border-b border-zinc-200">
        <div className="mx-auto w-full max-w-7xl px-6 py-6">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200">
            <div className="relative aspect-[16/8] md:aspect-[16/6]">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BODY + SIDEBAR (unchanged but useful) */}
      <section id="read" className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Article */}
            <article className="lg:col-span-8">
              {/* excerpt card removed here (now in hero) */}
              <div ref={contentRef} className="mt-2 space-y-5">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-[17px] leading-8 text-zinc-700">
                    {p}
                  </p>
                ))}
              </div>

              {!!post.tags?.length && (
                <div className="mt-10 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700"
                    >
                      <Tag className="w-3.5 h-3.5" /> {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-10 h-px bg-zinc-200" />
              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white flex items-center justify-center font-bold">
                  {post.authorInfo?.avatarUrl ? (
                    <Image
                      src={post.authorInfo.avatarUrl}
                      alt={post.authorInfo.name || "Author"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    post.authorInfo?.name?.[0] ?? "A"
                  )}
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-900 flex items-center gap-2">
                    <User2 className="w-4 h-4 text-zinc-500" />
                    {post.authorInfo?.name || "Aptecode Team"}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {post.authorInfo?.role || "Product & Engineering"}
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* TOC */}
                {toc.length > 0 && (
                  <div className="rouded-xl border border-zinc-200 bg-white p-6">
                    <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      ON THIS PAGE
                    </div>
                    <ul className="mt-3 space-y-2 text-sm">
                      {toc.map((h) => {
                        const id = h.toLowerCase().replace(/\s+/g, "-");
                        return (
                          <li key={id}>
                            <a
                              href={`#${id}`}
                              className="text-zinc-700 hover:text-indigo-600"
                            >
                              {h}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}

                {/* Quick facts */}
                <div className="rouded-xl border border-zinc-200 bg-white p-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    POST FACTS
                  </div>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex justify-between gap-3">
                      <span className="text-zinc-500">Category</span>
                      <span className="font-medium text-zinc-900">
                        {post.category}
                      </span>
                    </li>
                    <li className="flex justify-between gap-3">
                      <span className="text-zinc-500">Published</span>
                      <span className="font-medium text-zinc-900">
                        {post.date}
                      </span>
                    </li>
                    {post.updatedAt && (
                      <li className="flex justify-between gap-3">
                        <span className="text-zinc-500">Updated</span>
                        <span className="font-medium text-zinc-900">
                          {new Date(post.updatedAt).toLocaleDateString(
                            undefined,
                            {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                            }
                          )}
                        </span>
                      </li>
                    )}
                    <li className="flex justify-between gap-3">
                      <span className="text-zinc-500">Read Time</span>
                      <span className="font-medium text-zinc-900">
                        {readingMins} min
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Share */}
                <div className="rouded-xl border border-zinc-200 bg-white p-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    SHARE
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={shareTwitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm hover:bg-zinc-50"
                    >
                      <Twitter className="w-4 h-4" /> X/Twitter
                    </a>
                    <a
                      href={shareTelegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm hover:bg-zinc-50"
                    >
                      <Send className="w-4 h-4" /> Telegram
                    </a>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="rouded-xl border border-white/20 bg-gradient-to-br from-[#6D5CF6]/10 via-[#8A54F7]/10 to-[#F33AA0]/10 backdrop-blur-sm p-6">
                  <div className="inline-flex items-center gap-2 bg-white/30 rounded-full px-3 py-1 text-white text-xs">
                    ✨ Fresh posts
                  </div>
                  <div className="mt-3 text-sm font-medium text-zinc-900">
                    Get new posts in your inbox
                  </div>
                  <p className="text-xs text-zinc-600">
                    Practical notes on product, engineering, and growth.
                  </p>
                  <form
                    className="mt-3 flex items-center gap-2"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      type="email"
                      placeholder="your@email"
                      className="w-full border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 placeholder-zinc-400 outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                    <button className="bg-gradient-to-r from-[#6D5CF6] to-[#F33AA0] px-3 py-2 text-sm text-white hover:from-[#5c4ee8] hover:to-[#e23197] transition">
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Back */}
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Back to all posts <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
