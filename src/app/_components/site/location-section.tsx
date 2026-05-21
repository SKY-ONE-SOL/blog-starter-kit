"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";

export function LocationSection() {
  const { t } = useLanguage();
  const table = t.location.table;

  return (
    <section id="location" className="scroll-mt-[4.25rem] bg-steel-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.location.label}
          title={t.location.title}
          subtitle={t.location.subtitle}
        />

        <div className="mt-14 overflow-hidden border border-steel-200 bg-white shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-steel-200 bg-navy-950 text-white">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                    {table.customer}
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                    {table.location}
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                    {table.distance}
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                    {table.time}
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                    {table.remark}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.location.rows.map((row, i) => (
                  <tr
                    key={row.customer}
                    className={i % 2 === 0 ? "bg-white" : "bg-steel-50"}
                  >
                    <td className="px-6 py-4 font-semibold text-navy-950">{row.customer}</td>
                    <td className="px-6 py-4 text-steel-600">{row.location}</td>
                    <td className="px-6 py-4 font-mono text-steel-700">{row.distance}</td>
                    <td className="px-6 py-4 font-mono text-steel-700">{row.time}</td>
                    <td className="px-6 py-4 text-steel-500">{row.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {["HMMA", "KaGA", "HMGMA", "Mobile Port", "SKY ONE"].map((name) => (
            <span
              key={name}
              className={
                name === "SKY ONE"
                  ? "bg-brand-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
                  : "industry-tag"
              }
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
