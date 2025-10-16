import AboutSec from "./components/About/AboutSec";
import CounterStrip from "./components/About/CounterStrip";
import MarqueeSlider from "./components/About/MarqeeSlider";
import MissionVision from "./components/About/MissionVision";
import ProcessSection from "./components/About/ProcessSection";
import TestimonialsSection from "./components/About/TestimonialsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Aptecode | Expert Web Development & Digital Strategy Team",
  description: "Discover the story behind Aptecode - a passionate team of web developers and digital strategists dedicated to creating conversion-ready websites for brands and founders.",
  keywords: [
    "about aptecode",
    "web development team",
    "digital strategy experts", 
    "conversion optimization specialists",
    "web design company",
    "frontend development experts",
    "Ozark AL web agency",
    "professional web developers",
    "digital transformation"
  ],
  openGraph: {
    title: "About Aptecode | Expert Web Development & Digital Strategy Team",
    description: "Meet the passionate team behind Aptecode - creating conversion-ready websites and digital strategies for brands and founders worldwide.",
    url: "https://aptecode.com/about",
    siteName: "Aptecode",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/img/og-about.jpg", // You may need to create this image
        width: 1200,
        height: 630,
        alt: "About Aptecode - Web Development & Digital Strategy Team",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aptecode | Expert Web Development & Digital Strategy Team",
    description: "Meet the passionate team behind Aptecode - creating conversion-ready websites and digital strategies for brands and founders.",
    images: ["/img/og-about.jpg"],
  },
  alternates: {
    canonical: "https://aptecode.com/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutSec />
      <ProcessSection />
      <CounterStrip />
      <MarqueeSlider />
      <MissionVision />
      <TestimonialsSection />
      {/* <AboutCta /> */}
    </>
  );
}
