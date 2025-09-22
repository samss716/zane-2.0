import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fffbec] relative">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo / Name */}
          <h1 className="text-2xl font-bebas text-gray-800">Zane</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 font-bricolage">
            <a href="#about" className="hover:text-indigo-600 transition">
              About
            </a>
            <a href="#portfolio" className="hover:text-indigo-600 transition">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <nav className="flex flex-col items-start px-6 py-4 space-y-3 font-bricolage">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-600 transition"
              >
                About
              </a>
              <a
                href="#portfolio"
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-600 transition"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-indigo-600 transition"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-center px-4">
        <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bebas z-10">
          Portfolio
        </h1>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen flex flex-col items-center justify-center bg-white px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bricolage mb-4">About Me</h2>
        <p className="text-lg max-w-2xl text-center text-gray-600">
          A little intro goes here. You can expand this section with animations,
          images, or a timeline later.
        </p>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="h-screen flex flex-col items-center justify-center bg-[#f5f5f5] px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bricolage mb-4">
          Portfolio Works
        </h2>
        <p className="text-lg max-w-2xl text-center text-gray-600">
          This is where your projects will be displayed.
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex flex-col items-center justify-center bg-[#0099ff] text-white px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bricolage mb-4">Contact</h2>
        <p className="text-lg max-w-2xl text-center">
          Drop your email or contact form here.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Zane. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
