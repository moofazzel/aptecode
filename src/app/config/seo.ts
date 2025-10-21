// src/app/config/seo.ts
export const SITE = {
  baseUrl: "https://www.yoursite.com", // <-- change to your real domain
  name: "Your Brand",
  defaultTitle: "Your Brand — What You Do",
  defaultDescription:
    "Fast, conversion-ready websites for new brands and founders. Strategy, clean UX, and sites that sell.",
  locales: {
    "en-US": "/en",
    "bn-BD": "/bn",
    "x-default": "/",
  } as const,
};

export function abs(path = "/") {
  return new URL(path, SITE.baseUrl).toString();
}
