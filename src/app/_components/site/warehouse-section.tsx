"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";

export function WarehouseSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-steel-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.warehouse.label}
          title={t.warehouse.title}
          subtitle={t.warehouse.subtitle}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="border border-steel-200 bg-steel-50">
            <div className="flex items-center gap-3 border-b border-steel-200 bg-navy-950 px-6 py-4">
              <span className="bg-emerald-600 px-2 py-1 font-mono text-xs font-bold text-white">
                IN
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{t.warehouse.inbound}</h3>
            </div>
            <ol className="divide-y divide-steel-200">
              {t.warehouse.inboundSteps.map((step, i) => (
                <li key={step} className="flex gap-4 px-6 py-3.5 text-sm text-steel-700">
                  <span className="font-mono text-xs font-bold text-emerald-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="border border-steel-200 bg-steel-50">
            <div className="flex items-center gap-3 border-b border-steel-200 bg-navy-950 px-6 py-4">
              <span className="bg-brand-600 px-2 py-1 font-mono text-xs font-bold text-white">
                OUT
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{t.warehouse.outbound}</h3>
            </div>
            <ol className="divide-y divide-steel-200">
              {t.warehouse.outboundSteps.map((step, i) => (
                <li key={step} className="flex gap-4 px-6 py-3.5 text-sm text-steel-700">
                  <span className="font-mono text-xs font-bold text-brand-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
