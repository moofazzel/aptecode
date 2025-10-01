import AboutSec from "@/components/modules/about/AboutSec";
import CounterStrip from "@/components/modules/about/CounterStrip";
import MarqeeSlider from "@/components/modules/about/MarqeeSlider";
import ProcessSection from "@/components/modules/about/ProcessSection";
import TestimonialsSection from "@/components/modules/about/TestimonialsSection";
import PageBanner from "../../components/shared/PageBanner";
export default function AboutPage() {
  return (
    <div>
      <PageBanner
        title="About Aptecode"
        subtitle="We build great digital products"
        bgImage="/img/bg-img/bg.png"
      />
      <AboutSec />
      <ProcessSection />
      <CounterStrip />
      <MarqeeSlider />
      <TestimonialsSection />
    </div>
  );
}
