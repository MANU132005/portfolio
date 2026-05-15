"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Sparkles, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  Star,
  Activity,
  Heart,
  Smile
} from 'lucide-react';

const RATING_OPTIONS = [
  { label: 'Loved the UI', emoji: '🔥', color: 'text-orange-500' },
  { label: 'Smooth Experience', emoji: '⚡', color: 'text-yellow-400' },
  { label: 'Premium Feel', emoji: '💎', color: 'text-blue-400' },
  { label: 'Impressive', emoji: '🚀', color: 'text-purple-400' },
  { label: 'Clean & Professional', emoji: '🎯', color: 'text-emerald-400' },
];

const INITIAL_FEEDBACK = [
  { id: 1, text: "Animations feel smooth 🔥", time: "2m ago" },
  { id: 2, text: "Very clean portfolio. Impressed.", time: "15m ago" },
  { id: 3, text: "Hero section looks premium 💎", time: "1h ago" },
  { id: 4, text: "UI design is top-tier 🚀", time: "3h ago" },
  { id: 5, text: "Smooth navigation ngl ⚡", time: "5h ago" },
];

export default function Feedback() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [liveFeedback, setLiveFeedback] = useState(INITIAL_FEEDBACK);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedbackText.trim()) {
      setIsSubmitting(true);
      setTimeout(() => {
        const ratingEmoji = selectedRating !== null ? RATING_OPTIONS[selectedRating].emoji : '✨';
        const newEntry = {
          id: Date.now(),
          text: `${feedbackText} ${ratingEmoji}`,
          time: "Just now"
        };
        setLiveFeedback([newEntry, ...liveFeedback.slice(0, 8)]);
        setIsSubmitting(false);
        setFeedbackText('');
        setSelectedRating(null);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }, 1000);
    }
  };

  return (
    <section id="feedback" className="py-24 relative overflow-hidden bg-[#030305]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Left: Simplified Input Area */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-[#030305] bg-zinc-800 text-[8px] flex items-center justify-center font-bold text-zinc-500">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">+48 Reviews this week</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                What <span className="text-blue-400">stood out?</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed font-light">
                Built carefully. Reviewed honestly. Your perspective shapes what evolves next in this ecosystem.
              </p>

              <div className="space-y-8">
                {/* Clean Rating Chips */}
                <div className="flex flex-wrap gap-3">
                  {RATING_OPTIONS.map((option, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedRating(i)}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 ${
                        selectedRating === i 
                          ? 'bg-blue-500/10 border-blue-500/40 text-blue-400' 
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/20'
                      }`}
                    >
                      <span className="text-base">{option.emoji}</span>
                      <span className="text-xs font-semibold tracking-wide">{option.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Simple Textarea */}
                <div className="relative">
                  <textarea
                    placeholder="Any thoughts or suggestions?"
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-white placeholder:text-zinc-600 outline-none focus:border-blue-500/40 focus:bg-white/[0.08] transition-all min-h-[140px] text-base leading-relaxed"
                  />
                  
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={handleSubmit}
                      disabled={!feedbackText.trim() || isSubmitting}
                      className="group flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white text-black font-bold transition-all disabled:opacity-20 hover:bg-zinc-200 active:scale-95"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Feedback'}</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Elegant Live Feed */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <h3 className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Live Community Responses</h3>
            </div>

            <div className="relative min-h-[300px]">
              <div className="flex flex-wrap gap-3">
                <AnimatePresence mode="popLayout">
                  {liveFeedback.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 30,
                        delay: index * 0.05 
                      }}
                      className="px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3 hover:bg-white/[0.06] hover:border-white/10 transition-colors"
                    >
                      <span className="text-sm text-white font-medium">{item.text}</span>
                      <span className="text-[10px] font-mono text-zinc-600 shrink-0">{item.time}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Success Overlay Replacement */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 flex items-center gap-3 text-emerald-400 font-medium"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <ShieldCheck size={18} />
                  </div>
                  <span>Received! Thanks for being awesome.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Subtle branding */}
      <div className="container mx-auto px-6 mt-24 opacity-20 border-t border-white/5 pt-8 flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-600">
        <span>MANURIKKUMALLA // ECOSYSTEM</span>
        <span>2030 DESIGN STANDARDS</span>
      </div>
    </section>
  );
}
