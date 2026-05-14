"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Blocks } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";

const PROJECTS = [
  {
    id: "01",
    title: "Viaagoo",
    timeline: "2–3 weeks",
    description: "An intelligent travel-planning platform designed to simplify complex trip logistics through personalized itineraries and budget-based recommendations.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    role: "Frontend Developer",
    image: "/viaagoo.png",
    color: "from-blue-600/20 to-cyan-600/20",
    borderGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)]",
    deepDive: [
      { title: "Project Goal", content: "Built as a practice in frontend engineering, Viaagoo unifies trip planning into a single interactive flow, focusing on clean travel UX and mobile-first responsiveness." },
      { title: "Core Features", content: "Personalized trip generation based on group size, budget preference, and destination types with interactive itinerary simulation." },
      { title: "Technical Challenge", content: "Maintaining complex state across a multi-step travel form while ensuring a lightweight and snappy user experience without heavy frameworks." },
      { title: "Learning Outcome", content: "Gained deep proficiency in JavaScript DOM manipulation, event handling, and structured CSS layout patterns." },
      { title: "Future Roadmap", content: "Integration with live travel APIs for real-time flight data and AI-driven predictive packing lists." }
    ]
  },
  {
    id: "02",
    title: "AutiCure",
    timeline: "1–2 months",
    description: "A socially-driven therapeutic ecosystem for individuals with Autism, utilizing immersive digital environments to support life-skill development and emotional regulation.",
    tech: ["HTML", "CSS", "JavaScript", "Unity", "Unreal Engine", "AutoCAD"],
    role: "UI/UX Developer & Prototyper",
    image: "/auticure.png",
    color: "from-purple-600/20 to-indigo-600/20",
    borderGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(139,92,246,0.5)]",
    deepDive: [
      { title: "The Mission", content: "Collaborated with Tapas School and Autism Ashram to build a platform that uses familiar digital environments to teach life skills in a safe, repeatable way." },
      { title: "Design System", content: "Engineered an accessibility-first UI with a calming color palette, high-contrast options, and predictable interaction patterns to prevent sensory overload." },
      { title: "Collaboration", content: "Worked closely with educators at NIEPID to validate adaptive learning modules that adjust based on the user's progress and comfort level." },
      { title: "Technical Focus", content: "Explored the intersection of web interfaces and 3D simulations (Unity/Unreal) to create immersive 'home-environment' life skill practice sessions." },
      { title: "Future Scaling", content: "Planning to implement VR-ready modules and deeper emotional engagement tools using computer vision for sentiment tracking." }
    ]
  },
  {
    id: "03",
    title: "Drowsiness Detector",
    timeline: "1–2 weeks",
    description: "A safety-focused automotive interface concept designed to monitor driver fatigue and provide real-time road safety alerts.",
    tech: ["HTML", "CSS", "JavaScript", "UI Simulation"],
    role: "Lead Frontend Developer",
    image: "/drowsiness.png",
    color: "from-red-600/20 to-orange-600/20",
    borderGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(239,68,68,0.5)]",
    deepDive: [
      { title: "Core Concept", content: "Inspired by real-world AI monitoring systems, this project simulates a vehicle telemetry dashboard that tracks blink rates and provides tiered safety warnings." },
      { title: "Alert System", content: "Engineered a responsive notification pipeline that delivers visual, auditory, and text alerts based on simulated driver fatigue levels." },
      { title: "UI Philosophy", content: "Focused on high-readability night-mode aesthetics, ensuring critical safety information is prominent without distracting the driver." },
      { title: "Challenge", content: "Simulating complex hardware-interfaced telemetry data solely through frontend logic while maintaining a believable user experience." },
      { title: "Learning", content: "Learned the nuances of time-based state management and event-driven alerting systems in high-stakes UI contexts." }
    ]
  },
  {
    id: "04",
    title: "TaxPal",
    timeline: "4–6 weeks",
    description: "A premium fintech and personal finance platform for freelancers, focusing on tax estimation, budget tracking, and financial analytics.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "API Integration"],
    role: "Lead Frontend Developer",
    image: "/taxpal.png",
    color: "from-emerald-600/20 to-teal-600/20",
    borderGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]",
    deepDive: [
      { title: "Contribution", content: "Architected the dashboard UI and integrated core APIs for dynamic data visualization, ensuring a seamless flow between raw data and financial insights." },
      { title: "Complexity", content: "Developed a unified event calendar and tax reminder system that pulls real-time data to provide freelancers with a clear financial roadmap." },
      { title: "Architecture", content: "Utilized Next.js for its robust performance and TypeScript for type-safe financial calculations throughout the platform." },
      { title: "Major Challenge", content: "Visualizing quarterly tax estimations and fluctuating income streams without overwhelming the user with raw spreadsheets." },
      { title: "Lessons Learned", content: "The critical importance of data precision and clear visual hierarchy in fintech products." }
    ]
  }
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-16" />
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Project <span className="text-white/30">Showcase</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-2xl text-xl font-light">
            A collection of meaningful engineering projects built through curiosity, learning, and practical problem solving.
          </p>
        </motion.div>

        <div className="space-y-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn("group relative rounded-[3rem] bg-[#0a0a0e] border border-white/5 overflow-hidden transition-all duration-700", project.borderGlow)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row">
                {/* Visual Side */}
                <div className="w-full lg:w-1/2 relative aspect-video lg:aspect-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-40 mix-blend-overlay z-10", project.color)} />
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent z-10" />
                  
                  <div className="absolute top-8 left-8 z-20">
                    <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/50 uppercase tracking-widest">
                      {project.timeline}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-10">
                  <div className="space-y-8">
                    <div>
                      <div className="text-white/30 font-mono text-[10px] tracking-[0.3em] uppercase mb-4">Project {project.id} — {project.role}</div>
                      <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tighter mb-6">{project.title}</h3>
                      <p className="text-white/60 text-lg leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-4 py-2 rounded-xl text-xs font-medium bg-white/5 text-white/40 border border-white/5 backdrop-blur-md hover:text-white hover:border-white/20 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6">
                      <button 
                        onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                        className="group/btn flex items-center gap-4 text-white font-mono text-xs uppercase tracking-[0.2em] hover:text-blue-400 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-blue-400 group-hover/btn:bg-blue-400/10 transition-all">
                          {expandedId === project.id ? <Blocks className="w-4 h-4 rotate-45" /> : <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />}
                        </div>
                        {expandedId === project.id ? "Close Case Study" : "View Case Study"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Accordion */}
              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden bg-[#050508]/60 backdrop-blur-md border-t border-white/5 will-change-[height,opacity]"
                  >
                    <div className="p-10 lg:p-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                      {project.deepDive.map((item, idx) => (
                        <div key={idx} className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            <h4 className="text-[10px] text-white/30 font-mono uppercase tracking-[0.3em]">{item.title}</h4>
                          </div>
                          <p className="text-white/50 text-sm leading-relaxed font-light">{item.content}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
