// src/components/Marquee.jsx
function OutlinedWord({ text = "explore my digital archive" }) {
  return (
    <svg className="h-12 md:h-16 lg:h-20" viewBox="0 0 2200 120" preserveAspectRatio="xMinYMid meet">
      <text
        x="0" y="90"
        fontFamily="Bricolage Grotesque, system-ui, sans-serif"
        fontSize="90"
        stroke="#111"          // outline color
        strokeWidth="2"        // outline thickness
        fill="transparent"     // or set to "#fff" for filled outline
        style={{ paintOrder: "stroke fill" }}
      >
        {text}
      </text>
    </svg>
  );
}

export default function Marquee({ text = "explore my digital archive", className = "", speed = "40s", gap = "1rem" }) {
  const Chunk = () => (
    <div className="flex items-center gap-3 whitespace-nowrap">
      {Array.from({ length: 4 }).map((_, i) => (
        <OutlinedWord key={i} text={text} />
      ))}
    </div>
  );

  return (
    <section className={`marquee relative overflow-hidden ${className}`}
    style={{ ["--speed"]: speed, ["--gap"]: gap }}
    >
      <div className="marquee__track">
        <Chunk />
        <Chunk />
      </div>
    </section>
  );
}
