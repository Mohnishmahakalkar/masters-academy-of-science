import { useContent } from "../../data/contentStore";

const Footer = () => {
  const { content } = useContent();
  const footer = content.footer;

  return (
    <footer className="mt-20 bg-[#081522] px-6 py-12 text-[#f8f7f2]">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">{footer.headline}</h3>
          <p className="mt-2 text-sm text-white/70">{footer.body}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">{footer.campus.title}</h4>
          {footer.campus.lines.map((line, index) => (
            <p key={line} className={`text-sm text-white/70 ${index === 0 ? "mt-2" : ""}`}>
              {line}
            </p>
          ))}
        </div>
        <div>
          <h4 className="text-sm font-semibold">{footer.connect.title}</h4>
          {footer.connect.lines.map((line, index) => (
            <p key={line} className={`text-sm text-white/70 ${index === 0 ? "mt-2" : ""}`}>
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-wrap justify-between gap-3 text-xs text-white/60">
        <span>{footer.copyright}</span>
        <span className="text-right">
          {footer.credit}
          <br />
          <a
            href={footer.creditUrl}
            className="font-semibold text-white/80 transition hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            {footer.creditName}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
