import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, ArrowRight, X, Clock, HelpCircle } from "lucide-react";
import { EVENT_CATEGORIES } from "../data";
import { EventCategory } from "../types";

export default function Experience() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | null>(null);

  return (
    <section id="experience" className="relative section-padding overflow-hidden bg-luxury-black">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 right-1/10 w-96 h-96 radial-glow-burgundy opacity-40 z-0 ambient-orb" />
      <div className="absolute bottom-12 left-1/12 w-80 h-80 radial-glow-gold opacity-15 z-0 ambient-orb" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-[0.4em] text-gold-500 uppercase block mb-3 font-semibold">
            CURATED EXPERIENCES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-widest text-white uppercase mb-4">
            Designed for <span className="font-serif italic text-gold-300">Every Celebration</span>
          </h2>
          <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4"></div>
          <p className="text-xs sm:text-sm tracking-wider font-light max-w-2xl text-gray-400 mx-auto mt-6">
            Explore our tailored operational setups, each optimized to offer perfect acoustic, floral, layout, and lighting specifications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENT_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl h-[420px] shadow-2xl cursor-pointer border border-white/5"
              onClick={() => setSelectedCategory(category)}
            >
              {/* Background card image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url('${category.image}')`,
                  filter: "brightness(0.45) contrast(1.15)"
                }}
              />
              
              {/* Overlay gradients shifting on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-black/30 to-transparent z-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-1" />

              {/* Glowing Corner Accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold-500/0 group-hover:border-gold-500/40 transition-all duration-500 z-2 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold-500/0 group-hover:border-gold-500/40 transition-all duration-500 z-2 rounded-br-lg" />

              {/* Card Meta Content */}
              <div className="relative z-10 p-6 sm:p-8 space-y-3">
                <span className="text-[9px] font-mono tracking-widest text-gold-500 font-semibold border border-gold-500/20 px-2 py-0.5 rounded bg-gold-950/40">
                  {category.tag}
                </span>

                <h3 className="font-display text-xl sm:text-2xl text-white tracking-wider font-light group-hover:text-gold-400 transition-colors duration-300">
                  {category.title}
                </h3>

                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed font-light">
                  {category.description}
                </p>

                <div className="pt-3 flex items-center gap-1.5 text-xs text-gold-400 font-semibold uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                  <span>Deatils & Formats</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Details Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ cubicBezier: [0.16, 1, 0.3, 1], duration: 0.5 }}
              className="relative w-full max-w-4xl glass-panel border border-gold-500/30 rounded-3xl overflow-hidden shadow-2xl z-10 text-white flex flex-col md:flex-row h-auto max-h-[90vh] md:max-h-[600px]"
            >
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-white/10 text-gray-400 hover:text-white hover:border-gold-500/30 transition-all cursor-pointer"
                title="Close specifications panel"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Media Presentation */}
              <div className="w-full md:w-1/2 relative min-h-[220px] md:min-h-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${selectedCategory.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-luxury-black via-luxury-black/30 to-transparent" />
                
                {/* Floating Brand Label */}
                <div className="absolute bottom-6 left-6 z-10">
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase">SHAGUN LAWNS</span>
                  </div>
                  <h4 className="font-display text-xl text-white tracking-widest uppercase mt-1">
                    {selectedCategory.title}
                  </h4>
                </div>
              </div>

              {/* Right Column: Spec Sheet */}
              <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase border border-gold-500/20 px-2.5 py-1 rounded bg-gold-950/40 inline-block">
                    {selectedCategory.tag}
                  </span>

                  <h3 className="font-display text-2xl tracking-[0.1em] text-white">
                    Venue Specifications
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    {selectedCategory.description}
                  </p>

                  <div className="h-[1px] w-full bg-white/5" />

                  {/* Highlights Grid */}
                  <div className="space-y-3.5">
                    <p className="text-[10px] font-mono tracking-[0.2em] text-gold-500 uppercase font-bold">
                      CAPABILITY CHECKLIST
                    </p>
                    
                    <ul className="space-y-2 text-xs text-gray-300">
                      {selectedCategory.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                          <span className="font-light">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer specs details and actions */}
                <div className="pt-6 border-t border-white/5 mt-6 flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] font-mono uppercase">
                    <Clock className="w-3.5 h-3.5 text-gold-700" />
                    <span>Duration: Half Day / Full Day Slot</span>
                  </div>

                  <a
                    href="#inquiry"
                    onClick={() => setSelectedCategory(null)}
                    className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-gold-900 to-gold-600 text-black font-sans text-[11px] font-semibold tracking-widest uppercase rounded-full hover:from-gold-600 hover:to-gold-400 transition-all shadow-[0_4px_12px_rgba(223,181,38,0.2)]"
                  >
                    <span>Inquiry Now</span>
                    <Calendar className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
