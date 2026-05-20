"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  const { t } = useLanguage();
  const loc = t.about.location;

  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.about.label}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-card">
            <h3 className="font-display text-xl font-semibold text-sky-950">
              {t.about.facilityTitle}
            </h3>
            <dl className="mt-6 space-y-4">
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <dt className="text-sm font-medium text-slate-500">{t.about.fields.location}</dt>
                <dd className="text-sm font-semibold text-slate-900">{loc.address}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <dt className="text-sm font-medium text-slate-500">{t.about.fields.area}</dt>
                <dd className="text-sm font-semibold text-slate-900">{loc.area}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-slate-500">{t.about.fields.warehouse}</dt>
                <dd className="text-sm font-semibold text-slate-900">{loc.warehouse}</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4">
            {loc.zones.map((zone) => (
              <div
                key={zone.id}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 font-display text-lg font-bold text-sky-700">
                  {zone.id}
                </div>
                <div>
                  <h4 className="font-semibold text-sky-950">{zone.label}</h4>
                  <p className="mt-1 text-sm text-slate-600">{zone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
