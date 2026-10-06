import React, { useState } from 'react';
import { Heart, Menu, Phone, X, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenPlanner: () => void;
  onSelectNav: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onToggleCurrency,
  savedCount,
  onOpenSaved,
  onOpenPlanner,
  onSelectNav,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onSelectNav(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Zone 1: Official Company Logo & Brand Lockup */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-2.5 group text-left cursor-pointer"
            >
              {/* Official Parindaa Logo - Clean without black border */}
              <div className="relative w-10 h-10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/logo.png"
                  alt="Parindaa Travels"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/logo.jpg') {
                      target.src = '/logo.jpg';
                    }
                  }}
                />
              </div>

              <div>
                <div className="flex items-center">
                  <span className="text-base sm:text-lg font-black font-display tracking-tight text-slate-900 group-hover:text-[#3482a4] transition-colors">
                    PARINDAA
                  </span>
                </div>
                <span className="block text-[8.5px] uppercase tracking-wider text-[#3482a4] font-bold -mt-0.5">
                  Travels · India
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleNavClick('hero')}
              className="hover:text-[#3482a4] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('travel-cinema')}
              className="hover:text-[#3482a4] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#cbb72c]" />
              <span>Cinema Project</span>
            </button>
            <button
              onClick={() => handleNavClick('destinations')}
              className="hover:text-[#3482a4] transition-colors cursor-pointer"
            >
              Group Trips
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="hover:text-[#3482a4] transition-colors cursor-pointer"
            >
              Why Parindaa
            </button>
          </nav>

          {/* Zone 3: Actions & Quick Utilities */}
          <div className="flex items-center gap-3">
            {/* Currency Switcher */}
            <button
              onClick={onToggleCurrency}
              className="hidden sm:inline-flex items-center px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
              title="Toggle Currency"
            >
              {currency === 'INR' ? '🇮🇳 ₹ INR' : '🌐 $ USD'}
            </button>

            {/* Need Help WhatsApp / Phone */}
            <a
              href="https://wa.me/919326632288?text=Hello%20Parindaa%20Travels!%20I%20want%20to%20inquire%20about%20your%20group%20trips."
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#3482a4] transition-colors rounded-full hover:bg-slate-50"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-400 uppercase leading-none">Need Help?</span>
                <span className="font-bold text-slate-900 text-xs">+91 93266 32288</span>
              </div>
            </a>

            {/* Saved Trips Bookmark Trigger */}
            <button
              onClick={onOpenSaved}
              className="relative p-2 text-slate-700 hover:text-rose-500 transition-colors cursor-pointer rounded-full hover:bg-slate-100"
              title="Saved Trips"
            >
              <Heart className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Plan My Trip CTA - Target CSS selector 1: Sparkles icon removed */}
            <button
              onClick={onOpenPlanner}
              className="inline-flex items-center px-4 py-2 text-xs font-bold text-slate-950 bg-[#cbb72c] hover:bg-[#b8a422] active:scale-98 rounded-full shadow-sm shadow-[#cbb72c]/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Plan My Trip</span>
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex justify-between items-center py-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Currency</span>
            <button
              onClick={onToggleCurrency}
              className="px-3 py-1 text-xs font-bold rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200"
            >
              {currency === 'INR' ? '🇮🇳 ₹ INR' : '🌐 $ USD'}
            </button>
          </div>
          <div className="space-y-1 pt-2">
            <button
              onClick={() => handleNavClick('hero')}
              className="block w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#3482a4] rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('travel-cinema')}
              className="block w-full text-left px-3 py-2 text-sm font-semibold text-[#3482a4] hover:bg-slate-50 rounded-lg flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#cbb72c]" />
              <span>Travel Cinema Project</span>
            </button>
            <button
              onClick={() => handleNavClick('destinations')}
              className="block w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#3482a4] rounded-lg"
            >
              Official Group Trips
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="block w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#3482a4] rounded-lg"
            >
              Why Parindaa Travels
            </button>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <a
              href="https://api.whatsapp.com/send?phone=919326632288&text=Hello%20Parindaa%20Travels!%20I%20want%20to%20inquire%20about%20your%20group%20trips."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp: +91 93266 32288
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanner();
              }}
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-[#cbb72c] hover:bg-[#b8a422] rounded-lg shadow-sm"
            >
              Custom Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
