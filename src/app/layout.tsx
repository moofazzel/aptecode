import { AnimationProvider } from "@/contexts/AnimationContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
