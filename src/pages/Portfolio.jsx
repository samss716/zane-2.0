import { NavLink, Outlet } from "react-router-dom";

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-white pt-20">
      {/* Hero placeholder */}
      <section
        id="portfolio-hero"
        className="relative flex h-[35vh] items-center justify-center bg-[#f5f5f5]"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
           <div className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 mb-4">
            <video
              className="h-[35vh] md:h-[50vh] w-full object-cover"
              src="/media/3dmodels/soundwaves.mp4" 
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-white" />
          </div>
        </div>
      </section>

      {/* Page-local nav (tabs) */}
      <div className="sticky top-16 z-40 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
        <nav className="mx-auto flex max-w-6xl items-center gap-6 px-6 sm:px-8 lg:px-12 h-12">
          <Tab to="/portfolio/3d-models" label="3D Models" />
          <Tab to="/portfolio/simulations" label="Simulations" />
          <Tab to="/portfolio/video-works" label="Video Works" />
          <Tab to="/portfolio/archive" label="Archive" />
        </nav>
      </div>

      {/* Child content (you can build these later) */}
      <section className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 py-10">
        <Outlet />
      </section>
    </main>
  );
}

function Tab({ to, label }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        [
          "relative text-sm font-medium transition-colors",
          isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-800",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <span className="inline-flex h-full items-center">
          {label}
          {/* active underline */}
          <span
            className={[
              "absolute -bottom-[9px] left-0 h-[2px] w-full transition-opacity",
              isActive ? "bg-gray-900 opacity-100" : "opacity-0",
            ].join(" ")}
          />
        </span>
      )}
    </NavLink>
  );
}
