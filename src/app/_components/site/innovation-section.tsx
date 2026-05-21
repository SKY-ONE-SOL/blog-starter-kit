"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { siteImages } from "@/lib/images";
import { SectionImage } from "./section-image";

export function InnovationSection() {
  const { t } = useLanguage();

  return (
    <section id="innovation" className="scroll-mt-20 bg-navy-950 py-16 text-white md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-400">
              {t.innovationSection.label}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {t.innovationSection.title}
            </h2>
            <p className="mt-6 text-lg text-steel-300">{t.innovationSection.subtitle}</p>
          </div>
          <div className="relative min-h-[240px] overflow-hidden lg:min-h-[280px]">
            <SectionImage
              src={siteImages.qualityLab.src}
              alt={siteImages.qualityLab.alt}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="border border-steel-700 bg-navy-900/50 p-8 md:p-10">
            <h3 className="text-xl font-bold">{t.quality.controlTitle}</h3>
            <ul className="mt-6 space-y-3 border-t border-steel-700 pt-6">
              {t.quality.control.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-steel-300">
                  <span className="text-brand-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-steel-700 bg-navy-900/50 p-8 md:p-10">
            <h3 className="text-xl font-bold">{t.quality.assuranceTitle}</h3>
            <ul className="mt-6 space-y-3 border-t border-steel-700 pt-6">
              {t.quality.assurance.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-steel-300">
                  <span className="text-brand-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="relative min-h-[200px] overflow-hidden border border-steel-700 lg:min-h-[220px]">
            <SectionImage
              src={siteImages.business.warehouse.src}
              alt={siteImages.business.warehouse.alt}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="opacity-60"
            />
            <div className="absolute inset-0 bg-navy-950/70" />
            <div className="relative p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {t.warehouse.inbound}
              </p>
              <ol className="mt-4 space-y-2">
                {t.warehouse.inboundSteps.slice(0, 4).map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-steel-300">
                    <span className="font-mono text-steel-500">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="relative min-h-[200px] overflow-hidden border border-steel-700 lg:min-h-[220px]">
            <SectionImage
              src={siteImages.business.logistics.src}
              alt={siteImages.business.logistics.alt}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="opacity-60"
            />
            <div className="absolute inset-0 bg-navy-950/70" />
            <div className="relative p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-400">
                {t.warehouse.outbound}
              </p>
              <ol className="mt-4 space-y-2">
                {t.warehouse.outboundSteps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-steel-300">
                    <span className="font-mono text-steel-500">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.motto.items.map((item) => (
            <div key={item} className="border border-steel-700 px-6 py-8 text-center">
              <p className="font-display text-xl font-bold text-brand-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
