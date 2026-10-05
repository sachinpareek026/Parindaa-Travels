import React from 'react';
import { X, Trash2, ArrowRight, Heart, Sparkles, MapPin } from 'lucide-react';
import { Destination } from '../data/travelData';

interface SavedTripsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedDestinations: Destination[];
  onRemove: (id: string) => void;
  onExplore: (dest: Destination) => void;
  currency: 'INR' | 'USD';
}

export const SavedTripsDrawer: React.FC<SavedTripsDrawerProps> = ({
  isOpen,
  onClose,
  savedDestinations,
  onRemove,
  onExplore,
  currency,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                Saved Adventures ({savedDestinations.length})
              </h3>
              <p className="text-[11px] text-slate-400">Your curated bucket list</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="overflow-y-auto p-5 flex-1 space-y-4">
          {savedDestinations.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-slate-700">No saved journeys yet</p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Click the heart icon on any destination card to bookmark your dream trips!
              </p>
            </div>
          ) : (
            savedDestinations.map((dest) => {
              const priceLabel =
                currency === 'INR'
                  ? `₹${dest.priceINR.toLocaleString('en-IN')}`
                  : `$${dest.priceUSD.toLocaleString('en-US')}`;

              return (
                <div
                  key={dest.id}
                  className="p-3 rounded-2xl border border-slate-200 hover:border-[#3482a4] flex items-center gap-3 group transition-all"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 truncate">
                      {dest.name}
                    </h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#3482a4]" />
                      {dest.region}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-extrabold text-[#3482a4] font-display tabular-nums">
                        {priceLabel}
                      </span>
                      <button
                        onClick={() => {
                          onClose();
                          onExplore(dest);
                        }}
                        className="text-xs font-semibold text-[#3482a4] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Itinerary</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(dest.id)}
                    className="p-2 text-slate-300 hover:text-rose-500 transition-colors cursor-pointer"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer */}
        {savedDestinations.length > 0 && (
          <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2">
            <a
              href="https://wa.me/919326632288?text=Hi%20Parindaa%20Travels!%20I%20have%20shortlisted%20trips%20from%20my%20bucket%20list.%20Can%20you%20help%20me%20plan%3F"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 bg-[#3482a4] hover:bg-[#286b88] active:scale-95 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#cbb72c]" />
              Inquire Shortlist on WhatsApp
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
