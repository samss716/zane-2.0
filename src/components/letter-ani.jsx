export default function LetterAni({ text, className = "", delayStep = 0.07 }) {
  return (
    <span className={`drop-word ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="char"
          style={{ animationDelay: `${i * delayStep}s` }}
          aria-hidden="true"
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}
