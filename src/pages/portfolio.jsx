import { NavLink, Outlet } from "react-router-dom";

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-white pt-20">
      {/* Hero placeholder (drop your animation here later) */}
      <section
        id="portfolio-hero"
        className="relative flex h-[35vh] items-center justify-center bg-[#f5f5f5]"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="font-bricolage text-4xl md:text-5xl tracking-tight">
            Portfolio
          </h1>
          <p className="mt-3 text-gray-600">
            (animation slot — replace this section later)
          </p>
        </div>
      </section>

      {/* Page-local nav (tabs) */}
      <div className="sticky top-16 z-40 border-b bg-white/90 backdrop-blur">
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
