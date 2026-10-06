import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Star, ArrowRight, Sparkles, MapPin, Compass, Pause, Play, Calendar, MessageSquare, Check } from 'lucide-react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Sync index when activeDestination changes from outside
  useEffect(() => {
    const idx = destinations.findIndex((d) => d.id === activeDestination.id);
    if (idx !== -1) {
      setCurrentIndex(idx);
    }
  }, [activeDestination, destinations]);

  // Autoplay timer
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % destinations.length;
        onSelectDestination(destinations[next]);
        return next;
      });
    }, 6500);
    return () => clearInterval(timer);
  }, [isAutoplay, destinations, onSelectDestination]);

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + destinations.length) % destinations.length;
    setCurrentIndex(nextIdx);
    onSelectDestination(destinations[nextIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % destinations.length;
    setCurrentIndex(nextIdx);
    onSelectDestination(destinations[nextIdx]);
  };

  const formattedPrice =
    currency === 'INR'
      ? `₹${activeDestination.priceINR.toLocaleString('en-IN')}`
      : `$${activeDestination.priceUSD.toLocaleString('en-US')}`;

  const isSaved = savedIds.includes(activeDestination.id);

  return (
    <section id="hero" className="relative min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Smooth Crossfade & Measured Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          key={activeDestination.id}
          src={activeDestination.heroImage || activeDestination.image}
          alt={`${activeDestination.name} scenery`}
          className="w-full h-full object-cover object-center animate-in fade-in duration-700 transition-all filter brightness-75 contrast-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim Gradients with Soft Slate Tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 w-full">
        {/* DESKTOP LAYOUT (lg and above) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Big Bold Typography & Editorial Value Prop */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-5">
            
            {/* Tagline Badge with Muted Brand Sky & Logo Yellow */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-[#3482a4]/40 text-xs font-bold tracking-wider text-white shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#cbb72c]" />
                <span className="text-[#3482a4]">PARINDAA</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-200">EXPLORE · DREAM · DISCOVER</span>
              </div>
            </div>

            {/* Giant Title */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black font-display tracking-tight text-white uppercase drop-shadow-sm">
                {activeDestination.name}
              </h1>
              <p className="text-lg sm:text-2xl text-slate-100 font-script font-bold tracking-wide">
                Discover Amazing <span className="text-[#cbb72c] underline decoration-[#3482a4] decoration-wavy decoration-1 underline-offset-4">Journeys with Us</span>
              </p>
            </div>

            {/* Concise Evocative Narrative */}
            <p className="text-sm sm:text-base text-slate-200/90 max-w-xl leading-relaxed font-light">
              {activeDestination.description}
            </p>

            {/* Key Trip Meta Strip (Duration, Rating, Pricing) */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-200 pt-1">
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                <Compass className="w-4 h-4 text-[#3482a4]" />
                <span>{activeDestination.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                <Star className="w-4 h-4 fill-[#cbb72c] text-[#cbb72c]" />
                <span className="text-white font-bold">{activeDestination.rating}</span>
                <span className="text-slate-400 font-normal">({activeDestination.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                <span className="text-slate-400 font-normal">From</span>
                <span className="text-base font-extrabold text-[#cbb72c] font-display tabular-nums">
                  {formattedPrice}
                </span>
                <span className="text-[11px] text-slate-400 font-normal">/ person</span>
              </div>
            </div>

            {/* CTAs with Muted Brand Sky & Logo Yellow */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onExploreDestination(activeDestination)}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white bg-[#3482a4] hover:bg-[#286b88] active:scale-95 rounded-full shadow-lg shadow-[#3482a4]/20 transition-all cursor-pointer"
              >
                <span>Explore Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenPlanner}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-slate-950 bg-[#cbb72c] hover:bg-[#b8a422] active:scale-95 rounded-full shadow-md shadow-[#cbb72c]/20 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
                <span>Plan Custom Trip</span>
              </button>
            </div>

            {/* Slider Navigation & Counter */}
            <div className="flex items-center gap-4 pt-3 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#3482a4] hover:text-white active:scale-90 flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                  aria-label="Previous Destination"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#3482a4] hover:text-white active:scale-90 flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                  aria-label="Next Destination"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Number Index */}
              <div className="font-mono text-xs tracking-wider text-slate-300">
                <span className="font-bold text-[#cbb72c] text-sm">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span className="mx-1 text-slate-500">/</span>
                <span>{String(destinations.length).padStart(2, '0')}</span>
              </div>

              {/* Autoplay Pause / Play Toggle */}
              <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-black/30 hover:bg-black/50 border border-white/10 transition-colors cursor-pointer"
                title={isAutoplay ? 'Pause auto-sliding' : 'Resume auto-sliding'}
              >
                {isAutoplay ? <Pause className="w-3 h-3 text-[#3482a4]" /> : <Play className="w-3 h-3 text-[#cbb72c]" />}
                <span>{isAutoplay ? 'Autoplay' : 'Paused'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Only Image Card of the Active Slide */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-end">
            <div 
              key={activeDestination.id}
              onClick={() => onExploreDestination(activeDestination)}
              className="group relative w-56 sm:w-64 lg:w-72 aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border-2 border-white/20 hover:border-[#3482a4] shadow-2xl shadow-black/80 transition-all duration-500 hover:scale-[1.03] cursor-pointer animate-in fade-in"
              title={`Click to view ${activeDestination.name} details`}
            >
              <img
                src={activeDestination.image}
                alt={`${activeDestination.name} trip poster`}
                className="w-full h-full object-contain bg-slate-950 transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Subtle Top Badge & Save Heart */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                {activeDestination.badge ? (
                  <span className="text-[10px] sm:text-xs font-bold text-slate-950 bg-[#cbb72c] px-2.5 py-0.5 rounded-full shadow-md">
                    {activeDestination.badge}
                  </span>
                ) : (
                  <span />
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSave(activeDestination.id);
                  }}
                  className="pointer-events-auto p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors cursor-pointer shadow-md"
                  title={isSaved ? 'Remove from Saved' : 'Save Trip'}
                >
                  <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                </button>
              </div>

              {/* Hover Overlay Hint */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-bold text-white truncate drop-shadow-sm">
                  {activeDestination.name}
                </span>
                <span className="text-[11px] font-semibold text-[#cbb72c] bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-xs shrink-0">
                  {formattedPrice}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* MOBILE & TABLET LAYOUT (< lg): Card on the Right Side, Words Change on the Left */}
        <div className="lg:hidden flex flex-col gap-4">
          
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-[#3482a4]/40 text-[11px] font-bold tracking-wider text-white shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cbb72c]" />
              <span className="text-[#3482a4]">PARINDAA</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-200">EXPLORE</span>
            </div>
          </div>

          {/* Side-by-Side Content: Words on Left, Image Card on Right Side */}
          <div className="flex items-start justify-between gap-3 sm:gap-5">
            {/* Left Words that dynamically change */}
            <div className="flex-1 min-w-0 space-y-2">
              <div key={activeDestination.id} className="animate-in fade-in duration-300 space-y-1">
                <h1 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white uppercase drop-shadow-sm leading-tight line-clamp-2">
                  {activeDestination.name}
                </h1>
                <p className="text-xs sm:text-base text-slate-200 font-script font-bold tracking-wide">
                  Discover Amazing <span className="text-[#cbb72c] underline decoration-[#3482a4] decoration-wavy decoration-1 underline-offset-2">Journeys</span>
                </p>
              </div>

              {/* Price & Duration Quick Tag */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/15 text-xs">
                  <span className="text-slate-400 text-[11px]">From</span>
                  <span className="font-extrabold text-[#cbb72c] font-display">{formattedPrice}</span>
                </div>
                <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-xl border border-white/15 text-[11px] text-slate-300">
                  <Compass className="w-3 h-3 text-[#3482a4] shrink-0" />
                  <span className="truncate">{activeDestination.duration}</span>
                </div>
              </div>
            </div>

            {/* Right Side Image Card on Mobile (Pinned to the Right, NOT in Center) */}
            <div className="shrink-0 flex justify-end">
              <div 
                key={activeDestination.id}
                onClick={() => onExploreDestination(activeDestination)}
                className="group relative w-32 sm:w-44 aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border-2 border-white/20 hover:border-[#3482a4] shadow-2xl shadow-black/90 active:scale-95 transition-all cursor-pointer animate-in fade-in"
                title={`Click to view ${activeDestination.name} details`}
              >
                <img
                  src={activeDestination.image}
                  alt={`${activeDestination.name} trip poster`}
                  className="w-full h-full object-contain bg-slate-950"
                  referrerPolicy="no-referrer"
                />

                {/* Badge and Save Button */}
                <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
                  {activeDestination.badge ? (
                    <span className="text-[9px] font-bold text-slate-950 bg-[#cbb72c] px-1.5 py-0.5 rounded-full shadow-md">
                      {activeDestination.badge}
                    </span>
                  ) : (
                    <span />
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleSave(activeDestination.id);
                    }}
                    className="pointer-events-auto p-1 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors cursor-pointer shadow-md"
                    title={isSaved ? 'Remove from Saved' : 'Save Trip'}
                  >
                    <Heart className={`w-3 h-3 ${isSaved ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                  </button>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-1.5 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-center">
                  <span className="text-[9.5px] font-bold text-slate-300">Tap to View</span>
                </div>
              </div>
            </div>
          </div>

          {/* Descriptive Narrative on Mobile */}
          <p key={`desc-${activeDestination.id}`} className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-light line-clamp-2 animate-in fade-in duration-300">
            {activeDestination.description}
          </p>

          {/* Mobile CTAs */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={() => onExploreDestination(activeDestination)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#3482a4] hover:bg-[#286b88] active:scale-95 rounded-full shadow-lg shadow-[#3482a4]/25 transition-all cursor-pointer"
            >
              <span>Explore Itinerary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenPlanner}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-[#cbb72c] hover:bg-[#b8a422] active:scale-95 rounded-full shadow-md shadow-[#cbb72c]/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950 fill-slate-950" />
              <span>Plan Custom</span>
            </button>
          </div>

          {/* Slider Controls on Mobile */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3482a4] hover:text-white active:scale-90 flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                aria-label="Previous Destination"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3482a4] hover:text-white active:scale-90 flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                aria-label="Next Destination"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="font-mono text-xs tracking-wider text-slate-300 ml-1">
                <span className="font-bold text-[#cbb72c]">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <span className="mx-1 text-slate-500">/</span>
                <span>{String(destinations.length).padStart(2, '0')}</span>
              </div>
            </div>

            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded-lg bg-black/40 border border-white/10 transition-colors cursor-pointer"
              title={isAutoplay ? 'Pause auto-sliding' : 'Resume auto-sliding'}
            >
              {isAutoplay ? <Pause className="w-3 h-3 text-[#3482a4]" /> : <Play className="w-3 h-3 text-[#cbb72c]" />}
              <span>{isAutoplay ? 'Autoplay' : 'Paused'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
