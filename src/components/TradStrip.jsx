// src/components/TradStrip.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function CollectionStrip() {
  const { collection } = useParams();
  const [items, setItems] = useState([]);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  useEffect(() => {
    fetch("/data/traditional.json")
      .then((r) => {
        if (!r.ok) throw new Error(`Fetch ${r.status}`);
        return r.json();
      })
      .then((arr) => setItems((arr || []).filter((x) => x.collection === collection)))
      .catch(() => setItems([]));
  }, [collection]);

  const openAt = (idx) => setLightbox({ open: true, index: idx });
  const close = () => setLightbox({ open: false, index: 0 });
  const next = () =>
    setLightbox((s) => ({ ...s, index: (s.index + 1) % items.length }));
  const prev = () =>
    setLightbox((s) => ({ ...s, index: (s.index - 1 + items.length) % items.length }));

  return (
    <div className="relative">
      <div className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm p-4">
        {/* horizontally scrollable inner lane */}
        <div className="overflow-x-auto rect-pink-scroll">
          <div className="flex gap-4 min-w-full py-4 pb-6">
            {items.length === 0 && (
              <div className="px-2 text-sm text-gray-500">
                No items in this collection yet.
              </div>
            )}

            {items.map((it, idx) => (
              <figure
                key={it.id || idx}
                className="shrink-0 w-[260px] md:w-[280px] lg:w-[300px]"
              >
                {/* Card (click opens lightbox) */}
                <button
                  type="button"
                  onClick={() => openAt(idx)}
                  className="block w-full aspect-[3/4] rounded-xl overflow-hidden border border-black/5 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
                  aria-label={`Open ${it.title || "image"} in full view`}
                >
                  <img
                    src={it.src}
                    alt={it.title || "Artwork"}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>

                {/* Caption */}
                <figcaption className="mt-2">
                  <div className="truncate text-sm font-medium text-gray-900">
                    {it.title || "Untitled"}
                  </div>
                  <div className="text-xs text-gray-500">{it.year || ""}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {lightbox.open && items.length > 0 && (
        <Lightbox
          item={items[lightbox.index]}
          onClose={close}
          onNext={items.length > 1 ? next : undefined}
          onPrev={items.length > 1 ? prev : undefined}
        />
      )}
    </div>
  );
}

/* ---------------- Lightbox ---------------- */

function Lightbox({ item, onClose, onNext, onPrev }) {
  const backdropRef = useRef(null);
  const imgWrapRef = useRef(null);

  // lock scroll + ESC to close + arrow keys
  useEffect(() => {
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === "ArrowLeft") onPrev?.();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      root.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onNext, onPrev]);

  const clickBackdrop = (e) => {
    if (e.target === backdropRef.current) onClose?.();
  };

  const enterFullscreen = async () => {
    const el = imgWrapRef.current;
    if (!el) return;
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await el.requestFullscreen?.();
      }
    } catch {
    }
  };

  return (
    <div
      ref={backdropRef}
      onClick={clickBackdrop}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={item?.title || "Image viewer"}
    >
      <div className="relative w-full max-w-6xl">
        {/* Top bar */}
        <div className="absolute -top-10 left-0 right-0 flex items-center justify-end gap-2 text-white">
          <button
            onClick={enterFullscreen}
            className="rounded-lg bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
          >
            Full Screen
          </button>
          <button
            onClick={onClose}
            className="rounded-lg bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
          >
            Close
          </button>
        </div>

        {/* Image area */}
        <div
          ref={imgWrapRef}
          className="relative mx-auto w-full overflow-hidden rounded-2xl bg-black shadow-xl ring-1 ring-white/10 aspect-[3/2]"
        >
          <img
            src={item?.src}
            alt={item?.title || "Artwork"}
            className="absolute inset-0 h-full w-full select-none object-contain"
            draggable={false}
          />
        </div>

        {/* Caption + nav */}
        <div className="mt-3 flex items-center justify-between text-white/90">
          <div className="text-sm">
            <div className="font-medium">{item?.title}</div>
            {(item?.medium || item?.year) && (
              <div className="opacity-80">
                {[item.medium, item.year].filter(Boolean).join(" • ")}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {onPrev && (
              <button
                onClick={onPrev}
                className="rounded-md bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
              >
                ← Prev
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="rounded-md bg-white/10 px-3 py-1 text-sm hover:bg-white/20"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
