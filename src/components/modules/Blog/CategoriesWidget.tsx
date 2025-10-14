"use client";

import Link from "next/link";

interface CategoriesWidgetProps {
  categories: [string, number][];
}

export default function CategoriesWidget({
  categories,
}: CategoriesWidgetProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-neutral-900">Categories</h3>
      <ul className="mt-4 space-y-2">
        {categories.map(([name, count]) => (
          <li key={name}>
            <Link
              href={`/blog?category=${encodeURIComponent(name)}`}
              className="group flex items-center justify-between rounded-lg px-3 py-2 hover:bg-neutral-50 transition"
            >
              <span className="text-neutral-700 group-hover:text-neutral-900">
                {name}
              </span>
              <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700">
                {count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
