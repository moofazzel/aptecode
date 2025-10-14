// src/app/robots.ts
import type { MetadataRoute } from "next";
import { SITE } from "./seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
  };
}
