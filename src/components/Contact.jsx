// src/components/ContactSection.jsx
import Marquee from "./Marquee";

export default function ContactSection() {
  const instagramUrl =
    "https://www.instagram.com/samdigikive?igsh=YjJhbHZ5czc5b2Fy&utm_source=qr";

  const qrImg = `https://api.qrserver.com/v1/create-qr-code/?size=512x512&format=png&data=${encodeURIComponent(
    instagramUrl
  )}`;

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#fffbec] py-16 lg:py-20"
    >
      {/* BG: marquee sits underneath via -z-10 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Marquee
          text="connect with me"
          className="h-full w-full opacity-20 tracking-[.2em]"
          aria-hidden
        />
        {/* Soft center fade; marquee peeks mostly at the sides */}
        <div
          className="absolute inset-0"
          // radial fade from solid bg in the center to transparent at edges
          // tweak 42%/65% stops to expand/contract the clear center
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,251,236,1) 0%, rgba(255,251,236,1) 42%, rgba(255,251,236,0) 65%)",
          }}
        />
      </div>

      {/* FOREGROUND */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <h2 className="mb-8 text-center font-bricolage text-3xl md:text-4xl tracking-tight">
          Social
        </h2>

        {/* Video + QR layout */}
<div className="grid items-center gap-8 md:grid-cols-[1fr_minmax(320px,2fr)_1fr]">
  {/* Left QR — hidden on mobile, aligned toward the video on desktop */}
  <a
    href={instagramUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="hidden md:inline-flex w-fit items-center justify-center md:justify-self-end rounded-3xl border border-black/10 bg-white/40 backdrop-blur-md p-4 shadow-sm"
    aria-label="Open Instagram"
  >
    <img
      src={qrImg}
      alt="Instagram QR code"
      className="h-40 w-40 object-contain opacity-90"
    />
  </a>

  {/* Center video */}
  <div className="relative z-10 overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
    <video
      className="h-[240px] w-full object-cover md:h-[360px]"
      src="/media/sams.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  </div>

  {/* Right QR — desktop only (no hidden on inner div needed) */}
  <a
    href={instagramUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="hidden md:flex items-center justify-center"
    aria-label="Open Instagram"
  >
    <div className="rounded-3xl border border-black/10 bg-white/40 backdrop-blur-md p-4 shadow-sm">
      <img
        src={qrImg}
        alt="Instagram QR code"
        className="h-40 w-40 object-contain opacity-90"
      />
    </div>
  </a>
</div>

{/* Mobile-only single QR (centered) */}
<div className="mt-8 flex justify-center md:hidden">
  <a
    href={instagramUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex w-fit items-center justify-center rounded-3xl border border-black/10 bg-white/40 backdrop-blur-md p-4 shadow-sm"
    aria-label="Open Instagram"
  >
    <img
      src={qrImg}
      alt="Instagram QR code"
      className="h-40 w-40 object-contain opacity-90"
    />
  </a>
</div>

      </div>
    </section>
  );
}
