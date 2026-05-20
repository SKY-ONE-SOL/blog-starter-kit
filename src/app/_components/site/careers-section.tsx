"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";

export function CareersSection() {
  const { t } = useLanguage();

  return (
    <section id="careers" className="scroll-mt-[4.25rem] bg-steel-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.careers.label}
          title={t.careers.title}
          subtitle={t.careers.subtitle}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {t.careers.areas.map((area, index) => (
            <div key={area.title} className="section-panel-accent p-8">
              <div className="flex items-start gap-3 border-b border-steel-100 pb-4">
                <span className="font-mono text-sm font-bold text-brand-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold text-navy-950">{area.title}</h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {area.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-steel-600">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-brand-500" />
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
