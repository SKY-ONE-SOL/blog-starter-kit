"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";

export function QualitySection() {
  const { t } = useLanguage();

  return (
    <section id="quality" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.quality.label}
          title={t.quality.title}
          subtitle={t.quality.subtitle}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
            <h3 className="font-display text-xl font-semibold text-sky-950">
              {t.quality.controlTitle}
            </h3>
            <ul className="mt-6 space-y-3">
              {t.quality.control.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-600">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
            <h3 className="font-display text-xl font-semibold text-sky-950">
              {t.quality.assuranceTitle}
            </h3>
            <ul className="mt-6 space-y-3">
              {t.quality.assurance.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-600">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
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
