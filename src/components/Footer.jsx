export default function Footer() { 
  return ( 
    <footer className="border-t bg-gray-900 text-gray-300"> 
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-8"> 
        <div className="grid grid-cols-3 items-center"> 
          
          {/* Left */}
          <p className="text-sm text-left"> 
            © {new Date().getFullYear()} Zane.
          </p> 

          {/* Center */}
          <p className="text-sm text-center">
            Personally Developed Website
          </p>

          {/* Right */}
          <nav className="text-sm text-right">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=samanthasanchez887@gmail.com&su=Portfolio%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Contact
            </a>
          </nav>

        </div> 
      </div> 
    </footer> 
  ); 
}