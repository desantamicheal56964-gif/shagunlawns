import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Elegant incremental progress simulation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 400);

    return () => {
      clearInterval(timer);
      clearTimeout(textTimer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="preloader"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white px-6"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      >
        <div className="absolute inset-0 bg-radial-glow-burgundy opacity-40 pointers-events-none" />
        <div className="absolute inset-0 radial-glow-gold opacity-10 pointers-events-none" />
        <div className="absolute top-0 left-0 w-full h-1 bg-luxury-gray">
          <motion.div
            className="h-full bg-gradient-to-r from-gold-950 via-gold-500 to-gold-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-center relative max-w-xl">
          {/* Decorative Crown/Floral Line Accent */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-500"></span>
              <span className="text-gold-400 text-xs font-display tracking-[0.4em]">SHAGUN</span>
              <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-500"></span>
            </div>
          </motion.div>

          <AnimatePresence>
            {showText && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="space-y-4"
              >
                <h1 className="font-display text-4xl md:text-6xl font-light tracking-[0.2em] uppercase text-gold-200 leading-tight">
                  Shagun Lawns
                </h1>
                
                <h2 className="font-serif italic text-gold-500 text-lg md:text-xl tracking-wider font-light">
                  "Every Celebration Deserves Grandeur"
                </h2>
                
                <p className="text-xs tracking-[0.3em] font-sans text-gray-500 uppercase mt-4">
                  RESERVING THE RITUALS OF MAJESTY
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Luxury Spinner Details */}
          <div className="mt-16 flex flex-col items-center space-y-2">
            <span className="text-xs font-mono text-gold-600 tracking-widest">{progress}% Loaded</span>
            <div className="w-16 h-[1px] bg-gold-900 overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full w-4 bg-gold-400"
                animate={{
                  x: [-20, 80],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </div>

        {/* Ambient Footer Accent */}
        <div className="absolute bottom-10 text-[10px] font-mono tracking-widest text-gray-600 uppercase">
          Hospitality Perfected
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
