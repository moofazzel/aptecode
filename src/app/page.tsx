import AboutSection from "@/components/modules/Home/AboutSection";
import Clients from "@/components/modules/Home/Clients";
import FreeConsultiation from "@/components/modules/Home/FreeConsultiation";
import Hero from "@/components/modules/Home/Hero";
import HomeContact from "@/components/modules/Home/HomeContact";
import LatestNewsAndTips from "@/components/modules/Home/LatestNewsAndTips";
import OurServices from "@/components/modules/Home/OurServices";
import Projects from "@/components/modules/Home/Projects";
import RunningTextTwo from "@/components/modules/Home/RunningTextTwo";
import WhyChooseUs from "@/components/modules/Home/whyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <OurServices />
      <RunningTextTwo />
      <Projects />
      <FreeConsultiation />
      <AboutSection />
      <Clients />
      <HomeContact />
      <LatestNewsAndTips />
    </>
  );
}
