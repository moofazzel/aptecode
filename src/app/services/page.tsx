import CtaSection from "@/components/modules/services/ctasection/CtaSection";
import PricingSection from "@/components/modules/services/pricingSection/PricingSection";
import ServicesCard from "@/components/modules/services/serviceCard/ServiceCard";
import PageBanner from "@/components/shared/PageBanner";

const Servicespage = () => {
  return (
    <div>
      <PageBanner title="Our Services" bgImage="/img/bg-img/bg.png" />

      <ServicesCard />
      <CtaSection
        titleTop="Have Any Projects On Minds!"
        titleBottom="Contact Us"
        ctaText="Make Appointment"
        ctaHref="/contact"
      />
      <PricingSection />
    </div>
  );
};

export default Servicespage;
