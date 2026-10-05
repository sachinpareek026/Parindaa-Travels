import React, { useState } from 'react';
import { Compass, Package, Calendar, Users, MapPin, Search, ArrowRightLeft, Check, Sparkles } from 'lucide-react';
import { CITIES_DEPARTURE, Destination } from '../data/travelData';

interface SearchWidgetProps {
  onSearch: (criteria: SearchCriteria) => void;
  destinations: Destination[];
  currency: 'INR' | 'USD';
}

export interface SearchCriteria {
  tab: 'packages' | 'tours';
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  adults: number;
  children: number;
  rooms: number;
}

export const SearchWidget: React.FC<SearchWidgetProps> = ({ onSearch, destinations }) => {
  const [activeTab, setActiveTab] = useState<'packages' | 'tours'>('packages');
  const [fromCity, setFromCity] = useState('New Delhi (DEL)');
  const [toCity, setToCity] = useState('');
  const [departDate, setDepartDate] = useState('2026-10-20');
  const [returnDate, setReturnDate] = useState('2026-10-27');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  const handleSwapCities = () => {
    if (!toCity) return;
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowTravelerDropdown(false);
    
    onSearch({
      tab: activeTab,
      from: fromCity,
      to: toCity,
      departDate,
      returnDate,
      adults,
      children,
      rooms,
    });

    const targetLabel = toCity ? toCity : 'all group departures';
    setSearchFeedback(`Found verified Parindaa trips for "${targetLabel}" (${adults} Travelers)`);
    setTimeout(() => setSearchFeedback(null), 4500);
  };

  return (
    <div id="search" className="relative -mt-10 sm:-mt-14 z-30 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/10 border border-slate-100 p-4 sm:p-6 transition-all">
        
        {/* Navigation Tabs (Curated Departures & Custom Expeditions) */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-3 border-b border-slate-100 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('packages')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'packages'
                ? 'bg-[#3482a4] text-white shadow-sm ring-1 ring-[#3482a4]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Package className={`w-4 h-4 ${activeTab === 'packages' ? 'text-white' : 'text-[#3482a4]'}`} />
            <span>Official Group Trips</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('tours')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'tours'
                ? 'bg-[#3482a4] text-white shadow-sm ring-1 ring-[#3482a4]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Compass className={`w-4 h-4 ${activeTab === 'tours' ? 'text-white' : 'text-[#3482a4]'}`} />
            <span>Custom Expeditions & Treks</span>
          </button>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSearchSubmit} className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
            
            {/* From Input */}
            <div className="lg:col-span-3 relative p-3 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus-within:border-[#3482a4] focus-within:bg-white transition-all">
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                From (Hub City)
              </label>
              <div className="flex items-center gap-2 mt-1">
                <Compass className="w-4 h-4 text-[#3482a4] shrink-0" />
                <select
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="w-full bg-transparent text-sm font-bold text-slate-800 focus:outline-hidden cursor-pointer"
                >
                  {CITIES_DEPARTURE.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* To Input with Swap Icon */}
            <div className="lg:col-span-3 relative p-3 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus-within:border-[#3482a4] focus-within:bg-white transition-all">
              <div className="flex items-center justify-between">
                <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  To (Destination)
                </label>
                <button
                  type="button"
                  onClick={handleSwapCities}
                  className="text-slate-400 hover:text-[#3482a4] p-0.5 transition-colors"
                  title="Swap"
                >
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4 text-[#3482a4] shrink-0" />
                <input
                  type="text"
                  placeholder="Where to? (e.g. Kashmir, Meghalaya)"
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  list="destinations-list"
                  className="w-full bg-transparent text-sm font-bold text-slate-800 placeholder:text-slate-400 placeholder:font-normal focus:outline-hidden"
                />
                <datalist id="destinations-list">
                  {destinations.map((d) => (
                    <option key={d.id} value={d.name} />
                  ))}
                </datalist>
              </div>
            </div>

            {/* Depart Date */}
            <div className="lg:col-span-2 relative p-3 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus-within:border-[#3482a4] focus-within:bg-white transition-all">
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Depart Date
              </label>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4 text-[#3482a4] shrink-0" />
                <input
                  type="date"
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden cursor-pointer"
                />
              </div>
            </div>

            {/* Return Date */}
            <div className="lg:col-span-2 relative p-3 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus-within:border-[#3482a4] focus-within:bg-white transition-all">
              <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Return Date
              </label>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4 text-[#3482a4] shrink-0" />
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-slate-800 focus:outline-hidden cursor-pointer"
                />
              </div>
            </div>

            {/* Travelers & Search Button */}
            <div className="lg:col-span-2 flex items-center gap-2">
              {/* Traveler Dropdown Popover */}
              <div className="relative flex-1">
                <button
                  type="button"
                  onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}
                  className="w-full text-left p-3 rounded-2xl bg-slate-50/80 hover:bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 transition-colors flex items-center justify-between"
                >
                  <div className="truncate">
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider truncate">
                      Travelers
                    </span>
                    <span className="block font-bold text-slate-800 truncate mt-0.5">
                      {adults} Ad, {children} Ch
                    </span>
                  </div>
                  <Users className="w-4 h-4 text-[#3482a4] shrink-0 ml-1" />
                </button>

                {showTravelerDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-64 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 z-50 space-y-3 animate-in fade-in zoom-in-95 duration-100">
                    <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                      <div>
                        <span className="font-semibold block">Adults</span>
                        <span className="text-[10px] text-slate-400">Ages 12+</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 font-bold"
                        >
                          -
                        </button>
                        <span className="w-5 text-center font-bold">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                      <div>
                        <span className="font-semibold block">Children</span>
                        <span className="text-[10px] text-slate-400">Ages 2-11</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 font-bold"
                        >
                          -
                        </button>
                        <span className="w-5 text-center font-bold">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                      <div>
                        <span className="font-semibold block">Rooms</span>
                        <span className="text-[10px] text-slate-400">Stay Category</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setRooms(Math.max(1, rooms - 1))}
                          className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 font-bold"
                        >
                          -
                        </button>
                        <span className="w-5 text-center font-bold">{rooms}</span>
                        <button
                          type="button"
                          onClick={() => setRooms(rooms + 1)}
                          className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowTravelerDropdown(false)}
                      className="w-full py-1.5 text-xs font-bold text-slate-950 bg-[#cbb72c] hover:bg-[#b8a422] rounded-lg"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>

              {/* Search Button with Muted Logo Yellow & Slate Text */}
              <button
                type="submit"
                className="h-[58px] px-6 rounded-2xl bg-[#cbb72c] hover:bg-[#b8a422] active:scale-95 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-[#cbb72c]/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Search</span>
                <Search className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </form>

        {/* Live Search Feedback Banner */}
        {searchFeedback && (
          <div className="mt-3 p-2.5 rounded-xl bg-[#3482a4]/10 border border-[#3482a4]/20 text-slate-800 text-xs font-medium flex items-center justify-between animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#3482a4]" />
              <span>{searchFeedback}</span>
            </div>
            <a href="#destinations" className="underline font-semibold hover:text-[#3482a4]">
              View Below ↓
            </a>
          </div>
        )}

        {/* Quick Route Shortcuts for Real Parindaa Trips */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-slate-700">Trending Trips:</span>
            <div className="flex flex-wrap gap-2">
              {destinations.slice(0, 5).map((dest) => (
                <button
                  key={dest.id}
                  type="button"
                  onClick={() => {
                    setToCity(dest.name);
                  }}
                  className="px-2.5 py-0.5 rounded-md bg-slate-100 hover:bg-[#3482a4]/10 hover:text-[#3482a4] transition-colors cursor-pointer text-[11px]"
                >
                  {dest.name} ({dest.duration.split('/')[0]})
                </button>
              ))}
            </div>
          </div>
          <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Verified Captain Led
          </span>
        </div>

      </div>
    </div>
  );
};
