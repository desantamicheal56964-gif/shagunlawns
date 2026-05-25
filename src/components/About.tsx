import { motion } from "motion/react";
import { Award, Trees, ShieldCheck, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden bg-luxury-charcoal">
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 radial-glow-burgundy opacity-50 z-0 ambient-orb" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 radial-glow-gold opacity-10 z-0 ambient-orb" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title Grid */}
        <div className="text-center md:text-left mb-16 md:mb-20 max-w-3xl">
          <span className="text-xs font-mono tracking-[0.4em] text-gold-500 uppercase block mb-3 font-semibold">
            ABOUT SHAGUN LAWNS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-widest text-white leading-tight uppercase">
            A Legacy of <span className="font-serif italic text-gold-300">Regal Celebrations</span>
          </h2>
          <div className="h-[1px] w-28 bg-gradient-to-r from-gold-500 to-transparent mt-4"></div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Block: Image Stack */}
          <div className="relative">
            {/* Outline Golden Frame underlay */}
            <div className="absolute -inset-4 border border-gold-900/30 rounded-2xl pointer-events-none transform translate-x-2 translate-y-2 z-0 hidden sm:block" />

            {/* Principal Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border border-white/5"
            >
              <img
                src="/src/assets/images/maharashtrian_wedding_couple_1779709877752.png"
                alt="Shagun Lawns authentic Maharashtrian wedding"
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Overlay Tiny Tag */}
              <div className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-lg border border-gold-500/20">
                <p className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-semibold">
                  TRADITIONAL WEDDINGS
                </p>
                <p className="text-xs text-white">Royal Maharashtrian Rituals</p>
              </div>
            </motion.div>

            {/* Secondary Floating Image */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-10 -left-6 w-1/2 overflow-hidden rounded-xl shadow-2xl border border-gold-900/40 z-20 hidden md:block"
            >
              <img
                src="/src/assets/images/maharashtrian_wedding_ritual_1779709894582.png"
                alt="Traditional Maharashtrian wedding ritual with glass bangles"
                className="w-full h-[220px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>

          {/* Right Block: Storytelling content */}
          <div className="space-y-8">
            
            {/* The Story Frosted Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-10 rounded-2xl border border-white/5 space-y-6"
            >
              <p className="font-serif italic text-gold-100 text-xl md:text-2xl font-light leading-relaxed">
                "An elegant blend of historic Indian grandeur and contemporary hospitality, where every ritual is elevated into a masterpiece."
              </p>

              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Spread across two pristine acres of botanical garden greenery, <strong>Shagun Lawns</strong> serves as the premier destination for high-end celebrations. We specialize in tailoring custom environments for majestic marriages, vibrant mehndi setups, holy haldi gatherings, and executive receptions.
              </p>

              <p className="text-sm text-gray-400 leading-relaxed font-light">
                Our approach merges the timeless warmth of Indian hospitality with professional planning structures. No matter if you are executing a close-knit ritual of 200 loved ones or a grand visual carnival of 1,500 guests, we customize the canvas for your unforgettable milestones.
              </p>

              {/* Decorative Signature Gold Line */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div>
                  <h4 className="font-display text-sm tracking-widest text-gold-300 uppercase">
                    Managing Host Board
                  </h4>
                  <p className="text-xs text-gray-500 font-mono">SHAGUN RESORT & WEDDING PLANNERS</p>
                </div>
              </div>
            </motion.div>

            {/* Core Values / Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gold-950/40 border border-gold-500/20 text-gold-500 shrink-0">
                  <Trees className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-semibold font-mono tracking-wider text-gold-200">
                    Sylvan Lawn Area
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">2+ acres of evergreen gardens.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-rose-950/40 border border-rose-500/20 text-rose-400 shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-semibold font-mono tracking-wider text-rose-200">
                    Auspicious Ambience
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">Stairs & structures for rituals.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gold-950/40 border border-gold-500/20 text-gold-500 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-semibold font-mono tracking-wider text-gold-200">
                    Grand Hospitality
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">Five-star support staff crew.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-semibold font-mono tracking-wider text-emerald-200">
                    Secure Parking
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">Valet systems for 500+ cars.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
