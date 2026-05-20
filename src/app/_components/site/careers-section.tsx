import { careerAreas } from "@/lib/site-content";
import { SectionHeading } from "./section-heading";

export function CareersSection() {
  return (
    <section id="careers" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Capabilities"
          title="Core Business Areas"
          subtitle="From 3rd party rework to supply chain optimization — end-to-end automotive logistics expertise."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {careerAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card"
            >
              <h3 className="font-display text-lg font-semibold text-sky-950">{area.title}</h3>
              <ul className="mt-5 space-y-2.5">
                {area.items.map((item, i) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    <span>
                      {item}
                      <span className="block text-slate-400">{area.itemsKo[i]}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
