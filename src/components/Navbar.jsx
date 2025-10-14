import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const items = [
    { label: "About Me", target: "about" },
    { label: "Portfolio", target: "portfolio" },
    { label: "Contact", target: "contact" },
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = async (target) => {
    setOpen(false);
    if (location.pathname !== "/") {
      await navigate("/");
      setTimeout(() => scrollToId(target), 0);
    } else {
      scrollToId(target);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full h-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-transparent backdrop-blur-sm" />
      <nav className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Left brand */}
        <button
          onClick={() => handleNavClick("hero")}
          className="text-2xl font-extrabold tracking-tight leading-none"
          aria-label="Go to top"
        >
          Zane
        </button>

        {/* Desktop menu (≥ lg) */}
        <ul className="hidden lg:flex items-center justify-end gap-10">
          {items.map((it) => (
            <li key={it.target}>
              <button
                onClick={() => handleNavClick(it.target)}
                className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              >
                {it.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle (< lg) — we’ll just hide it on large screens */}
        <button
          className="lg:hidden rounded-md px-3 py-2 transition-colors hover:bg-black/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {/* Simple three-lines icon to avoid pulling extra icon deps */}
          <span className="block h-0.5 w-6 bg-black mb-1" />
          <span className="block h-0.5 w-6 bg-black mb-1" />
          <span className="block h-0.5 w-6 bg-black" />
        </button>
      </nav>

      {/* Mobile drawer (< lg) */}
      {open && (
        <div id="mobile-menu" className="lg:hidden">
          <div className="relative bg-gradient-to-b from-white/95 via-white/80 to-white/70 
          backdrop-blur-sm border-t border-black/5"
          >
          <ul className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-2 space-y-2">
            {items.map((it) => (
              <li key={it.target}>
                <button
                  onClick={() => handleNavClick(it.target)}
                  className="block w-full rounded-md px-3 py-3 text-left text-base font-medium transition-colors hover:bg-black/5"
                >
                  {it.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        </div>
      )}
    </header>
  );
}
