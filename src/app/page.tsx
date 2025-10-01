import Hero from "@/components/modules/Home/Hero";
import OurServices from "@/components/modules/Home/OurServices";
import RunningTextTwo from "@/components/modules/Home/RunningTextTwo";
import WhyChooseUs from "@/components/modules/Home/whyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <RunningTextTwo />
    </>
  );
}
