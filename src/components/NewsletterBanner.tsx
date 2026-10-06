import React, { useState } from 'react';
import { Send, CheckCircle2, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export const NewsletterBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card matching Wanderly Photo Reference with Muted Sky & Logo Yellow (No Black) */}
        <div className="bg-gradient-to-r from-[#174e66] via-[#1f6685] to-[#3482a4] rounded-3xl p-8 sm:p-10 shadow-xl shadow-[#3482a4]/20 text-white relative overflow-hidden">
          
          {/* Subtle background decoration */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#cbb72c]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Zone: Paper Airplane & Copy */}
            <div className="lg:col-span-6 flex items-center gap-4 sm:gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 shadow-md">
                <Send className="w-7 h-7 text-[#cbb72c] -rotate-12" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-xs sm:text-sm text-slate-100 mt-1 font-light">
                  Get secret travel discounts, new group batch announcements & wanderlust straight to your inbox.
                </p>
              </div>
            </div>

            {/* Right Zone: Input Form & Social Icons (from Wanderly photo) */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-end gap-4">
              
              {/* Form */}
              {subscribed ? (
                <div className="flex items-center gap-2 bg-white/20 px-4 py-3 rounded-full text-xs font-bold text-white animate-in zoom-in-95">
                  <CheckCircle2 className="w-4 h-4 text-[#cbb72c]" />
                  <span>Welcome to the Parindaa family! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full sm:w-auto flex-1 max-w-md">
                  <div className="flex items-center bg-black/40 border border-white/30 rounded-full p-1.5 focus-within:border-[#cbb72c] transition-all">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 bg-transparent text-white placeholder:text-slate-300 text-xs sm:text-sm focus:outline-hidden"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-[#cbb72c] hover:bg-[#b8a422] active:scale-95 text-slate-950 text-xs sm:text-sm font-black rounded-full transition-all cursor-pointer whitespace-nowrap shadow-md"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              )}

              {/* Social Media Circular Links (from Wanderly photo) */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0 shrink-0">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#3482a4] hover:text-white border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/parindaa.india/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#cbb72c] hover:text-slate-950 border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#3482a4] hover:text-white border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#3482a4] hover:text-white border border-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
