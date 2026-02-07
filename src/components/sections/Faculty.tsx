import Reveal from "../motion/Reveal";
import { useContent } from "../../data/contentStore";

const Faculty = () => {
  const { content } = useContent();
  const faculty = content.faculty;

  return (
    <section className="mx-auto w-full max-w-6xl px-6">
      <Reveal>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentDark">
            {faculty.badge}
          </p>
          <h2 className="mt-1 text-3xl font-semibold text-ink">{faculty.title}</h2>
        </div>
      </Reveal>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {faculty.items.map((member, index) => (
          <Reveal key={member.name} delay={0.1 * index}>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card">
              <div className="flex items-center gap-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-12 w-12 rounded-full border border-white/15 bg-white/10 object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-lg font-semibold text-ink">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-accentDark">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted">{member.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Faculty;
