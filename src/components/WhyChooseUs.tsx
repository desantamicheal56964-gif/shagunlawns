import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import { FEATURES } from "../data";

// Helper to resolve icon by name safely
const renderIcon = (name: string) => {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return <LucideIcons.Sparkles className="w-6 h-6" />;
  return <IconComponent className="w-6 h-6" />;
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative section-padding overflow-hidden bg-luxury-black">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 radial-glow-gold opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 radial-glow-burgundy opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs font-mono tracking-[0.4em] text-gold-500 uppercase block mb-3 font-semibold">
            THE SHAGUN COMMITTMENT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-widest text-white uppercase">
            Signature <span className="font-serif italic text-gold-300">Venue Features</span>
          </h2>
          <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4"></div>
          <p className="text-xs sm:text-sm tracking-wider font-light max-w-2xl text-gray-400 mx-auto mt-6">
            Our infrastructure, amenities, and service processes are meticulously structured to support the grand scale and continuous rituals of authentic Indian traditions.
          </p>
        </div>

        {/* Features Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card relative p-8 rounded-2xl border border-white/5 space-y-5 overflow-hidden group flex flex-col justify-between"
            >
              {/* Internal Accent Glow overlay */}
              <div className="absolute -top-1/2 -right-1/2 w-40 h-40 rounded-full radial-glow-gold opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

              <div className="space-y-4">
                {/* Floating Micro Number Indicators */}
                <div className="flex justify-between items-start">
                  <div className="p-3.5 rounded-xl bg-gold-950/40 border border-gold-500/20 text-gold-500 group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-300 transition-all duration-300 w-fit">
                    {renderIcon(feature.iconName)}
                  </div>
                  <span className="text-xs font-mono text-gray-700 tracking-widest font-light">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display text-base tracking-widest text-white group-hover:text-gold-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative base golden line */}
              <div className="h-[2px] w-0 bg-gold-500 group-hover:w-full transition-all duration-500 mt-4 rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
