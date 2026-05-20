import { siteConfig } from "@/lib/site-content";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Company Profile"
          title="Strategic Facility in Alabama"
          subtitle="Located in Montgomery, Alabama — at the heart of the U.S. automotive manufacturing corridor."
          subtitleKo="앨라바마주 몽고메리에 위치한 자동차 산업 물류 거점"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-card">
            <h3 className="font-display text-xl font-semibold text-sky-950">Facility Overview</h3>
            <dl className="mt-6 space-y-4">
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <dt className="text-sm font-medium text-slate-500">Location</dt>
                <dd className="text-sm font-semibold text-slate-900">{siteConfig.location.address}</dd>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <dt className="text-sm font-medium text-slate-500">Total Area</dt>
                <dd className="text-sm font-semibold text-slate-900">{siteConfig.location.area}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm font-medium text-slate-500">Warehouse</dt>
                <dd className="text-sm font-semibold text-slate-900">{siteConfig.location.warehouse}</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-4">
            {siteConfig.location.zones.map((zone) => (
              <div
                key={zone.id}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 font-display text-lg font-bold text-sky-700">
                  {zone.id}
                </div>
                <div>
                  <h4 className="font-semibold text-sky-950">{zone.label}</h4>
                  <p className="mt-1 text-sm text-slate-600">{zone.description}</p>
                  <p className="mt-0.5 text-sm text-slate-500">{zone.descriptionKo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
