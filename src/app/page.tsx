import ClayClients from "@/components/modules/Clients/ClayClients";
import ClayContact from "@/components/modules/Contact/ClayContact";
import ClayHero from "@/components/modules/Home/ClayHero";
import ClayPortfolio from "@/components/modules/Portfolio/ClayPortfolio";
import ClayServices from "@/components/modules/Services/ClayServices";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <ClayHero />

      {/* Services Section */}
      <ClayServices />

      {/* Clients Section */}
      <ClayClients />

      {/* Portfolio Section */}
      <ClayPortfolio />

      {/* Contact Section */}
      <ClayContact />
    </>
  );
}
