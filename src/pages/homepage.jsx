import LetterDrop from "../components/letter-ani.jsx";
import ModelCanvas from "../components/glb-canvas.jsx";
import PortfolioPanels from "../components/portfolio-panels.jsx";

export default function HomePage() {
  return (
    // pt-20 offsets your fixed Navbar
    <main className="relative min-h-screen bg-[#fffbec] pt-20">
      {/* HERO */}
      <section
        id="hero"
        className="relative flex min-h-[45vh] items-center justify-center overflow-hidden"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
          {/*adjusting gap for better spacing between ani and txt */}
          <div className="flex flex-col items-center justify-center gap-25 md:flex-row md:items-center md:justify-between">
            {/* LEFT: 3D model */}
            <div className="w-full md:w-[60%]">
              <div className="h-[240px] md:h-[320px] overflow-hidden rounded-2xl shadow-sm">
                {/* Set url to your glb file"*/}
                <ModelCanvas url="/lumiaabstract.glb" rotation={[0, 0.2, 0]} scale={1} interactive={false} />
              </div>
            </div>

            {/* RIGHT: Title */}
            <div className="w-full text-center md:w-[40%] md:text-left">
              <h1 className="font-bricolage text-5xl leading-[0.95] text-black md:text-6xl">
                <LetterDrop text="Portfolio" delayStep={0.12} />
              </h1>
              <p className="mt-3 text-lg text-gray-700 opacity-90">
                New Media Artist & Developer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer / Intro */}
      <section className="flex h-[40vh] flex-col items-center justify-center">
        <p className="font-bricolage text-xl">Other content goes here…</p>
      </section>

      {/* About */}
      <section
        id="about"
        className="flex h-[40vh] flex-col items-center justify-center bg-white"
      >
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <h2 className="font-bricolage text-4xl">About Me</h2>
          <p className="mt-4 text-lg text-gray-700">
            Quick intro about who you are, your stack, and what you’re building.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="flex min-h-screen flex-col items-center justify-center bg-[#f5f5f5]"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
          <h2 className="font-bricolage text-4xl">Portfolio Works</h2>
          <p className="mt-3 text-lg text-gray-700">
            Showcase projects here—grid of cards, images, or demos.
          </p>
        </div>

        <div className="mt-8 w-full">
        <PortfolioPanels />
        </div>
      </section>

      {/* Contact */}
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

      <footer className="mt-auto bg-gray-900 py-6 text-center text-gray-300">
        <p className="text-sm">
          © {new Date().getFullYear()} Zane. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
