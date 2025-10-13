"use client";

import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  slug: string;
  title: string;
  image: string;
  imageAlt?: string;
  date?: string;
  updatedAt?: string;
  readTime?: number;
}

interface RecentPostsWidgetProps {
  posts: Post[];
}

function formatDate(d?: string) {
  if (!d) return "";
  const date = new Date(d);
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function RecentPostsWidget({ posts }: RecentPostsWidgetProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-neutral-900">Recent Posts</h3>
      <ul className="mt-4 space-y-4">
        {posts.map((p) => (
          <li key={p.id} className="flex gap-3">
            <div className="relative h-16 w-24 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100">
              <Image
                src={p.image}
                alt={p.imageAlt || p.title}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div className="min-w-0">
              <Link
                href={`/blog/${p.slug}`}
                className="line-clamp-2 text-sm font-medium text-neutral-900 hover:underline"
              >
                {p.title}
              </Link>
              <div className="mt-1 text-xs text-neutral-500">
                {formatDate(p.updatedAt || p.date)}
                {typeof p.readTime === "number" && <> • {p.readTime} min</>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
