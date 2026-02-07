import Reveal from "../components/motion/Reveal";
import { useContent } from "../data/contentStore";

const Admissions = () => {
  const { content } = useContent();
  const admissions = content.admissionsPage;

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <Reveal>
        <div className="py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentDark">
            {admissions.badge}
          </p>
          <h1 className="mt-2 text-4xl font-semibold text-ink">{admissions.title}</h1>
          <p className="mt-3 text-base text-muted">{admissions.body}</p>
        </div>
      </Reveal>

      <div className="grid gap-4">
        {admissions.steps.map((step, index) => (
          <Reveal key={step} delay={0.1 * index}>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-card">
              <span className="text-lg font-semibold text-accentDark">0{index + 1}</span>
              <p className="text-sm text-muted">{step}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 rounded-3xl bg-white/5 p-8 shadow-card">
          <h2 className="text-2xl font-semibold text-ink">
            {admissions.feature.title}
          </h2>
          <p className="mt-3 text-base text-muted">{admissions.feature.body}</p>
          <a
            className="mt-4 inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/40"
            href={admissions.feature.cta.href}
          >
            {admissions.feature.cta.label}
          </a>
        </div>
      </Reveal>
    </div>
  );
};

export default Admissions;
