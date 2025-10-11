import ContactForm from "@/components/modules/Contact/ContactForm";
import PageBanner from "../../components/shared/PageBanner";
import MapSection from "@/components/modules/Contact/Map";
export default function AboutPage() {
  return (
    <div>
      <PageBanner
        title="Contact Aptecode"
        subtitle="We build great digital products"
        bgImage="/img/bg-img/bg.png"
      />
      <ContactForm />
      <MapSection/>
    </div>
  );
}
