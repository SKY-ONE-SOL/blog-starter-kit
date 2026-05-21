"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function NetworkSection() {
  const { t } = useLanguage();
  const table = t.location.table;

  return (
    <section id="network" className="scroll-mt-20 bg-white py-16 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="glovis-section-label">{t.networkSection.label}</p>
        <h2 className="glovis-section-title mt-4">{t.networkSection.title}</h2>
        <p className="mt-6 max-w-2xl text-lg text-steel-600">{t.networkSection.subtitle}</p>

        <div className="mt-16 grid grid-cols-2 gap-8 border-y border-steel-200 py-12 lg:grid-cols-4">
          {t.networkSection.stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-4xl font-bold tracking-tight text-brand-600 md:text-5xl lg:text-6xl">
                {stat.value}
                {stat.suffix && (
                  <span className="ml-1 text-lg font-medium text-steel-500 md:text-xl">
                    {stat.suffix}
                  </span>
                )}
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-steel-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

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
