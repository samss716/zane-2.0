import { NavLink, Outlet } from "react-router-dom";

export default function TraditionalLayout() {
  return (
    <main className="relative min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative flex h-[35vh] items-center justify-center bg-[#f5f5f5]">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="font-bricolage text-4xl md:text-5xl tracking-tight">
            Traditional Works
          </h1>
          <p className="mt-3 text-gray-600">(animation slot — replace later)</p>
        </div>
      </section>

      {/* Row: sidebar + horizontal scroller */}
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-10 over">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-6">
          {/* LEFT: sidebar (sticky) */}
          <aside className="md:sticky md:top-[calc(4rem+1px)] md:w-56 lg:w-64 shrink-0">
            <h3 className="mb-4 text-xs tracking-[0.2em] text-gray-500">
              COLLECTIONS
            </h3>
            <nav className="flex flex-row gap-4 md:flex-col md:gap-2">
              <SideTab to="/traditional/portraits" label="Portraits" />
              <SideTab to="/traditional/figure-studies" label="Figure studies" />
              <SideTab to="/traditional/milk-collection" label="Milk collection" />
              <SideTab to="/traditional/archive" label="Archive" />
            </nav>
          </aside>

          {/* RIGHT: the strip content from child route */}
          <div className="min-h-[40vh] flex-1 min-w-0">
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
          "text-sm font-medium transition-colors",
          isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-800",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}
