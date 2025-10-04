export default function WebDesign() {
  return (
    <main className="relative min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative flex h-[30vh] items-center justify-center bg-[#f5f5f5]">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="font-bricolage text-4xl md:text-5xl tracking-tight">
            Web Design
          </h1>
          <p className="mt-3 text-gray-600">
            case studies & interactive prototypes (placeholders for now)
          </p>
        </div>
      </section>

      {/* Grid of placeholders */}
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-10">
        <div
          className="
            grid gap-6 md:gap-8
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-12
          "
        >
          {/* Desktop-ish wide */}
          <Placeholder
            className="lg:col-span-7 aspect-[16/10]"
            tint="bg-gray-200"
          />
          {/* Phone-ish tall */}
          <Placeholder
            className="lg:col-span-5 aspect-[9/16]"
            tint="bg-gray-100"
          />
          {/* Tall phone */}
          <Placeholder
            className="lg:col-span-4 aspect-[9/16]"
            tint="bg-gray-100"
          />
          {/* Wide desktop */}
          <Placeholder
            className="lg:col-span-8 aspect-[16/10]"
            tint="bg-gray-200"
          />
        </div>
      </section>
    </main>
  );
}

function Placeholder({ className = "", tint = "bg-gray-200" }) {
  return (
    <div
      className={[
        "rounded-2xl border border-black/5 shadow-sm overflow-hidden",
        "flex items-center justify-center",
        tint,
        className,
      ].join(" ")}
    >
      <span className="text-sm text-gray-500">placeholder</span>
    </div>
  );
}
