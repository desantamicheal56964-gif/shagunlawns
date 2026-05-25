import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, PhoneCall, Sparkles, CheckCircle, Database, EyeOff, ShieldAlert, Trash2, Calendar, User, Phone, Check, MessageSquare } from "lucide-react";
import { Inquiry } from "../types";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "weddings",
    date: "",
    message: ""
  });

  // Client States
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastInquiry, setLastInquiry] = useState<Inquiry | null>(null);
  const [tappedInquiry, setTappedInquiry] = useState(false);

  // Administrative Panel States (To view saved local inquiries)
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [authError, setAuthError] = useState("");

  // Load inquiries on mount
  useEffect(() => {
    const saved = localStorage.getItem("shagun_inquiries");
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved inquiries:", e);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Core Basic validations
    if (!formData.name.trim()) return alert("Please specify your name.");
    if (formData.phone.trim().length < 10) return alert("Please specify a valid 10-digit phone number.");
    if (!formData.date) return alert("Please select a preferred event date.");

    setIsLoading(true);

    // Simulated network luxury lag
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: "inq_" + Math.random().toString(36).substr(2, 9),
        name: formData.name,
        phone: formData.phone,
        eventType: formData.eventType,
        date: formData.date,
        message: formData.message,
        timestamp: new Date().toLocaleString()
      };

      const updated = [newInquiry, ...inquiries];
      setInquiries(updated);
      localStorage.setItem("shagun_inquiries", JSON.stringify(updated));

      setLastInquiry(newInquiry);
      setIsLoading(false);
      setIsSuccess(true);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        eventType: "weddings",
        date: "",
        message: ""
      });
    }, 1800);
  };

  const handleAdminVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPass.trim().toUpperCase() === "SHAGUN77") {
      setIsAuthed(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect venue passcode! Hint: SHAGUN77");
    }
  };

  const clearInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    setInquiries(updated);
    localStorage.setItem("shagun_inquiries", JSON.stringify(updated));
  };

  const handleWhatsAppRedirect = () => {
    // Generate helpful template message
    const waText = encodeURIComponent(
      "Hello Shagun Lawns, I would like to inquire about booking your luxury venue for an event. Please provide pricing and calendar availability."
    );
    window.open(`https://wa.me/919999999999?text=${waText}`, "_blank");
  };

  return (
    <section id="inquiry" className="relative section-padding overflow-hidden bg-luxury-black">
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 radial-glow-gold opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 radial-glow-burgundy opacity-40 pointer-events-none" />

      {/* FLOATING WHATSAPP CHAT IN BULLET RIGHT CORNER */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <motion.button
          onClick={handleWhatsAppRedirect}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full p-4 shadow-[0_4px_20px_rgba(16,185,129,0.4)] border border-emerald-400/40 relative group cursor-pointer"
          title="Direct WhatsApp Inquiry"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25"></span>
          
          <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.905-6.99C16.558 1.876 14.077.842 11.44.842c-5.441 0-9.871 4.417-9.875 9.86-.001 1.765.46 3.49 1.336 5.011L1.82 20.917l5.228-1.371l-.401-.238zm11.758-6.196c-.3-.15-1.774-.875-2.05-.976-.275-.1-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.49-1.127-1.005-1.888-2.247-2.11-2.622-.224-.375-.023-.578.127-.727.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.491-.51-.675-.51-.174-.01-.374-.012-.574-.012-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.22 5.11 4.52.714.31 1.272.497 1.71.637.717.228 1.37.195 1.886.118.574-.085 1.774-.725 2.025-1.425.25-.7.25-1.3 1.75-1.425h-.001z"/>
          </svg>
        </motion.button>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Columns 1: Emotional Copy + Metadata Panel */}
          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-xs font-mono tracking-[0.4em] text-gold-500 uppercase block font-semibold">
                AVAILABILITY CHECK & INQUIRY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-widest text-white uppercase">
                Begin Your <span className="font-serif italic text-gold-300">Milestone</span>
              </h2>
              <div className="h-[1px] w-28 bg-gradient-to-r from-gold-500 to-transparent mx-auto lg:mx-0 mt-2"></div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed font-light text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              Submit your preferred dates, event style, and headcount preferences below. Our dedicated reservation concierges will review availability and revert with custom mood boards, culinary plans, and venue quotes within 24 business hours.
            </p>

            {/* Quick stats items */}
            <div className="grid grid-cols-3 gap-4 border-t border-b border-white/5 py-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <p className="text-gold-200 font-display text-2xl font-light">24 Hrs</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mt-1">Response Time</p>
              </div>
              <div className="text-center border-l border-r border-white/5">
                <p className="text-gold-200 font-display text-2xl font-light">1,500</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mt-1">Max Capacity</p>
              </div>
              <div className="text-center">
                <p className="text-emerald-400 font-display text-2xl font-light">Live</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mt-1">Valet Service</p>
              </div>
            </div>

            {/* Administration portal triggers discretely in corner */}
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => setIsAdminOpen(!isAdminOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/5 text-[9px] text-gray-500 hover:text-gold-400 hover:border-gold-500/20 tracking-wider font-mono uppercase transition-all duration-300 cursor-pointer"
              >
                <Database className="w-3.5 h-3.5" />
                <span>{isAdminOpen ? "Close Admin Shell" : "Inquiry Database Console"}</span>
              </button>
            </div>
          </div>

          {/* Column 2: Inquiry card container */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {!tappedInquiry ? (
                <motion.div
                  key="initial"
                  initial={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-6 sm:p-10 rounded-3xl border border-gold-900/25 shadow-2xl text-center space-y-6 flex flex-col justify-between min-h-[440px]"
                >
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="relative">
                        <Sparkles className="w-8 h-8 text-gold-400 animate-pulse" />
                        <div className="absolute inset-0 bg-gold-400 blur-md opacity-25 animate-pulse" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display text-2xl tracking-[0.1em] text-white uppercase font-light">
                        Plan Your Journey
                      </h3>
                      <p className="text-[10px] font-mono text-gold-500 uppercase tracking-[0.25em]">
                        The Royal Hospitality Suite
                      </p>
                    </div>
                    <div className="h-[1px] w-16 bg-gold-500/30 mx-auto" />
                    
                    <p className="text-xs text-gray-400 leading-relaxed font-light px-2">
                      Experience Lucknow's premier luxury wedding destination. Our grand lawns, air-conditioned banquet halls, and hand-tailored wedding spaces are perfect for your lifetime milestone.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-gray-300 font-mono text-left max-w-xs mx-auto">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
                        <span>40,000+ sq.ft lawns</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
                        <span>Vanity VIP suites</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
                        <span>Sangeet Stage setup</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
                        <span>Valet & security</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setTappedInquiry(true);
                      // Record auto-log to keep administrative panel dynamic
                      const newInquiry: Inquiry = {
                        id: "inq_" + Math.random().toString(36).substr(2, 9),
                        name: "Direct Concierge Access",
                        phone: "+91 99999 99999",
                        eventType: "Direct Connection",
                        date: new Date().toLocaleDateString(),
                        message: "User clicked 'Inquiry Now' to reveal premium contact details.",
                        timestamp: new Date().toLocaleString()
                      };
                      const updated = [newInquiry, ...inquiries];
                      setInquiries(updated);
                      localStorage.setItem("shagun_inquiries", JSON.stringify(updated));
                    }}
                    className="w-full bg-gradient-to-r from-gold-900 to-gold-600 text-black font-bold text-xs tracking-widest uppercase py-4 rounded-xl flex items-center justify-center gap-2 hover:from-gold-600 hover:to-gold-400 transition-all shadow-[0_4px_25px_rgba(223,181,38,0.3)] cursor-pointer hover:scale-[1.02]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Inquiry Now</span>
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="revealed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold-500/20 shadow-2xl space-y-6 min-h-[440px] flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="p-2.5 bg-gold-950/40 border border-gold-500/20 text-gold-400 rounded-full">
                        <PhoneCall className="w-6 h-6 animate-bounce" />
                      </div>
                    </div>
                    <div className="space-y-1 text-center">
                      <h3 className="font-display text-xl tracking-wider text-gold-400 uppercase font-light">
                        On-Site Concierge Active
                      </h3>
                      <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                        ESTABLISHED ROYAL PLANNERS
                      </p>
                    </div>
                    <div className="h-[1px] w-12 bg-white/5 mx-auto" />

                    <div className="space-y-4 pt-1">
                      {/* Direct Numbers Display */}
                      <div className="bg-luxury-black/60 border border-white/5 rounded-2xl p-4 text-center space-y-2">
                        <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">
                          Primary Direct Contact
                        </span>
                        <p className="text-lg font-mono font-semibold tracking-wider text-white">
                          +91 99999 99999
                        </p>
                        <p className="text-base font-mono tracking-wider text-gray-400 leading-none">
                          +91 88888 88888
                        </p>
                        <div className="pt-2">
                          <a
                            href="tel:+919999999999"
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 hover:bg-gold-500 hover:text-black hover:border-gold-300 border border-white/10 text-[10px] font-mono tracking-widest uppercase transition-all duration-300"
                          >
                            <Phone className="w-3 h-3" />
                            <span>Initiate Voice Call</span>
                          </a>
                        </div>
                      </div>

                      {/* WhatsApp Direct Message Block */}
                      <div className="bg-emerald-950/20 border border-emerald-500/10 rounded-2xl p-4 text-center space-y-3">
                        <div className="flex items-center justify-center gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                          <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                            WhatsApp Messenger Active
                          </span>
                        </div>
                        
                        <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                          Message our wedding coordinators immediately for instant digital invitations, pricing charts, and site catalogs.
                        </p>

                        <button
                          onClick={handleWhatsAppRedirect}
                          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-widest uppercase py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_4px_15px_rgba(16,185,129,0.3)] hover:scale-[1.01] cursor-pointer"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Message On WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setTappedInquiry(false)}
                    className="text-[10px] font-mono tracking-widest uppercase text-gray-500 hover:text-gold-400 transition"
                  >
                    ← Back to Venue Overview
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* ADMINISTRATIVE INQUIRY DATABASE PANEL SCREEN (Toggleable) */}
        <AnimatePresence>
          {isAdminOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-12 bg-luxury-gray/40 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-md overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
                <div>
                  <h4 className="font-display text-base tracking-widest text-gold-500 uppercase">
                    Inquiry database console
                  </h4>
                  <p className="text-[10px] font-mono text-gray-500">
                    ADMINISTRATOR PORTAL (LOCAL STORAGE REPOSITORY)
                  </p>
                </div>
                {isAuthed && (
                  <button
                    onClick={() => {
                      setIsAuthed(false);
                      setAdminPass("");
                    }}
                    className="text-xs font-mono text-rose-400 flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <EyeOff className="w-3.5 h-3.5" /> Log Out
                  </button>
                )}
              </div>

              {!isAuthed ? (
                /* Password validation */
                <form onSubmit={handleAdminVerify} className="max-w-md mx-auto space-y-4 py-4">
                  <div className="space-y-1.5 text-center">
                    <ShieldAlert className="w-8 h-8 text-rose-500 mx-auto" />
                    <p className="text-xs text-gray-400 font-light">
                      Please enter the Shagun Lawns venue passcode to inspect submitted leads.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      placeholder="Passcode (Try SHAGUN77)"
                      value={adminPass}
                      onChange={(e) => setAdminPass(e.target.value)}
                      className="flex-1 bg-luxury-black border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-red-500 tracking-widest text-center uppercase"
                    />
                    <button
                      type="submit"
                      className="px-6 bg-rose-950/60 hover:bg-rose-900 border border-rose-500/30 text-rose-400 font-mono text-xs rounded-xl transition cursor-pointer"
                    >
                      Verify
                    </button>
                  </div>
                  {authError && (
                    <p className="text-center text-[10px] font-mono text-rose-500">{authError}</p>
                  )}
                </form>
              ) : (
                /* List inquiries database */
                <div className="space-y-4">
                  {inquiries.length === 0 ? (
                    <p className="text-center text-xs text-gray-500 py-8 font-mono">
                      No inquiries found in this browser's local state. Submit the form above to capture leads!
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {inquiries.map((inq) => (
                        <div
                          key={inq.id}
                          className="bg-luxury-black/90 p-5 rounded-xl border border-white/5 space-y-3 shadow relative"
                        >
                          <button
                            onClick={() => clearInquiry(inq.id)}
                            className="absolute top-4 right-4 p-1.5 rounded-full text-gray-600 hover:text-rose-400 hover:bg-white/5 transition"
                            title="Delete this inquiry"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <div className="space-y-1">
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/20 text-gold-500">
                              {inq.eventType}
                            </span>
                            <h5 className="font-display text-sm tracking-wide text-white mt-2">
                              {inq.name}
                            </h5>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-gray-400">
                            <div>
                              <span className="text-gray-600">Phone:</span> {inq.phone}
                            </div>
                            <div>
                              <span className="text-gray-600">Date:</span> {inq.date}
                            </div>
                          </div>

                          {inq.message && (
                            <p className="text-xs text-gray-300 font-light bg-white/5 p-2.5 rounded border border-white/5">
                              {inq.message}
                            </p>
                          )}

                          <span className="text-[8px] font-mono text-gray-600 block text-right mt-1.5">
                            Created: {inq.timestamp}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
