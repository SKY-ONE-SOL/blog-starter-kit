"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";

export function QualitySection() {
  const { t } = useLanguage();

  return (
    <section id="quality" className="scroll-mt-[4.25rem] bg-steel-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.quality.label}
          title={t.quality.title}
          subtitle={t.quality.subtitle}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="section-panel-accent p-8">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-navy-950">
              <span className="h-2 w-2 bg-brand-600" />
              {t.quality.controlTitle}
            </h3>
            <ul className="mt-6 space-y-3 border-t border-steel-100 pt-6">
              {t.quality.control.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-steel-600">
                  <span className="mt-0.5 font-mono text-xs font-bold text-brand-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="section-panel-accent p-8">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-navy-950">
              <span className="h-2 w-2 bg-brand-600" />
              {t.quality.assuranceTitle}
            </h3>
            <ul className="mt-6 space-y-3 border-t border-steel-100 pt-6">
              {t.quality.assurance.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-steel-600">
                  <span className="mt-0.5 font-mono text-xs font-bold text-brand-600">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
