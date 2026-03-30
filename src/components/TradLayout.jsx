import { NavLink, Outlet } from "react-router-dom";

export default function TraditionalLayout() {
  return (
    <main className="relative min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative isolate flex h-[35vh] items-center justify-center overflow-hidden bg-[#f5f5f5]">
  <img
    src="/media/traditional/bird.jpeg"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 z-0 h-full w-full object-cover object-[center_25%]"
  />

  <div className="absolute inset-0 z-[1] bg-black/20" />

  <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 text-center text-white">
    <h1 className="font-bricolage text-4xl md:text-5xl tracking-tight">
      Traditional Works
    </h1>
    <p className="mt-3 text-white/85">
      Drawings, studies, and archive selections
    </p>
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

          {/* RIGHT: strip content from child route */}
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
