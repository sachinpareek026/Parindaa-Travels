import React, { useState } from 'react';
import { Heart, Instagram, MapPin, ExternalLink, Sparkles, MessageCircle } from 'lucide-react';
import { INSTAGRAM_POSTS, InstagramPost } from '../data/travelData';

export const InstagramFeed: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <section id="community" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glow with softened palette */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3482a4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#cbb72c]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Instagram Profile Info */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#cbb72c]/30 text-xs font-semibold text-[#cbb72c]">
              <Sparkles className="w-3.5 h-3.5 text-[#cbb72c]" />
              <span>THE REAL PARINDAA COMMUNITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Live from <span className="text-[#6bb5d8] font-script text-4xl sm:text-5xl font-bold">@parindaa.india</span>
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              Authentic stories, starry campfires, and real journeys. In the last 2 years, we did <strong className="text-white font-bold">20+ signature trips</strong> and served <strong className="text-[#cbb72c] font-bold">200+ happy customers</strong> with our quality service.
            </p>
          </div>

          {/* Instagram Account Stat Bar */}
          <div className="flex flex-wrap items-center gap-3.5 bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-md">
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <img
                src="/logo.png"
                alt="@parindaa.india"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/logo.jpg') target.src = '/logo.jpg';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white">@parindaa.india</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.2 rounded font-semibold">Official</span>
              </div>
              <p className="text-xs text-slate-300 font-medium mt-0.5">
                <strong className="text-[#cbb72c]">20+ Trips</strong> · <strong className="text-white">200+ Customers</strong> · 2 Years Quality Service
              </p>
            </div>
            <a
              href="https://www.instagram.com/parindaa.india/"
              target="_blank"
              rel="noreferrer"
              className="ml-auto px-4 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 active:scale-95 rounded-xl transition-all flex items-center gap-1.5 shrink-0 shadow-md"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>Follow</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Milestone Stats Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl backdrop-blur-xs">
            <span className="text-2xl font-black text-[#cbb72c] font-display">20+</span>
            <div>
              <span className="text-xs font-bold text-white block">Trips Completed</span>
              <span className="text-[11px] text-slate-400">Curated Himalayan & coastal routes</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl backdrop-blur-xs">
            <span className="text-2xl font-black text-white font-display">200+</span>
            <div>
              <span className="text-xs font-bold text-white block">Customers Served</span>
              <span className="text-[11px] text-slate-400">In the last 2 years with quality care</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl backdrop-blur-xs">
            <span className="text-2xl font-black text-emerald-400 font-display">100%</span>
            <div>
              <span className="text-xs font-bold text-white block">Quality & Safety</span>
              <span className="text-[11px] text-slate-400">Certified marshals & verified stays</span>
            </div>
          </div>
        </div>

        {/* 6-Photo Masonry / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-800 cursor-pointer border border-white/10 hover:border-[#3482a4] transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3" />

              {/* Hover overlay content */}
              <div className="absolute inset-0 p-3 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-white">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#6bb5d8]" />
                    <span className="truncate max-w-[80px]">{post.location.split(',')[0]}</span>
                  </span>
                  <Instagram className="w-3.5 h-3.5 text-slate-300" />
                </div>

                <div className="space-y-1">
                  <p className="text-[11px] line-clamp-2 text-slate-200 font-light">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-3 text-xs pt-1">
                    <span className="flex items-center gap-1 font-semibold text-rose-400">
                      <Heart className="w-3.5 h-3.5 fill-rose-500" />
                      {post.likes.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-[#6bb5d8]">
                      <MessageCircle className="w-3.5 h-3.5" />
                      {Math.floor(post.likes / 22)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hashtags Strip */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-300 font-semibold">Official Tags:</span>
            {['#ParindaaTravels', '#FlyBeyondBorders', '#ParindeyOnTour', '#ChaloParindey', '#UnexploredIndia'].map((tag) => (
              <span key={tag} className="text-[#6bb5d8] hover:text-white cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[11px] text-slate-400">
            Tag us in your journey reels to be featured on our feed!
          </span>
        </div>

      </div>

      {/* Lightbox / Post Modal */}
      {selectedPost && (
        <div
          onClick={() => setSelectedPost(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border border-white/20 rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl space-y-4 p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <img src="/logo.png" alt="Parindaa" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{selectedPost.author}</h4>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#6bb5d8]" />
                    {selectedPost.location}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-4/3 bg-black">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.caption}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs text-slate-200 leading-relaxed">
              {selectedPost.caption}
            </p>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
              <span className="flex items-center gap-1.5 text-rose-400 font-bold">
                <Heart className="w-4 h-4 fill-current" />
                {selectedPost.likes.toLocaleString()} likes
              </span>
              <a
                href="https://www.instagram.com/parindaa.india/"
                target="_blank"
                rel="noreferrer"
                className="text-[#6bb5d8] hover:text-white font-semibold flex items-center gap-1"
              >
                <span>View on Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
