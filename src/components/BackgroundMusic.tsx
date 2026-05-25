import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Setup synthesized luxury Indian ambient drone (flute & tanpura style)
  const startDrone = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;

      // Base Gain Node to master volume
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      // Soft fade in
      masterGain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Lowpass Filter for that warm, rich, meditative dark drone vibe
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(220, ctx.currentTime);
      filter.connect(masterGain);

      // Harmonious Indian Tanpura Drone notes (A / E chord)
      const frequencies = [110, 165, 220, 330]; // Root A, Fifth E, Octaves
      const oscillators: OscillatorNode[] = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        // Use triangle waves for a flute/woodwind-like ancient texture
        osc.type = idx % 2 === 0 ? "triangle" : "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        
        // Add subtle detune for beautiful lush rich shimmering chorus
        osc.detune.setValueAtTime((idx - 1.5) * 4, ctx.currentTime);

        // Subtly modulate frequencies over time to sound organic (using LFO)
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.1 + idx * 0.05, ctx.currentTime);
        lfoGain.gain.setValueAtTime(6, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.detune);
        lfo.start();

        // Vary gain slightly for rhythmic swell
        oscGain.gain.setValueAtTime(0.3 / frequencies.length, ctx.currentTime);
        
        // Connect nodes
        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start();
        
        oscillators.push(osc);
      });

      oscillatorsRef.current = oscillators;
      setIsPlaying(true);
    } catch (e) {
      console.error("Failed to start ambient synthesized drone: ", e);
    }
  };

  const stopDrone = () => {
    if (gainNodeRef.current && audioContextRef.current) {
      const ctx = audioContextRef.current;
      gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
      gainNodeRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
      
      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try { osc.stop(); } catch {}
        });
        setIsPlaying(false);
      }, 600);
    } else {
      setIsPlaying(false);
    }
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopDrone();
    } else {
      startDrone();
    }
  };

  // Safe Cleanup
  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((osc) => {
        try { osc.stop(); } catch {}
      });
    };
  }, []);

  return (
    <div id="ambient-music-panel" className="fixed bottom-6 left-6 z-40">
      <div className="glass-card flex items-center justify-between gap-3 px-4 py-2.5 rounded-full border border-gold-900/40 backdrop-blur-md">
        
        {/* Equalizer Wave Visualizer (shows only when playing) */}
        <div className="flex items-end gap-1.5 h-6 w-9 px-1">
          {isPlaying ? (
            [...Array(4)].map((_, i) => (
              <motion.span
                key={i}
                className="w-1 bg-gold-500 rounded-full"
                animate={{
                  height: ["12%", "85%", "25%", "95%", "15%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8 + i * 0.15,
                  ease: "easeInOut",
                  direction: "alternate"
                }}
                style={{ height: "40%" }}
              />
            ))
          ) : (
            [...Array(4)].map((_, i) => (
              <span
                key={i}
                className="w-1 bg-gold-900/40 rounded-full h-[3px]"
              />
            ))
          )}
        </div>

        {/* Text */}
        <div className="hidden sm:flex flex-col text-left">
          <p className="text-[10px] font-mono tracking-widest text-gold-500 uppercase leading-none font-semibold">
            Ambient Theme
          </p>
          <span className="text-[9px] text-gray-400 font-sans tracking-wider leading-tight">
            {isPlaying ? "Sitar & Flute Drone" : "Music Off"}
          </span>
        </div>

        {/* Action Toggle Button */}
        <button
          onClick={togglePlayback}
          className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gold-950/60 border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-black hover:border-gold-300 transition-all duration-300 cursor-pointer"
          title={isPlaying ? "Mute Background Score" : "Play Ambient Venue Music"}
        >
          {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
          )}
        </button>
      </div>

      {/* Quick Soft Tooltip on First Load */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ delay: 4, duration: 0.5 }}
            className="absolute bottom-14 left-0 w-56 p-2.5 glass-card bg-luxury-black/90 text-[10px] rounded-lg border border-gold-900/30 text-gray-300 pointer-events-none"
          >
            <div className="flex gap-1.5 items-start">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
              <span>Tap the player to play custom synthesized Indian wedding venue ambient music.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
