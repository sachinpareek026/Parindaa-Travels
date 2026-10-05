import React, { useState } from 'react';
import { ArrowRight, Heart, MapPin, Star, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { Destination } from '../data/travelData';

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

  const categories = [
    { id: 'all', label: 'All Trips' },
    { id: 'himalayan', label: 'Himalayan Expeditions' },
    { id: 'spiritual', label: 'Spiritual Yatras' },
    { id: 'adventure', label: 'Adventure & Coastal' },
    { id: 'weekend', label: 'Weekend Getaways' },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory =
      selectedCategory === 'all' || dest.category === selectedCategory;
    const matchesSearch =
      !searchFilter ||
      dest.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchFilter.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="destinations" className="py-16 sm:py-20 bg-slate-50/70">
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
              Curated fixed group departures with experienced Parindaa travel captains and marshals.
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

        {/* Destination Cards Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500 text-sm">No trips matched your criteria.</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-3 text-xs font-bold text-[#3482a4] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDestinations.map((dest) => {
              const isSaved = savedIds.includes(dest.id);
              const priceLabel =
                currency === 'INR'
                  ? `₹${dest.priceINR.toLocaleString('en-IN')}`
                  : `$${dest.priceUSD.toLocaleString('en-US')}`;

              return (
                <div
                  key={dest.id}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#3482a4] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image Container with Badges */}
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Badge */}
                    {dest.badge && (
                      <span className="absolute top-3 left-3 text-[11px] font-bold text-slate-950 bg-[#cbb72c] backdrop-blur-xs px-2.5 py-0.5 rounded-full shadow-xs">
                        {dest.badge}
                      </span>
                    )}

                    {/* Save Heart Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(dest.id);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-xs transition-colors cursor-pointer"
                      title={isSaved ? 'Remove from Saved' : 'Save Trip'}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>

                    {/* Bottom overlay text on photo */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold font-display tracking-tight text-white drop-shadow-xs">
                            {dest.name}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-slate-200 mt-0.5">
                            <MapPin className="w-3.5 h-3.5 text-[#3482a4] shrink-0" />
                            <span className="truncate max-w-[130px]">{dest.region.split('(')[0]}</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="block text-[10px] text-slate-300 uppercase tracking-wider">From</span>
                          <span className="text-lg font-black text-[#cbb72c] font-display tabular-nums drop-shadow-xs">
                            {priceLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Body & Details */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    
                    {/* Meta info: Duration, Rating */}
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#3482a4]" />
                        <span>{dest.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 font-semibold text-slate-700">
                        <Star className="w-3.5 h-3.5 fill-[#cbb72c] text-[#cbb72c]" />
                        <span>{dest.rating}</span>
                        <span className="text-slate-400 font-normal text-[11px]">({dest.reviewCount})</span>
                      </div>
                    </div>

                    {/* Highlights bullet previews */}
                    <div className="space-y-1 text-xs text-slate-600">
                      {dest.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Next Departure Date */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#3482a4]" />
                        <span>Next: <strong className="text-slate-800">{dest.departureDates[0]}</strong></span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex items-center gap-2">
                      <button
                        onClick={() => onExploreDestination(dest)}
                        className="flex-1 py-2 px-3 text-xs font-bold text-white bg-[#3482a4] hover:bg-[#286b88] active:scale-98 rounded-xl transition-all cursor-pointer text-center shadow-xs"
                      >
                        View Itinerary
                      </button>
                      <button
                        onClick={() => onSelectDestination(dest)}
                        className="py-2 px-3 text-xs font-semibold text-slate-700 hover:text-[#3482a4] bg-slate-100 hover:bg-slate-200/60 rounded-xl transition-colors cursor-pointer"
                        title="Showcase in Hero"
                      >
                        Hero Mode
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
