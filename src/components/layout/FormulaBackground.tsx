import { useContent } from "../../data/contentStore";

const FormulaBackground = () => {
  const { content } = useContent();
  const bg = content.formulaBackground;

  return (
    <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
      {bg.lines.map((line) => (
        <div key={line.text} className={line.className}>
          {line.text}
        </div>
      ))}

      {bg.rings.map((ring) => (
        <div key={ring} className={ring} />
      ))}

      {bg.labels.map((label) => (
        <div key={label.text} className={label.className}>
          {label.text}
        </div>
      ))}

      {bg.accents.map((accent) => (
        <div key={accent.text} className={accent.className}>
          {accent.text}
        </div>
      ))}
    </div>
  );
};

export default FormulaBackground;
