import LetterDrop from "../components/LetterAni.jsx";
import ModelCanvas from "../components/GlbCanvas.jsx";
import Marquee from "../components/Marquee.jsx";
import PortfolioPanels from "../components/PortfolioPanels.jsx";
import Contact from "../components/Contact.jsx";


export default function HomePage() {
  return (
    // pt-20 offsets your fixed Navbar
    <main className="relative min-h-screen bg-[#fffbec] pt-20">
      {/* HERO */}
      <section
        id="hero"
        className="scroll-mt-20 relative flex min-h-[45vh] items-center justify-center overflow-hidden"
      >
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
          {/*adjusting gap for better spacing between ani and txt */}
          <div className="flex flex-col items-center justify-center gap-25 md:flex-row md:items-center md:justify-between">
            {/* LEFT: 3D model */}
            <div className="w-full md:w-[60%]">
              <div className="h-[240px] md:h-[320px] overflow-hidden rounded-2xl shadow-sm">
                {/* Set url to your glb file"*/}
                <ModelCanvas url="/lumiaabstract.glb" rotation={[0, 0.2, 0]} scale={1} interactive={true} />
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

      {/* Marquee / Intro */}
      <section className="py-10">
        <div className="mx-auto w-full max-w-6xl px-0 sm:px-0 lg:px-0">
        <Marquee className="bg-[#fffbec] py-6" />
        </div>
      </section>

    {/* About */}
    <section id="about" className="scroll-mt-20 bg-white">
  <div className="mx-auto max-w-5xl px-6 sm:px-8 py-12 md:py-16">
    <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 md:gap-10">
      {/* Profile photo (on top for mobile, right for desktop) */}
      <img
        src="/media/pfp.jpg"
        alt="Portrait of Zane"
        className="
          h-40 w-40 md:h-56 md:w-56
          rounded-full object-cover
          border shadow-sm
          transition-transform duration-300 ease-out
          motion-safe:hover:scale-110
        "
        loading="lazy"
      />

      {/* Text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="font-bricolage text-4xl">About Me</h2>
        <p className="mt-4 text-lg text-gray-700">
          Quick intro about who you are, your stack, and what you’re building.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Portfolio */}
<section
  id="portfolio"
  className="scroll-mt-20 flex min-h-screen flex-col justify-center bg-[#f5f5f5]"
>
  <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
    <h2 className="font-bricolage text-4xl">Portfolio Works</h2>
    <p className="mt-3 text-lg text-gray-700">
      A few buckets of recent work.
    </p>
  </div>

  <div className="mt-8">
    <PortfolioPanels />
  </div>
</section>


      {/* Contact */}
      <Contact
        videoSrc="/media/sams.mp4"
        leftQR="/media/qr/instagram.png"               // your QR asset(s)
        rightQR="/media/qr/instagram.png"
      />

    </main>
  );
}
