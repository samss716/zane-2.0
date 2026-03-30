export default function CaseStudyHero({
  eyebrow,
  title,
  subtitle,
  image,
}) {
  return (
    <section className="relative isolate flex min-h-[42vh] items-end overflow-hidden bg-[#f5f5f5]">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 z-[1] bg-black/35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-14 md:py-20 text-white">
        {eyebrow && (
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-white/80">
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-4xl font-bricolage text-4xl tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}