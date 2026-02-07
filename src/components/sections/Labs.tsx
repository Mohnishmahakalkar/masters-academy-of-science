import Reveal from "../motion/Reveal";
import { useContent } from "../../data/contentStore";

const Labs = () => {
  const { content } = useContent();
  const labs = content.labs;

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
      <div>
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentDark">
              {labs.badge}
            </p>
            <h2 className="mt-1 text-3xl font-semibold text-ink">{labs.title}</h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3 text-base text-muted">{labs.body}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-5 flex flex-wrap gap-3">
            {labs.chips.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.3}>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-card">
          <h3 className="text-xl font-semibold text-ink">{labs.card.title}</h3>
          <p className="mt-3 text-sm text-muted">{labs.card.body}</p>
          <button className="mt-5 inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/40">
            {labs.card.cta}
          </button>
        </div>
      </Reveal>
    </section>
  );
};

export default Labs;
