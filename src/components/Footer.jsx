export default function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} Zane. 
          </p>

          {/* Quick links */}
          <nav className="flex items-center gap-4 text-sm">
          {/*  <a href="/portfolio" className="hover:text-white">Portfolio</a>
            <a href="/traditional/portraits" className="hover:text-white">Traditional</a> */}
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
