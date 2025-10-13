import CalScheduler from "@/components/modules/Contact/CalScheduler";
import ContactBanner from "@/components/modules/Contact/ContactBanner";
import ContactForm from "@/components/modules/Contact/ContactForm";
import MapSection from "@/components/modules/Contact/Map";
export default function AboutPage() {
  return (
    <div>
      <ContactBanner />
      <ContactForm />
      <CalScheduler />
      <MapSection />
    </div>
  );
}
