export default function Navigation() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full bg-[#053E43]/90 backdrop-blur-xl px-6 py-3 shadow-xl border border-white/10">
        {/* Logo with Image */}
        <a href="#" className="flex items-center gap-2">
          <img 
            src="https://res.cloudinary.com/di4nynvj6/image/upload/v1769382900/sheeeen/Sheeeen_logoo_xl20m5.png" 
            alt="SHEEEEN Logo" 
            className="h-8 w-auto"
          />
          {/* <span className="font-['Oswald'] text-xl tracking-tight text-white uppercase">
            <span className="text-[#DCFB04]">.</span>
            <span className="ml-2 text-xs text-white/60">MYSORE</span>
          </span> */}
        </a>

        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-white/70">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#location" className="hover:text-white transition-colors">Location</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <a
          href="tel:9900447762"
          className="rounded-full bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#053E43] hover:bg-[#F0FDFA] transition-colors"
        >
          Call Now
        </a>
      </nav>
    </header>
  );
}