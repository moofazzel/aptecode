import CalScheduler from "@/components/modules/Contact/CalScheduler";
import ContactForm from "@/components/modules/Contact/ContactForm";
import MapSection from "@/components/modules/Contact/Map";
import PageBanner from "../../components/shared/PageBanner";
export default function AboutPage() {
  const calLink = "gazi-jakia-sultana-jui-ofjboj/30min"; // your link
  return (
    <div>
      <PageBanner title="Contact Aptecode" bgImage="/img/bg-img/bg.png" />
      <PageBanner title="Contact Aptecode" bgImage="/img/bg-img/bg.png" />
      <ContactForm />
      <MapSection />
      <CalScheduler calLink={calLink} namespace="30min" />
    </div>
  );
}
