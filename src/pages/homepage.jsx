// src/pages/homepage.jsx
export default function HomePage() {
  return (
    // pt-20 offsets the fixed <Navbar /> height so content isn't hidden
    <main className="relative min-h-screen bg-[#fffbec] pt-20">
      {/* Hero Section */}
      <section id="hero" className="relative border h-[40vh] flex flex-col items-center justify-center overflow-hidden">
        <h1 className="font-bricolage text-6xl text-black">Portfolio</h1>
      </section>
      {/* Spacer / Intro */}
      <section className="flex h-[40vh] flex-col items-center justify-center">
        <p className="font-bricolage text-xl">Other content goes here…</p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex h-screen flex-col items-center justify-center bg-white"
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <h2 className="font-bricolage text-4xl">About Me</h2>
          <p className="mt-4 text-lg text-gray-700">
            Quick intro about who you are, your stack, and what you’re building.
            You can replace this with cards, a timeline, or a short bio.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="flex h-screen flex-col items-center justify-center bg-[#f5f5f5]"
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <h2 className="font-bricolage text-4xl">Portfolio Works</h2>
          <p className="mt-4 text-lg text-gray-700">
            Showcase projects here—grid of cards, images, or embedded demos.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="flex h-[50vh] flex-col items-center justify-center bg-[#0099ff] text-white"
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
          <h2 className="font-bricolage text-4xl">Contact</h2>
          <p className="mt-3 text-lg opacity-90">
            Drop a line or add your social links here.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-900 py-6 text-center text-gray-300">
        <p className="text-sm">
          © {new Date().getFullYear()} Zane. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
