import Breadcrumb from "@/components/modules/Blog/Breadcrumb";
import CtaSection from "./components/Services/ctasection";
import PricingSection from "./components/Services/pricingSection/PricingSection";
import RunningCards from "./components/Services/RunningCards/RunningCards";
import ServicesCard from "./components/Services/serviceCard";

// src/app/services/page.tsx
// export const metadata = {
//   title: "Aptecode | Industry-Specific Web Design ",
//   description:
//     "Design that speaks your industry. Fast, SEO-ready websites for healthcare, travel, SaaS, e-commerce, portfolios and more.",
//   alternates: {
//     canonical: "https://yourdomain.com/services",
//     languages: {
//       en: "https://yourdomain.com/en/services",
//     },
//   },
//   openGraph: {
//     type: "website",
//     url: "https://yourdomain.com/services",
//     title: "Industry-Specific Web Design | Aptecode",
//     description:
//       "Design that speaks your industry. See real examples by category.",
//     images: [{ url: "https://yourdomain.com/og/services.png" }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Industry-Specific Web Design | Aptecode",
//     description: "Design that speaks your industry.",
//     images: ["https://yourdomain.com/og/services.png"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

function ServicesPage() {
  return (
    <>
      {/* ---------------Title/Banner------------------- */}
      <div className="text-center mx-auto max-w-5xl px-4 py-16 md:py-25 ">
        <h1
          className="text-2xl md:text-7xl font-bold uppercase text-black mb-[30px]
          "
        >
          Our{" "}
          <span
            className="text-2xl md:text-7xl font-bold uppercase
          bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
          bg-clip-text text-transparent  relative "
            style={{ WebkitTextFillColor: "transparent" }}
          >
            {" "}
            SERVICES
          </span>
        </h1>

        <div className="flex justify-center mb-4">
          <Breadcrumb />
        </div>

        <p className="hero-subtitle text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
          We offer a curated set of services designed to elevate your brand,
          streamline your workflow, and bring your vision to life.
        </p>
      </div>

      {/* -----------------Service Advertisements------------------- */}
      <RunningCards speed={35} direction="left" className="mt-20" />

      <ServicesCard />
      <CtaSection
        titleTop="Have Any Projects On Minds!"
        titleBottom="Contact Us"
        ctaText="Make Appointment"
        ctaHref="/contact"
      />
      {/* // comment this for deploy issues */}
      <PricingSection />
    </>
  );
}

export default ServicesPage;
