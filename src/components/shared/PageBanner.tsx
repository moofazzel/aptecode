"use client";

import { type ResolveLabel } from "@/hooks/useDynamicBreadcrumbs";
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
  return (
    <section
      className="relative pg_header  flex min-h-[300px] w-full items-center justify-center overflow-hidden text-white md:min-h-[620px] mt-[-100px] "
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

      <div className="z-10 mt-[100px]">
        <div className="relative  px-4 text-center">
          <h1 className="ttl text-[38px] sm:text-[45px] font-bold leading-tight md:text-[60px] overflow-hidden">
            {title}
          </h1>

          {/* Breadcrumb */}
        </div>
        <div className="flex justify-center items-center mt-5"></div>
      </div>
    </section>
  );
}
