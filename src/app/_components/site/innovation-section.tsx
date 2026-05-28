"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { siteImages } from "@/lib/images";
import { SectionImage } from "./section-image";

export function InnovationSection() {
  const { t } = useLanguage();
  const inv = t.innovationSection;

  return (
    <section id="innovation" className="scroll-mt-20 bg-navy-950 py-16 text-white md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-400">
              {inv.label}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {inv.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-steel-300">{inv.subtitle}</p>
            <a
              href="#business"
              className="mt-8 inline-block border border-brand-500/50 px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-brand-300 transition hover:bg-brand-600/20"
            >
              {inv.cta}
            </a>
          </div>
          <div className="relative min-h-[240px] overflow-hidden lg:min-h-[280px]">
            <SectionImage
              src={siteImages.business.warehouse.src}
              alt={siteImages.business.warehouse.alt}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="border border-steel-700 bg-navy-900/50 p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Warehouse
            </p>
            <h3 className="mt-2 text-xl font-bold">{inv.warehouseTitle}</h3>
            <ul className="mt-6 space-y-3 border-t border-steel-700 pt-6">
              {inv.warehouseItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-steel-300">
                  <span className="shrink-0 text-emerald-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-steel-700 bg-navy-900/50 p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Assembly
            </p>
            <h3 className="mt-2 text-xl font-bold">{inv.assemblyTitle}</h3>
            <ul className="mt-6 space-y-3 border-t border-steel-700 pt-6">
              {inv.assemblyItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-steel-300">
                  <span className="shrink-0 text-amber-400">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="relative min-h-[220px] overflow-hidden border border-steel-700 lg:min-h-[260px]">
            <SectionImage
              src={siteImages.business.warehouse.src}
              alt={siteImages.business.warehouse.alt}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="opacity-55"
            />
            <div className="absolute inset-0 bg-navy-950/75" />
            <div className="relative p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {inv.inboundLabel}
              </p>
              <ol className="mt-4 space-y-2.5">
                {inv.inboundSteps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-steel-200">
                    <span className="font-mono text-emerald-500/90">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="relative min-h-[220px] overflow-hidden border border-steel-700 lg:min-h-[260px]">
            <SectionImage
              src={siteImages.business.assembly.src}
              alt={siteImages.business.assembly.alt}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="opacity-55"
            />
            <div className="absolute inset-0 bg-navy-950/75" />
            <div className="relative p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {inv.outboundLabel}
              </p>
              <ol className="mt-4 space-y-2.5">
                {inv.outboundSteps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm text-steel-200">
                    <span className="font-mono text-amber-500/90">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {inv.highlights.map((item) => (
            <div key={item} className="border border-steel-700 px-6 py-8 text-center">
              <p className="font-display text-lg font-bold text-brand-300 md:text-xl">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
