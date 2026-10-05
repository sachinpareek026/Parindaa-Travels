import React, { useState } from 'react';
import { Film, Clapperboard, ExternalLink, Sparkles, Maximize2, X, MessageSquare } from 'lucide-react';

export const TravelCinemaBanner: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const desktopImage = 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791223360/GULMARG_7.jpg';
  const mobileImage = 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791223245/splitimage.im-2_6.png';

  return (
    <section id="travel-cinema" className="py-12 sm:py-16 bg-slate-950 text-white relative overflow-hidden border-y border-slate-900">
      {/* Ambient background glows with brand muted sky & logo yellow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3482a4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#cbb72c]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Eyebrow & Announcement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#3482a4]/40 text-xs font-bold tracking-wider text-white shadow-sm">
              <Clapperboard className="w-3.5 h-3.5 text-[#3482a4]" />
              <span className="text-[#3482a4]">PARINDAA × CHEHRA FILMS</span>
              <span className="text-slate-500">·</span>
              <span className="text-[#cbb72c] uppercase font-semibold">Special Feature</span>
            </div>

            <h2 
              className="text-[34px] leading-tight font-display tracking-tight text-white max-w-3xl"
              style={{ fontSize: '34px' }}
            >
              <span className="font-script font-bold text-[#cbb72c] block normal-case tracking-wide text-3xl sm:text-4xl lg:text-[42px] leading-snug">
                Bringing New Milestone in Travel Industry
              </span>
              <span className="font-black font-display uppercase tracking-tight text-white block mt-1 text-2xl sm:text-3xl lg:text-[34px] leading-tight">
                WITH INDIA'S 1ST EXPERIMENTAL TRAVEL CINEMA PROJECT
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-medium pt-1 flex flex-wrap items-center gap-2">
              <span>MORE INFORMATION AND BOOKING VISIT —</span>
              <a
                href="https://chehrafilms.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#cbb72c] hover:text-white underline decoration-[#cbb72c] underline-offset-4 font-bold inline-flex items-center gap-1 transition-colors"
              >
                CHEHRAFILMS.COM
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
            <a
              href="https://chehrafilms.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3482a4] hover:bg-[#286b88] text-white text-xs font-bold transition-all shadow-lg hover:shadow-cyan-950/50 cursor-pointer active:scale-98"
            >
              <span>Visit ChehraFilms.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://wa.me/917983637841?text=Hi%20Parindaa%2C%20I%20want%20to%20know%20more%20and%20book%20for%20India's%201st%20Experimental%20Travel%20Cinema%20Project%20with%20Chehra%20Films!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Responsive Cinema Artwork Display (Desktop: GULMARG_7.jpg / Mobile: splitimage.im-2_6.png) */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl hover:border-[#3482a4]/70 transition-all duration-300 cursor-pointer"
        >
          <picture className="w-full block">
            {/* Mobile portrait screen: splitimage.im-2_6.png (3039x4050) */}
            <source
              media="(max-width: 767px)"
              srcSet={mobileImage}
            />
            {/* Desktop and tablet landscape: GULMARG_7.jpg (6381x2835) */}
            <source
              media="(min-width: 768px)"
              srcSet={desktopImage}
            />
            <img
              src={desktopImage}
              alt="India's 1st Experimental Travel Cinema Project - Chehra Films & Parindaa Travels Gulmarg Project"
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700 block"
              loading="lazy"
            />
          </picture>

          {/* Interactive Hover Bar with Zoom Icon */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <span className="hidden sm:inline-flex text-[11px] font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg">
              Click to view high-resolution cinema poster
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="p-2.5 rounded-xl bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 shadow-xl transition-transform group-hover:scale-105"
              title="Expand Poster"
            >
              <Maximize2 className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full max-h-[95vh] flex flex-col bg-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-white/10 text-white">
              <div className="flex items-center gap-2.5">
                <Film className="w-4 h-4 text-[#cbb72c]" />
                <h3 className="font-bold text-sm sm:text-base font-display">
                  India's 1st Experimental Travel Cinema Project · Chehra Films
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Content (responsive in modal) */}
            <div className="relative flex-1 overflow-auto p-2 sm:p-4 flex items-center justify-center bg-black/80">
              <picture className="max-h-[75vh] w-auto block">
                <source
                  media="(max-width: 767px)"
                  srcSet={mobileImage}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={desktopImage}
                />
                <img
                  src={desktopImage}
                  alt="Travel Cinema Project"
                  className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl mx-auto"
                />
              </picture>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-900 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-white">
              <div className="text-xs text-slate-300">
                <span>For more information and booking visit: </span>
                <a
                  href="https://chehrafilms.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#cbb72c] font-bold hover:underline"
                >
                  chehrafilms.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://chehrafilms.com"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-4 text-xs font-bold text-slate-950 bg-[#cbb72c] hover:bg-[#e0cb00] rounded-xl transition-all shadow-md inline-flex items-center gap-1.5"
                >
                  <span>Visit ChehraFilms.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="py-2 px-4 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
