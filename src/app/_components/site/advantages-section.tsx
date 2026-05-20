"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";

export function AdvantagesSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-steel-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label={t.advantages.label} title={t.advantages.title} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.advantages.items.map((adv, i) => (
            <div key={adv.title} className="section-panel-accent p-6">
              <p className="font-mono text-xs font-bold text-brand-600">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-navy-950">{adv.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-600">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
