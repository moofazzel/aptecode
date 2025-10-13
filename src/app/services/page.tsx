import CtaSection from "@/components/modules/Services/ctasection/CtaSection";
import PricingSection from "@/components/modules/Services/pricingSection/PricingSection";
import ServicesCard from "@/components/modules/Services/serviceCard/ServiceCard";

const Servicespage = () => {
  return (
    <>
      <ServicesCard />
      <CtaSection
        titleTop="Have Any Projects On Minds!"
        titleBottom="Contact Us"
        ctaText="Make Appointment"
        ctaHref="/contact"
      />
      <PricingSection />
    </>
  );
};

export default Servicespage;
