"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { siteImages } from "@/lib/images";
import { SectionImage } from "./section-image";

export function NetworkSection() {
  const { t } = useLanguage();
  const table = t.location.table;

  return (
    <section id="network" className="scroll-mt-20 bg-white py-16 md:py-28">
      <div className="relative mb-16 h-56 overflow-hidden md:h-72 lg:h-80">
        <SectionImage
          src={siteImages.network.src}
          alt={siteImages.network.alt}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/55" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-300">
              {t.networkSection.label}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              {t.networkSection.title}
            </h2>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="max-w-2xl text-lg text-steel-600">{t.networkSection.subtitle}</p>

        <div className="mt-16">
          <h3 className="text-lg font-bold text-steel-900">{t.location.title}</h3>
          <p className="mt-2 text-steel-600">{t.location.subtitle}</p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-steel-900">
                  <th className="py-4 pr-4 text-xs font-bold uppercase tracking-wider">
                    {table.customer}
                  </th>
                  <th className="py-4 pr-4 text-xs font-bold uppercase tracking-wider">
                    {table.location}
                  </th>
                  <th className="py-4 pr-4 text-xs font-bold uppercase tracking-wider">
                    {table.distance}
                  </th>
                  <th className="py-4 pr-4 text-xs font-bold uppercase tracking-wider">
                    {table.time}
                  </th>
                  <th className="py-4 text-xs font-bold uppercase tracking-wider">
                    {table.remark}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.location.rows.map((row) => (
                  <tr key={row.customer} className="border-b border-steel-200">
                    <td className="py-4 pr-4 font-semibold text-steel-900">{row.customer}</td>
                    <td className="py-4 pr-4 text-steel-600">{row.location}</td>
                    <td className="py-4 pr-4 font-mono text-steel-700">{row.distance}</td>
                    <td className="py-4 pr-4 font-mono text-steel-700">{row.time}</td>
                    <td className="py-4 text-steel-500">{row.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
