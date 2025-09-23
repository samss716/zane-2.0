import { useEffect, useRef, useState } from "react";

export default function PortfolioPanels() {
  const wrapperRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            // if you want it to replay on scroll-out/scroll-in, remove the next line
            io.disconnect();
          }
        });
      },
      {
        root: null,
        threshold: 0.35, // start animating when ~35% of the section is visible
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-6 sm:px-8 lg:px-12 md:grid-cols-3`}
    >
      {/* Left: Sage Green (3D works/animations) */}
      <Panel
        title="green — 3D works / animations"
        className={`from-top bg-[#BFD8B8] text-[#0f1d14]`} // soft sage
        inView={inView}
        delay="0ms"
      />

      {/* Middle: Light Orange (Web designs) */}
      <Panel
        title="orange — web designs"
        className={`from-bottom bg-[#FECBA1] text-[#2b1400]`} // light orange
        inView={inView}
        delay="120ms"
      />

      {/* Right: Lavender (Traditional works) */}
      <Panel
        title="lavender — traditional works"
        className={`from-top bg-[#E6E1FF] text-[#1c1330]`} // lavender
        inView={inView}
        delay="240ms"
      />
    </div>
  );
}

function Panel({ title, className = "", inView, delay = "0ms" }) {
  return (
    <div
      className={[
        "panel group flex h-150 items-center justify-center rounded-2xl p-6",
        "shadow-sm ring-1 ring-black/5",
        className,
        inView ? "in" : "",
      ].join(" ")}
      style={{ transitionDelay: delay }}
    >
      <div className="text-center">
        <h3 className="font-bricolage text-2xl font-semibold tracking-tight transition-colors group-hover:text-black/70">
          {title}
        </h3>
        <p className="mt-2 text-sm text-black/60">
          click to explore
        </p>
      </div>
    </div>
  );
}
