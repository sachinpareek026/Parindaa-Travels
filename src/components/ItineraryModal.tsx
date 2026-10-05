import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, XCircle, Star, MessageSquare, Send, Check } from 'lucide-react';
import { Destination } from '../data/travelData';

interface ItineraryModalProps {
  destination: Destination | null;
  onClose: () => void;
  currency: 'INR' | 'USD';
  onBookSuccess: (tripName: string) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({
  destination,
  onClose,
  currency,
  onBookSuccess,
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedDeparture, setSelectedDeparture] = useState<string>('');
  const [travelerName, setTravelerName] = useState('');
  const [travelerPhone, setTravelerPhone] = useState('');
  const [travelerCount, setTravelerCount] = useState(2);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  if (!destination) return null;

  const priceLabel =
    currency === 'INR'
      ? `₹${destination.priceINR.toLocaleString('en-IN')}`
      : `$${destination.priceUSD.toLocaleString('en-US')}`;

  const currentDeparture = selectedDeparture || destination.departureDates[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!travelerName || !travelerPhone) return;

    setBookingSubmitted(true);
    setTimeout(() => {
      onBookSuccess(destination.name);
      setBookingSubmitted(false);
      onClose();
    }, 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Parindaa Travels! I'm interested in booking the ${destination.name} trip (${destination.duration}) for departure on ${currentDeparture}. Please share complete details.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header Photo & Close Button */}
        <div className="relative h-64 sm:h-72 shrink-0 overflow-hidden bg-slate-900">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero text overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[11px] font-bold text-slate-950 bg-[#cbb72c] px-2.5 py-0.5 rounded-full shadow-xs">
                {destination.badge || 'Parindaa Curated'}
              </span>
              <span className="text-xs text-slate-200 flex items-center gap-1 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#3482a4]" />
                {destination.region}, {destination.country}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
                  {destination.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-script text-base">
                  {destination.tagline}
                </p>
              </div>

              <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-right shrink-0">
                <span className="block text-[10px] text-slate-300 uppercase">Starting From</span>
                <span className="text-xl font-black text-[#cbb72c] font-display tabular-nums">
                  {priceLabel}
                </span>
                <span className="text-[10px] text-slate-300 ml-1">/ person</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-1">
          
          {/* Key Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Duration</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-[#3482a4]" />
                {destination.duration}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Rating</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <Star className="w-3.5 h-3.5 fill-[#cbb72c] text-[#cbb72c]" />
                {destination.rating} ({destination.reviewCount} reviews)
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Next Group Batch</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-[#3482a4]" />
                {currentDeparture}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Vibe</span>
              <span className="font-bold text-[#3482a4] capitalize mt-0.5 block">
                {destination.category} Journey
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Journey Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {destination.highlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                  <CheckCircle2 className="w-4 h-4 text-[#3482a4] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day-by-Day Itinerary Explorer */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Day-by-Day Itinerary Plan
              </h3>
              <span className="text-xs text-slate-400">
                Click day to read details
              </span>
            </div>

            {/* Day Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {destination.itinerary.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day.day)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    selectedDay === day.day
                      ? 'bg-[#3482a4] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Day {day.day}
                </button>
              ))}
            </div>

            {/* Selected Day Details */}
            {destination.itinerary
              .filter((d) => d.day === selectedDay)
              .map((day) => (
                <div key={day.day} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 pb-2">
                    <span className="text-xs font-bold text-[#3482a4] uppercase tracking-wide">
                      Day {day.day}: {day.title}
                    </span>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
                      <span>🍴 {day.meals}</span>
                      <span>🏨 {day.stay}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {day.details}
                  </p>
                </div>
              ))}
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                What&apos;s Included
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {destination.inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-600" />
                What&apos;s Excluded
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {destination.exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fixed Departures Picker */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
              Select Upcoming Group Departure Date
            </label>
            <div className="flex flex-wrap gap-2">
              {destination.departureDates.map((date) => (
                <button
                  key={date}
                  type="button"
                  onClick={() => setSelectedDeparture(date)}
                  className={`px-3 py-1.5 text-xs rounded-xl font-semibold border transition-all cursor-pointer ${
                    currentDeparture === date
                      ? 'bg-[#3482a4] text-white border-[#3482a4] shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-[#3482a4]'
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* Booking & Inquiry Form */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Ready to Soar? Reserve Your Seat
                </h4>
                <p className="text-xs text-slate-500">
                  Book now with zero risk. Partial deposit to lock your slot.
                </p>
              </div>
              <a
                href={`https://wa.me/919326632288?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-700 bg-white hover:bg-emerald-50 border border-emerald-200 rounded-xl transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                Ask on WhatsApp
              </a>
            </div>

            {bookingSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-600 text-white text-center space-y-1 animate-in zoom-in-95">
                <div className="flex justify-center">
                  <Check className="w-6 h-6 bg-white/20 rounded-full p-1" />
                </div>
                <p className="text-sm font-bold">Booking Inquiry Received!</p>
                <p className="text-xs text-emerald-100">
                  Our Parindaa travel captain will call you at {travelerPhone} within 15 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={travelerName}
                    onChange={(e) => setTravelerName(e.target.value)}
                    className="w-full text-xs font-semibold px-3 py-2 bg-white rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#3482a4]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 93266 32288"
                    value={travelerPhone}
                    onChange={(e) => setTravelerPhone(e.target.value)}
                    className="w-full text-xs font-semibold px-3 py-2 bg-white rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#3482a4]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                    No. of Travelers
                  </label>
                  <select
                    value={travelerCount}
                    onChange={(e) => setTravelerCount(Number(e.target.value))}
                    className="w-full text-xs font-semibold px-3 py-2 bg-white rounded-xl border border-slate-200 focus:outline-hidden focus:border-[#3482a4]"
                  >
                    <option value={1}>1 Solo Parinda</option>
                    <option value={2}>2 Travelers (Pair)</option>
                    <option value={3}>3 Travelers</option>
                    <option value={4}>4 Travelers (Friends Squad)</option>
                    <option value={6}>5+ Group / Family</option>
                  </select>
                </div>

                <div className="sm:col-span-3 flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-500">
                    Deposit: <strong className="text-slate-900 bg-[#cbb72c]/25 px-1.5 py-0.5 rounded">₹3,000 / $40</strong> to lock slot
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-black text-slate-950 bg-[#cbb72c] hover:bg-[#b8a422] active:scale-95 rounded-xl shadow-md shadow-[#cbb72c]/20 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Confirm Booking Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
