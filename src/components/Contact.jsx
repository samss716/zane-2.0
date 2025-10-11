// src/components/ContactSection.jsx
import Marquee from "./Marquee"; // reuse your marquee component

export default function ContactSection() {
  // Generate a QR PNG from your IG profile link (reliable)
const instagramUrl = "https://www.instagram.com/samdigikive?igsh=YjJhbHZ5czc5b2Fy&utm_source=qr";

const qrImg = `https://api.qrserver.com/v1/create-qr-code/?size=512x512&format=png&data=${encodeURIComponent(
  instagramUrl
)}`;

  return (
    <section id="contact" className="relative overflow-hidden bg-[#fffbec] py-16 lg:py-20">
      {/* BACKGROUND MARQUEE (stays behind) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-15">
        <Marquee text="connect with me" className="h-full" />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-center font-bricolage text-3xl md:text-4xl tracking-tight mb-8">
          Social
        </h2>

        {/* Video + QR layout */}
        <div className="grid items-center gap-8 md:grid-cols-[1fr_minmax(320px,2fr)_1fr]">
          {/* (Optional) left QR on large screens */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-black/10 bg-white/40 backdrop-blur-md p-4 shadow-sm"
            aria-label="Open Instagram"
          >
            <img
                src={qrImg}
                alt="Instagram QR code"
                className="h-40 w-40 object-contain opacity-85"
              />
          </a>

          {/* Center video */}
          <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
            <video
              className="h-[240px] w-full object-cover md:h-[360px]"
              src="/media/sams.mp4"      // <-- your video path
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          {/* Right QR on large screens */}
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
                className="h-40 w-40 object-contain opacity-85"
              />
            </div>
          </a>
        </div>

        {/* Single QR for mobile (stacks below the video) */}
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-black/10 bg-white/40 backdrop-blur-md p-4 shadow-sm"
            aria-label="Open Instagram"
          >
            <img
              src={qrImg}
              alt="Instagram QR code"
              className="h-40 w-40 object-contain opacity-85"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

