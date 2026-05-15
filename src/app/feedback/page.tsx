'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  Terminal,
  User,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

const RATING_OPTIONS = [
  { label: 'Loved the UI', emoji: '🔥' },
  { label: 'Smooth Experience', emoji: '⚡' },
  { label: 'Premium Feel', emoji: '💎' },
  { label: 'Impressive', emoji: '🚀' },
  { label: 'Clean & Professional', emoji: '🎯' },
];

export default function FeedbackPage() {
  const [step, setStep] = useState(0); // 0: Name, 1: Feedback, 2: Success
  const [name, setName] = useState('');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load saved name from local storage if exists
  useEffect(() => {
    const savedName = localStorage.getItem('user_name');
    if (savedName) setName(savedName);
  }, []);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem('user_name', name);
      setStep(1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedbackText.trim()) {
      setIsSubmitting(true);
      
      // Simulate storage nicely
      setTimeout(() => {
        const feedbackData = {
          id: Date.now(),
          name: name,
          rating: selectedRating !== null ? RATING_OPTIONS[selectedRating].label : 'Neutral',
          text: feedbackText,
          timestamp: new Date().toISOString()
        };
        
        // Store in localStorage for demonstration
        const existingFeedback = JSON.parse(localStorage.getItem('all_feedback') || '[]');
        localStorage.setItem('all_feedback', JSON.stringify([feedbackData, ...existingFeedback]));
        
        setIsSubmitting(false);
        setStep(2);
      }, 1500);
    }
  };

  return (
    <main className="min-h-screen bg-[#030305] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed top-8 left-8 z-50">
        <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Return to Orbit</span>
        </Link>
      </div>

      <div className="w-full max-w-xl relative z-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-8">
                <User size={32} className="text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Who's visiting?</h1>
              <p className="text-zinc-500 text-lg mb-10">I'd love to know your name before we start.</p>
              
              <form onSubmit={handleNextStep} className="space-y-6">
                <div className="relative">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Enter your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-xl text-center outline-none focus:border-blue-500/40 focus:bg-white/[0.08] transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!name.trim()}
                  className="group w-full py-5 rounded-2xl bg-white text-black font-bold text-lg transition-all hover:bg-zinc-200 active:scale-[0.98] disabled:opacity-20"
                >
                  Continue to Feedback
                </button>
              </form>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-feedback"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="mb-10 text-center">
                <h2 className="text-4xl font-bold mb-4 tracking-tight">Thanks, {name.split(' ')[0]}!</h2>
                <p className="text-zinc-500 text-lg">What did you think of the engineering experience?</p>
              </div>

              <div className="space-y-8">
                {/* Rating Chips */}
                <div className="flex flex-wrap justify-center gap-3">
                  {RATING_OPTIONS.map((option, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedRating(i)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                        selectedRating === i 
                          ? 'bg-blue-500/10 border-blue-500/40 text-blue-400' 
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/20'
                      }`}
                    >
                      <span className="text-lg">{option.emoji}</span>
                      <span className="text-sm font-semibold">{option.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Textarea */}
                <div className="glass-card rounded-[2.5rem] p-8 border border-white/5">
                  <textarea
                    autoFocus
                    placeholder="Your thoughts stand out here..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="w-full bg-transparent border-none text-white text-xl font-light placeholder:text-zinc-700 outline-none resize-none min-h-[180px] leading-relaxed"
                  />
                  
                  <div className="mt-8 flex justify-between items-center">
                    <button 
                      onClick={() => setStep(0)}
                      className="text-zinc-500 hover:text-white transition-colors text-sm font-medium"
                    >
                      Not {name}? Change name
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!feedbackText.trim() || isSubmitting}
                      className="group flex items-center gap-3 px-10 py-4 rounded-2xl bg-white text-black font-bold transition-all disabled:opacity-20 active:scale-95"
                    >
                      <span>{isSubmitting ? 'Storing Feedback...' : 'Send Transmission'}</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mx-auto mb-8">
                <ShieldCheck size={40} className="text-blue-400" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Feedback Stored!</h2>
              <p className="text-zinc-500 text-lg mb-12 max-w-sm mx-auto leading-relaxed">
                Thank you, {name}. Your perspective has been securely transmitted and integrated into the ecosystem.
              </p>
              
              <Link href="/">
                <button className="px-12 py-5 rounded-2xl bg-white text-black font-bold hover:bg-zinc-200 transition-all active:scale-[0.98]">
                  Return to Dashboard
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Branding */}
      <div className="fixed bottom-8 w-full flex justify-center opacity-20 pointer-events-none">
        <div className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase">
          MANURIKKUMALLA // ECOSYSTEM // 2030.SYS
        </div>
      </div>
    </main>
  );
}
