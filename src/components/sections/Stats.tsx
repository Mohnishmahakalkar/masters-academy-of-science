import Reveal from "../motion/Reveal";
import { useContent } from "../../data/contentStore";

const Stats = () => {
  const { content } = useContent();

  return (
    <section className="mx-auto w-full max-w-6xl px-6">
      <Reveal className="grid gap-6 rounded-3xl bg-white/5 p-8 shadow-card md:grid-cols-4">
        {content.stats.items.map((item) => (
          <div key={item.label}>
            <h3 className="text-2xl font-semibold text-ink">{item.value}</h3>
            <p className="text-sm text-muted">{item.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
};

export default Stats;
