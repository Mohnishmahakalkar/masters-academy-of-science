import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useContent } from "../../data/contentStore";

const TopNav = () => {
  const [open, setOpen] = useState(false);
  const { content } = useContent();

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-canvas/90 backdrop-blur">
      <motion.div
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <NavLink to="/" className="flex items-center gap-3 font-semibold tracking-tight text-white">
          <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent to-[#ffd7a0] shadow-card" />
          {content.site.name}
        </NavLink>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
          {content.nav.links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
            href={content.nav.cta.href}
          >
            {content.nav.cta.label}
          </a>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/20 px-3 py-2 text-sm font-semibold text-white transition hover:border-white/40 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </motion.div>
      {open && (
        <div className="border-t border-white/10 bg-[#0b1d2a]/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-white/70">
            {content.nav.links.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
              href={content.nav.cta.href}
            >
              {content.nav.cta.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default TopNav;
