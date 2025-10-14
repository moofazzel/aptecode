import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import { AnimationProvider } from "@/contexts/AnimationContext";
import type { Metadata } from "next";
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
  title: "Aptecode — Websites that Win Customers",
  description:
    "Fast, conversion-ready websites for new brands and founders. No fluff. Just strategy, clean UX, and sites that sell. Get a free strategy call.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
          <Footer />
          {/* Scroll to top button */}
          <ScrollToTopButton />
        </AnimationProvider>
      </body>
    </html>
  );
}
