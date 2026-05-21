"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(59,130,214,0.25),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(37,99,184,0.2),transparent_45%)]" />
      <div className="absolute inset-0 bg-grid-industrial bg-grid opacity-[0.15]" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/20" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-16 pt-32 lg:px-10 lg:pb-24 lg:pt-40">
        <p
          className="hero-line text-sm font-medium uppercase tracking-[0.35em] text-brand-300"
          style={{ animationDelay: "0.1s" }}
        >
          {t.hero.hook}
        </p>

        <div className="mt-6 space-y-1 md:mt-10">
          {t.hero.lines.map((line, i) => (
            <h1
              key={line}
              className="hero-line font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-white"
              style={{ animationDelay: `${0.2 + i * 0.12}s` }}
            >
              {line}
            </h1>
          ))}
          <p
            className="hero-line pt-2 font-display text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-tight text-brand-400"
            style={{ animationDelay: "0.65s" }}
          >
            {t.hero.provider}
          </p>
        </div>

        <p
          className="hero-line mt-10 max-w-2xl text-base leading-relaxed text-steel-300 md:text-lg"
          style={{ animationDelay: "0.85s" }}
        >
          {t.hero.intro}
        </p>

        <div
          className="hero-line mt-12 flex flex-wrap gap-4"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#business"
            className="bg-brand-600 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-brand-500"
          >
            {t.hero.ctaServices}
          </a>
          <a
            href="#about"
            className="border border-white/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10"
          >
            {t.hero.ctaAbout}
          </a>
        </div>
      </div>

      <a
        href="#news"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition hover:text-white"
        aria-label={t.hero.scroll}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t.hero.scroll}</span>
        <span className="block h-10 w-px animate-pulse bg-white/40" />
      </a>
    </section>
  );
}
