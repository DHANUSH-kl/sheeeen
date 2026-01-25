export default function Location() {
  return (
    <section id="location" className="py-24 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#053E43]/60 block mb-3">
            Our Location
          </span>
          <h2 className="text-4xl sm:text-5xl uppercase tracking-tighter text-[#053E43] mb-4">
            Find Us In <span className="font-bold text-[#0E5F66]">Mysore</span>
          </h2>
          <p className="text-[#053E43]/60 max-w-2xl mx-auto">
            Conveniently located in Mysore, Karnataka
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8">

            {/* Address */}
            <div className="border border-[#053E43]/10 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-[#053E43] mb-3">
                Studio Address
              </h3>
              <p className="text-[#053E43]/70 leading-relaxed">
                Premium Car Detailing Studio<br />
                Near Mysore Palace Area<br />
                Mysore, Karnataka 570001
              </p>
            </div>

            {/* Working Hours */}
            <div className="border border-[#053E43]/10 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-[#053E43] mb-4">
                Working Hours
              </h3>

              <div className="grid grid-cols-2 gap-y-3 text-sm text-[#053E43]/70">
                <span>Monday – Saturday</span>
                <span className="text-right font-medium text-[#053E43]">
                  9:00 AM – 7:00 PM
                </span>

                <span>Sunday</span>
                <span className="text-right font-medium text-[#053E43]">
                  10:00 AM – 5:00 PM
                </span>
              </div>
            </div>

            {/* Contact */}
            <div className="border border-[#053E43]/10 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-[#053E43] mb-2">
                Contact Number
              </h3>
              <a
                href="tel:9900447762"
                className="text-lg font-medium text-[#053E43] hover:text-[#0E5F66] transition-colors"
              >
                +91 99004 47762
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            
            {/* Map */}
            <a
              href="https://maps.app.goo.gl/ocxAWwzPk37TsmKF9"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-[#053E43]/10 rounded-2xl overflow-hidden relative"
            >
              <iframe
                src="https://www.google.com/maps?q=Mysore%20Palace%20Area&output=embed"
                className="w-full h-[360px] grayscale group-hover:grayscale-0 transition-all"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="bg-white px-6 py-3 rounded-full text-sm font-medium text-[#053E43] shadow-lg">
                  Open in Google Maps →
                </span>
              </div>
            </a>

            {/* Parking Note */}
            <div className="border border-[#053E43]/10 rounded-2xl p-6">
              <p className="text-[#053E43] font-medium mb-1">
                ✓ Ample Parking Available
              </p>
              <p className="text-sm text-[#053E43]/60">
                Easy access from all parts of Mysore • Free consultation available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
