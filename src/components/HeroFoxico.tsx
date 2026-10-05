import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Star, ArrowRight, Sparkles, MapPin, Compass, Pause, Play } from 'lucide-react';
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

  // Up to 3 preview cards for the right-hand slider
  const previewDestinations = destinations.filter((d) => d.id !== activeDestination.id).slice(0, 3);

  const formattedPrice =
    currency === 'INR'
      ? `₹${activeDestination.priceINR.toLocaleString('en-IN')}`
      : `$${activeDestination.priceUSD.toLocaleString('en-US')}`;

  const isSaved = savedIds.includes(activeDestination.id);

  return (
    <section id="hero" className="relative min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Smooth Crossfade & Measured Dark Scrim (Target CSS selector 1) */}
      <div className="absolute inset-0 z-0">
        <img
          key={activeDestination.id}
          src={activeDestination.image}
          alt={activeDestination.name}
          className="w-full h-full object-cover object-center animate-in fade-in duration-700 transition-all filter brightness-75 contrast-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim Gradients with Soft Slate Tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Big Bold Typography & Editorial Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Badge with Muted Brand Sky & Logo Yellow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-[#3482a4]/40 text-xs font-bold tracking-wider text-white shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#cbb72c]" />
              <span className="text-[#3482a4]">PARINDAA</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-200">EXPLORE · DREAM · DISCOVER</span>
            </div>

            {/* Giant Title from Foxico video reference */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black font-display tracking-tight text-white uppercase drop-shadow-sm">
                {activeDestination.name}
              </h1>
              <p className="text-xl sm:text-2xl text-slate-100 font-script font-bold tracking-wide">
                Discover Amazing <span className="text-[#cbb72c] underline decoration-[#3482a4] decoration-wavy decoration-1 underline-offset-4">Journeys with Us</span>
              </p>
            </div>

            {/* Concise Evocative Narrative */}
            <p className="text-sm sm:text-base text-slate-200/90 max-w-xl leading-relaxed font-light">
              {activeDestination.description}
            </p>

            {/* Key Trip Meta Strip (Duration, Rating, Pricing) */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-200 pt-1">
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
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => onExploreDestination(activeDestination)}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-bold text-white bg-[#3482a4] hover:bg-[#286b88] active:scale-95 rounded-full shadow-lg shadow-[#3482a4]/20 transition-all cursor-pointer"
              >
                <span>Explore Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenPlanner}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-slate-950 bg-[#cbb72c] hover:bg-[#b8a422] active:scale-95 rounded-full shadow-md shadow-[#cbb72c]/20 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
                <span>Plan Custom Trip</span>
              </button>
              <button
                onClick={() => onToggleSave(activeDestination.id)}
                className={`p-3 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
                  isSaved
                    ? 'bg-rose-600 text-white border-rose-500'
                    : 'bg-white/15 text-white border-white/25 hover:bg-white/25'
                }`}
                title={isSaved ? 'Remove from Saved' : 'Save to Favorites'}
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Slider Navigation & Counter (Foxico style arrows and index) */}
            <div className="flex items-center gap-4 pt-4 text-xs font-medium text-slate-300">
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
                className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-black/30 hover:bg-black/50 border border-white/10 transition-colors"
                title={isAutoplay ? 'Pause auto-sliding' : 'Resume auto-sliding'}
              >
                {isAutoplay ? <Pause className="w-3 h-3 text-[#3482a4]" /> : <Play className="w-3 h-3 text-[#cbb72c]" />}
                <span>{isAutoplay ? 'Autoplay' : 'Paused'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Floating Interactive Destination Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-300 pb-1">
                <span className="font-bold uppercase tracking-wider text-[#3482a4] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#cbb72c]" />
                  Upcoming Group Trips
                </span>
                <span className="text-[11px] text-slate-400">Click card to switch hero</span>
              </div>

              {/* Stacked Preview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5">
                {previewDestinations.map((dest) => {
                  const cardSaved = savedIds.includes(dest.id);
                  const priceLabel =
                    currency === 'INR'
                      ? `₹${dest.priceINR.toLocaleString('en-IN')}`
                      : `$${dest.priceUSD.toLocaleString('en-US')}`;

                  return (
                    <div
                      key={dest.id}
                      onClick={() => onSelectDestination(dest)}
                      className="group relative flex items-center gap-3.5 p-2.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 backdrop-blur-md border border-white/15 hover:border-[#3482a4] shadow-xl transition-all duration-300 cursor-pointer hover:translate-x-1"
                    >
                      {/* Thumbnail with zoom effect */}
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0">
                        <img
                          src={dest.image}
                          alt={dest.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-1.5 left-1.5 text-[10px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-xs">
                          {dest.duration.split('/')[0]}
                        </span>
                      </div>

                      {/* Card Content */}
                      <div className="flex-1 min-w-0 pr-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-white text-base tracking-tight truncate group-hover:text-[#3482a4] transition-colors">
                            {dest.name}
                          </h4>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleSave(dest.id);
                            }}
                            className="p-1 text-slate-400 hover:text-rose-400 transition-colors"
                            title="Bookmark"
                          >
                            <Heart className={`w-3.5 h-3.5 ${cardSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                          </button>
                        </div>

                        <div className="flex items-center gap-1 text-[11px] text-slate-300 mt-0.5 truncate">
                          <MapPin className="w-3 h-3 text-[#3482a4] shrink-0" />
                          <span className="truncate">{dest.region}</span>
                        </div>

                        {/* Stars & Price */}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-xs">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-[#cbb72c] text-[#cbb72c]" />
                            <span className="font-bold text-white text-[11px]">{dest.rating}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 mr-1">from</span>
                            <span className="font-extrabold text-[#cbb72c] font-display tabular-nums">
                              {priceLabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
