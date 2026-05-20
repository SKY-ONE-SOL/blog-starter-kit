"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";

const LOGO_PNG = "/logo.png";
const LOGO_SVG = "/logo.svg";

export function HeroSection() {
  const { t } = useLanguage();
  const [logoSrc, setLogoSrc] = useState(LOGO_PNG);

  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-[4.25rem]">
      <div className="absolute inset-0 bg-grid-industrial bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 border border-brand-500/40 bg-brand-950/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-200">
              <span className="h-1.5 w-1.5 bg-brand-400" />
              {t.hero.badge}
            </p>

            <h1 className="mt-8 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              {t.hero.tagline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-steel-300 sm:text-lg">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {t.hero.specialties.map((item) => (
                <span
                  key={item}
                  className="border border-steel-600/60 bg-navy-900/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-steel-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#services" className="btn-primary">
                {t.hero.ctaServices}
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center border border-steel-500 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-steel-200 transition hover:border-brand-400 hover:text-white"
              >
                {t.hero.ctaAbout}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm border border-steel-700/80 bg-navy-900/60 p-10 backdrop-blur-sm">
              <div className="absolute left-0 top-0 h-1 w-full bg-brand-500" />
              <div className="flex flex-col items-center text-center">
                <Image
                  src={logoSrc}
                  alt="SKY ONE"
                  width={160}
                  height={160}
                  priority
                  className="drop-shadow-lg"
                  onError={() => setLogoSrc(LOGO_SVG)}
                />
                <p className="mt-6 font-display text-xl font-bold text-white">
                  {t.common.companyName}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                  {t.common.wordmarkSubline}
                </p>
              </div>
            </div>

            <div className="mt-6 grid w-full max-w-sm grid-cols-3 gap-px border border-steel-700/80 bg-steel-700/80">
              {t.hero.stats.map((stat) => (
                <div key={stat.label} className="bg-navy-900/80 px-3 py-4 text-center">
                  <p className="metric-value text-2xl text-white sm:text-3xl">
                    {stat.value}
                    {stat.unit && (
                      <span className="ml-0.5 text-sm font-medium text-brand-300">
                        {stat.unit}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-steel-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
