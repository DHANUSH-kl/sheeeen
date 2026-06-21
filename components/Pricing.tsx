'use client';

export default function Pricing() {
  const services = [
    {
      title: "Sheen Refresh",
      price: "₹1,200",
      features: [
        "Two step exterior wash (Pre-wash + Foam wash)",
        "Two-bucket contact wash (safe wash method)",
        "Wheels & tire deep clean",
        "Tire dressing for shine",
        "Interior vacuum & dash wipe",
        "Glass cleaning inside & out"
      ],
      popular: false,
      color: "from-[#053E43] to-[#0E5F66]",
      whatsappMessage: "Hello, I'd like to book the Sheen Refresh (₹1200). Please let me know available slots."
    },
    {
      title: "Sheen Signature",
      price: "₹5,200",
      features: [
        "Everything in Sheen Refresh",
        "Machine polishing for gloss enhancement",
        "Light swirl removal",
        "Full interior steam cleaning",
        "Leather conditioning & protection",
        "Engine bay detailing",
        "Minor scratch removal (T&C apply)",
        "Paint iron decontamination"
      ],
      popular: true,
      color: "from-[#02282C] to-[#053E43]",
      whatsappMessage: "Hello, I'd like to book the Sheen Signature (₹5200). Please let me know available slots."
    }
  ];

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "8660010700";
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
                  Book now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Loyalty & Monthly Plans Section */}
        <div className="mt-28 border-t border-[#053E43]/10 pt-20">
          <div className="text-center mb-16">
            <span className="font-['Oswald'] text-[10px] font-bold uppercase tracking-[0.25em] text-[#053E43]/60 mb-3 block">
              Flexible Wash Options
            </span>
            <h3 className="font-['Oswald'] text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#053E43] mb-4">
              Want regular washes without booking every single time?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Loyalty Card */}
            <div className="relative rounded-2xl p-8 border border-[#053E43]/10 bg-white overflow-hidden shadow-sm flex flex-col justify-between">
              <div className="absolute top-4 right-4 bg-[#053E43]/10 text-[#053E43] text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🟡</span>
                  <h4 className="font-['Oswald'] text-xl uppercase tracking-tight text-[#053E43]">
                    Loyalty Card
                  </h4>
                </div>
                <p className="font-['DM_Sans'] text-sm text-[#053E43]/70 leading-relaxed">
                  10 washes on one card, with 2 free exterior washes thrown in. No app, no fine print — just a card that pays for itself.
                </p>
              </div>
            </div>

            {/* Monthly Plans */}
            <div className="relative rounded-2xl p-8 border border-[#053E43]/10 bg-white overflow-hidden shadow-sm flex flex-col justify-between">
              <div className="absolute top-4 right-4 bg-[#053E43]/10 text-[#053E43] text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🟡</span>
                  <h4 className="font-['Oswald'] text-xl uppercase tracking-tight text-[#053E43]">
                    Monthly Plans
                  </h4>
                </div>
                <div className="space-y-3">
                  <p className="font-['DM_Sans'] text-sm text-[#053E43]/70 leading-relaxed">
                    Set it and forget it — your car stays clean on schedule, every month.
                  </p>
                  <div className="border-t border-[#053E43]/5 pt-3 space-y-2">
                    <div className="flex justify-between text-xs font-semibold uppercase text-[#053E43]/80 tracking-wider">
                      <span>Basic Plan</span>
                      <span>4 Washes/mo</span>
                    </div>
                    <div className="flex justify-between text-xs font-semibold uppercase text-[#053E43]/80 tracking-wider">
                      <span>Signature Plan</span>
                      <span>10 Washes/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}