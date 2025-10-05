import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import { AnimationProvider } from "@/contexts/AnimationContext";

// ✅ import each Google font once
import { Hind_Madurai, Plus_Jakarta_Sans } from "next/font/google";

// ✅ configure fonts
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-plus",
  preload: true,
  fallback: ["system-ui", "Segoe UI", "Roboto", "Arial"],
});

const hindMadurai = Hind_Madurai({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-madurai",
});

export const metadata: Metadata = {
  title: "Clay - Global Branding and UX Design Agency",
  description:
    "We build transformative digital experiences for the world's leading brands by blending AI, design, and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${hindMadurai.variable} antialiased`}
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
