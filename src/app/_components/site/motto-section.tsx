"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function MottoSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-sky-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
            {t.motto.label}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            {t.motto.title}
          </h2>
          <p className="mt-4 text-lg text-sky-100/90">{t.motto.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.motto.items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-sky-700/50 bg-sky-900/40 px-6 py-8 text-center backdrop-blur-sm"
            >
              <p className="font-display text-2xl font-bold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
