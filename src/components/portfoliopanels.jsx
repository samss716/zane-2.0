// src/components/portfoliopanels.jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PortfolioPanels() {
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const prefersReduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            // remove this if you want it to replay on re-enter
           // io.disconnect();
          }
        }
      },
      { threshold: 0.35 }
    );

    if (prefersReduce) setInView(true);
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
      <div
        ref={wrapperRef}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10"
      >
        {/* Left free space for future animation */}
        <div className="h-40 w-full shrink-0 rounded-2xl bg-transparent md:h-56 md:w-64 lg:w-80 xl:w-[26rem]" />

        {/* Cards row */}
        <div className="flex w-full items-stretch justify-between gap-6 md:gap-10">
          <Card
            title="green — 3D works / animations"
            bg="#BFD8B8"
            text="#0f1d14"
            inView={inView}
            tyStart="-120px"
            tyEnd="80px"
            onClick={() => navigate("/portfolio/3d-models")}
          />
          <Card
            title="orange — web designs"
            bg="#FECBA1"
            text="#2b1400"
            inView={inView}
            tyStart="120px"
            tyEnd="0px"
            delay="80ms"
            onClick={() => navigate("/web-design")}
          />
          <Card
            title="lavender — traditional works"
            bg="#E6E1FF"
            text="#1c1330"
            inView={inView}
            tyStart="-120px"
            tyEnd="-80px"
            delay="160ms"
            onClick={() => navigate("/traditional/portraits")}
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, bg, text, inView, tyStart, tyEnd, delay = "0ms", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "diag-panel", inView ? "in" : "",
          "group flex-1 basis-0 max-w-[380px]",
        "h-64 md:h-72 lg:h-80 rounded-2xl p-6",
        "shadow-sm ring-1 ring-black/5",
        "transition-colors duration-200 text-left"
      ].join(" ")}
      style={{
        backgroundColor: bg,
        color: text,
        "--ty-start": tyStart,
        "--ty-end": tyEnd,
        transitionDelay: delay,
      }}
    >
      <div className="flex h-full items-center justify-center text-center">
        <div>
          <h3 className="font-bricolage text-xl md:text-2xl font-semibold tracking-tight transition-colors group-hover:text-black/70">
            {title}
          </h3>
          <p className="mt-2 text-sm text-black/60">click to explore</p>
        </div>
      </div>
    </button>
  );
}
