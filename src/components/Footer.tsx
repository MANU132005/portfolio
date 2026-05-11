export default function Footer() {
  return (
    <footer className="py-12 relative z-10 border-t border-white/5 bg-[#030305]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Designed & Engineered by Manu Rikkumalla.
        </div>
        
        <div className="flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-white/40">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
