"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { siteImages } from "@/lib/images";
import { SectionImage } from "./section-image";

export function AboutSection() {
  const { t } = useLanguage();
  const loc = t.about.location;

  return (
    <section id="about" className="scroll-mt-20 bg-steel-100 py-16 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="glovis-section-label">{t.about.label}</p>
            <h2 className="glovis-section-title mt-4">{t.about.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-steel-600">{t.about.subtitle}</p>

            <dl className="mt-10 space-y-6 border-t border-steel-300 pt-10">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-steel-500">
                  {t.about.fields.location}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-steel-900">{loc.address}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-steel-500">
                  {t.about.fields.area}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-steel-900">{loc.area}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-steel-500">
                  {t.about.fields.warehouse}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-steel-900">{loc.warehouse}</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative min-h-[280px] overflow-hidden lg:min-h-[360px]">
              <SectionImage
                src={siteImages.facility.src}
                alt={siteImages.facility.alt}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {loc.zones.map((zone) => (
                <div
                  key={zone.id}
                  className="flex items-start gap-4 border border-steel-200 bg-white p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-600 font-display text-lg font-bold text-white">
                    {zone.id}
                  </span>
                  <div>
                    <h4 className="font-bold text-steel-900">{zone.label}</h4>
                    <p className="mt-1 text-sm text-steel-600">{zone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
