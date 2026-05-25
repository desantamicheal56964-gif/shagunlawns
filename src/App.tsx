import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Menu, X, Compass, Phone } from "lucide-react";

// Section imports
import Preloader from "./components/Preloader";
import BackgroundMusic from "./components/BackgroundMusic";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import LocationFooter from "./components/LocationFooter";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Monitor Scroll Progress & Header Blurring states
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(window.scrollY / scrollHeight);
      }
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Utility to scroll directly to sections with matching offsets
  const scrollToSection = (id: string) => {
    setIsMobileNavOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the sticky floating header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-luxury-black font-sans text-gray-100 selection:bg-gold-800 selection:text-white">
      
      {/* 1. CINEMATIC SPLASH PRELOADER */}
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen"
        >
          {/* Top visual highlighting gold orb */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-gold-950/20 via-gold-500/5 to-transparent blur-[80px] pointer-events-none z-1" />

          {/* 2. GLOWING STICKY FLOATING HEADER NAV */}
          <header 
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
              isScrolled 
                ? "bg-luxury-black/75 backdrop-blur-xl border-b border-gold-500/10 py-4 shadow-xl" 
                : "bg-transparent py-6 border-b border-transparent"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
              
              {/* BRAND LOGO with Gold spark accent */}
              <button 
                onClick={() => scrollToSection("hero")}
                className="flex items-center gap-2 cursor-pointer text-left focus:outline-none"
              >
                <div className="relative">
                  <Sparkles className="w-5 h-5 text-gold-400 animate-pulse shrink-0" />
                  <div className="absolute inset-0 bg-gold-400 blur-sm opacity-30 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-base md:text-lg font-bold tracking-[0.2em] text-white leading-none">
                    SHAGUN
                  </span>
                  <span className="text-[8px] font-mono tracking-[0.35em] text-gold-500 font-semibold uppercase mt-0.5 whitespace-nowrap">
                    LAWNS & RESORT
                  </span>
                </div>
              </button>

              {/* DESKTOP NAV CHANNELS */}
              <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-widest uppercase">
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="text-gray-300 hover:text-gold-300 transition duration-300 focus:outline-none cursor-pointer"
                >
                  The Saga
                </button>
                <button 
                  onClick={() => scrollToSection("experience")} 
                  className="text-gray-300 hover:text-gold-300 transition duration-300 focus:outline-none cursor-pointer"
                >
                  Celebrations
                </button>
                <button 
                  onClick={() => scrollToSection("why-choose-us")} 
                  className="text-gray-300 hover:text-gold-300 transition duration-300 focus:outline-none cursor-pointer"
                >
                  Amenities
                </button>
                <button 
                  onClick={() => scrollToSection("gallery")} 
                  className="text-gray-300 hover:text-gold-300 transition duration-300 focus:outline-none cursor-pointer"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection("testimonials")} 
                  className="text-gray-300 hover:text-gold-300 transition duration-300 focus:outline-none cursor-pointer"
                >
                  Reveries
                </button>
                <button 
                  onClick={() => scrollToSection("location")} 
                  className="text-gray-300 hover:text-gold-300 transition duration-300 focus:outline-none cursor-pointer"
                >
                  Location
                </button>
              </nav>

              {/* ACTION CALL: MAKE INQUIRY */}
              <div className="hidden sm:flex items-center gap-4">
                <button
                  onClick={() => scrollToSection("inquiry")}
                  className="px-5 py-2 rounded-full border border-gold-500/30 font-sans text-xs font-semibold tracking-wider text-gold-300 uppercase hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300 whitespace-nowrap cursor-pointer"
                >
                  Inquiry Now
                </button>
              </div>

              {/* MOBILE HAMBURGER TOGGLE */}
              <button
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                className="lg:hidden p-2 rounded bg-white/5 border border-white/5 text-gray-300 hover:text-[#D4AF37] hover:border-gold-500/20 transition-all cursor-pointer"
                title="Menu"
              >
                {isMobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

            {/* MOBILE INTERACTIVE ACCUMULATOR DRAWER */}
            <AnimatePresence>
              {isMobileNavOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="lg:hidden absolute top-full left-0 right-0 bg-luxury-black/95 border-b border-white/5 backdrop-blur-2xl py-6 px-6 shadow-2xl overflow-hidden"
                >
                  <div className="flex flex-col gap-4 font-mono text-xs tracking-widest uppercase text-left">
                    <button 
                      onClick={() => scrollToSection("about")} 
                      className="py-2.5 text-gray-300 text-left border-b border-white/5 hover:text-gold-400 cursor-pointer"
                    >
                      The Saga
                    </button>
                    <button 
                      onClick={() => scrollToSection("experience")} 
                      className="py-2.5 text-gray-300 text-left border-b border-white/5 hover:text-gold-400 cursor-pointer"
                    >
                      Celebrations
                    </button>
                    <button 
                      onClick={() => scrollToSection("why-choose-us")} 
                      className="py-2.5 text-gray-300 text-left border-b border-white/5 hover:text-gold-400 cursor-pointer"
                    >
                      Amenities
                    </button>
                    <button 
                      onClick={() => scrollToSection("gallery")} 
                      className="py-2.5 text-gray-300 text-left border-b border-white/5 hover:text-gold-400 cursor-pointer"
                    >
                      Portfolio
                    </button>
                    <button 
                      onClick={() => scrollToSection("testimonials")} 
                      className="py-2.5 text-gray-300 text-left border-b border-white/5 hover:text-gold-400 cursor-pointer"
                    >
                      Reveries
                    </button>
                    <button 
                      onClick={() => scrollToSection("location")} 
                      className="py-2.5 text-gray-300 text-left border-b border-white/5 hover:text-gold-400 cursor-pointer"
                    >
                      Location
                    </button>
                    <button
                      onClick={() => scrollToSection("inquiry")}
                      className="mt-2 py-3 bg-gradient-to-r from-gold-900 to-gold-600 rounded-lg text-black font-semibold text-center uppercase tracking-widest"
                    >
                      Inquiry Now
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          {/* 3. MULTI-MODULE SECTION SCROLLING */}
          <main>
            {/* HERO */}
            <Hero 
              onExploreClick={() => scrollToSection("experience")} 
              onInquiryClick={() => scrollToSection("inquiry")} 
              scrollProgress={scrollProgress} 
            />

            {/* ABOUT */}
            <About />

            {/* EXPERIENCES */}
            <Experience />

            {/* PORTFOLIO GALLERY */}
            <Gallery />

            {/* AMENITIES */}
            <WhyChooseUs />

            {/* REVERIES TESTIMONIALS */}
            <Testimonials />

            {/* LEAD CAPTURE FORM (+ FLOATING WHATSAPP & INTERNAL LEADS ARCHIVE) */}
            <InquiryForm />

            {/* EMBEDDED MAPS & FOOTER */}
            <LocationFooter />
          </main>

          {/* 4. PROCEDURAL WEB AUDIO MUSIC BACKDROP */}
          <BackgroundMusic />

        </motion.div>
      )}
    </div>
  );
}
