import Reveal from "../motion/Reveal";
import { useContent } from "../../data/contentStore";

const CTA = () => {
  const { content } = useContent();
  const cta = content.cta;

  return (
    <section className="mx-auto w-full max-w-5xl px-6 text-center">
      <Reveal>
        <div className="mx-auto flex w-full flex-col items-center rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f2434] via-[#0b1d2a] to-[#101f2b] p-8 shadow-card sm:p-10">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {cta.badge}
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
            {cta.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted">{cta.body}</p>
          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-[#f2a019] px-6 py-3 text-sm font-semibold text-[#0b1d2a] transition hover:bg-[#ffc35d]"
              href={cta.primary.href}
            >
              {cta.primary.label}
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              href={cta.secondary.href}
            >
              {cta.secondary.label}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CTA;
