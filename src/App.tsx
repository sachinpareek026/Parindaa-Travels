import React, { useState, useEffect } from 'react';
import { DESTINATIONS, Destination } from './data/travelData';
import { PolicyType } from './data/policyData';
import { Navbar } from './components/Navbar';
import { HeroFoxico } from './components/HeroFoxico';
import { SearchWidget, SearchCriteria } from './components/SearchWidget';
import { TrustPillars } from './components/TrustPillars';
import { TravelCinemaBanner } from './components/TravelCinemaBanner';
import { PopularDestinations } from './components/PopularDestinations';
import { WhyChooseParindaa } from './components/WhyChooseParindaa';
import { InstagramFeed } from './components/InstagramFeed';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { NewsletterBanner } from './components/NewsletterBanner';
import { Footer } from './components/Footer';
import { PolicyPage } from './components/PolicyPage';
import { ItineraryModal } from './components/ItineraryModal';
import { TripPlannerModal } from './components/TripPlannerModal';
import { SavedTripsDrawer } from './components/SavedTripsDrawer';
import { MessageSquare, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [activeDestination, setActiveDestination] = useState<Destination>(DESTINATIONS[0]);
  const [selectedItinerary, setSelectedItinerary] = useState<Destination | null>(null);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activePolicy, setActivePolicy] = useState<PolicyType | null>(null);

  // Load and persist savedIds
  useEffect(() => {
    try {
      const stored = localStorage.getItem('parindaa_saved_trips');
      if (stored) {
        setSavedIds(JSON.parse(stored));
      }
    } catch {
      // fallback
    }
  }, []);

  const parseHashPolicy = (): PolicyType | null => {
    const rawHash = window.location.hash.replace('#', '').trim();
    if (
      rawHash === 'privacy-policy' ||
      rawHash === 'cancellation-policy' ||
      rawHash === 'safety-guidelines' ||
      rawHash === 'terms-of-service'
    ) {
      return rawHash as PolicyType;
    }
    return null;
  };

  // Synchronize active policy with URL hash on load & hashchange
  useEffect(() => {
    const initialFromHash = parseHashPolicy();
    if (initialFromHash) {
      setActivePolicy(initialFromHash);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    const handleHashChange = () => {
      const matched = parseHashPolicy();
      setActivePolicy(matched);
      if (matched) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenPolicy = (policyId: PolicyType) => {
    setActivePolicy(policyId);
    window.location.hash = policyId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActivePolicy(null);
    history.pushState('', document.title, window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSelectDestination = React.useCallback((dest: Destination) => {
    setActiveDestination(dest);
  }, []);

  const handleToggleSave = (id: string) => {
    const exists = savedIds.includes(id);
    const updated = exists ? savedIds.filter((item) => item !== id) : [...savedIds, id];
    setSavedIds(updated);
    try {
      localStorage.setItem('parindaa_saved_trips', JSON.stringify(updated));
    } catch {
      // ignore
    }
    showToast(exists ? 'Removed from saved trips' : 'Added to your travel bucket list! ❤️');
  };

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'INR' ? 'USD' : 'INR'));
    showToast(`Currency changed to ${currency === 'INR' ? 'USD ($)' : 'INR (₹)'}`);
  };

  const handleSearch = (criteria: SearchCriteria) => {
    if (activePolicy) {
      setActivePolicy(null);
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }

    if (criteria.to) {
      setSearchQuery(criteria.to);
      const matched = DESTINATIONS.find((d) =>
        d.name.toLowerCase().includes(criteria.to.toLowerCase())
      );
      if (matched) {
        setActiveDestination(matched);
      }
    } else {
      setSearchQuery('');
    }

    // Smooth scroll to destinations section
    setTimeout(() => {
      const elem = document.getElementById('destinations');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  const handleBookSuccess = (tripName: string) => {
    showToast(`Inquiry sent for ${tripName}! We'll contact you on WhatsApp.`);
  };

  const handleSelectNav = (sectionId: string) => {
    if (activePolicy) {
      setActivePolicy(null);
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }

    setTimeout(() => {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 50);
  };

  const savedDestinations = DESTINATIONS.filter((d) => savedIds.includes(d.id));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-[#3482a4] selection:text-white relative">
      
      {/* Top Bar Navigation */}
      <Navbar
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        savedCount={savedIds.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        onOpenPlanner={() => setIsPlannerOpen(true)}
        onSelectNav={handleSelectNav}
      />

      {/* Main Content: Render dedicated PolicyPage if active, otherwise full landing experience */}
      {activePolicy ? (
        <main className="flex-1">
          <PolicyPage
            initialPolicy={activePolicy}
            onBackToHome={handleBackToHome}
            onSelectNav={handleSelectNav}
          />
        </main>
      ) : (
        <main className="flex-1">
          {/* Foxico Cinematic Interactive Hero Showcase */}
          <HeroFoxico
            destinations={DESTINATIONS}
            activeDestination={activeDestination}
            onSelectDestination={handleSelectDestination}
            onExploreDestination={(dest) => setSelectedItinerary(dest)}
            onOpenPlanner={() => setIsPlannerOpen(true)}
            currency={currency}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
          />

          {/* Wanderly Multi-Tab Search & Booking Engine */}
          <SearchWidget
            onSearch={handleSearch}
            destinations={DESTINATIONS}
            currency={currency}
          />

          {/* 4 Trust & Safety Pillars */}
          <TrustPillars />

          {/* India's 1st Experimental Travel Cinema Project Feature Banner */}
          <TravelCinemaBanner />

          {/* Popular Destinations Grid (Official Parindaa Group Trips) */}
          <PopularDestinations
            destinations={DESTINATIONS}
            onSelectDestination={(dest) => {
              setActiveDestination(dest);
              const heroElem = document.getElementById('hero');
              if (heroElem) heroElem.scrollIntoView({ behavior: 'smooth' });
            }}
            onExploreDestination={(dest) => setSelectedItinerary(dest)}
            currency={currency}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
            searchFilter={searchQuery}
          />

          {/* Why Choose Parindaa & Promotional Feature Card */}
          <WhyChooseParindaa onOpenPlanner={() => setIsPlannerOpen(true)} />

          {/* Instagram Tribe & Real Stories Showcase (@parindaa.india) */}
          <InstagramFeed />

          {/* Verified Traveler Testimonials */}
          <TestimonialsSection />

          {/* Frequently Asked Questions */}
          <FAQSection />

          {/* Newsletter Subscription Banner */}
          <NewsletterBanner />
        </main>
      )}

      {/* Comprehensive Footer with Connected Policy Pages */}
      <Footer onSelectNav={handleSelectNav} onOpenPolicy={handleOpenPolicy} />

      {/* Floating WhatsApp Quick Connect Button to Official Number */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <a
          href="https://api.whatsapp.com/send?phone=919326632288&text=Hi%20Parindaa%20Captain!%20I%20planning%20a%20trip%20and%20need%20quick%20assistance."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-xs shadow-xl shadow-emerald-500/30 hover:scale-105 transition-all group cursor-pointer"
          title="Direct WhatsApp Support with Captain"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 fill-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#cbb72c] rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline">WhatsApp Captain</span>
          <span className="sm:hidden">Captain</span>
        </a>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-slate-900/95 text-white text-xs font-semibold shadow-2xl backdrop-blur-md border border-slate-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Sparkles className="w-4 h-4 text-[#cbb72c]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Itinerary Modal */}
      <ItineraryModal
        destination={selectedItinerary}
        onClose={() => setSelectedItinerary(null)}
        currency={currency}
        onBookSuccess={handleBookSuccess}
      />

      {/* Custom Trip Planner Wizard Modal */}
      <TripPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        currency={currency}
      />

      {/* Saved Trips Drawer */}
      <SavedTripsDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedDestinations={savedDestinations}
        onRemove={handleToggleSave}
        onExplore={(dest) => setSelectedItinerary(dest)}
        currency={currency}
      />

    </div>
  );
}
