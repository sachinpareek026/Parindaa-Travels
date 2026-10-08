import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Pause, 
  Play,
  Maximize2,
  X
} from 'lucide-react';
import { Destination } from '../data/travelData';

interface HeroFoxicoProps {
  destinations: Destination[];
  activeDestination: Destination;
  onSelectDestination: (dest: Destination) => void;
  onExploreDestination: (dest: Destination) => void;
  onOpenPlanner: () => void;
  currency: 'INR' | 'USD';
  savedIds: string[];
  onToggleSave: (id: string) => void;
}

export const HeroFoxico: React.FC<HeroFoxicoProps> = ({
  destinations,
  activeDestination,
  onSelectDestination,
  onExploreDestination,
  onOpenPlanner,
  currency,
  savedIds,
  onToggleSave,
}) => {
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isFullImageModalOpen, setIsFullImageModalOpen] = useState(false);

  const activeIndex = Math.max(
    0,
    destinations.findIndex((d) => d.id === activeDestination.id)
  );

  const isSaved = savedIds.includes(activeDestination.id);

  // Autoplay timer safely calling onSelectDestination on interval ticks
  useEffect(() => {
    if (!isAutoplay || destinations.length <= 1) return;
    const timer = setInterval(() => {
      const currentIdx = destinations.findIndex((d) => d.id === activeDestination.id);
      const nextIdx = (currentIdx + 1) % destinations.length;
      onSelectDestination(destinations[nextIdx]);
    }, 6500);
    return () => clearInterval(timer);
  }, [isAutoplay, destinations, activeDestination.id, onSelectDestination]);

  const handlePrev = () => {
    const currentIdx = destinations.findIndex((d) => d.id === activeDestination.id);
    const prevIdx = (currentIdx - 1 + destinations.length) % destinations.length;
    onSelectDestination(destinations[prevIdx]);
  };

  const handleNext = () => {
    const currentIdx = destinations.findIndex((d) => d.id === activeDestination.id);
    const nextIdx = (currentIdx + 1) % destinations.length;
    onSelectDestination(destinations[nextIdx]);
  };

  const formattedPrice =
    currency === 'INR'
      ? `₹${activeDestination.priceINR.toLocaleString('en-IN')}`
      : `$${activeDestination.priceUSD.toLocaleString('en-US')}`;

  return (
    <>
      <section id="hero" className="relative min-h-[600px] lg:min-h-[720px] flex items-center overflow-hidden bg-slate-950 text-white">
        {/* Background Image with Smooth Crossfade & Measured Dark Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            key={activeDestination.id}
            src={activeDestination.heroImage || activeDestination.image}
            alt={`${activeDestination.name} scenery`}
            className="w-full h-full object-cover object-center animate-in fade-in duration-700 transition-all filter brightness-[0.78] contrast-[1.02]"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (activeDestination.image && target.src !== activeDestination.image) {
                target.src = activeDestination.image;
              }
            }}
          />
          {/* Measured Scrim Gradients with Soft Tint for Maximum Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 w-full">
          {/* Desktop: 2-column layout with text on left & card on right at level of texts */}
          {/* Mobile: 1-column layout with text on top & single full card below at left side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            
            {/* Left Column: Narrative Content & Action Controls */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-4 sm:gap-6">
              
              {/* Top Tagline Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-[#3482a4]/40 text-xs font-bold tracking-wider text-white shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#cbb72c]" />
                  <span className="text-[#3482a4]">PARINDAA</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-200 uppercase tracking-widest text-[11px] sm:text-xs">
                    Explore · Dream · Discover
                  </span>
                </div>
              </div>

              {/* Giant Title */}
              <div className="space-y-1.5 max-w-3xl">
                <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black font-display tracking-tight text-white uppercase drop-shadow-sm leading-tight">
                  {activeDestination.name}
                </h1>
                <p className="text-base sm:text-xl lg:text-2xl text-slate-100 font-script font-bold tracking-wide">
                  Discover Amazing{' '}
                  <span className="text-[#cbb72c] underline decoration-[#3482a4] decoration-wavy decoration-1 underline-offset-4">
                    Journeys with Us
                  </span>
                </p>
              </div>

              {/* Concise Evocative Narrative */}
              <p className="text-xs sm:text-sm lg:text-base text-slate-200/90 max-w-2xl leading-relaxed font-light">
                {activeDestination.description}
              </p>

              {/* Key Trip Meta Strip (Duration, Rating, Pricing) */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 shadow-xs">
                  <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3482a4]" />
                  <span className="text-[11px] sm:text-xs">{activeDestination.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 shadow-xs">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#cbb72c] text-[#cbb72c]" />
                  <span className="text-white font-bold text-[11px] sm:text-xs">{activeDestination.rating}</span>
                  <span className="text-slate-400 font-normal text-[11px] sm:text-xs">
                    ({activeDestination.reviewCount} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 shadow-xs">
                  <span className="text-slate-400 font-normal text-[11px] sm:text-xs">From</span>
                  <span className="text-sm sm:text-base font-extrabold text-[#cbb72c] font-display tabular-nums">
                    {formattedPrice}
                  </span>
                  <span className="text-[11px] text-slate-400 font-normal">/ person</span>
                </div>
              </div>

              {/* CTAs with Brand Sky & Brand Yellow */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => onExploreDestination(activeDestination)}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white bg-[#3482a4] hover:bg-[#286b88] active:scale-95 rounded-full shadow-lg shadow-[#3482a4]/25 transition-all cursor-pointer"
                >
                  <span>Explore Itinerary</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenPlanner}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-slate-950 bg-[#cbb72c] hover:bg-[#b8a422] active:scale-95 rounded-full shadow-md shadow-[#cbb72c]/20 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
                  <span>Plan Custom Trip</span>
                </button>
              </div>

              {/* Slider Navigation & Counter */}
              <div className="flex items-center gap-4 pt-1 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#3482a4] hover:text-white active:scale-90 flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-xs"
                    aria-label="Previous Destination"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#3482a4] hover:text-white active:scale-90 flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-xs"
                    aria-label="Next Destination"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Number Index */}
                <div className="font-mono text-xs tracking-wider text-slate-300">
                  <span className="font-bold text-[#cbb72c] text-sm">
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="mx-1 text-slate-500">/</span>
                  <span>{String(destinations.length).padStart(2, '0')}</span>
                </div>

                {/* Autoplay Pause / Play Toggle */}
                <button
                  onClick={() => setIsAutoplay(!isAutoplay)}
                  className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-black/40 hover:bg-black/60 border border-white/10 transition-colors cursor-pointer"
                  title={isAutoplay ? 'Pause auto-sliding' : 'Resume auto-sliding'}
                >
                  {isAutoplay ? <Pause className="w-3 h-3 text-[#3482a4]" /> : <Play className="w-3 h-3 text-[#cbb72c]" />}
                  <span>{isAutoplay ? 'Autoplay' : 'Paused'}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Single Dedicated Destination Image Card */}
            {/* Desktop: Right side at level of texts */}
            {/* Mobile: Full card below texts, aligned to left side */}
            <div className="lg:col-span-5 xl:col-span-5 flex justify-start lg:justify-end items-center pt-2 lg:pt-0">
              <div
                key={activeDestination.id}
                onClick={() => onExploreDestination(activeDestination)}
                className="group relative w-full max-w-[260px] sm:max-w-[290px] lg:max-w-[300px] xl:max-w-[320px] aspect-[3/4] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border-2 border-[#3482a4] ring-1 ring-white/10 shadow-2xl shadow-black/80 transition-all duration-300 cursor-pointer hover:border-[#cbb72c] hover:scale-[1.01]"
                title={`Explore ${activeDestination.name}`}
              >
                {/* Full Uncropped Poster Image */}
                <img
                  src={activeDestination.image}
                  alt={`${activeDestination.name} trip poster`}
                  className="w-full h-full object-contain bg-slate-950 transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Top Action Ribbon: Badge, Fullscreen & Heart Bookmark */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                  {activeDestination.badge ? (
                    <span className="text-[10px] sm:text-xs font-bold text-slate-950 bg-[#cbb72c] px-2.5 py-0.5 rounded-full shadow-md">
                      {activeDestination.badge}
                    </span>
                  ) : (
                    <span className="text-[10px] sm:text-xs font-bold text-white bg-[#3482a4] px-2.5 py-0.5 rounded-full shadow-md">
                      Featured
                    </span>
                  )}

                  <div className="flex items-center gap-1.5 pointer-events-auto">
                    {/* View Full Image Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFullImageModalOpen(true);
                      }}
                      className="p-1.5 sm:p-2 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md transition-all cursor-pointer shadow-md hover:scale-110 active:scale-95"
                      title="View Full Poster"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-slate-200 hover:text-white" />
                    </button>

                    {/* Bookmark Heart */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(activeDestination.id);
                      }}
                      className="p-1.5 sm:p-2 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md transition-all cursor-pointer shadow-md hover:scale-110 active:scale-95"
                      title={isSaved ? 'Remove from Saved' : 'Save Trip'}
                    >
                      <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                    </button>
                  </div>
                </div>

                {/* Minimalist Bottom Overlay to keep full poster artwork visible */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex items-end justify-between gap-2 z-10">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-bold text-white truncate drop-shadow-sm group-hover:text-[#cbb72c] transition-colors">
                      {activeDestination.name}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 font-medium">
                      {activeDestination.duration}
                    </p>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-[#cbb72c] bg-white/10 px-2.5 py-1 rounded-md backdrop-blur-xs shrink-0 font-display">
                    {formattedPrice}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full-Screen High-Resolution Image Lightbox Modal */}
      {isFullImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsFullImageModalOpen(false)}
        >
          <div 
            className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsFullImageModalOpen(false)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
              title="Close Full View"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Complete Image */}
            <img
              src={activeDestination.image}
              alt={`${activeDestination.name} full poster`}
              className="w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl border border-white/20 bg-slate-950"
              referrerPolicy="no-referrer"
            />

            <div className="mt-3 flex items-center justify-between w-full px-2 text-white">
              <span className="text-sm font-bold">{activeDestination.name}</span>
              <button
                onClick={() => {
                  setIsFullImageModalOpen(false);
                  onExploreDestination(activeDestination);
                }}
                className="text-xs font-bold text-slate-950 bg-[#cbb72c] hover:bg-[#b8a422] px-3 py-1.5 rounded-full transition-all"
              >
                View Itinerary
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
