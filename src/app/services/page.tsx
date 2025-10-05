import CtaSection from "@/components/modules/services/ctasection/CtaSection";
import ServicesCard from "@/components/modules/services/serviceCard/ServiceCard";
import PageBanner from "@/components/shared/PageBanner";

const Servicespage = () => {
  return (
    <div>
      <PageBanner
        title="Services"
        subtitle="We build great digital products"
        bgImage="/img/bg-img/bg.png"
      />

      <ServicesCard />
      <CtaSection
        titleTop="Have Any Projects On Minds!"
        titleBottom="Contact Us"
        ctaText="Make Appointment"
        ctaHref="/contact"
      />
    </div>
  );
};

export default Servicespage;
