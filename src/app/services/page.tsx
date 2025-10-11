<<<<<<< HEAD
import CtaSection from "@/components/modules/Services/Ctasection/CtaSection";
import PricingSection from "@/components/modules/Services/PricingSection/PricingSection";
import ServicesCard from "@/components/modules/Services/ServiceCard/ServiceCard";
=======
import CtaSection from "@/components/modules/Services/ctasection/CtaSection";
import PricingSection from "@/components/modules/Services/pricingSection/PricingSection";
import ServicesCard from "@/components/modules/Services/serviceCard/ServiceCard";
>>>>>>> 9ea395015f5908afa3e89e4729aee5106e385d8d
import PageBanner from "@/components/shared/PageBanner";

const Servicespage = () => {
  return (
    <>
      <PageBanner title="Our Services" bgImage="/img/bg-img/bg.png" />

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
