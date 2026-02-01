'use client';

export default function Pricing() {
  const services = [
    {
      title: "Premium Wash Package",
      price: "₹999",
      features: [
        "Snow foam pre-wash & pressure rinse",
        "Two-bucket contact wash (safe wash method)",
        "Wheels & tire deep clean",
        "Spray sealant for hydrophobic protection",
        "Tire dressing for shine",
        "Interior vacuum & dash wipe",
        "Glass cleaning inside & out"
      ],
      popular: false,
      color: "from-[#053E43] to-[#0E5F66]",
      whatsappMessage: "Hello, I'd like to book the Premium Wash Package (₹999). Please let me know available slots."
    },
    {
      title: "Complete Detailing Package",
      price: "₹3,000",
      features: [
        "Everything in Premium Wash",
        "Machine polishing for gloss enhancement",
        "Light swirl & scratch removal",
        "Full interior steam cleaning",
        "Leather conditioning & protection",
        "Engine bay detailing",
        "Ceramic spray coating application",
        "Paint iron decontamination"
      ],
      popular: true,
      color: "from-[#02282C] to-[#053E43]",
      whatsappMessage: "Hello, I'd like to book the Complete Detailing Package (₹3000). Please let me know available slots."
    }
  ];

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "9900447762";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-white to-[#F0FDFA] py-28 px-4 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="font-['Oswald'] text-[10px] font-bold uppercase tracking-[0.25em] text-[#053E43]/60 mb-3">
            Simple & Transparent
          </span>
          <h2 className="font-['Oswald'] text-5xl sm:text-6xl font-bold uppercase tracking-tighter text-[#053E43] mb-4">
            Service{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#053E43] to-[#0E5F66]">
              Pricing
            </span>
          </h2>
          <p className="text-[#053E43]/60 max-w-2xl text-lg font-medium">
            Two comprehensive packages. Everything you need for a showroom finish.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden border-2 ${service.popular ? 'border-[#053E43] shadow-2xl' : 'border-[#053E43]/20'} bg-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
            >
              {service.popular && (
                <div className="absolute top-0 right-6 bg-gradient-to-r from-[#053E43] to-[#0E5F66] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-b-lg z-10">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Service Title */}
                <h3 className="font-['Oswald'] text-2xl uppercase tracking-tight text-[#053E43] mb-4">
                  {service.title}
                </h3>

                {/* Price */}
                <div className="mb-8">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                  <p className="text-sm text-[#053E43]/60 mt-1">One-time service</p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#0E5F66] flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#053E43]/90 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - Opens WhatsApp */}
                <button
                  onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                  className={`w-full py-3 px-6 rounded-lg font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2 ${service.popular ? 'bg-gradient-to-r from-[#053E43] to-[#0E5F66] text-white hover:shadow-lg hover:scale-[1.02]' : 'bg-[#053E43]/10 text-[#053E43] hover:bg-[#053E43]/20'}`}
                >
                  {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.892 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg> */}
                  Book now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-sm text-[#053E43]/60">
           
            <span>Clicking "Book via WhatsApp" will open WhatsApp with a pre-written message</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}