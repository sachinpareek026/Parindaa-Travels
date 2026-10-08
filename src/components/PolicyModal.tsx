import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, RefreshCw, AlertTriangle, CheckCircle, Phone, Mail, MapPin, ChevronRight, Download, ExternalLink } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_PHONE_DISPLAY, SECONDARY_SUPPORT_PHONE, UDYAM_REGISTRATION_NUMBER, MUMBAI_OFFICE_ADDRESS } from '../data/travelData';

export type PolicyType = 'privacy' | 'terms' | 'cancellation' | 'safety';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPolicy?: PolicyType;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  initialPolicy = 'privacy',
}) => {
  const [activeTab, setActiveTab] = React.useState<PolicyType>(initialPolicy);

  useEffect(() => {
    if (initialPolicy) {
      setActiveTab(initialPolicy);
    }
  }, [initialPolicy]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tabs: { id: PolicyType; label: string; icon: React.ReactNode }[] = [
    { id: 'privacy', label: 'Privacy Policy', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'cancellation', label: 'Cancellation & Refunds', icon: <RefreshCw className="w-4 h-4" /> },
    { id: 'safety', label: 'Safety Guidelines', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'terms', label: 'Terms of Service', icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-slate-200/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-900 border-b border-white/10 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
              <img
                src="/logo.png"
                alt="Parindaa Travels"
                className="w-7 h-7 object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/logo.jpg') target.src = '/logo.jpg';
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base sm:text-lg font-display tracking-tight">
                  Parindaa Travels · Official Policies
                </h3>
                <span className="hidden sm:inline-block text-[10px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded-md border border-white/15">
                  {UDYAM_REGISTRATION_NUMBER}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Transparent traveler protection, fair bookings, and mountain safety protocols.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Strip */}
        <div className="flex items-center gap-1.5 p-2 bg-slate-100 border-b border-slate-200 overflow-x-auto scrollbar-none shrink-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#3482a4] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Policy Content Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6 flex-1 text-slate-700 text-xs sm:text-sm leading-relaxed">
          
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-[11px] font-bold text-[#3482a4] uppercase tracking-wider bg-[#3482a4]/10 px-2.5 py-1 rounded-md">
                  Data Protection & Privacy
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 font-display">
                  Privacy Policy
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Last updated: October 2026 · Governed under Information Technology Act, 2000 (India).
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  1. Information We Collect
                </h4>
                <p>
                  At <strong>Parindaa Travels</strong> (MSME Reg: {UDYAM_REGISTRATION_NUMBER}), we only collect personal information strictly essential for confirming and executing your travel booking:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Contact Details:</strong> Full legal name, WhatsApp phone number, email address, and home city.</li>
                  <li><strong>Traveler Documents:</strong> Government photo ID proofs (Aadhaar Card, Passport, Voter ID) required by state authorities for Inner Line Permits (ILP) in Ladakh, Meghalaya, and Andaman.</li>
                  <li><strong>Emergency Details:</strong> Next of kin contact number and known medical conditions/allergies relevant for high-altitude or water expeditions.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  2. How We Use Your Data
                </h4>
                <p>
                  Your information is utilized solely to:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li>Verify bookings and generate travel vouchers.</li>
                  <li>Coordinate with Parindaa trip captains, hotel stays, tempo traveler chauffeurs, and catamaran ferry operators.</li>
                  <li>Apply for environmental, cave, and military inner line passes on your behalf.</li>
                  <li>Send urgent itinerary updates, weather advisories, or boarding point alerts via WhatsApp.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  3. Zero Third-Party Selling & Data Security
                </h4>
                <p>
                  We have a strict <strong>zero-spam, zero-reselling commitment</strong>. We never rent, monetize, or disclose your personal data to external telemarketers, credit agencies, or advertising brokers. All payments are verified via direct UPI or authorized banking partners; we never store your banking passwords or debit/credit card CVVs on our servers.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  4. Photography & Group Moments
                </h4>
                <p>
                  During group tours, captains may capture group photographs and videos to document the journey for our community feed (@parindaa.india). If you prefer not to appear in public group posts, simply notify your Trip Captain before departure, and your preference will be 100% honored.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <p className="font-bold text-slate-800">Privacy Grievance Officer:</p>
                <p>Parindaa Travels · {MUMBAI_OFFICE_ADDRESS}</p>
                <p>Email: contact@parindaaindia.com · Direct WhatsApp: +91 93266 32288</p>
              </div>
            </div>
          )}

          {/* TAB 2: CANCELLATION & REFUNDS */}
          {activeTab === 'cancellation' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Transparent & Fair Policies
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 font-display">
                  Cancellation & Refund Policy
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  We understand travel plans can shift. Our policies provide maximum flexibility and lifetime credit transfers.
                </p>
              </div>

              {/* Refund Timeline Table */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  Standard Trip Cancellation Slabs
                </h4>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-3 sm:p-3.5">Cancellation Notice Period</th>
                        <th className="p-3 sm:p-3.5">Bank Refund</th>
                        <th className="p-3 sm:p-3.5">Parindaa Credit Voucher</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600">
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3 sm:p-3.5 font-medium text-slate-900">30 or more days before departure</td>
                        <td className="p-3 sm:p-3.5 font-bold text-emerald-600">90% of Total Package</td>
                        <td className="p-3 sm:p-3.5 font-bold text-[#3482a4]">100% Credit (1 Year Validity)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3 sm:p-3.5 font-medium text-slate-900">15 to 29 days before departure</td>
                        <td className="p-3 sm:p-3.5 font-bold text-emerald-600">70% of Total Package</td>
                        <td className="p-3 sm:p-3.5 font-bold text-[#3482a4]">85% Credit Voucher</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3 sm:p-3.5 font-medium text-slate-900">7 to 14 days before departure</td>
                        <td className="p-3 sm:p-3.5 font-bold text-amber-600">50% of Total Package</td>
                        <td className="p-3 sm:p-3.5 font-bold text-[#3482a4]">65% Credit Voucher</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <td className="p-3 sm:p-3.5 font-medium text-slate-900">Less than 7 days / No-Show</td>
                        <td className="p-3 sm:p-3.5 font-bold text-rose-600">Non-refundable</td>
                        <td className="p-3 sm:p-3.5 text-slate-500">Case-by-case emergency review</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Seat Lock Token (₹3,000 / $40) Transferability
                </h4>
                <p>
                  Your initial booking token secures your seat across limited vehicle and accommodation slots. If you need to postpone, your token can be transferred to any future departure date or to a family/friend if notified at least 15 days prior to departure.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Weather & Force Majeure Guarantee
                </h4>
                <p>
                  High mountain passes (Kashmir, Ladakh, Rohtang) and coastal islands (Andaman) are subject to weather, snowfall, landslides, or state directives. In the rare event a route is officially closed:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li>Our Trip Captain immediately executes our curated alternative scenic circuit.</li>
                  <li>If the entire departure must be called off before commencement, travelers receive a <strong>100% full credit voucher</strong> valid for 18 months across any domestic trip.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                <p className="font-bold">Refund Processing Window:</p>
                <p>Approved refunds are processed within 5 to 7 business days directly to the original bank account or UPI ID.</p>
              </div>
            </div>
          )}

          {/* TAB 3: SAFETY GUIDELINES */}
          {activeTab === 'safety' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider bg-amber-100 px-2.5 py-1 rounded-md border border-amber-300">
                  Zero Compromise on Safety
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 font-display">
                  Official Safety Guidelines
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  How Parindaa Travels ensures safety across Himalayan peaks, caves, and turquoise islands.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2 text-amber-900">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  1. High-Altitude Expeditions (Ladakh, Kashmir & Gulmarg)
                </h4>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Compulsory Acclimatization:</strong> Day 1 in Leh (11,500 ft) or Gulmarg has zero strenuous exertion. Light walking, hydration, and garlic soup are provided.</li>
                  <li><strong>Medical Gear:</strong> Every Himalayan vehicle carries portable medical oxygen cylinders, digital pulse oximeters, and first-aid kits.</li>
                  <li><strong>AMS Monitoring:</strong> Twice-daily oxygen & pulse checks by certified trip leaders. Immediate descent protocol in place if symptoms occur.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2 text-[#3482a4]">
                  <ShieldCheck className="w-4 h-4 text-[#3482a4]" />
                  2. Solo & Female Traveler Safety Protocol
                </h4>
                <p>
                  Over 40% of our travelers are solo women exploring India. We strictly enforce:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li>Verified hotel properties and resorts with 24/7 security and family-friendly reputations.</li>
                  <li>Female-only room-sharing allocation unless requested otherwise by companions.</li>
                  <li>Zero tolerance for harassment, rowdiness, or inappropriate behavior. Any traveler violating our conduct code is immediately discharged from the group.</li>
                  <li>Dedicated Parindaa Trip Captain accessible 24/7 during the entire journey.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2 text-emerald-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  3. Water, Cave & Adventure Sports Safety
                </h4>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Mandatory Life Jackets:</strong> Strictly enforced on Dal Lake shikaras, Dawki Umngot crystal river boats, and Alleppey houseboats.</li>
                  <li><strong>Certified Dive Marshals:</strong> In Andaman (Havelock & Elephant Beach), all scuba and sea walking sessions are supervised by PADI/SSI certified dive masters.</li>
                  <li><strong>Cave & Trekking Gear:</strong> Headlamps and non-slip trekking guides are deployed for Meghalaya limestone cave explorations.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-slate-800" />
                  4. Vehicle & Chauffeur Standards
                </h4>
                <p>
                  All tempo travelers, SUVs, and coaches are driven by hill-certified commercial drivers with clean safety track records. Night travel on hazardous mountain ghats is strictly avoided.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  Legal Agreement
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2 font-display">
                  Terms of Service
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Agreement between traveler and Parindaa Travels ({UDYAM_REGISTRATION_NUMBER}).
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  1. Acceptance of Terms
                </h4>
                <p>
                  By paying the booking deposit or submitting a booking inquiry with Parindaa Travels, you confirm acceptance of these terms and conditions.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  2. Booking & Payment Schedule
                </h4>
                <p>
                  A non-refundable seat lock deposit (₹3,000 / $40) is required to secure your slot. The remaining balance must be cleared at least 7 days before trip departure or during reporting day as advised by your Captain.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  3. Traveler Responsibility & Health
                </h4>
                <p>
                  Travelers are responsible for carrying valid government ID proofs and ensuring personal medical fitness for the chosen trip category. Any pre-existing medical conditions must be voluntarily disclosed to the trip coordinator prior to departure.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  4. Baggage & Valuables
                </h4>
                <p>
                  While transport vehicles are locked during sightseeing, travelers are responsible for personal belongings, cameras, and cash. Personal travel insurance is recommended.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  5. Jurisdiction
                </h4>
                <p>
                  Any disputes arising out of the booking contract are subject to the exclusive jurisdiction of the competent courts in Mumbai or Jaipur, India.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer Support Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Have policy questions? Chat directly with our travel desk.</span>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href={`https://api.whatsapp.com/send?phone=${OFFICIAL_WHATSAPP_NUMBER}&text=${encodeURIComponent(
                'Hello Parindaa Travels! I have a question regarding your booking and cancellation policies.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Official ({OFFICIAL_PHONE_DISPLAY})</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
