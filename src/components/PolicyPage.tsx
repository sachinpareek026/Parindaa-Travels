import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  RotateCcw, 
  HeartPulse, 
  FileText, 
  ArrowLeft, 
  Search, 
  Printer, 
  Share2, 
  Check, 
  Phone, 
  Mail, 
  MessageSquare, 
  ChevronDown, 
  AlertTriangle, 
  Info, 
  Lightbulb, 
  Calendar, 
  Clock, 
  CheckCircle2,
  Compass,
  Building2,
  Lock,
  Sparkles
} from 'lucide-react';
import { POLICIES_DATA, PolicyType, PolicyData } from '../data/policyData';

interface PolicyPageProps {
  initialPolicy?: PolicyType;
  onBackToHome: () => void;
  onSelectNav?: (sectionId: string) => void;
}

export const PolicyPage: React.FC<PolicyPageProps> = ({
  initialPolicy = 'privacy-policy',
  onBackToHome,
  onSelectNav
}) => {
  const [activePolicyId, setActivePolicyId] = useState<PolicyType>(initialPolicy);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Sync with initialPolicy prop or hash changes
  useEffect(() => {
    if (initialPolicy) {
      setActivePolicyId(initialPolicy);
    }
  }, [initialPolicy]);

  const currentPolicy: PolicyData = POLICIES_DATA[activePolicyId];

  // Update URL hash when tab changes
  const handleTabChange = (newPolicyId: PolicyType) => {
    setActivePolicyId(newPolicyId);
    setSearchQuery('');
    setOpenFaqIdx(0);
    window.location.hash = newPolicyId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${activePolicyId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const policyIcons = {
    'privacy-policy': Shield,
    'cancellation-policy': RotateCcw,
    'safety-guidelines': HeartPulse,
    'terms-of-service': FileText,
  };

  const CurrentIcon = policyIcons[activePolicyId];

  // Filter sections by search query if any
  const filteredSections = currentPolicy.sections.filter((sec) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const titleMatch = sec.title.toLowerCase().includes(q);
    const contentMatch = sec.content.some((c) => c.toLowerCase().includes(q));
    const subMatch = sec.subsections?.some(
      (sub) =>
        sub.subtitle.toLowerCase().includes(q) ||
        sub.points.some((p) => p.toLowerCase().includes(q))
    );
    return titleMatch || contentMatch || subMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* Top Breadcrumb & Action Bar */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Back Button & Breadcrumbs */}
            <div className="flex items-center gap-3">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Return to Home Landing Page"
              >
                <ArrowLeft className="w-4 h-4 text-[#3482a4]" />
                <span>Back to Home</span>
              </button>

              <div className="h-4 w-px bg-slate-200 hidden sm:block" />

              <nav className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
                <button
                  onClick={onBackToHome}
                  className="hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Home
                </button>
                <span>/</span>
                <span className="text-slate-500">Policies & Trust</span>
                <span>/</span>
                <span className="font-semibold text-slate-900">{currentPolicy.navTitle}</span>
              </nav>
            </div>

            {/* Quick Actions (Print, Share, WhatsApp) */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-xs font-medium text-slate-700 hover:text-slate-900 shadow-2xs transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden md:inline">Print / PDF</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-xs font-medium text-slate-700 hover:text-slate-900 shadow-2xs transition-colors cursor-pointer"
                title="Copy shareable link to this policy"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-slate-500" />
                    <span className="hidden md:inline">Share Link</span>
                  </>
                )}
              </button>

              <a
                href="https://api.whatsapp.com/send?phone=919326632288&text=Hi%20Parindaa%20Captain!%20I%20have%20a%20question%20regarding%20your%20policies."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                title="Chat with Captain on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Ask Captain</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Main Header & 4 Policy Tabs */}
      <section className="bg-slate-900 text-white pt-10 pb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Title with Official Trust Badge */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#cbb72c]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                Official Parindaa India Documentation
              </span>
              <span className="text-slate-500 text-xs">·</span>
              <span className="text-[11px] font-mono text-slate-400">
                UDYAM-RJ-30-0141140
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-3">
              {currentPolicy.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {currentPolicy.tagline}
            </p>

            {/* Document Metadata Strip (No pill slop, clean unboxed text) */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#3482a4]" />
                <span>Effective: {currentPolicy.effectiveDate}</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#cbb72c]" />
                <span>{currentPolicy.readingTime}</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span>Govt. MSME Registered Entity</span>
              </div>
            </div>
          </div>

          {/* Interactive Policy Tabs Navigation (Buttons with click handlers) */}
          <div className="mt-8 pt-6 border-t border-slate-800/80">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-slate-950/60 rounded-xl border border-slate-800">
              {(Object.keys(POLICIES_DATA) as PolicyType[]).map((policyKey) => {
                const pol = POLICIES_DATA[policyKey];
                const Icon = policyIcons[policyKey];
                const isActive = activePolicyId === policyKey;

                return (
                  <button
                    key={policyKey}
                    onClick={() => handleTabChange(policyKey)}
                    className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#3482a4] text-white shadow-sm font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span className="truncate">{pol.navTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Content Body Container */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar: Table of Contents & Quick Support */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Search Box within Document */}
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
              <label htmlFor="policy-search" className="block text-xs font-bold text-slate-900 mb-1.5">
                Find in this document
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="policy-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search keywords (e.g. refund, permits, AMS)..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#3482a4] focus:border-transparent bg-slate-50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs px-1"
                  >
                    Clear
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="text-[11px] text-slate-500 mt-2">
                  Showing matches for "{searchQuery}" ({filteredSections.length} section{filteredSections.length !== 1 ? 's' : ''})
                </p>
              )}
            </div>

            {/* Document Index / Table of Contents */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs sticky top-36">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                <span>In This Document</span>
                <span className="font-mono text-[10px] text-slate-400">
                  {currentPolicy.sections.length} Sections
                </span>
              </h3>

              <nav className="space-y-1.5">
                {currentPolicy.sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="flex items-start gap-2.5 px-2.5 py-1.5 rounded-lg text-xs text-slate-600 hover:text-[#3482a4] hover:bg-slate-50 transition-colors group"
                  >
                    <span className="font-mono text-[11px] text-slate-400 group-hover:text-[#3482a4] shrink-0 mt-0.5">
                      {sec.number}
                    </span>
                    <span className="font-medium leading-snug line-clamp-1">
                      {sec.title}
                    </span>
                  </a>
                ))}
                <a
                  href="#faqs-policy"
                  className="flex items-start gap-2.5 px-2.5 py-1.5 rounded-lg text-xs text-slate-600 hover:text-[#3482a4] hover:bg-slate-50 transition-colors group border-t border-slate-100 pt-2 mt-2"
                >
                  <span className="font-mono text-[11px] text-[#cbb72c] shrink-0 mt-0.5">
                    FAQ
                  </span>
                  <span className="font-medium leading-snug">
                    Frequently Asked Questions
                  </span>
                </a>
              </nav>

              {/* Quick Legal Support Card */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#3482a4]/10 text-[#3482a4] flex items-center justify-center">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      Questions on this policy?
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Our legal & support team responds within 24 hrs.
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1 text-xs">
                  <a
                    href="mailto:contact@parindaaindia.com"
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors p-1.5 rounded-md hover:bg-slate-50"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#3482a4] shrink-0" />
                    <span className="truncate">contact@parindaaindia.com</span>
                  </a>
                  <a
                    href="https://wa.me/919326632288"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors p-1.5 rounded-md hover:bg-slate-50"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>+91 93266 32288</span>
                  </a>
                </div>
              </div>

            </div>

          </aside>

          {/* Right Main Content Area */}
          <main className="lg:col-span-8 space-y-8">
            
            {/* Summary Highlights Banner (4 Key Takeaways) */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#cbb72c]" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Key Takeaways At A Glance
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentPolicy.summaryHighlights.map((hl, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition-colors"
                  >
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3482a4] shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-xs font-bold text-slate-900 mb-1">
                          {hl.label}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {hl.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Feature Visuals per Policy Type */}
            {activePolicyId === 'cancellation-policy' && (
              <div className="bg-linear-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 border border-slate-700 shadow-md">
                <div className="flex items-center gap-2.5 mb-2">
                  <RotateCcw className="w-5 h-5 text-[#cbb72c]" />
                  <h3 className="text-base font-bold text-white font-display">
                    Cancellation Slabs & Refund Matrix
                  </h3>
                </div>
                <p className="text-xs text-slate-300 mb-5">
                  Clear, upfront refund breakdown based on when written notice is received prior to departure date:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-700 text-slate-400 uppercase text-[10px] tracking-wider">
                        <th className="py-2.5 px-3">Notice Window</th>
                        <th className="py-2.5 px-3">Cash Bank Refund</th>
                        <th className="py-2.5 px-3">Parindaa Credit Voucher (1 Year)</th>
                        <th className="py-2.5 px-3">Slot Replacement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-200 font-medium">
                      <tr>
                        <td className="py-3 px-3 font-semibold text-white">30+ Days Prior</td>
                        <td className="py-3 px-3 text-emerald-400 font-bold">90% of Total Fee</td>
                        <td className="py-3 px-3 text-[#cbb72c] font-bold">100% Full Credit</td>
                        <td className="py-3 px-3 text-slate-300">Free Slot Transfer</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-white">15 to 29 Days Prior</td>
                        <td className="py-3 px-3 text-emerald-400 font-bold">70% of Total Fee</td>
                        <td className="py-3 px-3 text-[#cbb72c] font-bold">85% Travel Credit</td>
                        <td className="py-3 px-3 text-slate-300">Free Slot Transfer</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-white">7 to 14 Days Prior</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">40% of Total Fee</td>
                        <td className="py-3 px-3 text-[#cbb72c] font-bold">55% Travel Credit</td>
                        <td className="py-3 px-3 text-slate-300">Free (if permits unissued)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-semibold text-white">Less than 7 Days / No Show</td>
                        <td className="py-3 px-3 text-rose-400 font-bold">0% (Non-refundable)</td>
                        <td className="py-3 px-3 text-slate-400">0% (Non-refundable)</td>
                        <td className="py-3 px-3 text-slate-400">Not Applicable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>* Token advance amounts are fully adjustable against Credit Notes.</span>
                  <span className="text-white font-medium">Refunds credited in 5-7 business days</span>
                </div>
              </div>
            )}

            {activePolicyId === 'safety-guidelines' && (
              <div className="bg-linear-to-br from-[#1f566e] to-[#0f3040] text-white rounded-2xl p-6 border border-[#3482a4]/40 shadow-md">
                <div className="flex items-center gap-2.5 mb-2">
                  <HeartPulse className="w-5 h-5 text-rose-400" />
                  <h3 className="text-base font-bold text-white font-display">
                    High-Altitude Medical Readiness & Solo Female Standards
                  </h3>
                </div>
                <p className="text-xs text-slate-200 mb-5">
                  Standard precautions enforced across all Parindaa Himalayan and Northeast circuits:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-[#cbb72c] block mb-1">
                      Protocol 01 · Vitals Check
                    </span>
                    <h4 className="text-xs font-bold text-white mb-1">Twice Daily SpO2 Logs</h4>
                    <p className="text-[11px] text-slate-200 leading-relaxed">
                      Every Captain carries Pulse Oximeters to log blood oxygen levels and pulse morning & evening.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-[#cbb72c] block mb-1">
                      Protocol 02 · Oxygen Supply
                    </span>
                    <h4 className="text-xs font-bold text-white mb-1">Medical Oxygen On Board</h4>
                    <p className="text-[11px] text-slate-200 leading-relaxed">
                      Portable oxygen canisters equipped in all high-altitude expedition tempo travelers.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                    <span className="text-[10px] uppercase font-bold text-[#cbb72c] block mb-1">
                      Protocol 03 · Female Safety
                    </span>
                    <h4 className="text-xs font-bold text-white mb-1">Solo Women Guarantee</h4>
                    <p className="text-[11px] text-slate-200 leading-relaxed">
                      Strict female twin-sharing pairing, verified stays, and 24/7 Captain access with zero-tolerance rules.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Document Sections List */}
            <div className="space-y-8">
              {filteredSections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs scroll-mt-28"
                >
                  {/* Section Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-sm font-bold text-[#3482a4] bg-[#3482a4]/10 px-2 py-0.5 rounded-md">
                      {sec.number}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                      {sec.title}
                    </h2>
                  </div>

                  {/* Section Paragraphs */}
                  <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                    {sec.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Subsections if present */}
                  {sec.subsections && sec.subsections.length > 0 && (
                    <div className="mt-5 space-y-4 pt-4 border-t border-slate-100">
                      {sec.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                            {sub.subtitle}
                          </h4>
                          <ul className="space-y-1.5 pl-1">
                            {sub.points.map((pt, ptIdx) => (
                              <li key={ptIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3482a4] mt-2 shrink-0" />
                                <span className="leading-relaxed">{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Callout box if present */}
                  {sec.callout && (
                    <div className={`mt-5 p-4 rounded-xl border flex items-start gap-3 ${
                      sec.callout.type === 'warning'
                        ? 'bg-amber-50/70 border-amber-200 text-amber-900'
                        : sec.callout.type === 'tip'
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                        : 'bg-blue-50/70 border-blue-200 text-blue-900'
                    }`}>
                      {sec.callout.type === 'warning' && (
                        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      )}
                      {sec.callout.type === 'tip' && (
                        <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {sec.callout.type === 'info' && (
                        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <h4 className="text-xs font-bold mb-0.5">{sec.callout.title}</h4>
                        <p className="text-xs leading-relaxed">{sec.callout.message}</p>
                      </div>
                    </div>
                  )}

                </section>
              ))}

              {filteredSections.length === 0 && (
                <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                  <Search className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    No matching sections found
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    No content matches your search term "{searchQuery}". Try different keywords like "refund", "AMS", "permits", or clear search.
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                  >
                    Clear Search Filter
                  </button>
                </div>
              )}
            </div>

            {/* Document Specific FAQs */}
            <section id="faqs-policy" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs scroll-mt-28">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold text-[#3482a4] uppercase tracking-wider">
                  CLARIFICATIONS
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 mb-4">
                Frequently Asked Questions ({currentPolicy.title})
              </h3>

              <div className="space-y-3">
                {currentPolicy.faqs.map((faq, fIdx) => {
                  const isOpen = openFaqIdx === fIdx;
                  return (
                    <div
                      key={fIdx}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-slate-50/50"
                    >
                      <button
                        onClick={() => setOpenFaqIdx(isOpen ? null : fIdx)}
                        className="w-full text-left p-4 flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-900 hover:text-[#3482a4] transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#3482a4]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Statutory Compliance & Grievance Contact Card */}
            <div className="bg-slate-950 text-slate-300 rounded-2xl p-6 sm:p-8 border border-slate-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Parindaa Travels · Grievance & Legal Desk
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    MSME Govt. of India Udyam: <strong className="text-slate-200 font-mono">UDYAM-RJ-30-0141140</strong>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=919326632288&text=Hi%20Parindaa%20Team!%20I%20have%20a%20legal%20or%20policy%20question."
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-xs"
                  >
                    WhatsApp Officer
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-xs">
                <div>
                  <h4 className="font-bold text-white mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#3482a4]" />
                    <span>Written Inquiries</span>
                  </h4>
                  <a
                    href="mailto:contact@parindaaindia.com"
                    className="text-slate-400 hover:text-white transition-colors block text-[11px]"
                  >
                    contact@parindaaindia.com
                  </a>
                  <span className="text-[10px] text-slate-500 block mt-0.5">
                    Response within 24 hours
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#cbb72c]" />
                    <span>Helpline & Operations</span>
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    +91 93266 32288
                  </p>
                  <p className="text-[11px] text-slate-400">
                    +91 98284 97392
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>Headquarters</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    A.K. Marg, Bandra East, Mumbai, Maharashtra 400051
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Branches: Connaught Place, New Delhi & C-Scheme, Jaipur
                  </p>
                </div>
              </div>

            </div>

          </main>

        </div>
      </div>

    </div>
  );
};
