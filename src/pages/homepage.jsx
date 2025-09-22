export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fffbec] relative">
      {/* Hero Section */}
      <section className="relative border h-[40vh] flex flex-col items-center justify-center overflow-hidden">
        

        {/* Text will go here */}
        <h1 className="text-white = text-6xl font-bricolage">
          Portfolio
        </h1>
      </section>

      {/* Rest of page below */}
      <section className="h-[40vh] flex flex-col items-center justify-center">
        <p className="text-xl font-bricolage">Other content goes here…</p>
      </section>

       {/* About Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-4xl font-bricolage">About Me</h2>
      </section>

      {/* Portfolio Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-[#f5f5f5]">
        <h2 className="text-4xl font-bricolage">Portfolio Works</h2>
      </section>

      {/* Contact Section */}
      <section className="h-[50vh] flex flex-col items-center justify-center bg-[#0099ff] text-white">
        <h2 className="text-4xl font-bricolage">Contact</h2>
      </section>

       <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Zane. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
