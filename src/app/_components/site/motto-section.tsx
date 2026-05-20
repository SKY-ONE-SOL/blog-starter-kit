import { mottoItems } from "@/lib/site-content";

export function MottoSection() {
  return (
    <section className="bg-sky-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">Motto</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Our Commitment to You
          </h2>
          <p className="mt-4 text-lg text-sky-100/90">
            We strive to deliver results that match your expectations — from your perspective.
          </p>
          <p className="mt-2 text-base text-sky-200/70">
            고객의 입장에서 기대한 퍼포먼스가 실제 결과물이 되도록 노력하겠습니다.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mottoItems.map((item) => (
            <div
              key={item.en}
              className="rounded-2xl border border-sky-700/50 bg-sky-900/40 px-6 py-8 text-center backdrop-blur-sm"
            >
              <p className="font-display text-2xl font-bold text-white">{item.en}</p>
              <p className="mt-2 text-sky-300">{item.ko}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
