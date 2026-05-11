"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundSystem() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#030305]">
      {/* Mesh Gradient Layers */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Dynamic Grid Pattern with Mesh Blending */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Cinematic Ambient Glows - Mouse Reactive */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.04,
          y: mousePosition.y * 0.04,
        }}
        transition={{ type: "spring", damping: 100, stiffness: 40, mass: 2 }}
        className="absolute top-[-20%] left-[-10%] w-[65vw] h-[65vw] rounded-full bg-blue-500/10 blur-[150px] mix-blend-screen opacity-80"
      />
      
      <motion.div
        animate={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
        }}
        transition={{ type: "spring", damping: 120, stiffness: 30, mass: 3 }}
        className="absolute bottom-[-15%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-indigo-600/15 blur-[180px] mix-blend-screen opacity-70"
      />

      {/* Atmospheric Cursor Follower - Mesh Light */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: `radial-gradient(circle 1000px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.08), transparent 80%)`
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />

      {/* Ultra Soft Noise & Matte Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Cinematic Vignette & Depth Layering */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030305]/10 to-[#030305] opacity-95" />
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(3,3,5,1)]" />
      
      {/* Subtle Scanline / Telemetry Line */}
      <motion.div 
        animate={{ y: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent z-10"
      />
    </div>
  );
}
