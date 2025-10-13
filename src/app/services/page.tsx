// import CtaSection from "@/components/modules/Services/ctasection/CtaSection";
// import PricingSection from "@/components/modules/Services/pricingSection/PricingSection";

import CtaSection from "@/components/modules/Services/ctasection";
import ServicesCard from "@/components/modules/Services/serviceCard";

// import ServicesCard from "@/components/modules/Services/serviceCard/ServiceCard";

// const Servicespage = () => {
//   return (
//     <>
//       <ServicesCard />
//       <CtaSection
//         titleTop="Have Any Projects On Minds!"
//         titleBottom="Contact Us"
//         ctaText="Make Appointment"
//         ctaHref="/contact"
//       />
//       <PricingSection />
//     </>
//   );
// };

// export default Servicespage;

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
