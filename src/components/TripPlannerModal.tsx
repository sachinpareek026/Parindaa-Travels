import React, { useState } from 'react';
import { X, Mountain, Waves, Globe, Compass, Users, Heart, Shield, Check, Send, MessageSquare } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_PHONE_DISPLAY } from '../data/travelData';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'INR' | 'USD';
}

export const TripPlannerModal: React.FC<TripPlannerModalProps> = ({
  isOpen,
  onClose,
  currency,
}) => {
  const [step, setStep] = useState(1);
  const [destinationVibe, setDestinationVibe] = useState('Himalayan Mountains');
  const [tripStyle, setTripStyle] = useState('Backpacking Squad');
  const [durationDays, setDurationDays] = useState(6);
  const [travelerCount, setTravelerCount] = useState(2);
  const [budgetTier, setBudgetTier] = useState('Comfort Deluxe');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState('');

  if (!isOpen) return null;

  // Calculate estimated quote based on choices
  const baseRatePerDayINR =
    budgetTier === 'Pocket-Friendly' ? 2400 : budgetTier === 'Comfort Deluxe' ? 3800 : 6500;
  const multiplier =
    destinationVibe === 'International Escapes' ? 1.6 : 1.0;
  const estimatedCostINR = Math.round(baseRatePerDayINR * durationDays * travelerCount * multiplier);
  const estimatedCostUSD = Math.round(estimatedCostINR / 78);

  const priceFormatted =
    currency === 'INR'
      ? `₹${estimatedCostINR.toLocaleString('en-IN')}`
      : `$${estimatedCostUSD.toLocaleString('en-US')}`;

  const perPersonFormatted =
    currency === 'INR'
      ? `₹${Math.round(estimatedCostINR / travelerCount).toLocaleString('en-IN')}`
      : `$${Math.round(estimatedCostUSD / travelerCount).toLocaleString('en-US')}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userPhone) return;

    const refId = Math.floor(100000 + Math.random() * 900000);
    const currentDate = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const formattedMessage = `🗺️ *PARINDAA TRAVELS — CUSTOM TRIP INQUIRY*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔖 *REF NO:* #PAR-CUSTOM-${refId}
📅 *DATE:* ${currentDate}

📍 *CUSTOM TRIP PREFERENCES:*
• *Destination Vibe:* ${destinationVibe}
• *Travel Style:* ${tripStyle}
• *Trip Duration:* ${durationDays} Days / ${durationDays - 1} Nights
• *Group Size:* ${travelerCount} Persons
• *Budget Preference:* ${budgetTier}
• *Estimated Package Quote:* ${priceFormatted} (${perPersonFormatted} / person)

👤 *PRIMARY TRAVELER DETAILS:*
• *Lead Name:* ${userName.trim()}
• *WhatsApp Contact:* ${userPhone.trim()}

💬 *MESSAGE TO CAPTAIN:*
"Hi Parindaa Captain! I have customized my dream trip on your website and would love to receive a personalized day-wise itinerary, stay recommendations, and final quote. Please guide us!"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ *Sent via Parindaa Travels Official Website Portal*
📞 *Official Business WhatsApp: ${OFFICIAL_PHONE_DISPLAY}*`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${OFFICIAL_WHATSAPP_NUMBER}&text=${encodedMessage}`;

    setSubmittedWhatsappUrl(whatsappUrl);
    setSubmitted(true);

    try {
      const win = window.open(whatsappUrl, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        setTimeout(() => {
          window.location.href = whatsappUrl;
        }, 1200);
      }
    } catch {
      window.location.href = whatsappUrl;
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Parindaa Travels! I used your Custom Trip Planner:\n- Vibe: ${destinationVibe}\n- Style: ${tripStyle}\n- Travelers: ${travelerCount} persons\n- Duration: ${durationDays} days\n- Budget: ${budgetTier}\n- Name: ${userName || 'Wanderer'}\nPlease share a tailored itinerary!`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-950 via-[#1f566e] to-[#3482a4] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <img
                src="/logo.png"
                alt="Parindaa Travels"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/logo.jpg') target.src = '/logo.jpg';
                }}
              />
            </div>
            <div>
              <h2 className="text-xl font-black font-display tracking-tight text-white">
                Custom Trip Architect
              </h2>
              <p className="text-xs text-slate-200">
                Craft your bespoke Parindaa itinerary in 30 seconds
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between px-6 pt-4 pb-2 border-b border-slate-100 text-xs font-bold">
          <div className="flex items-center gap-1.5">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-[#cbb72c] text-slate-950' : 'bg-slate-200 text-slate-600'}`}>
              1
            </span>
            <span className={step === 1 ? 'text-[#3482a4]' : 'text-slate-400'}>Preferences</span>
          </div>
          <div className="w-12 h-0.5 bg-slate-200" />
          <div className="flex items-center gap-1.5">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-[#cbb72c] text-slate-950' : 'bg-slate-200 text-slate-600'}`}>
              2
            </span>
            <span className={step === 2 ? 'text-[#3482a4]' : 'text-slate-400'}>Logistics</span>
          </div>
          <div className="w-12 h-0.5 bg-slate-200" />
          <div className="flex items-center gap-1.5">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-[#cbb72c] text-slate-950' : 'bg-slate-200 text-slate-600'}`}>
              3
            </span>
            <span className={step === 3 ? 'text-[#3482a4]' : 'text-slate-400'}>Quote & Send</span>
          </div>
        </div>

        {/* Form Body */}
        <div className="overflow-y-auto p-6 flex-1 space-y-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 font-display">Custom Trip Plan Shared to WhatsApp!</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-800">{userName}</strong>! Your customized trip preferences have been formatted and redirected to our official business WhatsApp (<strong className="text-slate-900">{OFFICIAL_PHONE_DISPLAY}</strong>).
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={submittedWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-slate-950 text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  <span>Open WhatsApp to Continue Chat</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                    setStep(1);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                      1. What destination vibe calls to you?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Himalayan Mountains', icon: Mountain, desc: 'Kashmir, Spiti, Ladakh' },
                        { label: 'Tropical & Coastal', icon: Waves, desc: 'Kerala, Goa, Islands' },
                        { label: 'Spiritual Yatras', icon: Globe, desc: 'Jyotirlinga, Kainchi Dham' },
                        { label: 'Waterfalls & Treks', icon: Compass, desc: 'Meghalaya, Nongriat Caves' },
                      ].map((vibe) => {
                        const Icon = vibe.icon;
                        const isSelected = destinationVibe === vibe.label;
                        return (
                          <button
                            key={vibe.label}
                            type="button"
                            onClick={() => setDestinationVibe(vibe.label)}
                            className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#3482a4]/10 border-[#3482a4] ring-2 ring-[#3482a4]/20'
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Icon className={`w-4 h-4 ${isSelected ? 'text-[#3482a4]' : 'text-slate-500'}`} />
                              <span className="text-xs font-bold text-slate-800">{vibe.label}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-1 truncate">{vibe.desc}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                      2. What is your travel style?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Backpacking Squad', icon: Users, desc: 'Fun group departures, campfires & social' },
                        { label: 'Romantic Honeymoon', icon: Heart, desc: 'Private stays, candlelit dinners & sunsets' },
                        { label: 'Relaxed Family', icon: Shield, desc: 'Comfortable luxury pacing & top stays' },
                        { label: 'Solo Parinda', icon: Compass, desc: 'Meet fellow like-minded free spirits' },
                      ].map((style) => {
                        const Icon = style.icon;
                        const isSelected = tripStyle === style.label;
                        return (
                          <button
                            key={style.label}
                            type="button"
                            onClick={() => setTripStyle(style.label)}
                            className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#3482a4]/10 border-[#3482a4] ring-2 ring-[#3482a4]/20'
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Icon className={`w-4 h-4 ${isSelected ? 'text-[#3482a4]' : 'text-slate-500'}`} />
                              <span className="text-xs font-bold text-slate-800">{style.label}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-1 truncate">{style.desc}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 text-xs font-bold text-white bg-[#3482a4] hover:bg-[#286b88] rounded-xl cursor-pointer"
                    >
                      Next: Logistics →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Trip Duration: {durationDays} Days
                      </label>
                      <span className="text-xs text-[#3482a4] font-semibold">{durationDays - 1} Nights</span>
                    </div>
                    <input
                      type="range"
                      min={3}
                      max={14}
                      value={durationDays}
                      onChange={(e) => setDurationDays(Number(e.target.value))}
                      className="w-full accent-[#3482a4] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>3-4 Days (Weekend)</span>
                      <span>6-7 Days (Classic)</span>
                      <span>14 Days (Grand Expedition)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        No. of Travelers: {travelerCount} Persons
                      </label>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={12}
                      value={travelerCount}
                      onChange={(e) => setTravelerCount(Number(e.target.value))}
                      className="w-full accent-[#3482a4] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>1 (Solo Parinda)</span>
                      <span>4 (Squad)</span>
                      <span>12 (Large Group)</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      Stay & Comfort Tier
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Pocket-Friendly', 'Comfort Deluxe', 'Ultimate Luxury'].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setBudgetTier(tier)}
                          className={`p-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                            budgetTier === tier
                              ? 'bg-[#3482a4] text-white border-[#3482a4] shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 text-xs font-bold text-white bg-[#3482a4] hover:bg-[#286b88] rounded-xl cursor-pointer"
                    >
                      Next: View Estimate →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in duration-200">
                  {/* Estimated Price Card */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-[#3482a4] uppercase tracking-wider">
                          Estimated Total Package
                        </span>
                        <div className="text-2xl font-black text-slate-900 font-display tabular-nums">
                          {priceFormatted}
                        </div>
                        <span className="text-xs text-slate-500">
                          Approx. {perPersonFormatted} / person ({durationDays}D/{durationDays - 1}N)
                        </span>
                      </div>
                      <div className="text-right text-xs space-y-0.5">
                        <span className="block font-semibold text-slate-800">{destinationVibe}</span>
                        <span className="block text-slate-500">{tripStyle}</span>
                        <span className="block text-emerald-600 font-bold">{budgetTier}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Riya Verma"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full text-xs font-semibold px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:outline-hidden focus:border-[#3482a4]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        WhatsApp Contact *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 93266 32288"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        className="w-full text-xs font-semibold px-3 py-2 bg-slate-50 rounded-xl border border-slate-200 focus:bg-white focus:outline-hidden focus:border-[#3482a4]"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <a
                      href={`https://wa.me/919326632288?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Instant WhatsApp Quote
                    </a>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-[#cbb72c] hover:bg-[#b8a422] rounded-xl flex items-center gap-1.5 shadow-md shadow-[#cbb72c]/20 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Submit Request
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};
