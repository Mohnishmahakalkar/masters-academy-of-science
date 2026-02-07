import Reveal from "../components/motion/Reveal";
import { useContent } from "../data/contentStore";

const About = () => {
  const { content } = useContent();
  const about = content.about;

  console.log("import.meta.env", import.meta.env);

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <Reveal>
        <div className="py-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentDark">
            {about.badge}
          </p>
          <h1 className="mt-2 text-4xl font-semibold text-ink">{about.title}</h1>
          <p className="mt-3 text-base text-muted">{about.body}</p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {about.cards.map((card, index) => (
          <Reveal key={card.title} delay={0.1 * index}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card">
              <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm text-muted">{card.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 rounded-3xl bg-white/5 p-8 shadow-card">
          <h2 className="text-2xl font-semibold text-ink">{about.feature.title}</h2>
          <p className="mt-3 text-base text-muted">{about.feature.body}</p>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
