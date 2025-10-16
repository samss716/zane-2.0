import LetterDrop from "../components/LetterAni.jsx";
import ModelCanvas from "../components/GlbCanvas.jsx";
import Marquee from "../components/Marquee.jsx";
import PortfolioPanels from "../components/PortfolioPanels.jsx";
import Contact from "../components/Contact.jsx";
import VideoLoop from "../components/VideoLoop.jsx";


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

               <VideoLoop
                src="/media/lumia-abstract.mp4"
                // poster="/media/hero-poster.jpg"
              />
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
    <section id="about" className="relative scroll-mt-20 bg-[#fffbec]">
      {/* Background gradient */}
      
    <div className="pointer-events-none absolute inset-0 -z-10" />
    <div className="
      absolute left-[0%] top-1/2 -translate-y-1/2
      h-[60vmin] w-[55vmin] rounded-full blur-2xl opacity-100
      bg-[radial-gradient(closest-side,rgba(255,122,122,0.35),rgba(255,122,122,0.12),transparent)]
    " />
    {/* right purple/blue glow */}
    <div className="
      absolute right-[0%] top-1/2 -translate-y-1/2
      h-[60vmin] w-[55vmin] rounded-full blur-2xl opacity-100
      bg-[radial-gradient(closest-side,rgba(149,117,255,0.35),rgba(117,177,255,0.12),transparent)]
    " />

  <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 py-12 md:py-16">

    <div className="grid items-start gap-10 md:gap-14 lg:gap-16 md:grid-cols-[1.5fr_1fr_0.7fr]">
      {/* Left: 3D model */}
      <div className="order-1">
        <div className="h-[260px] md:h-[360px] overflow-hidden rounded-2xl border border-black/5 shadow-sm">
          <ModelCanvas 
          url="/lumiaabstract.glb"
          rotation={[0, 0.2, 0]}
          scale={1}
          interactive={true}
          />
        </div>
      </div>
          
    <div className="order-2">
      <h2 className="font-bricolage text-4xl text-center">About Me</h2>
        <p className="mt-5 text-lg text-gray-800 text-center">
          Hello! I'm Zane, a New Media Artist and Developer based in Fort Worth, TX. 
          I specialize in creating interactive digital experiences that blend art and technology.
         
          As a highly curious individual I am engrossed in furthering my artistic and computational practices. 
          I am interested in fields related to animation, interactive design, human computer interactions, UI/UX design, 
          and AI/machine learning. I intend to create work that explores the merging of our physical world with the digital.
        </p>
      </div>

    <aside className="order-3 mt-8 md:mt-0 md:sticky md:top-24">
  <div className="flex flex-col items-center text-center md:items-start md:text-left">
    <img
      src="/media/pfp.jpg"
      alt="Headshot of Zane"
      className="h-44 w-44 md:h-[11.5rem] md:w-[11.5rem] rounded-xl object-cover border shadow-sm"
      loading="lazy"
    />

    <div className="mt-3 text-md text-gray-700">
      <div className="font-medium text-gray-900">Zane</div>
      <div>web / creative tech</div>
    </div>

    {/* socials */}
    <div className="mt-4 flex items-center gap-3 justify-center md:justify-start">
      {/* site */}
      
      {/* Instagram */}
      <a href="https://www.instagram.com/samdigikive" target="_blank" rel="noopener noreferrer"
         className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5"
         aria-label="Instagram">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      </a>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/samantha-sanchez-0a1637297" target="_blank" rel="noopener noreferrer"
         className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm hover:bg-black/5"
         aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2Zm2-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/>
        </svg>
      </a>
    </div>
  </div>
</aside>
    </div>
  </div>
</section>

      {/* Portfolio */}
<section id="portfolio" className="scroll-mt-20 bg-[#fffbec] py-14">
  <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
    <h2 className="font-bricolage text-4xl">Portfolio Works</h2>
    <p className="mt-3 text-lg text-gray-700">Explore my recent works!</p>

    {/* Row: small GLB directly under header (left) + cards (right) */}
    {/* Row: GLB + cards (stack on mobile) */}
<div className="mt-6 flex flex-col md:flex-row items-start gap-6">
  {/* LEFT: compact GLB */}
  <div className="shrink-0 mx-auto md:mx-0">
    <div className="h-[200px] w-[320px] md:h-[240px] md:w-[360px] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
      <ModelCanvas
        url="/littledrfummerboi.glb"   // <- looks like you had a typo here
        rotation={[0, -Math.PI / 2, 0]}
        envPreset="night"
        envIntensity={1.2}
        scale={1}
        interactive
      />
    </div>
  </div>

  {/* RIGHT: panels */}
  <div className="flex-1 w-full">
    <PortfolioPanels embedded />
  </div>
</div>
</div>
</section>


      {/* Contact */}
      <Contact
        videoSrc="/media/sams.mp4"
        leftQR="/media/qr/instagram.png"               
        rightQR="/media/qr/instagram.png"
      />

    </main>
  );
}
