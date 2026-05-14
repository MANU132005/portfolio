"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundSystem() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX.toFixed(1);
      const y = e.clientY.toFixed(1);
      document.documentElement.style.setProperty("--mouse-x", `${x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${y}px`);
      document.documentElement.style.setProperty("--mouse-x-pct", `${(e.clientX / window.innerWidth * 100).toFixed(2)}%`);
      document.documentElement.style.setProperty("--mouse-y-pct", `${(e.clientY / window.innerHeight * 100).toFixed(2)}%`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#030305]">
      {/* Mesh Gradient Layers */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
      </div>

      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.015] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {!isMobile && (
        <>
          {/* Cinematic Ambient Glows - CSS Variable Driven */}
          <div 
            className="absolute top-[-20%] left-[-10%] w-[65vw] h-[65vw] rounded-full bg-blue-500/10 blur-[120px] mix-blend-screen opacity-80 transition-transform duration-700 ease-out"
            style={{ 
              transform: `translate(calc(var(--mouse-x) * 0.04), calc(var(--mouse-y) * 0.04))`
            }}
          />
          
          <div 
            className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-indigo-600/15 blur-[140px] mix-blend-screen opacity-70 transition-transform duration-1000 ease-out"
            style={{ 
              transform: `translate(calc(var(--mouse-x) * -0.03), calc(var(--mouse-y) * -0.03))`
            }}
          />

          {/* Atmospheric Cursor Follower */}
          <div 
            className="absolute inset-0 opacity-40 transition-opacity duration-500"
            style={{ 
              background: `radial-gradient(circle 800px at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.06), transparent 80%)`
            }}
          />
        </>
      )}

      {/* Ultra Soft Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030305]/5 to-[#030305] opacity-95" />
      
      {/* Subtle Scanline - CSS Animation only */}
      <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent z-10 animate-scanline" />
    </div>
  );
}
