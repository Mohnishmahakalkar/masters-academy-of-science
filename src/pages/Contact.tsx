import Reveal from "../components/motion/Reveal";
import { useContent } from "../data/contentStore";

const Contact = () => {
  const { content } = useContent();
  const contact = content.contactPage;

  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <Reveal>
        <div className="py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentDark">
            {contact.badge}
          </p>
          <h1 className="mt-2 text-4xl font-semibold text-ink">{contact.title}</h1>
          <p className="mt-3 text-base text-muted">{contact.body}</p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {contact.cards.map((card, index) => (
          <Reveal key={card.title} delay={0.1 * index}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card">
              <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm text-muted">{card.email}</p>
              <p className="text-sm text-muted">{card.phone}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 rounded-3xl bg-white/5 p-8 shadow-card">
          <h2 className="text-2xl font-semibold text-ink">{contact.feature.title}</h2>
          <p className="mt-3 text-base text-muted">{contact.feature.body}</p>
          <a
            className="mt-4 inline-flex items-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-[#0b1d2a] shadow-card transition hover:-translate-y-0.5"
            href={contact.feature.cta.href}
          >
            {contact.feature.cta.label}
          </a>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
