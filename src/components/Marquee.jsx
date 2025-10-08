export default function Marquee({
  text = "explore my digital archive",
  className = "",
}) {
  // Build one chunk of repeated text
  const Chunk = () => (
    <div className="flex items-center gap-12 whitespace-nowrap">
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          className="font-bricolage tracking-tight text-3xl md:text-4xl lg:text-5xl"
        >
          {text}
        </span>
      ))}
    </div>
  );

  return (
    <section className={`marquee relative overflow-hidden ${className}`}>
      <div className="marquee__track">
        <Chunk />
        <Chunk /> {/* duplicate for seamless loop */}
      </div>
    </section>
  );
}
