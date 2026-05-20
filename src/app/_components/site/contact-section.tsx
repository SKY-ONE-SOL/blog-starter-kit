"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-[4.25rem] bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.contact.label}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          light
        />

        <div className="mt-12 flex flex-col items-start gap-6 border border-steel-700 bg-navy-900/50 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">Email</p>
            <a
              href={`mailto:${t.common.email}`}
              className="mt-2 block font-mono text-lg font-semibold text-white hover:text-brand-300"
            >
              {t.common.email}
            </a>
          </div>
          <div className="border-l-0 border-steel-700 pl-0 sm:border-l sm:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">Location</p>
            <p className="mt-2 text-sm text-steel-300">{t.about.location.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
