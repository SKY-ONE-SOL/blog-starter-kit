"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-20 bg-sky-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.contact.label}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          light
        />

        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${t.common.email}`}
            className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-sky-950 transition hover:bg-sky-50"
          >
            {t.common.email}
          </a>
          <p className="text-sky-200">{t.about.location.address}</p>
        </div>
      </div>
    </section>
  );
}
