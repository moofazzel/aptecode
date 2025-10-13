import {
  AboutSec,
  CounterStrip,
  MarqueeSlider,
  MissionVision,
  ProcessSection,
  TestimonialsSection,
} from "@/components/modules/About";

export default function AboutPage() {
  return (
    <div>
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
