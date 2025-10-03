import { AnimationProvider } from "@/contexts/AnimationContext";
import type { Metadata } from "next";
import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"], // keep this minimal
  weight: ["400", "600", "700"], // only what you actually use
  variable: "--font-plus", // use a CSS var so Tailwind can hook in
  preload: true, // default true, keeps it explicit
  fallback: ["system-ui", "Segoe UI", "Roboto", "Arial"],
});

export const metadata: Metadata = {
  title: "Clay - Global Branding and UX Design Agency",
  description:
    "We build transformative digital experiences for the world's leading brands by blending AI, design, and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
        <AnimationProvider
          initialSettings={{
            performanceMode: "high",
            globalDuration: 0.6,
            globalEasing: "power2.out",
          }}
        >
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
