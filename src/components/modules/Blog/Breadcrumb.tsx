"use client";

import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumb as UIBreadcrumb,
} from "@/components/ui/breadcrumb";
import {
  ResolveLabel,
  useDynamicBreadcrumbs,
} from "@/hooks/useDynamicBreadcrumbs";
import Link from "next/link";
import { Fragment } from "react";

type Props = {
  /** Optional custom label resolver */
  resolveLabel?: ResolveLabel;
  /** Show "Home" as the first crumb */
  showHome?: boolean;
  /** Home label text */
  homeLabel?: string;
  /** Home href */
  homeHref?: string;
  /** Separator string, e.g. "›" or "/" */
  separator?: string;
  /** Classes to style the list (kept close to what you already used) */
  listClassName?: string;
  linkClassName?: string;
  pageClassName?: string;
  sepClassName?: string;
  /** Forward options to the hook */
  hideIfFirstMatches?: string[];
  labelMap?: Record<string, string>;
};

export default function Breadcrumb({
  resolveLabel,
  showHome = true,
  homeLabel = "Home",
  homeHref = "/",
  separator = "/",
  listClassName = "text-white/80",
  linkClassName = "text-[17px] font-[600] uppercase cursor-pointer hover:text-#000 text-[#444]",
  pageClassName = "bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)] bg-clip-text text-transparent  relative text-[17px] font-[600] uppercase ",
  sepClassName = "text-[27px] mt-[-8px] hover:text-white text-zinc-400",
  hideIfFirstMatches,
  labelMap,
}: Props) {
  const crumbs = useDynamicBreadcrumbs(resolveLabel, {
    hideIfFirstMatches,
    labelMap,
  });

  // Generate structured data for breadcrumbs
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      showHome && {
        "@type": "ListItem",
        "position": 1,
        "name": homeLabel,
        "item": `https://aptecode.com${homeHref}`
      },
      ...crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": showHome ? index + 2 : index + 1,
        "name": crumb.label,
        "item": `https://aptecode.com${crumb.href}`
      }))
    ].filter(Boolean)
  };

  return (
    <>
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      
      <UIBreadcrumb>
      <BreadcrumbList className={listClassName}>
        {showHome && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={homeHref} className={linkClassName}>
                  {homeLabel}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {crumbs.length > 0 && (
              <BreadcrumbSeparator className={sepClassName}>
                {separator}
              </BreadcrumbSeparator>
            )}
          </>
        )}

        {crumbs.map((c) => (
          <Fragment key={c.href}>
            <BreadcrumbItem>
              {c.isLast ? (
                <BreadcrumbPage className={pageClassName}>
                  {c.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild className={linkClassName}>
                  <Link href={c.href}>{c.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {!c.isLast && (
              <BreadcrumbSeparator className={sepClassName}>
                {separator}
              </BreadcrumbSeparator>
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </UIBreadcrumb>
    </>
  );
}
