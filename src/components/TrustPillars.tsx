import React from 'react';
import { Tag, Headphones, ShieldCheck, Award } from 'lucide-react';

export const TrustPillars: React.FC = () => {
  const pillars = [
    {
      icon: Tag,
      title: 'Best Price Guarantee',
      desc: 'Direct ground-operator rates without hidden agency markups or surge fees.',
    },
    {
      icon: Headphones,
      title: '24/7 Trip Assistance',
      desc: 'Dedicated Parindaa trip captain & real-time travel support on WhatsApp.',
    },
    {
      icon: ShieldCheck,
      title: '100% Secure Bookings',
      desc: 'Verified stays, sanitized vehicles & certified experienced local guides.',
    },
    {
      icon: Award,
      title: 'Handpicked Experiences',
      desc: 'Curated secret viewpoints, sunrise hikes & authentic local culinary walks.',
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/70 hover:bg-[#3482a4]/10 border border-slate-200/70 hover:border-[#3482a4]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#3482a4]/10 group-hover:bg-[#3482a4] text-[#3482a4] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 shadow-xs">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
