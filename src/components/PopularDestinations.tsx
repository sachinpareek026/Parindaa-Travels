import React, { useState } from 'react';
import { ArrowRight, Heart, MapPin, Star, Calendar, Clock, CheckCircle2, Maximize2, X, MessageSquare, Compass, Eye, Sparkles } from 'lucide-react';
import { Destination, OFFICIAL_WHATSAPP_NUMBER } from '../data/travelData';

interface PopularDestinationsProps {
  destinations: Destination[];
  onSelectDestination: (dest: Destination) => void;
  onExploreDestination: (dest: Destination) => void;
  currency: 'INR' | 'USD';
  savedIds: string[];
  onToggleSave: (id: string) => void;
  searchFilter?: string;
}

export const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  destinations,
  onSelectDestination,
  onExploreDestination,
  currency,
  savedIds,
  onToggleSave,
  searchFilter = '',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePosterModal, setActivePosterModal] = useState<Destination | null>(null);

  const categories = [
    { id: 'all', label: 'All Trips' },
    { id: 'himalayan', label: 'Himalayan Expeditions' },
    { id: 'adventure', label: 'Adventure & Coastal' },
    { id: 'tropical', label: 'Tropical & Islands' },
    { id: 'spiritual', label: 'Spiritual Yatras' },
    { id: 'weekend', label: 'Weekend Getaways' },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory =
      selectedCategory === 'all'
        ? true
        : dest.category === selectedCategory;
    const matchesSearch =
      !searchFilter ||
      dest.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchFilter.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="destinations" className="py-16 sm:py-20 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Softened Parindaa Motif */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
                Official Parindaa Group Trips
              </h2>
              {/* Curved Dashed Airplane Trail with Muted Sky and Logo Yellow */}
              <div className="hidden sm:flex items-center gap-1.5 opacity-80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#cbb72c]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#3482a4]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#286b88]" />
                <svg className="w-4 h-4 fill-[#3482a4] rotate-45" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Curated fixed group departures with experienced Parindaa travel captains and marshals. Click any poster to view full size.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#3482a4] bg-white border border-slate-200 hover:border-[#3482a4] px-4 py-2 rounded-full transition-colors cursor-pointer shadow-xs"
            >
              <span>View All ({destinations.length})</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#3482a4]" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-200/60 rounded-xl overflow-x-auto max-w-fit mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#3482a4] text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid - 3 Columns for Full Sized Posters */}
        {filteredDestinations.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500 text-sm">No trips matched your criteria.</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-3 text-xs font-bold text-[#3482a4] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => {
              const isSaved = savedIds.includes(dest.id);
              const priceLabel =
                currency === 'INR'
                  ? `₹${dest.priceINR.toLocaleString('en-IN')}`
                  : `$${dest.priceUSD.toLocaleString('en-US')}`;

              return (
                <div
                  key={dest.id}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#3482a4] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  {/* Full Size Poster Image Container (Natural 4:5 Aspect Ratio to show complete poster without cutting) */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950 cursor-pointer"
                    onClick={() => setActivePosterModal(dest)}
                  >
                    <img
                      src={dest.image}
                      alt={`${dest.name} official poster`}
                      className="w-full h-full object-contain bg-slate-950 group-hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle top bar for badge and save button without obscuring the poster */}
                    <div className="absolute top-3 left-3 right-3 flex items-start justify-between pointer-events-none gap-2">
                      <div className="flex flex-col gap-1.5 pointer-events-auto">
                        {dest.badge && (
                          <span className="text-[11px] font-bold text-slate-950 bg-[#cbb72c] px-3 py-1 rounded-full shadow-md w-fit">
                            {dest.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 pointer-events-auto">
                        {/* Expand to Fullscreen button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePosterModal(dest);
                          }}
                          className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors cursor-pointer shadow-md"
                          title="View Full Poster"
                        >
                          <Maximize2 className="w-4 h-4 text-white" />
                        </button>

                        {/* Save Heart Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleSave(dest.id);
                          }}
                          className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-colors cursor-pointer shadow-md"
                          title={isSaved ? 'Remove from Saved' : 'Save Trip'}
                        >
                          <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : 'text-white'}`} />
                        </button>
                      </div>
                    </div>

                    {/* Hover Hint to View Full Size */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <span className="text-[11px] font-semibold text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-[#cbb72c]" /> Click to view full poster
                      </span>
                    </div>
                  </div>

                  {/* Card Body & Details below the full photo */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    
                    {/* Header info: Title, Location and Price */}
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold font-display tracking-tight text-slate-900 group-hover:text-[#3482a4] transition-colors">
                            {dest.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                            <MapPin className="w-3.5 h-3.5 text-[#3482a4] shrink-0" />
                            <span>{dest.region}</span>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Starting</span>
                          <span className="text-xl font-black text-slate-900 font-display tabular-nums">
                            {priceLabel}
                          </span>
                        </div>
                      </div>

                      {/* Tagline / Subtitle */}
                      <p className="text-xs text-slate-600 line-clamp-1 mt-2 font-medium">
                        {dest.tagline}
                      </p>
                    </div>

                    {/* Meta info: Duration, Rating */}
                    <div className="flex items-center justify-between text-xs text-slate-600 py-2 border-y border-slate-100">
                      <div className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#3482a4]" />
                        <span>{dest.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 font-semibold text-slate-800">
                        <Star className="w-3.5 h-3.5 fill-[#cbb72c] text-[#cbb72c]" />
                        <span>{dest.rating}</span>
                        <span className="text-slate-400 font-normal text-[11px]">({dest.reviewCount} reviews)</span>
                      </div>
                    </div>

                    {/* Highlights bullet previews */}
                    <div className="space-y-1.5 text-xs text-slate-600">
                      {dest.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Next Departure Date */}
                    <div className="flex items-center justify-between text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#3482a4]" />
                        <span>Next Batch: <strong className="text-slate-800 font-bold">{dest.departureDates[0]}</strong></span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-1 flex items-center gap-2">
                      <button
                        onClick={() => onExploreDestination(dest)}
                        className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-[#3482a4] hover:bg-[#286b88] active:scale-98 rounded-xl transition-all cursor-pointer text-center shadow-xs"
                      >
                        View Full Details
                      </button>
                      <button
                        onClick={() => onSelectDestination(dest)}
                        className="py-2.5 px-3 text-xs font-semibold text-slate-700 hover:text-[#3482a4] bg-slate-100 hover:bg-slate-200/70 rounded-xl transition-colors cursor-pointer"
                        title="Showcase in Hero Section"
                      >
                        Hero View
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Full-Screen Poster Lightbox Modal */}
      {activePosterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full max-h-[95vh] flex flex-col bg-slate-950 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-slate-900 border-b border-white/10 text-white">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#cbb72c]" />
                <h3 className="font-bold text-base font-display">{activePosterModal.name} · Official Poster</h3>
              </div>
              <button
                onClick={() => setActivePosterModal(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Image in full glory */}
            <div className="relative flex-1 overflow-auto p-4 flex items-center justify-center bg-black/60">
              <img
                src={activePosterModal.image}
                alt={activePosterModal.name}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer Bar */}
            <div className="p-4 bg-slate-900 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-white">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">Duration: <strong className="text-white">{activePosterModal.duration}</strong></span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400">Price: <strong className="text-[#cbb72c] font-display text-sm">₹{activePosterModal.priceINR.toLocaleString('en-IN')}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `✈️ *PARINDAA TRAVELS — TRIP INQUIRY*\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📍 *Trip:* ${activePosterModal.name}\n🗺️ *Region:* ${activePosterModal.region}\n⏱️ *Duration:* ${activePosterModal.duration}\n💰 *Price:* ₹${activePosterModal.priceINR.toLocaleString('en-IN')} / person\n🗓️ *Next Departure:* ${activePosterModal.departureDates[0]}\n\n💬 *Message:* Hi Parindaa Captain! I am inquiring about the ${activePosterModal.name} trip. Please share full details and booking procedure!\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 py-2 px-4 text-xs font-bold text-slate-950 bg-[#cbb72c] hover:bg-[#e0cb00] rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    const target = activePosterModal;
                    setActivePosterModal(null);
                    onExploreDestination(target);
                  }}
                  className="py-2 px-4 text-xs font-bold text-white bg-[#3482a4] hover:bg-[#286b88] rounded-xl transition-all cursor-pointer"
                >
                  View Full Itinerary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
