import CtaSection from "./components/Services/ctasection";
import ServicesCard from "./components/Services/serviceCard";

function ServicesPage() {
  return (
    <>
      <ServicesCard />
      <CtaSection
        titleTop="Have Any Projects On Minds!"
        titleBottom="Contact Us"
        ctaText="Make Appointment"
        ctaHref="/contact"
      />
      {/* // comment this for deploy issues */}
      {/* <PricingSection /> */}
    </>
  );
}

export default ServicesPage;
