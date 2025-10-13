import AboutSec from "@/components/modules/about/AboutSec";
import CounterStrip from "@/components/modules/about/CounterStrip";
import MarqueeSlider from "@/components/modules/about/MarqeeSlider";
import MissionVision from "@/components/modules/about/MissionVision";
import ProcessSection from "@/components/modules/about/ProcessSection";
import TestimonialsSection from "@/components/modules/about/TestimonialsSection";
import AboutBanner from "@/components/modules/Contact/ContactBanner";

export default function AboutPage() {
  return (
    <div>
      <AboutBanner />
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
