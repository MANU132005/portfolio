"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-8 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-10">
              The Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Evolution.</span>
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-3xl">
              <p>
                My journey into technology began in the labs of Electrical and Electronics Engineering (EEE). While I was mastering circuit analysis and power systems, I became fascinated by how logic gates translated into complex software behavior. This curiosity led me to a minor in AI & Machine Learning, which served as the bridge from physical hardware to intelligent software systems.
              </p>
              <p>
                I don't just see myself as a developer, but as a product engineer. My evolution from building simple frontend components to architecting full-stack cloud ecosystems has been driven by a singular goal: building digital products that solve real-world problems at scale.
              </p>
              <p>
                Today, I focus on the intersection of Cloud Engineering and AI integration. Whether it's optimizing an Azure deployment or refining a computer vision pipeline, I approach every project with a mindset of scalability, accessibility, and high-performance design.
              </p>
              <p className="text-white/40 italic text-base md:text-lg">
                "Engineering is not just about writing code; it's about architecting intelligent systems that feel human-centric and operate with industrial-grade reliability."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
