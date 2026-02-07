import Reveal from "../motion/Reveal";
import { useContent } from "../../data/contentStore";

const Testimonials = () => {
  const { content } = useContent();
  const testimonials = content.testimonials;

  return (
    <section className="mx-auto w-full max-w-6xl px-6">
      <Reveal>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentDark">
            {testimonials.badge}
          </p>
          <h2 className="mt-1 text-3xl font-semibold text-ink">{testimonials.title}</h2>
        </div>
      </Reveal>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.items.map((item, index) => (
          <Reveal key={item.name} delay={0.1 * index}>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card">
              <p className="text-base text-ink">"{item.quote}"</p>
              <h4 className="mt-4 text-sm font-semibold text-ink">{item.name}</h4>
              <span className="text-xs text-muted">{item.role}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
