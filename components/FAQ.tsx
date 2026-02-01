export default function FAQ() {
  const faqs = [
    {
      question: "How long does a typical detailing service take?",
      answer: "Basic wash takes 1-2 hours. Complete detailing packages require 4-6 hours. Ceramic coating can take 1-2 days for proper curing."
    },
    {
      question: "Do I need to book an appointment in advance?",
      answer: "Yes, we operate by appointment only to ensure dedicated time and attention for your vehicle. Bookings can be made via phone or WhatsApp."
    },
    {
      question: "How long does ceramic coating last?",
      answer: "Our ceramic coatings last 3-5 years with proper maintenance. We provide aftercare guidance to maximize protection."
    },
    {
      question: "Do you offer pick-up and drop service?",
      answer: "Yes, we offer complimentary pick-up and drop service within Mysore city limits for detailing packages."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, UPI, debit/credit cards, and bank transfers. Payment is due upon completion of service."
    },
    {
      question: "How often should I get my car detailed?",
      answer: "We recommend a maintenance wash every 2 weeks and complete detailing every 6-12 months for optimal protection."
    },
    {
      question: "Do you work on all car types?",
      answer: "Yes, we service all car types including luxury vehicles, SUVs, hatchbacks, and motorcycles."
    },
    {
      question: "What's included in the wash package?",
      answer: "Our ₹999 wash includes exterior wash, wheel cleaning, interior vacuum, dash wipe, and glass cleaning inside and out."
    }
  ];

  return (
    <section id="faq" className="py-28 px-4 sm:px-8 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#053E43]/60 block mb-3">
            Common Questions
          </span>
          <h2 className="text-4xl sm:text-5xl uppercase tracking-tighter text-[#053E43] mb-6">
            Frequently Asked{" "}
            <span className="italic text-[#0E5F66]">Questions</span>
          </h2>
          <p className="text-[#053E43]/60 max-w-2xl mx-auto">
            Find answers to our most common questions about car detailing in Mysore
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white border border-[#053E43]/10 rounded-2xl p-6 hover:border-[#053E43]/30 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-lg font-bold text-[#053E43] group-open:text-[#0E5F66] pr-8">
                  {faq.question}
                </span>
                <svg
                  className="w-6 h-6 text-[#0E5F66] flex-shrink-0 transform group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#053E43]/10">
                <p className="text-[#053E43]/80 font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-[#053E43] to-[#0E5F66] rounded-2xl text-white">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
              <p className="opacity-90">Our team is ready to assist you</p>
            </div>
            <a
              href="tel:9900447762"
              className="inline-flex h-12 items-center rounded-full bg-white text-[#053E43] px-8 text-sm font-bold uppercase tracking-widest hover:bg-[#F0FDFA] transition-colors"
            >
              Call Now: 9900447762
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}