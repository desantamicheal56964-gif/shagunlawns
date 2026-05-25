import { motion } from "motion/react";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Shield, Heart, Sparkles, ChevronUp } from "lucide-react";

export default function LocationFooter() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="location" className="relative bg-luxury-black border-t border-white/5 pt-16 md:pt-24 pb-10 overflow-hidden">
      
      {/* Decorative Orbs in footer */}
      <div className="absolute top-0 right-0 w-80 h-80 radial-glow-gold opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 radial-glow-burgundy opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* UPPER BLOCK: MAPS AND DETAILS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 md:mb-20">
          
          {/* Maps Iframe (occupies 7 columns on large desktop) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.3em] text-gold-500 uppercase font-semibold block">
              VENUE MAP & ACCESS
            </span>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[320px] sm:h-[400px] border border-gold-900/15">
              <iframe
                title="Shagun Lawns Location Map"
                src="https://maps.google.com/maps?q=Shagun%20Lawns,%20Shagun%20Lawns%20Dhule%20-%20Solapur%20Road,%20Dhule%20Aurangabadh%20bypass,%20Kargaon,%20Maharashtra%20424119&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Location and Contact details right columns */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:py-4">
            
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono tracking-[0.4em] text-gold-500 uppercase font-semibold">
                  SHAGUN LAWNS & RESORT
                </span>
                <h3 className="font-display text-2xl tracking-widest text-white uppercase">
                  The Sanctuary Of Festivity
                </h3>
                <div className="h-[2px] w-14 bg-gold-500 mt-2" />
              </div>

              {/* Address details lists */}
              <div className="space-y-5 text-gray-300 font-light text-sm">
                
                <div className="flex gap-4">
                  <div className="p-3 bg-white/5 border border-white/5 text-gold-500 rounded-lg h-fit shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs text-gold-300 tracking-wider uppercase mb-1">
                      Grand Physical Address
                    </h4>
                    <p className="text-xs leading-relaxed max-w-sm font-medium">
                      Shagun Lawns, Shagun Lawns Dhule - Solapur Road, Dhule Aurangabadh bypass, Kargaon, Maharashtra 424119
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-white/5 border border-white/5 text-gold-500 rounded-lg h-fit shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs text-gold-300 tracking-wider uppercase mb-1">
                      Direct Concierge Line
                    </h4>
                    <a href="tel:+919999999999" className="text-xs leading-relaxed hover:text-gold-400 transition font-medium">
                      +91 99999 99999 / +91 88888 88888
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-white/5 border border-white/5 text-gold-500 rounded-lg h-fit shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs text-gold-300 tracking-wider uppercase mb-1">
                      Electronic Mail Inquiries
                    </h4>
                    <a href="mailto:reservations@shagunlawns.com" className="text-xs leading-relaxed hover:text-gold-400 transition font-medium">
                      reservations@shagunlawns.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick RSVP call trigger */}
            <div className="glass-panel p-5 rounded-2xl border border-white/5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono uppercase text-gray-400">Available Slots</p>
                <p className="text-xs text-emerald-400 tracking-wider mt-0.5">Booking Open for Fall 2026</p>
              </div>
              <a
                href="#inquiry"
                className="px-4 py-2 bg-white/5 hover:bg-gold-500 hover:text-black text-[10px] text-gold-400 border border-gold-500/20 font-sans tracking-widest font-semibold uppercase rounded-full transition-all"
              >
                Inquire Now
              </a>
            </div>

          </div>

        </div>

        {/* MID BLOCK: GOLDEN ROYAL QUOTE DIVIDER */}
        <div className="py-12 border-t border-b border-white/5 text-center my-12 relative">
          <QuoteSymbol />
          
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl text-gold-200/90 tracking-[0.2em] uppercase font-light leading-snug">
            “Every Celebration <span className="font-serif italic text-gold-500 block sm:inline">Deserves Grandeur”</span>
          </h2>
          
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mt-4">
            SHAGUN LAWNS & RESORTS — HOSTING SPECTACULAR LIVES
          </p>
        </div>

        {/* BOTTOM BLOCK: LOGO, QUICKLINKS, COYRIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-sm text-gray-400 font-light">
          
          {/* Logo Brand Info Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4.5 h-4.5 text-gold-500" />
              <span className="font-display text-lg tracking-widest text-white uppercase">SHAGUN LAWNS</span>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
              A premium flagship resort venue designed for the elegant traditional scale of big fat Indian events. Spread across two evergreen acres of manicured botanical luxury.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="font-display text-xs text-white tracking-widest uppercase">
              Quick Venue Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li>
                <a href="#hero" className="hover:text-gold-400 transition">Cinema Hero Panel</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition">Our Hospitality Story</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-gold-400 transition">Curated Experiences</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-400 transition">Splendor Gallery</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-gold-400 transition">Signature Amenities</a>
              </li>
            </ul>
          </div>

          {/* Legal Compliance and Standards */}
          <div className="space-y-4">
            <h4 className="font-display text-xs text-white tracking-widest uppercase">
              Regulatory Badges
            </h4>
            <div className="space-y-3.5 text-xs text-gray-500">
              <p className="flex items-center gap-2">
                <Shield className="w-4.5 h-4.5 text-gold-900" />
                <span>NOC approved, ISO certified catering plots</span>
              </p>
              <p className="flex items-center gap-2">
                <Heart className="w-4.5 h-4.5 text-rose-900" />
                <span>Supporting organic bio-fertilized vegetation</span>
              </p>
            </div>
          </div>

          {/* Connect & Social Channels column */}
          <div className="space-y-4">
            <h4 className="font-display text-xs text-white tracking-widest uppercase">
              Follow Our Stories
            </h4>
            <p className="text-xs">Follow our live wedding reels, design layouts, and centerpieces on active social media galleries:</p>
            
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-gold-500 hover:text-black border border-white/5 rounded-lg text-gray-400 transition duration-300"
                title="Shoring Shagun Lawns on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-gold-500 hover:text-black border border-white/5 rounded-lg text-gray-400 transition duration-300"
                title="Shoring Shagun Lawns on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 hover:bg-gold-500 hover:text-black border border-white/5 rounded-lg text-gray-400 transition duration-300"
                title="Shoring Shagun Lawns on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* FINAL CREDITS ROW */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-600 tracking-wider uppercase">
          <p>© 2026 SHAGUN LAWNS LTD. All Rights Reserved.</p>
          
          {/* Scroll back to top */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 hover:text-gold-400 transition group cursor-pointer"
          >
            <span>Retreat To Top</span>
            <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

// Decorative Quote Symbol drawing
function QuoteSymbol() {
  return (
    <div className="flex justify-center gap-2.5 mb-6 text-gold-500 opacity-60">
      <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
      <span className="w-3.5 h-[1px] bg-gold-500 mt-[7px]" />
      <Sparkles className="w-3.5 h-3.5" />
      <span className="w-3.5 h-[1px] bg-gold-500 mt-[7px]" />
      <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
    </div>
  );
}
