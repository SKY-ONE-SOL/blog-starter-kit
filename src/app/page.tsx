import { SiteHeader } from "@/app/_components/site/site-header";
import { HeroSection } from "@/app/_components/site/hero-section";
import { AboutSection } from "@/app/_components/site/about-section";
import { LocationSection } from "@/app/_components/site/location-section";
import { ServicesSection } from "@/app/_components/site/services-section";
import { MottoSection } from "@/app/_components/site/motto-section";
import { CareersSection } from "@/app/_components/site/careers-section";
import { WarehouseSection } from "@/app/_components/site/warehouse-section";
import { QualitySection } from "@/app/_components/site/quality-section";
import { AdvantagesSection } from "@/app/_components/site/advantages-section";
import { ContactSection } from "@/app/_components/site/contact-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <LocationSection />
        <ServicesSection />
        <MottoSection />
        <CareersSection />
        <WarehouseSection />
        <QualitySection />
        <AdvantagesSection />
        <ContactSection />
      </main>
    </>
  );
}
