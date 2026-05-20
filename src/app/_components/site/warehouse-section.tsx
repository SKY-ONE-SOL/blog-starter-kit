import { warehouseFlow } from "@/lib/site-content";
import { SectionHeading } from "./section-heading";

export function WarehouseSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Warehouse Control"
          title="Inbound & Outbound Process"
          subtitle="Systematic warehouse operations from receiving to shipping."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-8">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-emerald-800">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold text-white">
                IN
              </span>
              Inbound
            </h3>
            <ol className="mt-6 space-y-3">
              {warehouseFlow.inbound.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border-2 border-sky-200 bg-sky-50/50 p-8">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-sky-800">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-sm font-bold text-white">
                OUT
              </span>
              Outbound
            </h3>
            <ol className="mt-6 space-y-3">
              {warehouseFlow.outbound.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
