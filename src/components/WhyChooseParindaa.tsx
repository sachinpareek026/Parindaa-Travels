import React from 'react';
import { Globe2, ThumbsUp, CalendarClock, Sparkles, ArrowRight } from 'lucide-react';

interface WhyChooseParindaaProps {
  onOpenPlanner: () => void;
}

export const WhyChooseParindaa: React.FC<WhyChooseParindaaProps> = ({ onOpenPlanner }) => {
  const features = [
    {
      icon: Globe2,
      title: 'Wide Range of Choices',
      description: 'From sacred Jyotirlinga yatras and Northeast waterfalls to high-altitude Leh Ladakh passes.',
    },
    {
      icon: ThumbsUp,
      title: 'Trusted by 25,000+ Parindey',
      description: 'Over 25,000 free spirits have journeyed with us with a stellar 4.93/5 average traveler rating.',
    },
    {
      icon: CalendarClock,
      title: 'Flexible & Easy Rescheduling',
      description: 'Adjust your travel dates or switch trip departures with zero rescheduling fee up to 14 days prior.',
    },
    {
      icon: Sparkles,
      title: 'Exclusive Community Deals',
      description: 'Unlock special early-bird group discounts, seasonal pass savings, and alumni trip rewards.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Script Accent */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
            Why Choose <span className="font-script text-4xl sm:text-5xl font-bold text-[#3482a4]">Parindaa?</span>
          </h2>
          <p className="text-sm text-slate-500 mt-2 max-w-xl">
            Born out of pure wanderlust, we craft journeys that make you feel truly alive, safe, and connected.
          </p>
        </div>

        {/* 2-Column Layout matching Wanderly Photo Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 4 Feature Items */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-slate-50/70 hover:bg-[#3482a4]/10 border border-slate-200/70 hover:border-[#3482a4]/40 transition-all flex flex-col justify-between group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#3482a4]/10 group-hover:bg-[#3482a4] text-[#3482a4] group-hover:text-white flex items-center justify-center transition-colors mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Promotional Banner Card */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[340px] rounded-3xl overflow-hidden shadow-xl shadow-slate-900/10 flex flex-col justify-between p-8 sm:p-10 text-white group">
              {/* Background Image with Scrim */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
                  alt="Your Next Adventure Awaits"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              </div>

              {/* Top Content with Official Logo Emblem */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-black tracking-widest uppercase text-slate-950 bg-[#cbb72c] px-3 py-1 rounded-full shadow-xs">
                    LET&apos;S GO!
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white leading-tight">
                    Your Next Adventure <br className="hidden sm:block" />Awaits!
                  </h3>
                  <p className="text-sm text-slate-200/90 max-w-sm font-light pt-1">
                    Discover breathtaking places, make lifelong friendships, and create unforgettable stories across India and beyond.
                  </p>
                </div>

                {/* Parindaa Logo */}
                <div className="w-14 h-14 flex items-center justify-center shrink-0 hidden sm:flex">
                  <img
                    src="/logo.png"
                    alt="Parindaa Travels"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="relative z-10 pt-6">
                <button
                  onClick={onOpenPlanner}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3482a4] hover:bg-[#286b88] text-white text-sm font-bold shadow-lg shadow-black/20 hover:shadow-xl active:scale-95 transition-all cursor-pointer"
                >
                  <span>Plan Your Trip</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
