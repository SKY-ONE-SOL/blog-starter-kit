"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  const { t } = useLanguage();
  const loc = t.about.location;

  return (
    <section id="about" className="scroll-mt-[4.25rem] border-b border-steel-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.about.label}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="section-panel-accent p-8">
            <h3 className="border-b border-steel-200 pb-3 font-display text-lg font-semibold text-navy-950">
              {t.about.facilityTitle}
            </h3>
            <dl className="mt-6 divide-y divide-steel-100">
              <div className="grid grid-cols-2 gap-4 py-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-steel-500">
                  {t.about.fields.location}
                </dt>
                <dd className="text-right text-sm font-semibold text-steel-900">{loc.address}</dd>
              </div>
              <div className="grid grid-cols-2 gap-4 py-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-steel-500">
                  {t.about.fields.area}
                </dt>
                <dd className="text-right text-sm font-semibold text-steel-900">{loc.area}</dd>
              </div>
              <div className="grid grid-cols-2 gap-4 py-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-steel-500">
                  {t.about.fields.warehouse}
                </dt>
                <dd className="text-right text-sm font-semibold text-steel-900">{loc.warehouse}</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-3">
            {loc.zones.map((zone) => (
              <div key={zone.id} className="section-panel flex gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-600 font-mono text-sm font-bold text-white">
                  {zone.id}
                </div>
                <div>
                  <h4 className="font-semibold text-navy-950">{zone.label}</h4>
                  <p className="mt-1 text-sm text-steel-600">{zone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
