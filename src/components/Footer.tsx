import { Mail, Phone } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="py-20 relative z-10 border-t border-white/5 bg-[#030305]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase">
              © {new Date().getFullYear()} Designed & Engineered by
            </div>
            <div className="text-white font-bold tracking-tighter text-2xl">
              Manu <span className="text-white/30">Rikkumalla</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <a 
              href="https://github.com/MANU132005" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/40 hover:text-white transition-all group"
            >
              <Github size={14} className="group-hover:text-blue-400" />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/manu-rikkumalla-289133290/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/40 hover:text-white transition-all group"
            >
              <Linkedin size={14} className="group-hover:text-blue-400" />
              LinkedIn
            </a>
            <a 
              href="mailto:manurikkumalla13@gmail.com" 
              className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/40 hover:text-white transition-all group"
            >
              <Mail size={14} className="group-hover:text-blue-400" />
              Email
            </a>
            <a 
              href="tel:+919618510181" 
              className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/40 hover:text-white transition-all group"
            >
              <Phone size={14} className="group-hover:text-emerald-400" />
              Contact
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.02] text-center">
          <p className="text-[9px] font-mono text-white/10 uppercase tracking-[0.5em]">
            Built with Next.js • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
