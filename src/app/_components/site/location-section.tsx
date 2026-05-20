"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { SectionHeading } from "./section-heading";

export function LocationSection() {
  const { t } = useLanguage();
  const table = t.location.table;

  return (
    <section id="location" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.location.label}
          title={t.location.title}
          subtitle={t.location.subtitle}
        />

        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-sky-950 text-white">
                  <th className="px-6 py-4 font-semibold">{table.customer}</th>
                  <th className="px-6 py-4 font-semibold">{table.location}</th>
                  <th className="px-6 py-4 font-semibold">{table.distance}</th>
                  <th className="px-6 py-4 font-semibold">{table.time}</th>
                  <th className="px-6 py-4 font-semibold">{table.remark}</th>
                </tr>
              </thead>
              <tbody>
                {t.location.rows.map((row, i) => (
                  <tr
                    key={row.customer}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50/80"}
                  >
                    <td className="px-6 py-4 font-semibold text-sky-950">{row.customer}</td>
                    <td className="px-6 py-4 text-slate-600">{row.location}</td>
                    <td className="px-6 py-4 text-slate-600">{row.distance}</td>
                    <td className="px-6 py-4 text-slate-600">{row.time}</td>
                    <td className="px-6 py-4 text-slate-500">{row.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["HMMA", "KaGA", "HMGMA", "Mobile Port", "SKY ONE"].map((name) => (
            <span
              key={name}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                name === "SKY ONE"
                  ? "bg-sky-600 text-white"
                  : "border border-slate-300 bg-white text-slate-700"
              }`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
