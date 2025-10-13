import AboutSec from "./components/About/AboutSec";
import CounterStrip from "./components/About/CounterStrip";
import MarqueeSlider from "./components/About/MarqeeSlider";
import MissionVision from "./components/About/MissionVision";
import ProcessSection from "./components/About/ProcessSection";
import TestimonialsSection from "./components/About/TestimonialsSection";

export default function AboutPage() {
  return (
    <>
      <AboutSec />
      <ProcessSection />
      <CounterStrip />
      <MarqueeSlider />
      <MissionVision />
      <TestimonialsSection />
      {/* <AboutCta /> */}
    </>
  );
}
