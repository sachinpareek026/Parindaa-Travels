import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onSelectNav: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectNav }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info with Official Company Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img
                  src="/logo.png"
                  alt="Parindaa Travels"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/logo.jpg') target.src = '/logo.jpg';
                  }}
                />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-lg font-black font-display tracking-tight text-white">
                    PARINDAA
                  </span>
                </div>
                <span className="block text-[9px] uppercase tracking-wider text-[#4a97ba] font-bold -mt-0.5">
                  Travels · India
                </span>
              </div>
            </div>

            {/* Udyam Registration No - Displayed directly below Logo Section */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#cbb72c] shrink-0" />
              <span className="text-[11px] text-slate-400 font-medium">Udyam Reg. No:</span>
              <span className="font-mono font-bold text-white tracking-wide">UDYAM-RJ-30-0141140</span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Crafting soulful, safe, and exhilarating travel adventures for the free-spirited traveler. Curated group departures, Himalayan expeditions, and bespoke global holidays.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/parindaa.india/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3482a4] hover:text-white flex items-center justify-center transition-colors text-slate-300"
                title="Instagram @parindaa.india"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3482a4] hover:text-white flex items-center justify-center transition-colors text-slate-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3482a4] hover:text-white flex items-center justify-center transition-colors text-slate-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3482a4] hover:text-white flex items-center justify-center transition-colors text-slate-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectNav('destinations')}
                  className="hover:text-[#4a97ba] transition-colors cursor-pointer text-left"
                >
                  All Group Trips
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav('search')}
                  className="hover:text-[#4a97ba] transition-colors cursor-pointer text-left"
                >
                  Search & Book
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav('why-us')}
                  className="hover:text-[#4a97ba] transition-colors cursor-pointer text-left"
                >
                  Why Parindaa Travels
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav('community')}
                  className="hover:text-[#4a97ba] transition-colors cursor-pointer text-left"
                >
                  @parindaa.india Community
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectNav('faqs')}
                  className="hover:text-[#4a97ba] transition-colors cursor-pointer text-left"
                >
                  Booking FAQs & Policies
                </button>
              </li>
            </ul>
          </div>

          {/* Top Circuits matching Real Trips */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Featured Circuits
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-[#4a97ba] transition-colors cursor-pointer">
                  Unseen Meghalaya Waterfalls
                </span>
              </li>
              <li>
                <span className="hover:text-[#4a97ba] transition-colors cursor-pointer">
                  Kashmir & Gulmarg Gondola
                </span>
              </li>
              <li>
                <span className="hover:text-[#4a97ba] transition-colors cursor-pointer">
                  Leh Ladakh & Umling La Pass
                </span>
              </li>
              <li>
                <span className="hover:text-[#4a97ba] transition-colors cursor-pointer">
                  Jyotirlinga & Shaktipeeth
                </span>
              </li>
              <li>
                <span className="hover:text-[#4a97ba] transition-colors cursor-pointer">
                  Kainchi Dham & Mukteshwar
                </span>
              </li>
              <li>
                <span className="hover:text-[#4a97ba] transition-colors cursor-pointer">
                  Goa Coastal Bike Expedition
                </span>
              </li>
              <li>
                <span className="hover:text-[#4a97ba] transition-colors cursor-pointer">
                  Kerala Backwaters Houseboat
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Reach Out
            </h4>
            <div className="space-y-2.5">
              <a
                href="https://api.whatsapp.com/send?phone=919326632288&text=Hello%20Parindaa%20Travels!%20I%20want%20to%20inquire%20about%20your%20group%20trips."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: +91 93266 32288</span>
              </a>
              <a
                href="tel:+919828497392"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#cbb72c] shrink-0" />
                <span>Call / Support: +91 98284 97392</span>
              </a>
              <a
                href="mailto:contact@parindaaindia.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#4a97ba] shrink-0" />
                <span>contact@parindaaindia.com</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#4a97ba] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p>
                    <strong className="text-white">Mumbai Office:</strong> A.K. Marg, Bandra East, Mumbai, Maharashtra
                  </p>
                  <p className="text-slate-400 text-[11px]">
                    <strong className="text-slate-300">Branches:</strong> Connaught Place, New Delhi & C-Scheme, Jaipur
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-2 flex flex-wrap gap-1.5">
              <span className="inline-block text-[10px] text-slate-300 border border-slate-800 rounded-md px-2 py-1 bg-slate-900/60 font-medium">
                UDYAM-RJ-30-0141140
              </span>
              <span className="inline-block text-[10px] text-slate-400 border border-slate-800 rounded-md px-2 py-1 bg-slate-900/50">
                GST Registered & Ministry Recognized
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Parindaa Travels (Parindaa India). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Cancellation Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Safety Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
