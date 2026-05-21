"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { businessImageByCardId, siteImages } from "@/lib/images";
import { SectionImage } from "./section-image";

export function BusinessAreaSection() {
  const { t } = useLanguage();

  return (
    <section id="business" className="scroll-mt-20 bg-steel-50 py-16 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="glovis-section-label">{t.businessArea.label}</p>
        <h2 className="glovis-section-title mt-4 max-w-3xl">{t.hero.tagline}</h2>
        <p className="mt-6 max-w-2xl text-steel-600">{t.hero.description}</p>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-5">
          {t.businessArea.cards.map((card) => {
            const imageKey = businessImageByCardId[card.id];
            const img = siteImages.business[imageKey];

            return (
              <a
                key={card.id}
                href={card.href}
                className="group business-card min-h-[24rem] md:min-h-[28rem]"
              >
                <div className="absolute inset-0">
                  <SectionImage
                    src={img.src}
                    alt={img.alt}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-navy-950/30 transition group-hover:via-navy-950/50" />
                <div className="relative">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-steel-200 md:text-base">
                    {card.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80 transition group-hover:text-white">
                    Learn more
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
