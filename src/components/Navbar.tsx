"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Mail } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Scrolled state for styling
    setScrolled(latest > 50);
    
    // Visibility logic: Hide on scroll down, show on scroll up or at top
    if (latest < 50) {
      setVisible(true);
    } else if (latest > previous && latest > 150) {
      setVisible(false);
      setMobileMenuOpen(false); // Close mobile menu when scrolling down
    } else if (latest < previous) {
      setVisible(true);
    }
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: visible ? 0 : -120,
        opacity: visible ? 1 : 0 
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center py-6 px-4 pointer-events-none"
    >
      <motion.nav
        animate={{
          width: scrolled ? (mobileMenuOpen ? "95%" : "90%") : "100%",
          maxWidth: scrolled ? "1000px" : "1200px",
          padding: scrolled ? "8px 16px" : "12px 24px",
          backgroundColor: scrolled || mobileMenuOpen ? "rgba(3, 3, 5, 0.85)" : "transparent",
          backdropFilter: scrolled || mobileMenuOpen ? "blur(12px)" : "blur(0px)",
          border: scrolled || mobileMenuOpen ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
          boxShadow: scrolled || mobileMenuOpen ? "0 25px 50px -12px rgba(0,0,0,0.5)" : "none",
          borderRadius: mobileMenuOpen ? "24px" : "9999px"
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex flex-col items-stretch relative will-change-transform"
      >
        <div className="flex items-center justify-between w-full">
          <Link 
            href="#home" 
            onClick={() => {
              setActive("Home");
              setMobileMenuOpen(false);
            }}
            className="text-[9px] md:text-xs font-bold tracking-[0.2em] text-white/80 hover:text-white transition-all duration-500 flex items-center gap-2 group shrink-0"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform" />
            <span className="group-hover:tracking-[0.25em] transition-all duration-500 uppercase">MANURIKKUMALLA</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 mx-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className="relative px-4 py-2 text-[10px] font-mono tracking-widest uppercase text-white/40 hover:text-white transition-colors rounded-full"
              >
                {active === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/5 rounded-full border border-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4 px-4 py-2 border-r border-white/5 mr-2">
              <a 
                href="https://github.com/MANU132005" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/40 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              >
                <Github size={16} />
              </a>
              <a 
                href="https://www.linkedin.com/in/manu-rikkumalla-289133290/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/40 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="mailto:manurikkumalla13@gmail.com" 
                className="text-white/40 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              >
                <Mail size={16} />
              </a>
            </div>

            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "px-4 py-2 md:px-6 md:py-2.5 text-[10px] font-mono uppercase tracking-[0.2em] rounded-full transition-all duration-500 shrink-0",
                "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              )}
            >
              Connect
            </Link>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/5 transition-all"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 py-6 mt-2 border-t border-white/5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActive(link.name);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "px-4 py-4 text-xs font-mono tracking-[0.3em] uppercase transition-all duration-300 rounded-xl",
                      active === link.name ? "bg-white/5 text-white" : "text-white/40 hover:text-white/70"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="sm:hidden mt-4 px-4 py-5 text-center text-xs font-mono uppercase tracking-[0.3em] rounded-xl bg-white text-black font-bold"
                >
                  Connect
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}

