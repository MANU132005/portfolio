"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHRASES = [
  "Full Stack Developer",
  "Cloud & AI Enthusiast",
  "Building scalable applications"
];

export default function TypingAnimation() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(80);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = PHRASES[index];
      
      if (!isDeleting) {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        setSpeed(80); // Typing speed
        
        if (displayedText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2500); // Wait before deleting
        }
      } else {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        setSpeed(40); // Deleting speed
        
        if (displayedText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % PHRASES.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, speed]);

  return (
    <div className="flex items-center gap-1.5 h-8">
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-lg md:text-xl text-white/50 font-medium tracking-tight"
      >
        {displayedText}
      </motion.span>
      
      {/* Minimalist Cursor */}
      <motion.div
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="w-[2px] h-5 bg-blue-400/60 blur-[1px] shadow-[0_0_8px_rgba(59,130,246,0.4)]"
      />
    </div>
  );
}
