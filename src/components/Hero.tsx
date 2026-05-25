import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Sparkles, Compass, Mail, ChevronDown } from "lucide-react";

// Dynamic image import to guarantee it is bundled by Vite
import heroBgImg from "../assets/images/shagun_hero_lawn_1779640330473.png";

interface HeroProps {
  onExploreClick: () => void;
  onInquiryClick: () => void;
  scrollProgress: number;
}

export default function Hero({ onExploreClick, onInquiryClick, scrollProgress }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle Setup
    const particlesArray: Particle[] = [];
    const numberOfParticles = 60;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      alphaSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.3 - 0.5; // slow upward drift
        this.alpha = Math.random() * 0.7 + 0.1;
        this.alphaSpeed = Math.random() * 0.008 + 0.002;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // If particle moves off-screen, reset it
        if (this.y < 0) {
          this.y = height;
          this.x = Math.random() * width;
        }
        if (this.x < 0 || this.x > width) {
          this.x = Math.random() * width;
        }

        // Shimmer opacity
        this.alpha -= this.alphaSpeed;
        if (this.alpha <= 0.05 || this.alpha >= 0.85) {
          this.alphaSpeed = -this.alphaSpeed;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#D4AF37";
        ctx.fillStyle = "#fdfae1";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Handle Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Cinematic Zoom Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url(${heroBgImg})`,
          transform: `scale(${1.05 + scrollProgress * 0.1}) translateY(${scrollProgress * 40}px)`,
          filter: "brightness(0.35) contrast(1.1)",
        }}
      />

      {/* Luxury Color Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-black/40 to-luxury-black/70 z-1" />
      <div className="absolute inset-0 bg-radial-glow-burgundy opacity-40 z-1" />

      {/* Floating Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-2 pointer-events-none" />

      {/* Scroll indicator bar right on top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-20">
        <div 
          className="h-full bg-gradient-to-r from-gold-900 via-gold-400 to-gold-100 transition-all duration-75"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Centered Glassmorphic Panel */}
      <div className="relative z-10 max-w-4xl px-6 md:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="glass-panel p-8 md:p-14 rounded-3xl border border-gold-500/20 shadow-2xl relative overflow-hidden max-w-3xl mx-auto"
        >
          {/* Internal Glowing Corner Accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold-500/40 rounded-tl-2xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold-500/40 rounded-tr-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold-500/40 rounded-bl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold-500/40 rounded-br-2xl pointer-events-none" />

          {/* Subtitle / Venue Tag */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-gold-400 opacity-60"></span>
            <div className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
              <span className="text-gold-400 text-xs tracking-[0.4em] font-sans font-semibold uppercase">
                THE APEX SEASONS
              </span>
            </div>
            <span className="h-[1px] w-6 bg-gold-400 opacity-60"></span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.08em] leading-tight text-white mb-6">
            Where Celebrations Become{" "}
            <span className="font-semibold block sm:inline shimmer-text">
              Lifelong Memories
            </span>
          </h1>

          {/* Luxury Description */}
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-gold-100/90 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            SHAGUN LAWNS — Crafted for Weddings, Haldi, Mehndi & Grand Celebrations
          </p>

          <p className="hidden sm:block text-xs uppercase tracking-[0.25em] text-gray-400 font-sans max-w-xl mx-auto mb-10 leading-relaxed border-t border-white/5 pt-6">
            TWO ACRES OF MAJESTIC LUSH LAWNS, COMFORT VANITY SUITES, AND ROYAL INDIAN AMBIENCE CONVENIENTLY LOCATED.
          </p>

          {/* Interactive Actions Grid */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-900 to-gold-600 text-black hover:from-gold-600 hover:to-gold-400 transition-all duration-300 font-sans text-sm font-semibold tracking-widest uppercase shadow-[0_4px_20px_rgba(223,181,38,0.25)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              Explore Venue
            </button>
            <button
              onClick={onInquiryClick}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-gold-500/30 text-white hover:bg-gold-500/10 hover:border-gold-300 transition-all duration-300 font-sans text-sm font-medium tracking-widest uppercase backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-gold-400" />
              Make Inquiry
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Sparkles & Highlights in Corners */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 text-center pointer-events-none md:block hidden">
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          onClick={onExploreClick}
          className="flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
        >
          <span className="text-[10px] tracking-[0.3em] font-mono text-gold-400 uppercase">
            Scroll To Eternity
          </span>
          <ChevronDown className="w-4 h-4 text-gold-500" />
        </motion.div>
      </div>
    </section>
  );
}
