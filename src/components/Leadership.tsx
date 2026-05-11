"use client";

import { motion } from "framer-motion";
import { Users, Award, Calendar, Zap, Globe, MessageSquare } from "lucide-react";

const IEEE_EVENTS = [
  { title: "Technical Workshops", desc: "Organizing hands-on sessions for peers on modern web tech and AI." },
  { title: "Hackathons", desc: "Leading collaborative development efforts for community-driven solutions." },
  { title: "Peer Mentorship", desc: "Fostering an environment of continuous learning and technical growth." }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="glass-card p-12 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden bg-[#08080a]/50">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest uppercase mb-8">
                <Users className="w-4 h-4" /> Leadership & Community
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">
                IEEE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Industrial Electronics</span> Society
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-xl font-medium text-white/80">Vice Chair — Student Chapter</span>
                </div>
                <p className="text-white/60 text-lg leading-relaxed font-light">
                  Bridging the gap between theory and industry. I lead a vibrant community of engineering students, organizing technical events and fostering a culture of innovation and collaboration.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-6">
              {IEEE_EVENTS.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Zap className="w-4 h-4 text-white/50 group-hover:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{event.title}</h3>
                  </div>
                  <p className="text-white/50 text-sm font-light leading-relaxed">{event.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
