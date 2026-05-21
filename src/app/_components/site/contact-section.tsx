"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-20 bg-brand-600 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-200">
          {t.contact.label}
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">
          {t.contact.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-brand-100">{t.contact.subtitle}</p>
        <a
          href={`mailto:${t.common.email}`}
          className="mt-10 inline-block bg-white px-12 py-4 text-sm font-bold uppercase tracking-widest text-brand-700 transition hover:bg-brand-50"
        >
          {t.common.email}
        </a>
      </div>
    </section>
  );
}
