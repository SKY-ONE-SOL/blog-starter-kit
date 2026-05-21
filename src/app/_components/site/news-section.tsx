"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { siteImages } from "@/lib/images";
import { SectionImage } from "./section-image";

export function NewsSection() {
  const { t } = useLanguage();

  return (
    <section id="news" className="scroll-mt-20 border-b border-steel-200 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="glovis-section-label">{t.news.label}</p>

        <div className="mt-10 flex gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {t.news.items.map((item, i) => {
            const img = siteImages.news[i];
            return (
              <article
                key={item.title}
                className="group min-w-[280px] flex-1 overflow-hidden border border-steel-200 bg-white md:min-w-[320px]"
              >
                <div className="relative h-48 overflow-hidden">
                  <SectionImage
                    src={img.src}
                    alt={img.alt}
                    sizes="320px"
                    className="transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {item.date}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-steel-900 transition group-hover:text-brand-700">
                    {item.title}
                  </h3>
                  <span className="btn-glovis mt-4 inline-flex">Read more →</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
