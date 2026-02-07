import Reveal from "../motion/Reveal";
import { useContent } from "../../data/contentStore";

const ProgramsGrid = () => {
  const { content } = useContent();
  const programs = content.programsGrid;

  return (
    <section className="mx-auto w-full max-w-6xl px-6" id="programs">
      <Reveal>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentDark">
            {programs.badge}
          </p>
          <h2 className="mt-1 text-3xl font-semibold text-ink">{programs.title}</h2>
        </div>
      </Reveal>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {programs.items.map((program, index) => (
          <Reveal key={program.title} delay={0.1 * index}>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card">
              <h3 className="text-lg font-semibold text-ink">{program.title}</h3>
              <p className="mt-2 text-sm text-muted">{program.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ProgramsGrid;
