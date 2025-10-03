import Navbar from "@/components/shared/Navbar";
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
import { Hind_Madurai, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const hindMadurai = Hind_Madurai({
  variable: "--font-hind-madurai",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body
        className={`${plusJakartaSans.variable} ${hindMadurai.variable} antialiased`}
      >
        <AnimationProvider
          initialSettings={{
            performanceMode: "high",
            globalDuration: 0.6,
            globalEasing: "power2.out",
          }}
        >
          <Navbar />
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
