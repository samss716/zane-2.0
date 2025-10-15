// src/pages/Traditional.jsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Traditional() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen bg-white pt-20">
      {/* Hero placeholder */}
      <section className="relative flex h-[35vh] items-center justify-center bg-[#f5f5f5]">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="font-bricolage text-4xl md:text-5xl tracking-tight">
            Traditional Works
          </h1>
          <p className="mt-3 text-gray-600">
            (animation slot — swap this later)
          </p>
        </div>
      </section>

      {/* Content row: left nav + right horizontal scroller (child routes render here) */}
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px,1fr]">
          {/* Left: page-local nav (sticky) */}
          <aside className="md:sticky md:top-[calc(4rem+1px)] h-max">
            <h3 className="mb-4 text-xs tracking-[0.2em] text-gray-500">
              COLLECTION
            </h3>
            <nav className="flex flex-row gap-4 md:flex-col md:gap-2">
              <SideTab to="/traditional/portraits" label="Portraits" />
              <SideTab to="/traditional/figure-studies" label="Figure studies" />
              <SideTab to="/traditional/milk-collection" label="Milk collection" />
              <SideTab to="/traditional/archive" label="Archive" />
            </nav>
          </aside>

          {/* Right: child route outlet (each child renders a horizontal strip) */}
          <div className="min-h-[40vh]">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}

function SideTab({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "text-sm font-medium",
          "transition-colors",
          isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-800",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}
