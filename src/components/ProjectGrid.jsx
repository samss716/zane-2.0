// src/components/ProjectGrid.jsx
import { useEffect, useState, useRef } from "react";

export default function ProjectGrid({ dataUrl = "/data/projects.json", collection }) {
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    let mounted = true;

    fetch(dataUrl)
      .then((r) => {
        if (!r.ok) throw new Error(`Fetch ${r.status}`);
        return r.json();
      })
      .then((data) => {
        if (!mounted) return;
        const arr = Array.isArray(data) ? data : [];
        // 🔹 filter when collection prop is provided
        setItems(collection ? arr.filter((x) => x.collection === collection) : arr);
      })
      .catch((e) => {
        console.warn(e);
        if (!mounted) return; //added?
        setErr("Could not load projects.json");
        // minimal fallback (tagged so filtering still works)
        const fallback = [
          {
            id: "p1",
            title: "mini-robos",
            src: "/media/3dmodels/mini-robos.mp4",
            description: "Blender model of conveyor belt with modeled robots.",
            medium: "3D (video export)",
            year: "2024",
            collection: "3d",
          },
          {
            id: "p2",
            title: "robot.mp4",
            src: "/media/3dmodels/robot.mp4",
            description: "3d modeled robot with textures.",
            medium: "3D (video export)",
            year: "2024",
            collection: "3d",
          },
        ];
        setItems(collection ? fallback.filter((x) => x.collection === collection) : fallback);
      });
    return () => { mounted = false; };
  }, [dataUrl, collection]);

  return (
    <>
    <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-10">
      {err && ( <p className="mb-4 text-sm text-red-600">{err} (showing fallback)</p>)}

      {/* Empty state */}
      {items.length === 0 && (
        <p className="text-sm text-gray-600">
          No projects yet for this section.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-9">
        {items.map((it) => (
          <FlipCard key={it.id} item={it} onExpand={() => setSelectedItem(it)} />
        ))}
      </div>
    </div>
    {selectedItem && (
      <VideoModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    )}
    </>
  );
}

function isVideoFile(src = "") {
  return /\.(mp4|webm|mov)(\?.*)?$/i.test(src);
}


function FlipCard({ item, onExpand }) {
  const [flipped, setFlipped] = useState(false);
  const video = isVideoFile(item.src);

  const toggle = () => setFlipped((v) => !v);
  const onKey = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } };

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
        {/* FRONT: video only */}
        <div className="flip-face flip-front absolute inset-0">
          <ProjectMedia item={item} />

          {/*Expand button for vid and img projects */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onExpand();
            }}
            className="absolute bottom-3 right-3 z-10 rounded-full bg-black/65 text-white px-4 py-2 text-xs font-medium backdrop-blur-sm hover:bg-black/85 transition"
            aria-label={`Expand ${item.title}`}
          >
            <span className="inline-flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3M21 16v3a2 2 0 0 1-2 2h-3" />
              </svg>
              {video ? "Watch video" : "Expand"}
            </span>
          </button>

        </div>

        {/* BACK: details */}
        <div className="flip-face flip-back absolute inset-0">
          <div className="absolute inset-0 bg-white/85 backdrop-blur-sm p-4 rounded-3xl flex flex-col justify-between">
            <div className="text-gray-900">
              <h3 className="font-bricolage text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.description}</p>
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

{/*adjustment funct to allow for both mp4 and pngs*/}
function ProjectMedia({ item }) {
  const videoRef = useRef(null);

  const src = item.src || "";


{/*}
  const isVideo =
    src.endsWith(".mp4") ||
    src.endsWith(".webm") ||
    src.endsWith(".mov"); */}

  if (isVideoFile(src)) {
    return (
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        poster={item.poster}
        muted
        autoPlay
        playsInline
        loop
        preload="metadata"
        onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
        onFocus={(e) => e.currentTarget.play().catch(() => {})}
        onMouseLeave={(e) => e.currentTarget.pause()}
        onBlur={(e) => e.currentTarget.pause()}
      />
    );
  }

  return (
    <img
      className="h-full w-full object-cover"
      src={src}
      alt={item.title}
      loading="lazy"
    />
  );
}

{/*additions*/}

function VideoModal({ item, onClose }) {
  const videoRef = useRef(null);
  const video = isVideoFile(item.src);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-11 right-0 text-white/90 hover:text-white text-3xl"
          aria-label="Close expanded project"
        >
          &times;
        </button>

        {/* Expanded media */}
        {video ? (
          <video
            ref={videoRef}
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="w-full max-h-[78vh] rounded-xl bg-black object-contain"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="w-full max-h-[78vh] rounded-xl object-contain bg-black"
          />
        )}

        {/* Project details */}
        <div className="mt-4 text-white">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="mt-1 text-sm text-white/75">
            {item.description}
          </p>
          <p className="mt-2 text-xs text-white/50">
            {item.medium} • {item.year}
          </p>
        </div>
      </div>
    </div>
  );
}