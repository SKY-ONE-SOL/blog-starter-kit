import { advantages } from "@/lib/site-content";
import { SectionHeading } from "./section-heading";

export function AdvantagesSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Advantages"
          title="Why Choose SKY ONE"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="rounded-2xl bg-sky-950 px-6 py-8 text-center text-white"
            >
              <h3 className="font-display text-lg font-semibold">{adv.title}</h3>
              <p className="mt-1 text-sm text-sky-300">{adv.titleKo}</p>
              <p className="mt-4 text-sm leading-relaxed text-sky-100/80">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
