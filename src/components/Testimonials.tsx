import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  // Reset autoplay timer whenever slide changes
  const resetAutoplay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetAutoplay();
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 6000); // 6 seconds slide duration

    return () => resetAutoplay();
  }, [activeIndex]);

  return (
    <section id="testimonials" className="relative section-padding overflow-hidden bg-luxury-charcoal">
      {/* Background aesthetics */}
      <div className="absolute top-1/4 right-0 w-96 h-96 radial-glow-burgundy opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 radial-glow-gold opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.4em] text-gold-500 uppercase block mb-3 font-semibold">
            GUEST EXPERIENCES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-widest text-white uppercase mb-4">
            Moments Shared by <span className="font-serif italic text-gold-300">Our Guests</span>
          </h2>
          <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Main Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="glass-panel p-8 md:p-14 rounded-3xl border border-gold-500/10 shadow-2xl relative text-center flex flex-col items-center"
            >
              {/* Giant quote mark back drop */}
              <Quote className="absolute top-6 left-6 md:top-10 md:left-10 w-16 h-16 text-gold-900/15" />
              
              {/* Star rating indicators */}
              <div className="flex gap-1 mb-6 text-gold-400">
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400" />
                ))}
              </div>

              {/* Quote text styled elegantly with Cormorant serif */}
              <blockquote className="font-serif italic text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-8 max-w-2xl">
                "{TESTIMONIALS[activeIndex].quote}"
              </blockquote>

              {/* Divider lines */}
              <div className="h-[1px] w-20 bg-gold-900/40 mb-6" />

              {/* User Bio Details */}
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <img
                  src={TESTIMONIALS[activeIndex].image}
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-14 h-14 rounded-full border-2 border-gold-500 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display text-sm tracking-widest text-white uppercase">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-mono text-gold-500 uppercase font-semibold">
                      {TESTIMONIALS[activeIndex].eventType}
                    </span>
                    <span className="text-gray-600 text-xs">•</span>
                    <span className="text-xs text-gray-400 font-mono">
                      {TESTIMONIALS[activeIndex].date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between items-center px-4 md:-px-16 pointer-events-none md:flex hidden">
            <button
              onClick={() => { resetAutoplay(); handlePrev(); }}
              className="p-3 rounded-full bg-luxury-gray/90 hover:bg-gold-500 text-gold-400 hover:text-black border border-white/5 hover:border-gold-300 transition duration-300 pointer-events-auto cursor-pointer"
              title="Previous testimony"
            >
              <ChevronLeft className="w-5 h-5 pointer-events-none" />
            </button>
            <button
              onClick={() => { resetAutoplay(); handleNext(); }}
              className="p-3 rounded-full bg-luxury-gray/90 hover:bg-gold-500 text-gold-400 hover:text-black border border-white/5 hover:border-gold-300 transition duration-300 pointer-events-auto cursor-pointer"
              title="Next testimony"
            >
              <ChevronRight className="w-5 h-5 pointer-events-none" />
            </button>
          </div>

        </div>

        {/* Indicator dots navigation */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { resetAutoplay(); setActiveIndex(idx); }}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                idx === activeIndex ? "w-8 bg-gold-400" : "w-1.5 bg-gray-700 hover:bg-gold-300/40"
              }`}
              title={`Switch to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
