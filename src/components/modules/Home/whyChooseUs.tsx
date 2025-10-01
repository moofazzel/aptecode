import Image from "next/image";
import AnimatedContent from "./AnimatedContent";
import AnimatedImage from "./AnimatedImage";
import SEOContent from "./SEOContent";
import WhyChooseUsAnimations from "./WhyChooseUsAnimations";

const WhyChooseUs = () => {
  return (
    <section
      className="max-w-[1680px] bg-[#11151C] mx-auto p-32 relative"
      aria-labelledby="why-choose-us-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Structured Data for SEO */}
      {/* hide this temp need to researchabout the seo and geo  */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Aptecode",
            description:
              "Best Agency For Your Startup Business - Professional web development, UI/UX design, and digital solutions",
            url: "https://aptecode.com",
            logo: "https://aptecode.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              availableLanguage: ["English"],
            },
            sameAs: [
              "https://linkedin.com/company/aptecode",
              "https://twitter.com/aptecode",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "2352",
            },
          }),
        }}
      /> */}

      {/* Background Decorative Element */}
      <div
        className="absolute bottom-0 right-0 w-full h-full"
        aria-hidden="true"
      >
        <Image
          decoding="async"
          src="/img/shapes/about-wrap-shape.png"
          className="w-full h-full object-cover z-[-1]"
          alt=""
          width={600}
          height={600}
        />
      </div>

      {/* SEO Content - Always visible to crawlers */}
      <SEOContent />

      <WhyChooseUsAnimations>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 relative">
          {/* Left Column - Image Section */}
          <AnimatedImage />

          {/* Right Column - Content Section */}
          <AnimatedContent />
        </div>
      </WhyChooseUsAnimations>
    </section>
  );
};

export default WhyChooseUs;
