"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export type Crumb = { label: string; href: string; isLast: boolean };

export type ResolveLabel = (
  segment: string,
  index: number,
  parts: string[]
) => string | Promise<string>;

/** Fallback: turn "crypto-websites" -> "Crypto Websites" */
function humanize(seg: string) {
  return seg
    .split("-")
    .filter(Boolean)
    .map((s) => s[0]?.toUpperCase() + s.slice(1))
    .join(" ");
}

/**
 * Build breadcrumbs from the current pathname.
 * If `resolveLabel` is provided, it is used (can be async) per segment.
 * Otherwise we humanize automatically.
 */
export function useDynamicBreadcrumbs(resolveLabel?: ResolveLabel) {
  const pathname = usePathname();
  const parts = useMemo(() => pathname.split("/").filter(Boolean), [pathname]);
  const [labels, setLabels] = useState<string[]>(parts.map((p) => humanize(p)));

  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (!resolveLabel) return; // keep humanized defaults

      const resolved = await Promise.all(
        parts.map((seg, i) => Promise.resolve(resolveLabel(seg, i, parts)))
      );

      if (!cancelled)
        setLabels(resolved.map((v, i) => v || humanize(parts[i])));
    })();

    return () => {
      cancelled = true;
    };
  }, [parts, resolveLabel]);

  const crumbs: Crumb[] = useMemo(
    () =>
      parts.map((seg, i) => ({
        label: labels[i] ?? humanize(seg),
        href: "/" + parts.slice(0, i + 1).join("/"),
        isLast: i === parts.length - 1,
      })),
    [parts, labels]
  );

  return crumbs;
}
