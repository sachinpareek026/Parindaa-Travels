import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/travelData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3482a4] bg-[#3482a4]/10 px-3 py-1 rounded-full">
            REAL TRAVELER EXPERIENCES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900 mt-2">
            Stories From Our <span className="font-script text-4xl sm:text-5xl font-bold text-[#3482a4]">Parindey</span>
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Proud to have completed 20+ signature group trips and served 200+ happy travelers over the last 2 years with our high-quality service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Stars & Quote */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#cbb72c] text-[#cbb72c]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#3482a4]/20 group-hover:text-[#3482a4]/40 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className="relative shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#3482a4]/20 border border-slate-200 shadow-xs"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {review.verified && (
                    <span 
                      className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-xs" 
                      title="Verified Traveler"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {review.author}
                    </h4>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 font-bold px-1.5 py-0.2 rounded-sm border border-emerald-200/60">
                      Verified
                    </span>
                  </div>
                  <p className="text-[11px] font-medium text-[#3482a4] truncate">{review.trip}</p>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400">
                    <span>{review.location}</span>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
