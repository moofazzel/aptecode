import CounterStrip from "@/components/modules/About/CounterStrip";
import MarqueeSlider from "@/components/modules/About/MarqeeSlider";
import MissionVision from "@/components/modules/About/MissionVision";
import ProcessSection from "@/components/modules/About/ProcessSection";
import TestimonialsSection from "@/components/modules/About/TestimonialsSection";

export default function AboutPage() {
  return (
    <>
      {/* // comment this for deploy issues */}
      {/* <AboutSec /> */}
      <ProcessSection />
      <CounterStrip />
      <MarqueeSlider />
      <MissionVision />
      <TestimonialsSection />
      {/* <AboutCta /> */}
    </>
  );
}
