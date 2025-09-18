import { motion } from "framer-motion";

export default function HomePage() {
  const letters = "Portfolio".split("")

  const positions = [0.65, 0.69, 0.73, 0.77, 0.81, 0.84, 0.88, 0.91,0.94]

  const getY = (x) => {
  const t = (x - 0.5) / 0.5

  // cubic: start high, dip in middle, rise at end
  return 250 - 90*t + 160*Math.pow(t,2) - 200*Math.pow(t,3)
}

return (
  <main className=" bg-[#fffbec]">
  {/* Hero Section */}
    <section className="relative h-screen bg-gradient-to-r from-purple-500 to-indigo-600 overflow-hidden">
      {/* Curve at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full bottom-[200px]"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
        fill="#0099ff"  // background color of next section
        d="M0,160L80,138.7C160,117,320,75,480,101.3C640,128,800,224,960,245.3C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      </svg>

      {/* Animation */}
      <div className="absolute top-0 left-0 w-full h-full">
        {letters.map((letter, i) => {
          const x = positions[i] * window.innerWidth
          const y = getY(positions[i])

          return (
            <motion.span
              key={i}
              className="absolute text-[80px] font-bricolage"
              style={{
                left: x,
                top: 0, // start from top for drop animation
                transform: "translate(-50%, -50%)",
              }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: y +200, opacity: 1 }} // land on curve
              transition={{ delay: i * 0.2, type: "spring", stiffness: 120 }}
            >
              {letter}
            </motion.span>
          )
        })}
      </div>
    </section>

    {/*About*/}
    <section className="h-screen flex items-center justify-center bg-white">
    <h2 className="text-4xl font-bricolage">About Me</h2>
    </section>

    {/* Portfolio Section */}
    <section className="h-screen flex items-center justify-center bg-[#f5f5f5]">
    <h2 className="text-4xl font-bricolage">Portfolio Works</h2>
    </section>

    {/* Contact Section */}
    <section className="h-screen flex items-center justify-center bg-[#0099ff] text-white">
    <h2 className="text-4xl font-bricolage">Contact</h2>
    </section>
  </main>
  )
}
        
        {/*}
         <h1 className="text-white text-6xl font-bebas z-10">
          Portfolio
        </h1>
      </section>

      <section className="h-[40vh] flex items-center justify-center">
        <p className="text-xl font-bricolage">Other content goes here…</p>
      </section>
    </main>
  );
}


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,160L80,138.7C160,117,320,75,480,101.3C640,128,800,224,960,245.3C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
*/}