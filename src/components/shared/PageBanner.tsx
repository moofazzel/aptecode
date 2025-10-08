"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  useDynamicBreadcrumbs,
  type ResolveLabel,
} from "@/hooks/useDynamicBreadcrumbs";
import Link from "next/link";
import type { ReactNode } from "react";
import "./pageBanner.css";

export interface BannerProps {
  title: string;
  bgImage: string; // e.g. "/img/hero/bg.jpg" in /public
  separator?: ReactNode; // default: »
  resolveLabel?: ResolveLabel; // optional async/async label resolver
}

export default function PageBanner({
  title,
  bgImage,
  separator = "»",
  resolveLabel,
}: BannerProps) {
  const crumbs = useDynamicBreadcrumbs(resolveLabel);

  return (
    <section
      className="relative pg_header flex min-h-[300px] w-full items-center justify-center overflow-hidden text-white md:min-h-[620px] z-0 mt-[-100px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* your dotted shapes */}
      <div className="bg_shapes">
        <div className="single_shape shp1">
          <img src="/img/bg-img/dot.png" alt="" />
        </div>
        <div className="single_shape shp2">
          <img src="/img/bg-img/dot.png" alt="" />
        </div>
        <div className="single_shape shp3">
          <img src="/img/bg-img/dot.png" alt="" />
        </div>
      </div>

      <div className="z-10">
        <div className="relative  px-4 text-center mt-[117px]">
          <h1 className="ttl text-[38px] sm:text-[45px] font-bold leading-tight md:text-[60px] overflow-hidden">
            {title}
          </h1>

          {/* Breadcrumb */}
        </div>
        <div className="flex justify-center items-center mt-5">
          <Breadcrumb>
            <BreadcrumbList className="text-white/80 ">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/"
                    className="text-[17px] font-[600] uppercase cursor-pointer hover:text-white text-zinc-400"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {crumbs.length > 0 && (
                <BreadcrumbSeparator className="text-[27px] mt-[-8px] hover:text-white text-zinc-400">
                  {separator}
                </BreadcrumbSeparator>
              )}

              {crumbs.map((c) => (
                <div key={c.href} className="flex items-center">
                  <BreadcrumbItem>
                    {c.isLast ? (
                      <BreadcrumbPage className="text-[17px] font-[600] uppercase  hover:text-white text-zinc-200">
                        {c.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        asChild
                        className="text-[18px] font-[600] uppercase cursor-pointer hover:text-white"
                      >
                        <Link href={c.href} style={{ fontSize: "18px" }}>
                          {c.label}
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!c.isLast && (
                    <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
                  )}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </section>
  );
}
