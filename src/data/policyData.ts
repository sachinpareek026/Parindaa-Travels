export type PolicyType = 'privacy-policy' | 'cancellation-policy' | 'safety-guidelines' | 'terms-of-service';

export interface PolicySection {
  id: string;
  number: string;
  title: string;
  content: string[];
  subsections?: {
    subtitle: string;
    points: string[];
  }[];
  callout?: {
    type: 'info' | 'warning' | 'tip';
    title: string;
    message: string;
  };
}

export interface PolicyData {
  id: PolicyType;
  title: string;
  navTitle: string;
  tagline: string;
  lastUpdated: string;
  effectiveDate: string;
  readingTime: string;
  iconName: 'Shield' | 'RotateCcw' | 'HeartPulse' | 'FileText';
  summaryHighlights: {
    label: string;
    description: string;
  }[];
  sections: PolicySection[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export const POLICIES_DATA: Record<PolicyType, PolicyData> = {
  'privacy-policy': {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    navTitle: 'Privacy Policy',
    tagline: 'How Parindaa Travels collects, protects, and handles your personal details, government permits, and booking data.',
    lastUpdated: 'October 2026',
    effectiveDate: 'January 1, 2024 (Revised Oct 2026)',
    readingTime: '6 min read',
    iconName: 'Shield',
    summaryHighlights: [
      {
        label: 'Zero Data Selling',
        description: 'We never sell, rent, or trade your personal data or phone number to advertisers or marketing aggregators.'
      },
      {
        label: 'Strict Permit Usage',
        description: 'Government photo IDs and passports are collected strictly for Forest, Defense, and District Administration permits.'
      },
      {
        label: 'Post-Trip Shredding',
        description: 'Sensitive identity proofs uploaded for permits are automatically expunged from local trip caches within 30 days of trip completion.'
      },
      {
        label: 'Media Consent Control',
        description: 'You can opt out of being featured on our official @parindaa.india social media handles at any time.'
      }
    ],
    sections: [
      {
        id: 'overview',
        number: '01',
        title: 'Commitment & Regulatory Scope',
        content: [
          'Parindaa Travels (operating under Parindaa India, registered under Ministry of MSME, Govt. of India: UDYAM-RJ-30-0141140, with offices in Mumbai, New Delhi, and Jaipur) values the sacred trust placed in us by travelers.',
          'This Privacy Policy articulates our practices regarding the collection, processing, encryption, storage, and deletion of personal data when you interact with parindaatravels.com, engage with our Trip Captains over WhatsApp, or participate in our curated Himalayan expeditions, spiritual circuits, or experiential journeys.',
          'We adhere strictly to the Digital Personal Data Protection Act (DPDPA), Information Technology Act 2000 (and associated Reasonable Security Practices and Procedures rules), and international best practices for tourist safety and data integrity.'
        ]
      },
      {
        id: 'data-collection',
        number: '02',
        title: 'Information We Collect & Why',
        content: [
          'Because adventure and remote travel involve high-altitude passes, environmental checkposts, and remote medical preparedness, we collect specific categories of information necessary to guarantee your legal transit and physical wellbeing:'
        ],
        subsections: [
          {
            subtitle: '1. Traveler Identification & Contact',
            points: [
              'Full legal name (matching government photo identity proofs).',
              'Active WhatsApp phone number and secondary calling contact for emergency trip broadcasts and itinerary updates.',
              'Email address for formal booking receipts, voucher distribution, and GST tax invoices.',
              'Date of birth and gender (for hotel room allocations, shared accommodation pairing, and transport passenger manifests).'
            ]
          },
          {
            subtitle: '2. High-Altitude & Wilderness Permits',
            points: [
              'Government ID copies (Aadhaar Card, Voter ID, Driver’s License, or Passport with valid Indian Visa for international travelers).',
              'Required for Inner Line Permits (ILP) in Leh Ladakh (Umling La, Pangong Tso, Nubra Valley), Protected Area Permits (PAP) in Sikkim and Arunachal Pradesh, and Meghalaya Eco-Tourism conservation clearances.',
              'Indian Army & BRO checkpoint transit manifests.'
            ]
          },
          {
            subtitle: '3. Medical & Physical Fitness Declarations',
            points: [
              'History of Acute Mountain Sickness (AMS), asthma, cardiovascular conditions, epilepsy, or chronic allergies.',
              'Emergency contact details (name, relationship, and reachable 24/7 mobile number of a family member or guardian).'
            ]
          },
          {
            subtitle: '4. Financial & Payment Records',
            points: [
              'UPI reference IDs, bank transfer UTR numbers, or payment gateway transaction tokens.',
              'Note: Parindaa Travels NEVER stores credit card CVVs, net-banking passwords, or full debit card PINs on our servers. All transactions are securely tokenized via PCI-DSS compliant Indian payment gateways.'
            ]
          }
        ],
        callout: {
          type: 'info',
          title: 'Special Note on Remote Checkposts',
          message: 'Certain border checkpoints (e.g. Nyoma, Hanle, Chushul in Ladakh, and Tawang in Northeast) mandate physical photocopies of IDs for defense logging. These are handled solely by certified Parindaa Trip Captains.'
        }
      },
      {
        id: 'data-usage',
        number: '03',
        title: 'How We Utilize Your Information',
        content: [
          'We use the gathered information strictly for legitimate experiential and operational needs, including:',
          '• Securing official forest, district administration, and eco-tourism entry permits.',
          '• Reserving verified boutique homestays, luxury alpine camps, and licensed private mountain transport (Tempo Travelers / SUVs).',
          '• Ensuring appropriate solo female traveler twin-sharing pairings and dietary preference accommodations (Vegetarian, Jain, Non-Vegetarian).',
          '• Coordinating emergency rescue, medical first aid, oxygen cylinder deployment, and evacuation with local district hospitals or SDRF in case of extreme adversity.',
          '• Dispatching pre-trip preparation handbooks, packing guides, and WhatsApp briefing group invites 48 hours prior to departure.'
        ]
      },
      {
        id: 'third-party-sharing',
        number: '04',
        title: 'Third-Party Disclosure & Lawful Sharing',
        content: [
          'Parindaa Travels maintains a zero-commercial-sale stance on traveler data. We disclose portions of your information solely to the following trusted entities on a strict need-to-know basis:'
        ],
        subsections: [
          {
            subtitle: 'Authorized Operational Partners',
            points: [
              'Local mountain transport unions and driver captains (for police checkpost manifests and inter-state permit clearance).',
              'Verified homestay hosts and alpine campsite operators (strictly guest name, gender, and government ID verification as required by state tourism boards).',
              'Certified local Khasi, Ladakhi, or Kashmiri high-altitude mountain guides and safety coordinators.'
            ]
          },
          {
            subtitle: 'Statutory Authorities & Law Enforcement',
            points: [
              'District Forest Officers (DFO), Wildlife Protection Sanctuaries, Indian Army border security posts, and state police when mandated by statutory law or disaster management directives.'
            ]
          }
        ]
      },
      {
        id: 'media-photography',
        number: '05',
        title: 'Travel Photography & Media Release Policy',
        content: [
          'Part of the Parindaa magic lies in our cinematic storytelling and community documentation across our Instagram (@parindaa.india) and YouTube platforms.',
          'During group trips, our Trip Captains and cinematic storytellers capture candids, drone vistas, and reel snippets to share the spirit of the journey.',
          'Opt-Out Guarantee: If you prefer not to appear in public social media footage or promotional reels, you can notify your Trip Captain in writing or via WhatsApp prior to the trip departure. We will respect your visual privacy and blur or exclude you from published promotional edits.'
        ]
      },
      {
        id: 'security-retention',
        number: '06',
        title: 'Data Security & Retention Standards',
        content: [
          'All electronic customer records are transmitted via SSL/TLS 256-bit encrypted channels and stored in secure cloud environments with role-based access control.',
          'Government photo ID copies collected for permit generation are archived for statutory accounting and forest department reconciliation, and securely purged from operational mobile devices after expedition conclusion.',
          'We review our access logs and security protocols bi-annually to protect against unauthorized access, alteration, or disclosure.'
        ]
      },
      {
        id: 'grievance',
        number: '07',
        title: 'Grievance Officer & Traveler Rights',
        content: [
          'You hold the right to access, review, modify, or request deletion of your personal contact records from our booking database at any time, subject to statutory tax and financial audit retention laws.',
          'For any privacy inquiries, data deletion requests, or grievances, please reach out to our designated Data Protection & Grievance Officer:'
        ],
        subsections: [
          {
            subtitle: 'Official Grievance Desk',
            points: [
              'Nodal Officer: Compliance & Traveler Privacy Cell, Parindaa India',
              'Email: contact@parindaaindia.com (Subject: [Data Privacy Inquiry])',
              'WhatsApp / Call Support: +91 93266 32288 / +91 98284 97392',
              'Registered Address: A.K. Marg, Bandra East, Mumbai, Maharashtra 400051 (Branches: Connaught Place, New Delhi & C-Scheme, Jaipur)'
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        q: 'Do you sell my phone number to telemarketers or hotel chains?',
        a: 'Never. Parindaa Travels maintains a strict zero-spam, zero-reselling policy. Your contact info is used purely for your trip coordination, booking confirmations, and emergency updates.'
      },
      {
        q: 'Why do you need my Aadhaar Card or Passport before a Himalayan trip?',
        a: 'Border regions (such as Pangong Lake, Umling La, Nubra Valley in Ladakh, and remote areas in Meghalaya or Sikkim) require official Inner Line Permits and Forest Department conservation passes issued by local district magistrates and military checkposts.'
      },
      {
        q: 'Can I request deletion of my ID proofs after the trip ends?',
        a: 'Yes. Once the trip concludes and permit reconciliation is finalized, you can drop an email to contact@parindaaindia.com to request permanent purging of your identity documents.'
      }
    ]
  },

  'cancellation-policy': {
    id: 'cancellation-policy',
    title: 'Cancellation & Refund Policy',
    navTitle: 'Cancellation Policy',
    tagline: 'Clear, transparent cancellation slabs, credit voucher flexibility, and fair weather contingency rules.',
    lastUpdated: 'October 2026',
    effectiveDate: 'January 1, 2024 (Revised Oct 2026)',
    readingTime: '5 min read',
    iconName: 'RotateCcw',
    summaryHighlights: [
      {
        label: 'Flexible Credit Vouchers',
        description: 'Opt for a 1-year Parindaa Travel Credit Voucher instead of cash refund for higher value retention on future circuits.'
      },
      {
        label: 'Free Replacement Option',
        description: 'Transfer your confirmed slot to a friend or family member for free up to 5 days before trip departure.'
      },
      {
        label: '100% Refund If Parindaa Cancels',
        description: 'If we cancel a departure due to safety advisories or operational constraints, receive 100% full refund or 105% travel credit.'
      },
      {
        label: 'Fair Mountain Contingency',
        description: 'For landslides, roadblocks, or snow blockages, captains reroute safely with actual-cost sharing and unused segment credits.'
      }
    ],
    sections: [
      {
        id: 'standard-slabs',
        number: '01',
        title: 'Standard Cancellation Slabs & Refund Table',
        content: [
          'Because our curated group expeditions involve pre-booking boutique hill stays, permits, tempo travelers, and high-altitude gear long in advance, cancellations are subject to the following standard timeline slabs:',
          'The cancellation fee is calculated against the total trip booking value, based on the exact timestamp when written cancellation notice is received via email (contact@parindaaindia.com) or official WhatsApp (+91 93266 32288):'
        ],
        subsections: [
          {
            subtitle: 'Timeline & Refund Matrix',
            points: [
              '30 or more days before departure: 90% Refund in bank account OR 100% Parindaa Credit Voucher (valid for 365 days across any circuit).',
              '15 to 29 days before departure: 70% Refund in bank account OR 85% Parindaa Credit Voucher.',
              '7 to 14 days before departure: 40% Refund in bank account OR 55% Parindaa Credit Voucher.',
              'Less than 7 days before departure / No-Show: 0% Refund (No cash or credit voucher, as all permits, transport slots, and mountain rooms are locked and paid).'
            ]
          }
        ],
        callout: {
          type: 'tip',
          title: 'Smart Tip: Choose Parindaa Credit Vouchers',
          message: 'Our credit vouchers are fully transferable to friends or family and can be redeemed for any upcoming group trip (Meghalaya, Kashmir, Ladakh, Spiti, Kerala, etc.) within 12 full months.'
        }
      },
      {
        id: 'booking-advance',
        number: '02',
        title: 'Booking Advance / Token Amount Policy',
        content: [
          'To lock a seat on our limited-capacity group trips (strictly 12 to 16 travelers per batch for intimacy and safety), a nominal booking token (₹2,500 – ₹5,000 depending on the itinerary) is collected.',
          'The remaining balance must be cleared at least 7 days before trip departure (or at the base city briefing point if approved by the booking coordinator).',
          'If a traveler defaults on paying the balance by the agreed deadline without prior notice, Parindaa reserves the right to release the seat to waitlisted travelers, and the booking token remains subject to standard cancellation slabs.'
        ]
      },
      {
        id: 'slot-transfer',
        number: '03',
        title: 'Transferring Your Seat to a Friend / Replacement',
        content: [
          'Life happens! If you cannot make it to the trip due to unforeseen work, college, or medical circumstances, you can transfer your seat to a replacement traveler of your choice:',
          '• Slot transfers are 100% free of Parindaa administrative penalties if notified at least 5 days prior to departure.',
          '• The replacement traveler must submit their full identification, emergency contacts, and medical declaration to receive the permits.',
          '• If government permits (e.g., Leh Ladakh ILP or Sikkim PAP) have already been issued in your name, the actual re-issuance fee charged by the forest/district authorities (typically ₹300 – ₹600) will be payable.'
        ]
      },
      {
        id: 'force-majeure',
        number: '04',
        title: 'Weather Emergencies, Landslides & Force Majeure',
        content: [
          'Himalayan mountains, monsoon waterfalls, and coastal terrains are magnificent yet unpredictable. In cases of natural occurrences beyond human control—such as cloudbursts, severe landslides, sudden snow blizzards closing passes (e.g. Zojila, Khardung La, Rohtang), bridge washouts, or unexpected government curfews:',
          '1. Captain’s Priority is Life Safety: The Parindaa Trip Captain has complete executive authority to modify the route, delay movement, or substitute destinations to keep the group 100% out of harm’s way.',
          '2. Route Alteration Costs: Any additional expenses resulting from unexpected route changes, forced extra night stays, or emergency vehicle detours will be split equally among all group participants on actuals.',
          '3. Unused Services: While Parindaa negotiates hard with mountain vendors, pre-booked hotels or camps that could not be reached due to roadblocks cannot be refunded if the hotel was open and operational. Any refund obtained from local vendors will be credited back to travelers.',
          '4. Flight Delays/Cancellations: Parindaa Travels is not responsible for compensation resulting from airline cancellations or missed trains to the base city (Guwahati, Srinagar, Leh, Delhi). Travelers are strongly encouraged to arrive a few hours early.'
        ]
      },
      {
        id: 'parindaa-cancellation',
        number: '05',
        title: 'Cancellations Initiated by Parindaa Travels',
        content: [
          'In the extremely unlikely event that Parindaa Travels cancels a scheduled departure (e.g. extreme security advisory, severe meteorological red alert, or failure to meet the minimum viable group threshold of 6 travelers):',
          '• Option A: 100% Immediate Full Cash Refund credited back to your original bank account/UPI within 5–7 working days.',
          '• Option B: 105% Travel Voucher Credit applied to any subsequent trip departure of your choice.',
          'Note: Parindaa Travels is not liable for personal expenses incurred independently by the traveler, such as personal flight or train bookings, leave loss, or personal gear purchases.'
        ]
      },
      {
        id: 'refund-timeline',
        number: '06',
        title: 'Refund Processing & Banking Timelines',
        content: [
          '• All approved refunds are processed via electronic NEFT/RTGS, UPI, or original payment gateway within 5 to 7 business banking days.',
          '• Once initiated from our finance desk in Mumbai/Jaipur, our accounts team shares an official banking transaction UTR screenshot directly over WhatsApp and email for full transparency.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Can I postpone my trip instead of cancelling?',
        a: 'Yes! If you inform us at least 15 days before departure, you can convert your booking amount into a 1-year valid Parindaa Credit Voucher with a minimal rescheduling adjustment, allowing you to choose any future date.'
      },
      {
        q: 'What if heavy snowfall closes the Khardung La pass during our Ladakh trip?',
        a: 'Our experienced local Ladakhi captains maintain live contact with the BRO and traffic police. If a pass closes temporarily, we adjust the itinerary to explore magnificent alternate valleys (such as Sham Valley, Alchi, or Hemis) until conditions clear.'
      },
      {
        q: 'How do I officially initiate a cancellation request?',
        a: 'Send a formal message to our verified WhatsApp support (+91 93266 32288) or email contact@parindaaindia.com with your Booking ID, Traveler Name, and reason. The timestamp of the message determines your refund slab.'
      }
    ]
  },

  'safety-guidelines': {
    id: 'safety-guidelines',
    title: 'Safety Guidelines & Mountain Protocols',
    navTitle: 'Safety Guidelines',
    tagline: 'Comprehensive high-altitude protocols, solo female traveler security, gear standards, and emergency evacuation readiness.',
    lastUpdated: 'October 2026',
    effectiveDate: 'January 1, 2024 (Revised Oct 2026)',
    readingTime: '7 min read',
    iconName: 'HeartPulse',
    summaryHighlights: [
      {
        label: 'Pulse Oximeter & SpO2 Logs',
        description: 'Twice-daily mandatory vitals monitoring (oxygen saturation & pulse rate) conducted by every Parindaa Trip Captain.'
      },
      {
        label: 'Solo Female Traveler Protocol',
        description: 'Verified female twin-sharing rooms, vetted local crew, 24/7 captain supervision, and zero tolerance for harassment.'
      },
      {
        label: 'Medical Oxygen on Board',
        description: 'Portable medical oxygen cylinders and wilderness first-aid kits present in all high-altitude expedition tempo travelers.'
      },
      {
        label: 'Zero Tolerance Policy',
        description: 'Strict ban on narcotics and alcohol during high mountain crossings, trekking stretches, or active adventure activities.'
      }
    ],
    sections: [
      {
        id: 'high-altitude-protocol',
        number: '01',
        title: 'High-Altitude Safety & Acclimatization (AMS)',
        content: [
          'When traveling above 8,000 feet (2,500 meters) in regions like Leh Ladakh, Spiti Valley, Kashmir, or high Himalayan passes, the atmospheric pressure and oxygen partial pressure drop significantly. Acute Mountain Sickness (AMS) can affect anyone regardless of age or baseline gym fitness.',
          'To ensure 100% group safety, Parindaa enforces non-negotiable medical protocols:'
        ],
        subsections: [
          {
            subtitle: '1. Mandatory 48-Hour Acclimatization Window',
            points: [
              'On landing at Leh Airport (11,500 ft / 3,500 m), Day 1 is reserved exclusively for complete bed rest, hydration, and light local strolls.',
              'No high-altitude pass crossings (Khardung La / Chang La) are permitted on the first 48 hours under any circumstances.'
            ]
          },
          {
            subtitle: '2. Daily Vitals Monitoring & SpO2 Tracking',
            points: [
              'Every Parindaa Trip Captain carries certified medical Pulse Oximeters.',
              'Vitals (Blood Oxygen Saturation % and Heart Rate) are logged for every traveler twice daily: once in the morning after breakfast, and once before dinner.',
              'If an individual’s SpO2 level dips below 75% or resting pulse spikes, immediate supplemental oxygen is administered, and the captain assesses whether descent is required.'
            ]
          },
          {
            subtitle: '3. Hydration & Medication Guidance',
            points: [
              'Consume at least 3.5 to 4 liters of fluid daily (water, warm garlic soup, ginger-lemon tea, ORS electrolytes).',
              'Acetazolamide (Diamox): If recommended by your personal physician, start Diamox (125mg or 250mg) 24 hours prior to reaching high altitude. Inform the Captain if taking any prescribed medication.'
            ]
          }
        ],
        callout: {
          type: 'warning',
          title: 'Golden Rule of the Mountains',
          message: 'Never conceal altitude sickness symptoms (headache, nausea, dizziness, loss of appetite). Inform your Trip Captain immediately. Descending 1,000 feet resolves 90% of mild symptoms within hours.'
        }
      },
      {
        id: 'gear-checklist',
        number: '02',
        title: 'Mandatory Packing & Gear Standards',
        content: [
          'Inadequate footwear or improper clothing can turn a dreamy trek into a hazard. Every traveler must adhere to our tested layering and gear checklist:'
        ],
        subsections: [
          {
            subtitle: 'Footwear & Lower Body',
            points: [
              'High-ankle trekking shoes with deep lugged rubber soles (Vibram or equivalent) offering water resistance. Shoes MUST be broken-in at least 2 weeks prior to departure.',
              '3-4 pairs of moisture-wicking synthetic or merino wool trekking socks.',
              'Quick-dry trekking trousers (avoid heavy cotton jeans which retain moisture and cause chafing in rain or snow).'
            ]
          },
          {
            subtitle: 'The 3-Layer Insulation Principle',
            points: [
              'Base Layer: Thermal inner tops and bottoms (synthetic or merino wool).',
              'Mid Layer: Warm fleece jacket or lightweight synthetic insulated vest.',
              'Outer Shell: Windproof and waterproof down jacket rated for sub-zero temperatures (-5°C to -10°C) with attached hood.'
            ]
          },
          {
            subtitle: 'Essential Accessories & Eye Care',
            points: [
              'Category 3 or 4 UV400 Polarized Sunglasses: High-altitude snow reflection can cause severe snow blindness without proper UV filtering.',
              'Fleece beanie, thermal gloves (water-resistant outer), and neck gaiter / buff to protect lungs from icy dry winds.',
              'High-SPF sunscreen (SPF 50+ PA+++) and intensive lip balm to prevent high-altitude sun scald.',
              'Personal insulated thermal water flask (minimum 1 liter) to prevent drinking water from freezing overnight.'
            ]
          }
        ]
      },
      {
        id: 'solo-female-safety',
        number: '03',
        title: 'Solo Female Traveler Protection & Community Culture',
        content: [
          'Over 45% of Parindaa Travelers are independent solo women exploring the Himalayas, Meghalaya, and spiritual trails.',
          'We treat female safety not as an afterthought, but as the cornerstone of our company values:'
        ],
        subsections: [
          {
            subtitle: 'Our Female Traveler Commitments',
            points: [
              'Verified Twin-Sharing Rooming: Female solo travelers are strictly paired with fellow female travelers in verified boutique hotels and campsites (or private single rooms upon request).',
              'Vetted Drivers & Mountain Crew: All tempo traveler drivers, local guides, and campsite managers undergo rigorous identity verification and background vetting.',
              '24/7 Captain Availability: Parindaa Trip Captains stay at the same property as the group and are on-call 24 hours a day for any comfort or safety concern.',
              'Safe Return Guarantee: If a solo traveler arrives late or departs early from a hub city, our team assists with verified prepaid taxi coordination and airport assistance.'
            ]
          }
        ]
      },
      {
        id: 'code-of-conduct',
        number: '04',
        title: 'Zero Tolerance Code of Conduct & Substance Policy',
        content: [
          'Parindaa Trips are vibrant, soulful, and welcoming spaces. To preserve the psychological and physical wellbeing of the group:',
          '1. Zero Tolerance on Harassment: Any form of verbal abuse, non-consensual physical contact, covert photography, sexual harassment, or derogatory comments will result in the immediate off-boarding of the offender from the trip at the nearest police outpost, with no refund and legal reporting.',
          '2. Substance & Alcohol Restrictions: Consuming alcohol or narcotics is strictly prohibited while actively trekking, motorcycling, river rafting, or traversing high passes. Alcohol severely exacerbates dehydration and triggers acute mountain sickness.',
          '3. Respect for Local Traditions: Show reverent respect for Buddhist monasteries (walk clockwise around stupas and prayer wheels), sacred forest groves in Meghalaya, temple dresses, and local Ladakhi/Kashmiri communities. Always seek permission before photographing locals.'
        ]
      },
      {
        id: 'emergency-evacuation',
        number: '05',
        title: 'Emergency Evacuation & First-Aid Infrastructure',
        content: [
          'While our safety record is exemplary, emergency preparedness is rigorously rehearsed for every departure:'
        ],
        subsections: [
          {
            subtitle: 'On-Ground Emergency Setup',
            points: [
              'Portable Medical Oxygen Cylinders: Stored on every high-altitude vehicle for immediate administration in cases of respiratory distress.',
              'Comprehensive Trauma & First-Aid Kit: Stocked with sterile dressings, burn gel, crepe bandages, splints, pain management, anti-diarrheal, and altitude medication.',
              'Military & SDRF Coordination: Direct communication channels with local Indian Army checkposts, ITBP garrisons, BRO camps, and District Disaster Management Units across Leh, Kargil, and Himachal.',
              'Emergency Descent Vehicles: In the rare case a traveler exhibits symptoms of HAPE (High Altitude Pulmonary Edema) or HACE (High Altitude Cerebral Edema), immediate descent to a lower elevation base hospital (e.g. SNM Hospital Leh) is prioritized over the group schedule.'
            ]
          }
        ],
        callout: {
          type: 'info',
          title: 'Mandatory Travel Insurance',
          message: 'All travelers embarking on high-altitude expeditions are strongly advised to secure personal domestic travel insurance covering adventure medical emergencies and emergency evacuation up to 5,500m.'
        }
      }
    ],
    faqs: [
      {
        q: 'I am a solo female traveler. Will I have to share a room with a male traveler?',
        a: 'Never. Parindaa has a strict gender-segregated room allocation policy. Solo women travelers are paired solely with other verified female travelers on a twin-sharing basis, or you can opt for an upgrade to a private room.'
      },
      {
        q: 'What happens if I get severe mountain sickness at Pangong Lake?',
        a: 'Our captain will immediately administer supplemental oxygen from our onboard cylinder, monitor your vitals, and initiate swift transport down to a lower medical outpost (such as Tangtse or Leh) accompanied by a team coordinator.'
      },
      {
        q: 'Do I need prior trekking experience for Parindaa trips?',
        a: 'Most of our curated trips (Meghalaya, Kashmir, Ladakh, Spiti road trips) are accessible for individuals with moderate fitness. Moderate cardio (brisk walking, cycling, or jogging 3-4 times a week) 2 weeks prior is recommended.'
      }
    ]
  },

  'terms-of-service': {
    id: 'terms-of-service',
    title: 'Terms of Service',
    navTitle: 'Terms of Service',
    tagline: 'The official terms, booking contract, liability limits, and code of conduct governing your journey with Parindaa Travels.',
    lastUpdated: 'October 2026',
    effectiveDate: 'January 1, 2024 (Revised Oct 2026)',
    readingTime: '6 min read',
    iconName: 'FileText',
    summaryHighlights: [
      {
        label: 'Legally Binding Agreement',
        description: 'Payment of the booking token signifies full acceptance of these terms between you and Parindaa Travels.'
      },
      {
        label: 'Captain’s Operational Authority',
        description: 'The Trip Captain exercises ultimate authority on road routes, timings, and safety adjustments during the expedition.'
      },
      {
        label: 'Baggage & Valuables Responsibility',
        description: 'Travelers are solely responsible for personal electronics, cameras, drones, jewellery, and personal gear.'
      },
      {
        label: 'Indian Legal Jurisdiction',
        description: 'Governed by Indian law under the exclusive jurisdiction of competent courts in Mumbai or Jaipur.'
      }
    ],
    sections: [
      {
        id: 'agreement-scope',
        number: '01',
        title: 'Contractual Agreement & Binding Scope',
        content: [
          'These Terms of Service ("Terms") constitute a legally binding agreement between the traveler ("You", "Client", or "Participant") and Parindaa Travels (a trade brand of Parindaa India, registered under MSME Udyam Registration No: UDYAM-RJ-30-0141140, headquartered in Mumbai with operational offices in New Delhi and Jaipur).',
          'By paying the booking advance, submitting your identification documents, or boarding any Parindaa transport vehicle, you expressly warrant that you have read, comprehended, and agreed to be bound by every clause in these Terms, along with our Privacy Policy, Cancellation Policy, and Safety Guidelines.'
        ]
      },
      {
        id: 'booking-payments',
        number: '02',
        title: 'Booking Confirmation, Pricing & Payment Schedule',
        content: [
          '1. Booking Confirmation: A booking is deemed confirmed only when the designated booking token has been credited to Parindaa Travels bank account/authorized gateway and an official Booking Confirmation voucher with unique Reference ID has been generated.',
          '2. Payment Deadlines: The complete remaining balance must be settled at least 7 days before the departure date. Failure to remit payment entitles Parindaa Travels to cancel the reservation subject to standard cancellation slabs.',
          '3. Dynamic Pricing & Taxes: All trip prices are quoted in Indian Rupees (INR) and US Dollars (USD). Prices are inclusive of specified government taxes, permits, and park entry fees unless explicitly listed under trip exclusions.',
          '4. What Is Excluded: Unless expressly specified, packages do not cover personal airfare/train tickets to the trip starting hub, excess luggage charges, laundry, personal gear rentals, adventure sports not in the itinerary (e.g. bungee, paramotoring, individual river rafting), monument camera fees, tips to local porters/drivers, or alcohol.'
        ]
      },
      {
        id: 'captains-authority',
        number: '03',
        title: 'Trip Captain Authority & Itinerary Flexibility',
        content: [
          'Expedition and adventure travel inherently require dynamic real-time decision making. The appointed Parindaa Trip Captain represents the executive authority of the company on the road:',
          '• The Captain has absolute discretion to amend timings, rearrange day itineraries, or skip certain viewpoints if weather, road conditions, military convoys, or group safety warrants such action.',
          '• Travelers must abide by departure timings and assembly calls. If a traveler is tardy and fails to join the departure after reasonable notice, the vehicle will proceed, and any subsequent catch-up transit will be at the traveler’s own expense.',
          '• The Captain holds the right to disqualify any participant exhibiting unsafe behavior, acute medical vulnerability, or disruptive conduct without liability for refund.'
        ]
      },
      {
        id: 'health-declarations',
        number: '04',
        title: 'Fitness, Medical Declarations & Personal Risk',
        content: [
          'By registering for any Parindaa trip, the traveler affirms that:',
          '• They are in sound physical, cardiovascular, and mental health suitable for the physical demands of high-altitude travel, uneven trekking trails, and cold mountain weather.',
          '• They have disclosed any pre-existing medical conditions (including asthma, heart ailments, diabetes, vertigo, epilepsy, pregnancy, or physical disabilities).',
          '• They acknowledge that wilderness and mountain tourism carry inherent risks—such as high-altitude sickness (AMS/HAPE/HACE), unpredictable weather, rough terrain, wildlife encounters, rockfalls, and road accidents. Participation is voluntary, and travelers assume full personal responsibility for these intrinsic hazards.'
        ]
      },
      {
        id: 'baggage-belongings',
        number: '05',
        title: 'Luggage, Electronics & Personal Valuables',
        content: [
          '• Travelers are solely responsible for safeguarding their personal luggage, photography equipment, mobile phones, laptops, drones, wallets, and jewellery at all times.',
          '• Parindaa Travels, its employees, transport drivers, and hotel partners accept NO liability for any lost, stolen, water-damaged, or forgotten items in tempo travelers, trekking trails, or hotel rooms.',
          '• Luggage Recommendations: Please carry durable rucksacks/duffels (50L–70L) rather than rigid oversized hard-shell trolley bags, as mountain tempo travelers have roof carrier and boot space constraints.'
        ]
      },
      {
        id: 'intellectual-property',
        number: '06',
        title: 'Intellectual Property, Media Rights & Trademark',
        content: [
          '• All logos, trade names, graphics, site text, photography, cinematic films, and trip collateral on parindaatravels.com and @parindaa.india are the intellectual property of Parindaa Travels / Parindaa India and Chehra Films.',
          '• Any commercial reproduction, scraping, or misuse of Parindaa trip names, cinema concepts, itineraries, or visual assets without prior written consent is strictly prohibited and subject to legal prosecution under the Indian Copyright Act 1957.'
        ]
      },
      {
        id: 'limitation-liability',
        number: '07',
        title: 'Limitation of Liability & Indemnification',
        content: [
          '• To the maximum extent permitted under applicable law, Parindaa Travels, its founders, directors, employees, and trip leaders shall not be held liable for any indirect, incidental, punitive, or consequential damages resulting from delays, carrier defaults, flight cancellations, landslides, civil unrest, or natural disasters.',
          '• Parindaa’s total aggregate liability for any direct claim arising out of or related to a booked trip shall be strictly capped at the total amount actually paid by the traveler to Parindaa Travels for that specific trip.',
          '• The traveler agrees to defend, indemnify, and hold harmless Parindaa Travels from any claims, damages, or legal costs arising from the traveler’s breach of these Terms, unlawful conduct, or intentional property damage.'
        ]
      },
      {
        id: 'governing-law',
        number: '08',
        title: 'Governing Law, Arbitration & Dispute Jurisdiction',
        content: [
          '• These Terms shall be construed, interpreted, and governed in accordance with the laws of the Republic of India.',
          '• Any disputes, controversies, or claims arising out of or relating to this contract shall first be referred to amicable mutual mediation between the traveler and Parindaa management.',
          '• Failing informal resolution within 30 days, the matter shall be submitted to binding arbitration under the Arbitration and Conciliation Act 1996, conducted in the English language.',
          '• The exclusive territorial jurisdiction for any legal proceedings or court filings shall lie with the competent courts of Mumbai, Maharashtra or Jaipur, Rajasthan.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is there a minimum age limit for Parindaa group trips?',
        a: 'The minimum age for high-altitude treks and road expeditions (Ladakh, Spiti) is 12 years when accompanied by a parent or legal guardian. Travelers aged 18+ can join independently.'
      },
      {
        q: 'Can the Trip Captain change our itinerary midway through the trip?',
        a: 'Yes. If heavy snow, broken bridges, cloudbursts, or safety warnings block a route, the Captain holds complete authority to modify the plan to safeguard traveler lives.'
      },
      {
        q: 'What if someone in the group misbehaves or creates a nuisance?',
        a: 'Parindaa has an active zero-tolerance policy. If any traveler engages in harassment, illegal drug use, or violent behavior, the Captain will off-board the individual immediately without refund.'
      }
    ]
  }
};
