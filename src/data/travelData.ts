export const OFFICIAL_WHATSAPP_NUMBER = '919326632288';
export const OFFICIAL_PHONE_DISPLAY = '+91 93266 32288';
export const SECONDARY_SUPPORT_PHONE = '+91 98284 97392';
export const UDYAM_REGISTRATION_NUMBER = 'UDYAM-RJ-30-0141140';
export const MUMBAI_OFFICE_ADDRESS = 'A.K. Marg, Bandra East, Mumbai, Maharashtra';

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  description: string;
  image: string;
  heroImage: string;
  secondaryImages: string[];
  priceINR: number;
  priceUSD: number;
  duration: string;
  rating: number;
  reviewCount: number;
  badge?: 'Bestseller' | 'Trending' | 'Parindaa Special' | 'Popular' | 'Divine Yatra';
  category: 'himalayan' | 'tropical' | 'spiritual' | 'adventure' | 'weekend';
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  departureDates: string[];
  itinerary: {
    day: number;
    title: string;
    details: string;
    meals: string;
    stay: string;
  }[];
  bestTimeToVisit: string;
  isTopOctDecTrip?: boolean;
  seasonBadge?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  avatar: string;
  trip: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface InstagramPost {
  id: string;
  caption: string;
  imageUrl: string;
  likes: number;
  location: string;
  author: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'kashmir-gulmarg',
    name: 'Kashmir - Gulmarg',
    country: 'India',
    region: 'Kashmir Valley, North India',
    tagline: 'Gulmarg Gondola · Apharwat Peak 13,780 ft · Dal Lake · Drung Waterfall',
    description: 'Ascend into a winter wonderland! Ride the world’s second-highest operating cable car up to Apharwat Peak at 13,780 ft, ski through powder snow meadows in Gulmarg, visit the frozen Drung waterfall, and stay on heritage Dal Lake houseboats.',
    image: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791223245/splitimage.im-2_6.png',
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    ],
    priceINR: 13999,
    priceUSD: 175,
    duration: '5 Days / 4 Nights',
    rating: 4.98,
    reviewCount: 390,
    badge: 'Parindaa Special',
    category: 'himalayan',
    bestTimeToVisit: 'October to December (Peak Snow & Autumn Vibes)',
    isTopOctDecTrip: true,
    seasonBadge: '🏆 #1 Best Trip: Oct to Dec',
    highlights: [
      'Gulmarg Gondola Phase 1 (Kongdoori) & Phase 2 (Apharwat 13,780 ft)',
      'Drung Frozen Waterfall & Tangmarg Pine Forest Valley',
      'Beginner Snow Skiing & Sledge Experience on Powder Slopes',
      'Heritage Hand-Carved Houseboat Stay on Dal Lake with Shikara Ride',
      'Cozy Bonfire & Authentic Kashmiri Kahwa & Wazwan Dinners'
    ],
    inclusions: [
      'Deluxe Snow Resorts in Gulmarg / Tangmarg & Dal Lake Houseboat',
      'Daily Traditional Kashmiri Breakfast & Hot Wazwan Dinners',
      'Private Chauffeur-driven AC/Heated Tempo Traveler throughout',
      'Dedicated Parindaa Trip Captain & Certified Mountain Guide',
      'All Tolls, Parking, Driver Charges & Union Clearances'
    ],
    exclusions: [
      'Flight to Srinagar (SXR)',
      'Gondola cable car ride tickets (Phase 1 & 2 can be arranged)',
      'Personal winter jacket/snow boot rental (~₹250/day)',
      'Personal snowmobile / ATV rides'
    ],
    departureDates: ['17 Oct 2026', '24 Oct 2026', '07 Nov 2026', '21 Nov 2026', '05 Dec 2026', '19 Dec 2026'],
    itinerary: [
      { day: 1, title: 'Srinagar Arrival & Heritage Dal Lake Houseboat Experience', details: 'Touchdown in Srinagar. Check into your wooden carved heritage houseboat on Dal Lake. Enjoy a sunset shikara ride through floating markets and Char Chinar.', meals: 'Dinner Included', stay: 'Dal Lake Heritage Houseboat' },
      { day: 2, title: 'Scenic Drive to Gulmarg & Drung Frozen Waterfall', details: 'Drive past snow-dusted apple orchards to Tangmarg. Trek to the spectacular frozen Drung waterfall with ice stalactites. Check into Gulmarg snow resort.', meals: 'Breakfast & Dinner', stay: 'Pine View Snow Resort, Gulmarg' },
      { day: 3, title: 'Apharwat Peak Gondola Cable Car & Snow Sports', details: 'Board the world-famous Gulmarg Gondola up to Phase 1 Kongdoori and Phase 2 Apharwat Peak (13,780 ft) for surreal 360-degree Himalayan snow views and skiing.', meals: 'Breakfast & Dinner', stay: 'Pine View Snow Resort, Gulmarg' },
      { day: 4, title: 'Gulmarg Snow Meadows to Srinagar Heritage Walk', details: 'Morning sledging and snow photography in Gulmarg bowl. Drive back to Srinagar for a walk through historic Old City, Jamia Masjid, and spice bazaars.', meals: 'Breakfast & Dinner', stay: 'Deluxe Boutique Hotel, Srinagar' },
      { day: 5, title: 'Warm Kahwa Breakfast & Airport Farewell', details: 'Sip hot saffron Kashmiri Kahwa with Girda bread breakfast before timely drop-off at Srinagar Airport for your return flight.', meals: 'Breakfast Included', stay: 'Departure' },
    ]
  },
  {
    id: 'andaman-island-odyssey',
    name: 'Andaman Island Odyssey',
    country: 'India',
    region: 'Andaman & Nicobar Islands',
    tagline: 'Port Blair · Havelock Island · Radhanagar Beach · Neil Island',
    description: 'Dive into crystal-turquoise lagoons, sail across the Bay of Bengal on high-speed catamarans, walk white coral beaches of Havelock, and witness breathtaking sunsets at Radhanagar Beach.',
    image: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791318534/SaveClip.App_728243718_17916647766398063_7418744831974953095_n.webp',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    ],
    priceINR: 18999,
    priceUSD: 235,
    duration: '6 Days / 5 Nights',
    rating: 4.96,
    reviewCount: 284,
    badge: 'Bestseller',
    category: 'adventure',
    bestTimeToVisit: 'October to December (Calm Azure Seas & Corals)',
    isTopOctDecTrip: true,
    seasonBadge: '🌊 Top Island Trip: Oct to Dec',
    highlights: [
      'Radhanagar Beach Sunset (Ranked Asia’s #1 Best Beach)',
      'Elephant Beach Snorkeling & Coral Reef Water Adventures',
      'Private High-Speed Catamaran Cruise between Islands',
      'Historic Cellular Jail Light & Sound Show',
      'Natural Rock Bridge & Laxmanpur Beach at Neil Island'
    ],
    inclusions: [
      'Boutique Beachside Resort Stays in Port Blair & Havelock',
      'Inter-Island Luxury Catamaran Cruise Tickets (Makruzz / Green Ocean)',
      'Daily Buffet Breakfast & Coastal Dinners',
      'Private AC Vehicles for all Transfers & Sightseeing',
      'Dedicated Parindaa Trip Captain & Certified Water Marshals'
    ],
    exclusions: [
      'Flights to/from Port Blair Veer Savarkar Airport (IXZ)',
      'Optional Scuba Diving or Sea Kart sessions (can be booked via Captain)',
      'Personal watersports at Elephant Beach',
      'Camera permits and personal expenses'
    ],
    departureDates: ['18 Oct 2026', '28 Oct 2026', '11 Nov 2026', '25 Nov 2026', '09 Dec 2026', '23 Dec 2026'],
    itinerary: [
      { day: 1, title: 'Arrival in Port Blair & Cellular Jail Memorial', details: 'Touchdown at Port Blair Airport and meet your Parindaa Captain. Check in to coastal resort. Visit historic Cellular Jail followed by the stirring evening Light & Sound presentation.', meals: 'Dinner Included', stay: 'Sea Shell Resort / Boutique Stay, Port Blair' },
      { day: 2, title: 'Port Blair to Havelock Island via Catamaran', details: 'Board morning high-speed catamaran cruise across the azure Andaman Sea. Check into Havelock beachside cottages. Evening sunset at world-acclaimed Radhanagar Beach (Beach No. 7).', meals: 'Breakfast & Dinner', stay: 'Havelock Island Beach Resort' },
      { day: 3, title: 'Elephant Beach Coral Reef Exploration & Water Sports', details: 'Speedboat ride to Elephant Beach. Snorkel through living coral reefs with tropical clownfish, or experience optional scuba diving, jet skiing, and sea walking.', meals: 'Breakfast & Dinner', stay: 'Havelock Island Beach Resort' },
      { day: 4, title: 'Havelock to Neil Island (Shaheed Dweep)', details: 'Cruise to serene Neil Island. Visit Bharatpur Beach with turquoise shallow waters, the natural coral bridge formation, and watch golden sunset at Laxmanpur Beach.', meals: 'Breakfast & Dinner', stay: 'Neil Island Eco Resort' },
      { day: 5, title: 'Neil Island to Port Blair & Chidiya Tapu Sunset', details: 'Catch morning catamaran return to Port Blair. Afternoon scenic coastal drive to Chidiya Tapu (Bird Island) for an unforgettable sunset over the Bay of Bengal.', meals: 'Breakfast & Dinner', stay: 'Boutique Resort, Port Blair' },
      { day: 6, title: 'Farewell Andaman & Journey Home', details: 'Enjoy morning tropical breakfast and fresh tender coconut before airport transfer with lifelong memories and group photos.', meals: 'Breakfast Included', stay: 'Departure' },
    ]
  },
  {
    id: 'kerala-gods-own-country',
    name: 'Kerala: God’s Own Country',
    country: 'India',
    region: 'South India',
    tagline: 'Munnar 2D · Thekkady · Alleppey Houseboat · Kanyakumari',
    description: 'Immerse in velvet emerald tea estates in Munnar, spice hills in Thekkady, an authentic overnight houseboat cruise in Alleppey backwaters, and Kanyakumari coastal sunrise.',
    image: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791220482/724061399_17915593464398063_5564154880270854714_n.webp',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    ],
    priceINR: 9999,
    priceUSD: 129,
    duration: '5D/4N (or 7D/6N Classical)',
    rating: 4.94,
    reviewCount: 362,
    badge: 'Trending',
    category: 'tropical',
    bestTimeToVisit: 'October to December (Lush Post-Monsoon & Backwaters)',
    isTopOctDecTrip: true,
    seasonBadge: '🌴 Top Tropical Trip: Oct to Dec',
    highlights: [
      'Overnight Private Houseboat Cruise in Alleppey Backwaters',
      'Munnar Tea Gardens, Lockhart Estate & Mattupetty Dam',
      'Thekkady Periyar Wildlife & Organic Spice Garden Tour',
      'Traditional Kerala Sadya Feast served on Banana Leaf',
      'Optional Extension to Kanyakumari Sunset & Rameshwaram'
    ],
    inclusions: [
      '4-Star Hill Resort in Munnar & Deluxe Private Houseboat',
      'All Meals on Houseboat (Lunch, High Tea, Dinner, Breakfast)',
      'Daily Hotel Buffet Breakfast',
      'Chauffeured Private AC Sedan / Tempo Traveler throughout',
      'Spice Plantation Guided Tour & Entry Permits'
    ],
    exclusions: [
      'Flight or Train to Kochi (COK)',
      'Kathakali / Kalaripayattu theater tickets (~₹300)',
      'Personal Ayurvedic wellness massages',
      'Personal purchases of spices and banana chips'
    ],
    departureDates: ['19 Oct 2026', '29 Oct 2026', '10 Nov 2026', '24 Nov 2026', '08 Dec 2026'],
    itinerary: [
      { day: 1, title: 'Arrival at Kochi to Misty Munnar Hills', details: 'Meet your Parindaa host at Cochin. Drive past Cheeyappara & Valara waterfalls into the misty tea carpet hills of Munnar.', meals: 'Dinner Included', stay: 'Tea Valley Resort, Munnar' },
      { day: 2, title: 'Munnar Tea Exploration & Eravikulam', details: 'Visit Eravikulam National Park to spot Nilgiri Tahr. Explore Lockhart Tea Factory and echo point at Mattupetty dam.', meals: 'Breakfast & Dinner', stay: 'Tea Valley Resort, Munnar' },
      { day: 3, title: 'Munnar to Thekkady Spice Hills', details: 'Drive to Thekkady. Take a guided aromatic spice garden walk smelling cardamom and cinnamon, followed by martial arts show.', meals: 'Breakfast & Dinner', stay: 'Green Mist Retreat, Thekkady' },
      { day: 4, title: 'Alleppey Backwaters Houseboat Cruise', details: 'Board your private handcrafted houseboat at noon. Glide through palm-fringed lagoons while savoring freshly prepared Karimeen fish.', meals: 'Breakfast, Lunch & Dinner', stay: 'Private Houseboat, Alleppey' },
      { day: 5, title: 'Fort Kochi Heritage & Farewell Kerala', details: 'Morning backwater sunrise breakfast. Visit Chinese fishing nets in Fort Kochi before transfer to Cochin Airport.', meals: 'Breakfast Included', stay: 'Departure' },
    ]
  },
  {
    id: 'meghalaya-unseen',
    name: 'Unseen Meghalaya',
    country: 'India',
    region: 'Northeast India (Ex-Guwahati)',
    tagline: 'Caves & Waterfall Capital of India',
    description: 'Explore 13+ scenic waterfalls, 7 mysterious limestone caves, living root bridges, and deep canyon viewpoints across Shillong, Cherrapunji, Dawki, and Krang Shuri.',
    image: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791220481/728704385_17917244007398063_3477220131125489886_n.webp',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    priceINR: 12999,
    priceUSD: 165,
    duration: '5 Days / 6 Nights',
    rating: 4.96,
    reviewCount: 312,
    badge: 'Popular',
    category: 'adventure',
    bestTimeToVisit: 'October to April (Caves & Clear Waterfall Pools)',
    highlights: [
      '13+ Scenic Waterfalls including Nohkalikai & Krang Shuri',
      '7 Limestone Caves Exploration (Mawsmai, Arwah & Krem Puri)',
      'Double Decker Living Root Bridges Trek',
      'Transparent Umngot River Boating in Dawki',
      '6 Canyons & Viewpoints plus 5 Khasi Heritage Villages'
    ],
    inclusions: [
      'Boutique Hill Stays in Shillong & Cherrapunji',
      'Daily Nutritious Breakfast & Warm Dinners',
      'Private Tempo Traveler / SUV transfers Ex-Guwahati',
      'Certified Khasi Local Guide & Parindaa Trip Captain',
      'All Village, Cave & Forest Conservation Permits'
    ],
    exclusions: [
      'Airfare or Train to Guwahati (GAU)',
      'Ziplining or optional cliff jumping charges',
      'Personal snacks, rain gear & tipping',
      'Lunches during transfers'
    ],
    departureDates: ['16 Oct 2026', '24 Oct 2026', '06 Nov 2026', '20 Nov 2026', '04 Dec 2026'],
    itinerary: [
      { day: 1, title: 'Arrival at Guwahati & Drive to Shillong', details: 'Meet your Parindaa Captain at Guwahati Airport/Railway Station. Stop at scenic Umiam Lake (Barapani) and check into pine-scented Shillong hotel.', meals: 'Dinner Included', stay: 'Pine View Heritage Hotel, Shillong' },
      { day: 2, title: 'Shillong to Cherrapunji via Majestic Waterfalls', details: 'Journey across cloud-draped canyons. Visit Elephant Falls, Mawkdok Dympep Valley viewpoint, Nohkalikai Falls, and explore Arwah Cave fossils.', meals: 'Breakfast & Dinner', stay: 'Cherrapunji Holiday Resort' },
      { day: 3, title: 'Epic Double Decker Living Root Bridge Trek', details: 'Hike down stone pathways into Nongriat subtropical rainforest. Cross 150-year-old living root bridges and dip into Rainbow Falls crystal turquoise pools.', meals: 'Breakfast & Dinner', stay: 'Cherrapunji Holiday Resort' },
      { day: 4, title: 'Mawlynnong Cleanest Village & Dawki Glass River', details: 'Explore Mawlynnong village with single living root bridge. Reach Dawki border where wooden boats float mid-air on crystal-clear Umngot river.', meals: 'Breakfast & Dinner', stay: 'Riverside Camp / Cottage, Shnongpdeng' },
      { day: 5, title: 'Krang Shuri Azure Waterfalls & Return via Guwahati', details: 'Swim under the magical turquoise waters of Krang Shuri falls. Visit ancient monoliths at Jowai before smooth drop-off at Guwahati.', meals: 'Breakfast Included', stay: 'Departure' },
    ]
  },
  {
    id: 'kashmir-paradise',
    name: 'Kashmir',
    country: 'India',
    region: 'Himalayas, North India',
    tagline: 'City of Love, City of Dreams: Srinagar · Gulmarg · Sonmarg',
    description: 'Drift along serene waters on a handcrafted shikara in Dal Lake, ride the world-renowned Gulmarg Gondola over snowy peaks, and wander through golden meadow glaciers of Sonmarg and Pahalgam.',
    image: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791220480/759986781_17923503375398063_5737305628230900821_n.webp',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=2000&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80',
    ],
    priceINR: 14999,
    priceUSD: 189,
    duration: '6 Days / 5 Nights',
    rating: 4.95,
    reviewCount: 428,
    badge: 'Bestseller',
    category: 'himalayan',
    bestTimeToVisit: 'October to December (Golden Chinar Foliage & Winter Chill)',
    highlights: [
      'Gulmarg Gondola Phase 1 & 2 Cable Car Ride',
      'Sunset Shikara Cruise on Dal Lake & Char Chinar',
      'Heritage Carved Wooden Houseboat Stay',
      'Sonmarg Thajiwas Glacier Snow Point',
      'Betaab Valley, Aru & Saffron Orchards in Pahalgam'
    ],
    inclusions: [
      '4-Star Deluxe Resorts & Heritage Dal Lake Houseboat',
      'Daily Kashmiri Breakfast & Authentic Wazwan Dinners',
      'Private Chauffeur-driven Tempo Traveler / SUV throughout',
      'Dedicated Parindaa Travel Captain & Local Guide',
      'All Inner Line Permits, Parking & Tolls'
    ],
    exclusions: [
      'Flight or Train to Srinagar (SXR)',
      'Gondola ride ticket fees (can be pre-arranged)',
      'Personal pony rides or snow equipment rental',
      'Personal shopping for pashminas and dry fruits'
    ],
    departureDates: ['15 Oct 2026', '22 Oct 2026', '05 Nov 2026', '18 Nov 2026', '02 Dec 2026'],
    itinerary: [
      { day: 1, title: 'Arrival in Srinagar & Sunset Shikara Ride', details: 'Check into your hand-carved heritage houseboat on Dal Lake. Enjoy evening shikara ride watching floating bazaars under pine mountains.', meals: 'Dinner Included', stay: 'Dal Lake Heritage Houseboat' },
      { day: 2, title: 'Srinagar to Gulmarg: Meadow of Flowers', details: 'Drive past apple orchards to Gulmarg. Take the world-famous Gondola up to Apharwat peak with 360-degree Himalayan snow views.', meals: 'Breakfast & Dinner', stay: 'Pine Peak Resort, Gulmarg' },
      { day: 3, title: 'Gulmarg to Sonmarg: Meadow of Gold', details: 'Drive through Sindh Valley to Sonmarg. Trek or pony ride up to Thajiwas Glacier with sparkling river streams.', meals: 'Breakfast & Dinner', stay: 'Glacier Retreat, Sonmarg' },
      { day: 4, title: 'Sonmarg to Pahalgam: Valley of Shepherds', details: 'Traverse scenic saffron fields of Pampore to reach Pahalgam. Check into your Lidder riverside resort and enjoy bonfire night.', meals: 'Breakfast & Dinner', stay: 'Lidder River Resort, Pahalgam' },
      { day: 5, title: 'Exploring Betaab Valley & Return to Srinagar', details: 'Visit Betaab Valley, Aru Valley and Chandanwari. Return to Srinagar for evening stroll in Nishat & Shalimar Mughal Gardens.', meals: 'Breakfast & Dinner', stay: 'Boutique Hotel, Srinagar' },
      { day: 6, title: 'Farewell Kashmir with Memories for Life', details: 'Sip warm Kashmiri Kahwa tea breakfast before transfer to Srinagar Airport for your journey home.', meals: 'Breakfast Included', stay: 'Departure' },
    ]
  },
  {
    id: 'jyotirlinga-darshan',
    name: 'Jyotirlinga & Shaktipeeth Darshan',
    country: 'India',
    region: 'Maharashtra & Madhya Pradesh',
    tagline: 'Grishneshwar · Bhimashankar · Gadhkalika · Harsiddhi Mata',
    description: 'Embark on a sacred spiritual pilgrimage covering holy Jyotirlingas and revered Shaktipeeths with seamless comfortable transfers, VIP darshan coordination, and satvik stays.',
    image: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791220481/727158786_17916396195398063_5804642615287964419_n.webp',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=2000&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    ],
    priceINR: 4999,
    priceUSD: 65,
    duration: '6 Days / 5 Nights',
    rating: 4.93,
    reviewCount: 245,
    badge: 'Divine Yatra',
    category: 'spiritual',
    bestTimeToVisit: 'October to March (Pleasant Temple Weather)',
    highlights: [
      'Grishneshwar Jyotirlinga (12th Sacred Jyotirlinga)',
      'Bhimashankar Jyotirlinga in Western Ghats Sahyadri Hills',
      'Harsiddhi Mata Shaktipeeth & Gadhkalika Mata Temple',
      'Mahakaleshwar Temple Ujjain Darshan & Aarti coordination',
      'Dedicated Spiritual Trip Coordinator & Satvik Meals'
    ],
    inclusions: [
      'Clean Deluxe Hotel Stays near Temple premises',
      'Daily Satvik Vegetarian Breakfast & Dinners',
      'Sanitized AC Luxury Coach / Bus Transfers',
      'Temple Guide & VIP Darshan assistance',
      'Toll taxes, parking and driver allowances'
    ],
    exclusions: [
      'Personal Pooja, Abhishek & Dakshina offerings',
      'Travel tickets from hometown to reporting city',
      'Personal laundry, beverages and lunch expenses'
    ],
    departureDates: ['18 Oct 2026', '28 Oct 2026', '12 Nov 2026', '26 Nov 2026'],
    itinerary: [
      { day: 1, title: 'Assembly & Drive toward Bhimashankar', details: 'Assemble at departure hub. Travel through picturesque Sahyadri ghats to sacred Bhimashankar Jyotirlinga temple.', meals: 'Dinner Included', stay: 'Comfort Stay, Bhimashankar' },
      { day: 2, title: 'Bhimashankar Darshan & Transfer to Aurangabad', details: 'Morning holy jalabhishekam at Bhimashankar. Proceed toward Aurangabad with evening bhajans on the journey.', meals: 'Breakfast & Dinner', stay: 'Deluxe Hotel, Aurangabad' },
      { day: 3, title: 'Grishneshwar Jyotirlinga & Ellora', details: 'Darshan at Grishneshwar, the 12th Jyotirlinga. Witness the architectural wonder of ancient Kailash Temple nearby.', meals: 'Breakfast & Dinner', stay: 'Deluxe Hotel, Aurangabad' },
      { day: 4, title: 'Journey to Ujjain: The City of Mahakal', details: 'Drive across the heartland to holy Ujjain. Check into hotel and attend evening Sandhya Aarti along the banks of Shipra river.', meals: 'Breakfast & Dinner', stay: 'Temple Stay, Ujjain' },
      { day: 5, title: 'Gadhkalika Mata & Harsiddhi Shaktipeeth Darshan', details: 'Perform pooja at ancient Harsiddhi Mata Shaktipeeth and Gadhkalika temple. Seek blessings at Mahakaleshwar temple.', meals: 'Breakfast & Dinner', stay: 'Temple Stay, Ujjain' },
      { day: 6, title: 'Spiritual Fulfillment & Return Journey', details: 'Morning prayer and breakfast before returning with prasad and auspicious divine memories.', meals: 'Breakfast Included', stay: 'Departure' },
    ]
  },
  {
    id: 'kainchi-dham-weekend',
    name: 'Kainchi Dham & Mukteshwar',
    country: 'India',
    region: 'Uttarakhand (Ex-Delhi & Jaipur)',
    tagline: 'Neeb Karori Baba Ashram & Mukteshwar Himalayan Vistas',
    description: 'Experience deep spiritual peace at Neem Karoli Baba Kainchi Dham Ashram, soak in 360-degree snow-capped Himalayan panoramas at Mukteshwar, and walk pine forests with fellow Parindey.',
    image: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791220481/761747174_17923506819398063_6676138420613236619_n.webp',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    ],
    priceINR: 4999,
    priceUSD: 65,
    duration: '3 Days / 2 Nights',
    rating: 4.97,
    reviewCount: 380,
    badge: 'Popular',
    category: 'weekend',
    bestTimeToVisit: 'All Year / Oct to Nov (Serene Foothill Weather)',
    highlights: [
      'Kainchi Dham Neem Karoli Baba Ashram Darshan & Meditation',
      'Chauli Ki Jali Cliff Point & Mukteshwar Dham Temple',
      'Scenic Himalayan Sunset & Sunrise Views of Nanda Devi Range',
      'Nainital Lake Drive & Bhimtal Water activities',
      'Convenient Overnight AC Pushback Bus Ex-Delhi & Jaipur'
    ],
    inclusions: [
      '2 Nights Hill Resort Accommodation in Mukteshwar / Nainital',
      'Daily Breakfast & Homestyle Mountain Dinners',
      'Round-Trip AC Tempo Traveler / Luxury Coach from Delhi & Jaipur',
      'Dedicated Parindaa Trip Captain and coordinator',
      'All tolls, driver charges & parking fees'
    ],
    exclusions: [
      'Lunch and roadside cafe stops',
      'Personal adventure sports (rock climbing/zipline at Chauli Ki Jali)',
      'Personal shopping for local jams and woollens'
    ],
    departureDates: ['Every Friday: 16 Oct', '23 Oct', '30 Oct', '06 Nov', '13 Nov 2026'],
    itinerary: [
      { day: 1, title: 'Overnight Departure from Delhi / Jaipur', details: 'Board comfortable AC traveler from Delhi/Jaipur in the evening. Overnight drive through scenic foothills into Kumaon Himalayas.', meals: 'Night Transit', stay: 'Overnight Journey' },
      { day: 2, title: 'Kainchi Dham Darshan & Mukteshwar Check-in', details: 'Reach peaceful Kainchi Dham early morning. Spend time in meditation and prasad. Drive to scenic Mukteshwar for cliff views.', meals: 'Breakfast & Dinner', stay: 'Pine View Retreat, Mukteshwar' },
      { day: 3, title: 'Chauli Ki Jali, Bhimtal & Return Journey', details: 'Sunrise view of snow peaks. Visit 350-year-old Mukteshwar temple and Chauli Ki Jali. Stop at Bhimtal before night drop-off in Delhi/Jaipur.', meals: 'Breakfast Included', stay: 'Return Transit' },
    ]
  },
  {
    id: 'goa-bike-adventure',
    name: 'Goa Coastal Bike Trip',
    country: 'India',
    region: 'Goa & Konkan Coast',
    tagline: 'Dudhsagar Waterfalls · Major North & South Beaches · Fun Roads',
    description: 'Feel the sea wind on two wheels! Cruise along palm-fringed coastal highways, marvel at the four-tiered Dudhsagar Waterfalls, explore secret southern coves, and party under starry beach skies.',
    image: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791220481/724279254_17915485848398063_8979356828108422140_n.webp',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2000&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    ],
    priceINR: 6500,
    priceUSD: 85,
    duration: '5 Days / 4 Nights',
    rating: 4.92,
    reviewCount: 310,
    badge: 'Popular',
    category: 'adventure',
    bestTimeToVisit: 'October to February (Sunny Coastal Breeze)',
    highlights: [
      'Dudhsagar Waterfalls 4x4 Jeep Safari & Swim',
      'Both North (Anjuna, Vagator) and South Goa (Palolem, Cola) Beaches',
      'Scooty / Bike Rental Included throughout the trip',
      'Historic Chapora Fort (Dil Chahta Hai) & Fort Aguada',
      'Beachside Sunset Campfire & Acoustic Music Night'
    ],
    inclusions: [
      '4-Star Resort stay with Swimming Pool',
      'Scooty / Royal Enfield Bike option included for all days',
      'Daily Buffet Breakfast',
      'Dudhsagar Wildlife Sanctuary Safari entry permits',
      'Experienced Parindaa Bike Marshal & Leader'
    ],
    exclusions: [
      'Fuel for bikes (pay-as-you-go)',
      'Travel to Goa airport/station',
      'Personal water sports (parasailing/jet ski)',
      'Alcoholic drinks and club entry covers'
    ],
    departureDates: ['21 Oct 2026', '04 Nov 2026', '18 Nov 2026', '02 Dec 2026'],
    itinerary: [
      { day: 1, title: 'Arrival in Goa & Scooter Handover', details: 'Check into your resort. Receive your sanitized scooty/bike with helmets. Evening sunset ride to Vagator beach and hilltop cafe.', meals: 'Welcome Drink', stay: 'Resort with Pool, North Goa' },
      { day: 2, title: 'Majestic Dudhsagar Waterfall Expedition', details: 'Early morning ride towards Mollem National Park. Jump into 4x4 jeeps through jungle streams to the roaring Dudhsagar waterfalls.', meals: 'Breakfast', stay: 'Resort with Pool, North Goa' },
      { day: 3, title: 'North Goa Coastal Trail: Forts & Secret Coves', details: 'Cruise past Portuguese villas to Chapora Fort, Morjim beach, and Mandrem. Watch golden sunset at Ashwem beach.', meals: 'Breakfast', stay: 'Resort with Pool, North Goa' },
      { day: 4, title: 'South Goa Explorer: Palolem & Cabo de Rama', details: 'Ride south to the secluded cliffs of Cabo de Rama and turquoise waters of Palolem. Celebrate farewell bonfire night.', meals: 'Breakfast', stay: 'Resort with Pool, North Goa' },
      { day: 5, title: 'Souvenir Cruise & Flight Departure', details: 'Last-minute beach stroll and shopping in Panjim Fontainhas Latin Quarter before vehicle handover and airport drop-off.', meals: 'Breakfast Included', stay: 'Departure' },
    ]
  },
  {
    id: 'leh-ladakh-circuit',
    name: 'Leh Ladakh Expedition',
    country: 'India',
    region: 'Trans-Himalayas, Ladakh',
    tagline: 'Leh · Nubra Valley · Turtuk · Pangong Lake · Hanle · Umling La',
    description: 'Ride across the world highest motorable pass Umling La (19,024 ft), camp beside the surreal shifting blue waters of Pangong Tso, and stargaze at the Dark Sky Reserve in Hanle.',
    image: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791220481/726660058_17915957589398063_1894404032407606329_n.webp',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2000&q=85',
    secondaryImages: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    ],
    priceINR: 16500,
    priceUSD: 210,
    duration: '7 Days / 6 Nights',
    rating: 4.98,
    reviewCount: 450,
    badge: 'Popular',
    category: 'himalayan',
    bestTimeToVisit: 'May to October (Open High Mountain Passes)',
    highlights: [
      'Umling La Pass (19,024 ft) - Highest Motorable Road in the World',
      'Pangong Tso Lake Camping under Galactic Stars',
      'Hunder Sand Dunes & Double Humped Bactrian Camel Ride',
      'Turtuk: Indo-Balti Border Village on the LOC',
      'Khardung La Pass (17,582 ft) & Hanle Dark Sky Observatory'
    ],
    inclusions: [
      'Deluxe Hotel Stays in Leh & Luxury Swiss Tents at Pangong & Nubra',
      'Daily Nutritious High-Altitude Breakfast & Dinners',
      'Royal Enfield Himalayan / 4x4 Backup Vehicle with Mechanic',
      'Oxygen Cylinders, Medical First Aid & Certified Expedition Captain',
      'All Inner Line Permits, Wildlife & Environmental Fees'
    ],
    exclusions: [
      'Flights to/from Leh Kushok Bakula Airport (IXZ)',
      'Fuel for bikes (if taking bike package)',
      'Personal riding gear & security deposit',
      'Lunches during daily rides'
    ],
    departureDates: ['17 Oct 2026', '25 Oct 2026', '08 Nov 2026', '22 Nov 2026'],
    itinerary: [
      { day: 1, title: 'Arrival in Leh & Crucial Acclimatization', details: 'Touchdown at high-altitude Leh (11,500 ft). Strict rest for altitude acclimatization with hot garlic soup. Evening walk at Leh Market.', meals: 'Dinner Included', stay: 'Grand Heritage Hotel, Leh' },
      { day: 2, title: 'Leh Local: Magnetic Hill, Sangam & Hall of Fame', details: 'Visit confluence of Indus and Zanskar rivers, Magnetic Hill, Gurudwara Pathar Sahib, and test-ride bikes through Sham Valley.', meals: 'Breakfast & Dinner', stay: 'Grand Heritage Hotel, Leh' },
      { day: 3, title: 'Leh to Nubra Valley via Khardung La Pass', details: 'Scale the mighty Khardung La (17,582 ft). Descend into Nubra sand dunes for ATV riding and double-humped camel safari at sunset.', meals: 'Breakfast & Dinner', stay: 'Deluxe Swiss Camps, Nubra' },
      { day: 4, title: 'Excursion to Turtuk: The Last Indian Outpost', details: 'Ride along Shyok river to Baltistan border village Turtuk. Taste fresh apricots and experience unique Balti culture.', meals: 'Breakfast & Dinner', stay: 'Deluxe Swiss Camps, Nubra' },
      { day: 5, title: 'Nubra to Pangong Tso Lake via Shyok Route', details: 'Rugged riverbed ride to the dramatic colors of Pangong Lake (14,270 ft). Stargaze under zero light pollution.', meals: 'Breakfast & Dinner', stay: 'Luxury Lake Cottages, Pangong' },
      { day: 6, title: 'Pangong to Hanle & Umling La Summit Push', details: 'Early ascent to Umling La (19,024 ft), the rooftop of the world. Celebrate triumph before returning to Leh through Chang La.', meals: 'Breakfast & Dinner', stay: 'Grand Heritage Hotel, Leh' },
      { day: 7, title: 'Departure with the Badge of a True Parinda', details: 'Transfer to Leh Airport with unforgettable memories of the ultimate Himalayan expedition.', meals: 'Breakfast Included', stay: 'Departure' },
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Aarav Malhotra',
    location: 'Mumbai, Maharashtra',
    avatar: '/avatars/aarav-malhotra.jpg',
    trip: 'Kashmir - Gulmarg (5D/4N)',
    rating: 5,
    date: 'October 2026',
    comment: 'Ascending Apharwat Peak on the Gulmarg Gondola at 13,780 ft with Parindaa was the ultimate experience of my life! The autumn crisp air and snow slopes were magical. Our trip captain arranged every single permit and gear smoothly.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Neha Sharma',
    location: 'New Delhi, India',
    avatar: '/avatars/neha-sharma.jpg',
    trip: 'Andaman Island Odyssey (6D/5N)',
    rating: 5,
    date: 'October 2026',
    comment: 'Radhanagar Beach sunset in Havelock and coral snorkeling at Elephant Beach was a pure dream come true! October seas were crystal calm and turquoise. Parindaa took care of all luxury catamarans and island transfers flawlessly.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Rohan Deshmukh',
    location: 'Pune, Maharashtra',
    avatar: '/avatars/rohan-deshmukh.jpg',
    trip: "Kerala: God's Own Country (5D/4N)",
    rating: 5,
    date: 'September 2026',
    comment: 'Munnar mist tea hills and the private luxury houseboat in Alleppey backwaters were surreal. The captain treated our group like family. Top hygiene, peaceful stays and delicious authentic Sadya feast!',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Priya Iyer',
    location: 'Bengaluru, Karnataka',
    avatar: '/avatars/priya-iyer.jpg',
    trip: 'Unseen Meghalaya (5D/6N)',
    rating: 5,
    date: 'September 2026',
    comment: 'The 13+ waterfalls and living root bridges in Meghalaya with Parindaa Travels were beyond words. As a solo female traveler, safety and respect were paramount, and Parindaa delivered 100%!',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Vikramaditya Rathore',
    location: 'Jaipur, Rajasthan',
    avatar: '/avatars/vikramaditya-rathore.jpg',
    trip: 'Kainchi Dham & Mukteshwar Weekend',
    rating: 5,
    date: 'August 2026',
    comment: 'A soul-healing weekend trip to Neem Karoli Baba Kainchi Dham Ashram. The AC luxury traveler from Jaipur and mountain resort stays were super comfortable. Booked again for my parents!',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Ananya Sen',
    location: 'Kolkata, West Bengal',
    avatar: '/avatars/ananya-sen.jpg',
    trip: 'Leh Ladakh Expedition (7D/6N)',
    rating: 5,
    date: 'July 2026',
    comment: 'Reaching Umling La (19,024 ft) with Parindaa marshals was unforgettable! Oxygen backup, warm campfires at Pangong Tso, and incredible camaraderie throughout the expedition.',
    verified: true
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    caption: '13+ Waterfalls, 7 Caves, and zero limits! Pure Meghalaya paradise with Parindaa 🌿🌧️ #ParindaaTravels #UnseenMeghalaya',
    imageUrl: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791220481/728704385_17917244007398063_3477220131125489886_n.webp',
    likes: 2840,
    location: 'Cherrapunji, Meghalaya',
    author: '@parindaa.india'
  },
  {
    id: 'ig-2',
    caption: 'City of Love, City of Dreams! Golden sunset across Dal Lake shikaras 🛶✨ #KashmirDiaries #ParindaaIndia',
    imageUrl: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791220480/759986781_17923503375398063_5737305628230900821_n.webp',
    likes: 3419,
    location: 'Dal Lake, Srinagar',
    author: '@parindaa.india'
  },
  {
    id: 'ig-3',
    caption: 'Conquering the world highest motorable pass Umling La at 19,024 ft! 🏔️🏍️ #LehLadakh #ParindaaHimalayas',
    imageUrl: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791220481/726660058_17915957589398063_1894404032407606329_n.webp',
    likes: 4105,
    location: 'Umling La, Ladakh',
    author: '@parindaa.india'
  },
  {
    id: 'ig-4',
    caption: 'Divine Darshan at Kainchi Dham Neem Karoli Baba Ashram & Mukteshwar cliffs 🕊️🙏 #KainchiDham #ParindaaSpiritual',
    imageUrl: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791220481/761747174_17923506819398063_6676138420613236619_n.webp',
    likes: 3950,
    location: 'Kainchi Dham, Uttarakhand',
    author: '@parindaa.india'
  },
  {
    id: 'ig-5',
    caption: 'Coastal roads, roaring Dudhsagar waterfalls and Goa vibes on two wheels! 🛵🌊 #GoaBikeTrip #ChaloParindey',
    imageUrl: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791220481/724279254_17915485848398063_8979356828108422140_n.webp',
    likes: 2280,
    location: 'Dudhsagar, Goa',
    author: '@parindaa.india'
  },
  {
    id: 'ig-6',
    caption: 'Tea gardens of Munnar & floating backwaters in Alleppey! God Own Country with our Parindey 🛶🍵 #KeralaTravels',
    imageUrl: 'https://res.cloudinary.com/x1dci3fh/image/upload/v1791220482/724061399_17915593464398063_5564154880270854714_n.webp',
    likes: 3140,
    location: 'Munnar, Kerala',
    author: '@parindaa.india'
  }
];

export const CITIES_DEPARTURE = [
  'New Delhi (DEL)',
  'Jaipur (JAI)',
  'Mumbai (BOM)',
  'Bengaluru (BLR)',
  'Guwahati (GAU)',
  'Chandigarh (IXC)',
  'Ahmedabad (AMD)',
  'Pune (PNQ)',
  'Kolkata (CCU)'
];

export const POPULAR_ROUTES = [
  { from: 'Delhi', to: 'Guwahati, Meghalaya', price: '₹4,899', duration: '2h 15m' },
  { from: 'Delhi / Jaipur', to: 'Srinagar, Kashmir', price: '₹3,499', duration: '1h 30m' },
  { from: 'Delhi', to: 'Leh Ladakh', price: '₹4,299', duration: '1h 25m' },
  { from: 'Mumbai / Pune', to: 'Goa Coastal', price: '₹2,199', duration: '1h 10m' },
  { from: 'Bengaluru', to: 'Kochi, Kerala', price: '₹2,499', duration: '1h 05m' },
  { from: 'Delhi', to: 'Kathgodam / Kainchi', price: '₹1,200', duration: 'Overnight AC Bus' }
];

export const CURATED_HOTELS = [
  {
    id: 'h-1',
    name: 'Dal Lake Heritage Carved Houseboat',
    location: 'Srinagar, Kashmir',
    rating: 4.9,
    reviews: 210,
    priceINR: 3500,
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80',
    tag: 'Heritage Houseboat',
    amenities: ['Free Shikara Transfer', 'Wazwan Dining', 'Fireplace', 'Heated Blankets']
  },
  {
    id: 'h-2',
    name: 'Cherrapunji Mist Holiday Retreat',
    location: 'Cherrapunji, Meghalaya',
    rating: 4.95,
    reviews: 280,
    priceINR: 3800,
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80',
    tag: 'Valley Waterfall View',
    amenities: ['Canyon Viewpoint', 'Local Khasi Feasts', 'Campfire', 'Nature Treks']
  },
  {
    id: 'h-3',
    name: 'Mukteshwar Pine Heights Resort',
    location: 'Mukteshwar, Uttarakhand',
    rating: 4.89,
    reviews: 195,
    priceINR: 2800,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    tag: 'Himalayan Snow View',
    amenities: ['Nanda Devi Peak View', 'Pine Orchard', 'Bonfire', 'Kainchi Shuttles']
  },
  {
    id: 'h-4',
    name: 'Alleppey Handcrafted Deluxe Houseboat',
    location: 'Alleppey Backwaters, Kerala',
    rating: 4.93,
    reviews: 320,
    priceINR: 5500,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80',
    tag: 'Private Backwater Cruise',
    amenities: ['Full Board Meals', 'Chef on Board', 'Air Conditioning', 'Sunset Upper Deck']
  }
];

export const FAQS = [
  {
    q: 'How do I book a seat on Parindaa group trips? What is the advance amount?',
    a: 'You can reserve your spot directly with just a ₹3,000 partial deposit. The remaining balance can be cleared in simple installments up to 15 days prior to departure. You can also call or WhatsApp our Captain directly on +91 93266 32288 or +91 98284 97392.'
  },
  {
    q: 'Are solo travelers and female travelers safe on Parindaa journeys?',
    a: 'Over 65% of our travelers join solo! Every Parindaa trip is led by certified, experienced travel captains and marshals. We ensure balanced gender ratios, verified safe hotels/camps, and a friendly, respectful community environment.'
  },
  {
    q: 'What is your date rescheduling and cancellation policy?',
    a: 'We offer flexible rescheduling: you can shift your trip date to any future departure with 0% rescheduling fees up to 14 days prior to departure. Cancellations made 21 days prior receive a 100% travel credit voucher valid for 18 months.'
  },
  {
    q: 'Where do the group trips depart from?',
    a: 'We offer convenient reporting points: Kainchi Dham departs directly from Delhi and Jaipur; Meghalaya departs Ex-Guwahati; Kashmir departs from Srinagar; Ladakh departs from Leh; and Goa starts right from Goa with vehicle handover.'
  },
  {
    q: 'Can these itineraries be customized for private groups or families?',
    a: 'Yes! All Parindaa packages can be 100% customized for private friend squads, couples, or families on your own chosen dates with private SUVs and personalized pacing.'
  }
];
