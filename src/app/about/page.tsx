import AboutSec from "@/components/modules/About/AboutSec";
import CounterStrip from "@/components/modules/About/CounterStrip";
import MarqueeSlider from "@/components/modules/About/MarqeeSlider";
import MissionVision from "@/components/modules/About/MissionVision";
import ProcessSection from "@/components/modules/About/ProcessSection";
import TestimonialsSection from "@/components/modules/About/TestimonialsSection";
import PageBanner from "../../components/shared/PageBanner";
export default function AboutPage() {
  return (
    <div>
      <PageBanner title="About Aptecode" bgImage="/img/bg-img/bg.png" />
      <AboutSec />
      <ProcessSection />
      <CounterStrip />
      <MarqueeSlider />
      <MissionVision />
      <TestimonialsSection />
      {/* <AboutCta /> */}
    </div>
  );
}
