"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function MottoSection() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-steel-800 bg-navy-950 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-400">
            {t.motto.label}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            {t.motto.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel-300">{t.motto.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-px border border-steel-700 bg-steel-700 sm:grid-cols-2 lg:grid-cols-4">
          {t.motto.items.map((item, i) => (
            <div key={item} className="bg-navy-900 px-6 py-8">
              <p className="font-mono text-xs font-semibold text-brand-400">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-display text-xl font-bold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
