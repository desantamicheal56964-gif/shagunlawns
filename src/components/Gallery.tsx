import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Search, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Derive unique categories from standard items
  const uniqueCategories = ["All", ...Array.from(new Set(GALLERY_ITEMS.map((item) => item.category)))];

  // Filter items
  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (id: string) => {
    const originalIndex = GALLERY_ITEMS.findIndex((item) => item.id === id);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null || prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null || prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section id="gallery" className="relative section-padding bg-luxury-charcoal overflow-hidden">
      {/* Aesthetic glowing lines in background */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 radial-glow-gold opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.4em] text-gold-500 uppercase block mb-3 font-semibold">
              BRAND PORTFOLIO
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-widest text-white uppercase">
              The Gallery of <span className="font-serif italic text-gold-300">Splendor</span>
            </h2>
            <div className="h-[1px] w-28 bg-gradient-to-r from-gold-500 to-transparent mt-4"></div>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 font-light max-w-md md:text-right">
            Every decorative centerpiece, fairytale archway, and night landscape captured live across memorable celebrations hosted on our grounds.
          </p>
        </div>

        {/* Filter Navigation Category Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-2.5 mb-12 border-b border-white/5 pb-6">
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-300 border cursor-pointer ${
                activeCategory === category
                  ? "bg-gradient-to-r from-gold-900 to-gold-600 text-black border-gold-400 font-semibold shadow-[0_4px_12px_rgba(223,181,38,0.15)]"
                  : "bg-luxury-gray/40 text-gray-400 border-white/5 hover:border-gold-500/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid display: masonry layout look */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl h-72 cursor-pointer shadow-lg border border-white/5"
                onClick={() => openLightbox(item.id)}
              >
                {/* Mirror flare light reflections on cards */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-1 pointer-events-none transform -translate-x-full group-hover:translate-x-full ease-out" />
                
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark gradient for text shielding */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-1 opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Corner details */}
                <span className="absolute top-4 left-4 z-10 text-[9px] font-mono tracking-widest text-gold-500 bg-black/60 px-2 py-0.5 rounded border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.category}
                </span>

                {/* Overlay card descriptor */}
                <div className="absolute bottom-5 left-5 right-5 z-10 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-display text-sm text-white tracking-widest uppercase mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  
                  <div className="flex flex-wrap gap-1">
                    {item.tags?.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[8px] font-mono text-gray-400 bg-white/5 px-1.5 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3.5 flex items-center gap-1 text-[10px] uppercase font-mono tracking-widest text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Search className="w-3 h-3" />
                    <span>Zoom Scene</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Backdrop Screen */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Slider Interface */}
            <div className="relative w-full max-w-5xl h-auto max-h-[85vh] flex flex-col justify-center items-center z-10 text-white">
              
              {/* Top controls panel */}
              <div className="w-full flex justify-between items-center px-4 mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase">SHAGUN PORTFOLIO</span>
                </div>
                <button
                  onClick={closeLightbox}
                  className="p-1.5 rounded-full bg-luxury-gray border border-white/10 text-gray-400 hover:text-white transition cursor-pointer"
                  title="Close presentation lightbox"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Central picture visualiser */}
              <div className="relative w-full flex items-center justify-center h-[50vh] md:h-[65vh]">
                
                {/* Left navigation arrow */}
                <button
                  onClick={showPrev}
                  className="absolute left-2 md:left-4 z-30 p-2.5 rounded-full bg-black/60 border border-white/5 text-gray-300 hover:text-gold-400 transition hover:scale-105 cursor-pointer"
                  title="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Core responsive picture */}
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  src={GALLERY_ITEMS[lightboxIndex].url}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  className="max-w-full max-h-full object-contain rounded-xl border border-white/5 shadow-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Right navigation arrow */}
                <button
                  onClick={showNext}
                  className="absolute right-2 md:right-4 z-30 p-2.5 rounded-full bg-black/60 border border-white/5 text-gray-300 hover:text-gold-400 transition hover:scale-105 cursor-pointer"
                  title="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom labels */}
              <div className="text-center mt-5 px-6 space-y-2 max-w-2xl bg-luxury-black/45 p-4 rounded-xl border border-white/5 backdrop-blur-md">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                  {GALLERY_ITEMS[lightboxIndex].category} ({lightboxIndex + 1} / {GALLERY_ITEMS.length})
                </span>
                <h3 className="font-display text-lg tracking-widest text-white uppercase">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h3>
                <div className="flex gap-1.5 justify-center mt-2">
                  {GALLERY_ITEMS[lightboxIndex].tags?.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
