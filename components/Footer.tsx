export default function Footer() {
  return (
    <footer className="bg-[#053E43] text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">SHEEEEN</h2>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premium automotive detailing studio in Mysore. 
              Transforming vehicles with precision and care.
            </p>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
              </div>
              <span className="text-sm text-white/70">Mysore, Karnataka</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#location" className="text-white/70 hover:text-white transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:9900447762" className="text-white/70 hover:text-white transition-colors">
                  9900447762
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-white/70">
                  Mon-Sat: 9AM-7PM<br />
                  Sun: 10AM-5PM
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-white/70">
                  Near Mysore Palace Area<br />
                  Mysore, Karnataka
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} SHEEEEN • Premium Automotive Detailing
          </p>
          <p className="text-center">
            Crafted with precision in Mysore, Karnataka
          </p>
        </div>

      </div>
    </footer>
  );
}