import CalScheduler from "@/components/modules/Contact/CalScheduler";
import ContactBanner from "@/components/modules/Contact/ContactBanner";
import ContactForm from "@/components/modules/Contact/ContactForm";
import MapSection from "@/components/modules/Contact/Map";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Aptecode | Get Your Free Strategy Call Today",
  description: "Ready to build something great? Contact Aptecode for web development, digital strategy, and custom solutions. Get a free consultation and bring your vision to life.",
  keywords: [
    "contact aptecode",
    "web development contact", 
    "digital strategy consultation",
    "free strategy call",
    "web design inquiry",
    "custom development services",
    "Ozark AL web agency",
    "contact web developer"
  ],
  openGraph: {
    title: "Contact Aptecode | Get Your Free Strategy Call Today",
    description: "Ready to build something great? Contact Aptecode for web development, digital strategy, and custom solutions. Get a free consultation today.",
    url: "https://aptecode.com/contact",
    siteName: "Aptecode",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/img/logo/aptecode.png", 
        width: 1200,
        height: 630,
        alt: "Contact Aptecode - Web Development & Digital Strategy",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Aptecode | Get Your Free Strategy Call Today",
    description: "Ready to build something great? Contact Aptecode for web development, digital strategy, and custom solutions.",
    images: ["/img/logo/aptecode.png"],
  },
  alternates: {
    canonical: "https://aptecode.com/contact",
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

export default function ContactPage() {
  return (
    <div>
      <ContactBanner />
      <ContactForm />
      <CalScheduler />
      <MapSection />
    </div>
  );
}
