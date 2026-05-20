"use client";

import { LanguageProvider } from "@/lib/i18n/language-context";
import { SiteHeader } from "./site-header";
import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { LocationSection } from "./location-section";
import { ServicesSection } from "./services-section";
import { MottoSection } from "./motto-section";
import { CareersSection } from "./careers-section";
import { WarehouseSection } from "./warehouse-section";
import { QualitySection } from "./quality-section";
import { AdvantagesSection } from "./advantages-section";
import { ContactSection } from "./contact-section";
import { SiteFooter } from "./site-footer";

export function SiteShell() {
  return (
    <LanguageProvider>
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
      <SiteFooter />
    </LanguageProvider>
  );
}
