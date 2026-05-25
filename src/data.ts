import { EventCategory, Testimonial, GalleryItem, FeatureItem } from "./types";

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: "weddings",
    title: "Royal Weddings",
    description: "Bespoke celebrations matching pure grandeur, featuring majestic mandaps, elaborate floral decor, and traditional royal high-end hospitality.",
    image: "/assets/images/shagun_grand_reception_1779640372102.png",
    tag: "THE GRAND VOWS",
    details: ["Capacity: up to 1,500 guests", "Custom floral and light installations", "Pristine wooden mandap setups", "Professional hostesses & high catering setup"]
  },
  {
    id: "sangeet",
    title: "Sangeet Nights",
    description: "Glamorous musical evenings with concert-level stage acoustics, dynamic custom LED walls, dramatic truss lightning, and custom lounges.",
    image: "/assets/images/shagun_sangeet_night_1779640392545.png",
    tag: "RHYTHM & SHINE",
    details: ["Vibrating sound systems", "Professional DJ console & floor plans", "Stunning choreographed entry channels", "Signature customized bar setups"]
  },
  {
    id: "haldi-mehndi",
    title: "Haldi & Mehndi",
    description: "Joyful sun-kissed traditional pre-wedding ceremonies framed by marigold drapes, colorful canopy setups, and intimate cozy seating arrangements.",
    image: "/assets/images/shagun_haldi_mehndi_1779640351230.png",
    tag: "FESTIVE CANOPIES",
    details: ["Thematic marigold flower artwork", "Cozy bolster floor-couch layouts", "Live dhol performance setups", "Authentic premium organic color themes"]
  },
  {
    id: "receptions",
    title: "Grand Receptions",
    description: "A majestic red-carpet dining experience featuring elaborate stage backdrops, shimmering crystal chandeliers, and ambient custom seating.",
    image: "/assets/images/shagun_hero_lawn_1779640330473.png",
    tag: "ELEGANT SOIREE",
    details: ["Grand couple throne entries", "Ambient fairy-light ceilings", "Multicultural fine-dining buffet lines", "Customized selfie backdrops"]
  },
  {
    id: "family-celebrations",
    title: "Family Celebrations",
    description: "Intimate engagements, milestones, and silver jubilees crafted with personal care, custom decor presets, and timeless warmth.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800",
    tag: "CHERISHED GATHERINGS",
    details: ["Curated live traditional music", "Customized photo-collage memory walls", "Warm, kid-friendly play layouts", "Generational portrait photo backdrops"]
  },
  {
    id: "corporate",
    title: "Corporate Gatherings",
    description: "Classy corporate award ceremonies, team-building outings, and company launch galas surrounded by serene lush manicured greenery.",
    image: "/assets/images/lawn_meeting_1779710112667.png",
    tag: "ELITE NETWORKING",
    details: ["Professional mic & sound backup", "High-speed Wi-Fi & AV displays", "Gourmet customized multi-cuisine plating", "Ample parking up to 500+ cars"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    url: "/assets/images/shagun_hero_lawn_1779640330473.png",
    title: "Twilight Lawn Grand Setup",
    category: "Lawn View",
    tags: ["Outdoor", "Lighting", "Bespoke"]
  },
  {
    id: "g2",
    url: "/assets/images/shagun_grand_reception_1779640372102.png",
    title: "Golden Chandelier Reception",
    category: "Stages",
    tags: ["Royal", "Indoor", "Chandeliers"]
  },
  {
    id: "g3",
    url: "/assets/images/shagun_haldi_mehndi_1779640351230.png",
    title: "Marigold Canopy Ritual",
    category: "Pre-Weddings",
    tags: ["Haldi", "Traditional", "Marigolds"]
  },
  {
    id: "g4",
    url: "/assets/images/shagun_sangeet_night_1779640392545.png",
    title: "Sangeet Concert Concert Arena",
    category: "Sangeet",
    tags: ["Music", "Truss Lights", "LEDs"]
  },
  {
    id: "g5",
    url: "/assets/images/dining_grand_hall_1779710595241.png",
    title: "Grand Banquet Dining Hall",
    category: "Catering & Decor",
    tags: ["Dining Hall", "Long Tables", "Royal Decor"]
  },
  {
    id: "g6",
    url: "/assets/images/shagun_maharashtrian_decor_1779710355427.png",
    title: "Maharashtrian Mandap Decor",
    category: "Stages",
    tags: ["Maharashtrian", "Mandap", "Marigolds"]
  },
  {
    id: "g7",
    url: "/assets/images/shagun_maharashtrian_mehndi_1779710810978.png",
    title: "Maharashtrian Mehndi Ceremony",
    category: "Pre-Weddings",
    tags: ["Mehndi", "Bridal", "Traditional"]
  },
  {
    id: "g8",
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    title: "Grand Entrance Night Sparklers",
    category: "Stages",
    tags: ["Entrance", "Night Glow", "Sparklers"]
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: "f1",
    title: "Grand Event Space",
    description: "Spread over 2 acres of clean, lush green lawn matching magnificent scales of traditional Indian gatherings.",
    iconName: "Trees"
  },
  {
    id: "f2",
    title: "Elegant Custom Decoration",
    description: "Our tie-ups with premium creative designers craft bespoke themes, fresh floral sculptures, and high lighting setups.",
    iconName: "Sparkles"
  },
  {
    id: "f3",
    title: "Spacious Parking",
    description: "Secured private parking zones with professional valet systems accommodating over 500+ premium vehicles.",
    iconName: "Car"
  },
  {
    id: "f4",
    title: "Professional Hospitality",
    description: "A well-trained five-star service staff and dedicated venue coordinators ensuring seamless on-location execution.",
    iconName: "Award"
  },
  {
    id: "f5",
    title: "Premium Concert Lighting",
    description: "Equipped with custom structural truss bridges, ambient twilight strands, and power setups for stage events.",
    iconName: "Lightbulb"
  },
  {
    id: "f6",
    title: "Luxury Bride & Groom Suites",
    description: "Fully air-conditioned luxury vanity rooms designed with lavish seating, custom closets, and warm ambient mirrors.",
    iconName: "Bed"
  },
  {
    id: "f7",
    title: "Authentic Food Space",
    description: "Dedicated isolated sanitary dining structures with standard water lines and support for elite multi-cuisine caterers.",
    iconName: "Coffee"
  },
  {
    id: "f8",
    title: "100% Power Guarantee",
    description: "Ultra-heavy soundproof generator backups protecting your special rituals from even micro power glitches.",
    iconName: "Zap"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Aarav & Meera Mehta",
    eventType: "Royal Wedding",
    quote: "Hosting our wedding at Shagun Lawns was a dream. The majestic lights, the velvet lawns, and their meticulous coordination felt like a royal palace fairytale. Our guest list of 1,200 people were deeply impressed with the spacing and parking convenience!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    date: "Jan 2026"
  },
  {
    id: "t2",
    name: "Anjali Deshmukh",
    eventType: "Haldi & Sangeet",
    quote: "Our Sangeet night was electric! The acoustics of the lawn supported our professional audio systems beautifully, and the custom truss setups looked phenomenal under the dark sky. Simply the best open-air venue in the region.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    date: "March 2026"
  },
  {
    id: "t3",
    name: "Vikram Singhania",
    eventType: "Corporate Awards Gala",
    quote: "The team at Shagun Lawns provided exceptional hospitality. For our annual awards banquet, the luxury arrangements, clean premium bride/VIP suites, and expansive catering setups checked every professional box. Brilliant experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    date: "April 2026"
  }
];
