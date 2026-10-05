import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/travelData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3482a4]/10 text-xs font-bold text-[#3482a4] mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>GOT QUESTIONS?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Everything you need to know about our group departures, bookings, and travel safety.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 hover:text-[#3482a4] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#3482a4]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help prompt */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900">Still have questions?</h4>
            <p className="text-xs text-slate-500">
              Our travel specialists are available 24/7 on WhatsApp & phone call.
            </p>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=919326632288&text=Hi%20Parindaa%20Captain!%20I%20have%20a%20query%20about%20your%20group%20trips."
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 text-xs font-bold text-white bg-[#3482a4] hover:bg-[#286b88] active:scale-95 rounded-xl transition-all whitespace-nowrap shadow-xs"
          >
            Chat with Captain (+91 93266 32288)
          </a>
        </div>

      </div>
    </section>
  );
};
