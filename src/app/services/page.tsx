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
    </div>
  );
};

export default Servicespage;
