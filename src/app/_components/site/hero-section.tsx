"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-sky-950 pt-16">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #3374ff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1a52f5 0%, transparent 40%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-900/50 px-4 py-1.5 text-sm text-sky-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {t.hero.badge}
          </p>

          <h1 className="mt-8 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.common.companyName}
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-sky-100 sm:text-2xl">
            {t.hero.tagline}
          </p>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-sky-100/90 sm:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
            >
              {t.hero.ctaServices}
            </a>
            <a
              href="#about"
              className="rounded-full border border-sky-400/40 px-8 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-900/50"
            >
              {t.hero.ctaAbout}
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {t.hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm"
            >
              <p className="font-display text-3xl font-bold text-white">
                {stat.value}
                {stat.unit && (
                  <span className="ml-1 text-lg font-medium text-sky-300">{stat.unit}</span>
                )}
              </p>
              <p className="mt-1 text-sm text-sky-200/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
