import { customerLocations } from "@/lib/site-content";
import { SectionHeading } from "./section-heading";

export function LocationSection() {
  return (
    <section id="location" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Location"
          title="Proximity to Key Customers"
          subtitle="Strategically positioned near major automotive plants and the Mobile Port."
          subtitleKo="주요 완성차 공장 및 항만과 인접한 최적의 입지"
        />

        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-sky-950 text-white">
                  <th className="px-6 py-4 font-semibold">Customer</th>
                  <th className="px-6 py-4 font-semibold">Location</th>
                  <th className="px-6 py-4 font-semibold">Distance</th>
                  <th className="px-6 py-4 font-semibold">Travel Time</th>
                  <th className="px-6 py-4 font-semibold">Remark</th>
                </tr>
              </thead>
              <tbody>
                {customerLocations.map((row, i) => (
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
