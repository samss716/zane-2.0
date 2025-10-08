// src/components/ProjectGrid.jsx
import { useEffect, useState, useRef } from "react";

export default function ProjectGrid({ dataUrl = "/projects.json" }) {
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    let mounted = true;
    fetch(dataUrl)
      .then((r) => {
        if (!r.ok) throw new Error(`Fetch ${r.status}`);
        return r.json();
      })
      .then((data) => {
        if (mounted) setItems(Array.isArray(data) ? data : []);
      })
      .catch((e) => {
        setErr("Could not load projects.json");
        // fallback with your two entries (so grid still demonstrates)
        setItems([
          {
            id: "p1",
            title: "mini-robos",
            src: "/media/3dmodels/mini-robos.mp4",
            description:
              "Blender model of conveyor belt with modeled robots.",
            medium: "3D (video export)",
            year: "2024",
          },
          {
            id: "p2",
            title: "robot.mp4",
            src: "/media/3dmodels/robot.mp4",
            description: "3d modeled robot with textures.",
            medium: "3D (video export)",
            year: "2024",
          },
        ]);
        console.warn(e);
      });
    return () => {
      mounted = false;
    };
  }, [dataUrl]);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-10">
      {err && (
        <p className="mb-4 text-sm text-red-600">
          {err} (showing fallback data)
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-9">
        {items.map((it) => (
          <FlipCard key={it.id} item={it} />
        ))}
      </div>
    </div>
  );
}

function FlipCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const videoRef = useRef(null);

  const toggle = () => setFlipped((v) => !v);
  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  // Pause the video when flipped to the back
  useEffect(() => {
    if (videoRef.current && flipped) videoRef.current.pause();
  }, [flipped]);

  return (
    <div className="flip-scene">
      <div
        className={[
          "flip-card group relative w-full max-w-[420px] mx-auto aspect-square rounded-3xl overflow-hidden",
          "bubble cursor-pointer",
          flipped ? "is-flipped" : "",
        ].join(" ")}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        onClick={toggle}
        onKeyDown={onKey}
      >
        {/* FRONT */}
        <div className="flip-face flip-front absolute inset-0">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src={item.src}
            muted
            playsInline
            preload="metadata"
            onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
            onFocus={(e) => e.currentTarget.play().catch(() => {})}
            onMouseLeave={(e) => e.currentTarget.pause()}
            onBlur={(e) => e.currentTarget.pause()}
          />
          </div>

        {/* BACK */}
        <div className="flip-face flip-back absolute inset-0">
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm p-4 rounded-3xl flex flex-col justify-between">
            <div className="text-gray-900">
              <h3 className="font-bricolage text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                {item.description}
              </p>
            </div>
            <div className="mt-4 text-xs text-gray-600">
              {item.medium} &nbsp;•&nbsp; {item.year}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
