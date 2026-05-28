"use client";

import { LanguageProvider } from "@/lib/i18n/language-context";
import { SiteHeader } from "./site-header";
import { HeroSection } from "./hero-section";
import { NewsSection } from "./news-section";
import { BusinessAreaSection } from "./business-area-section";
import { NetworkSection } from "./network-section";
import { AboutSection } from "./about-section";
import { InnovationSection } from "./innovation-section";
import { ContactSection } from "./contact-section";
import { MarqueeBanner } from "./marquee-banner";
import { SiteFooter } from "./site-footer";

export function SiteShell() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <HeroSection />
        <NewsSection />
        <BusinessAreaSection />
        <NetworkSection />
        <InnovationSection />
        <AboutSection />
        <ContactSection />
        <MarqueeBanner />
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
