"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";

export function CareersSection() {
  const { t } = useLanguage();

  return (
    <section id="careers" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.careers.label}
          title={t.careers.title}
          subtitle={t.careers.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {t.careers.areas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card"
            >
              <h3 className="font-display text-lg font-semibold text-sky-950">{area.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {area.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
