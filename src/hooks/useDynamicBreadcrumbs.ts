"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export type Crumb = { href: string; label: string; isLast: boolean };

export type ResolveLabel = (
  segment: string,
  index: number,
  href: string
) => string | null;

/** Title-case with hyphen/underscore handling */
function defaultTitleCase(segment: string) {
  const s = decodeURIComponent(segment)
    .replace(/[\?#].*$/, "") // strip ?query or #hash
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .trim();
  if (!s) return "";
  return s.replace(/\b\w/g, (m) => m.toUpperCase());
}

export function useDynamicBreadcrumbs(
  resolveLabel?: ResolveLabel,
  options?: {
    /** Hide specific leading segments like locale: ["en","bn"] */
    hideIfFirstMatches?: string[];
    /** Map segment => label (overrides) */
    labelMap?: Record<string, string>;
    /** Provide a custom title-caser */
    titleCase?: (s: string) => string;
  }
): Crumb[] {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  const hide = options?.hideIfFirstMatches ?? [];
  const titleCase = options?.titleCase ?? defaultTitleCase;
  const map = options?.labelMap ?? {};

  const effective = useMemo(() => {
    let segs = [...segments];
    if (segs.length > 0 && hide.includes(segs[0])) segs = segs.slice(1);
    return segs;
  }, [segments, hide]);

  return useMemo(() => {
    const crumbs: Crumb[] = [];
    let acc = "";
    effective.forEach((seg, i) => {
      acc += `/${seg}`;

      // 1) explicit map wins, 2) user resolver, 3) default title case
      const label: string | null =
        map[seg] ??
        (resolveLabel ? resolveLabel(seg, i, acc) : null) ??
        titleCase(seg);

      // skip if resolver says null (e.g., hide segment)
      if (label === null) return;

      const isLast = i === effective.length - 1;
      crumbs.push({ href: acc, label, isLast });
    });
    return crumbs;
  }, [effective, map, resolveLabel, titleCase]);
}
