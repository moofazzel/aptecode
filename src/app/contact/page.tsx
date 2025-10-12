import ContactForm from "@/components/modules/Contact/ContactForm";
import MapSection from "@/components/modules/Contact/Map";
import PageBanner from "../../components/shared/PageBanner";
export default function AboutPage() {
  return (
    <div>
      <PageBanner title="Contact Aptecode" bgImage="/img/bg-img/bg.png" />
      <ContactForm />
      <MapSection />
    </div>
  );
}
