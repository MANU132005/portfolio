"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileCode2, Database, Zap, Shield, ChevronRight, LayoutTemplate, Activity, Server, ArrowRight, GitMerge, Blocks, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    id: "01",
    title: "SignConnect",
    description: "A flagship AI-powered accessibility ecosystem bridging the communication gap for the hearing impaired. Built with a high-performance computer vision pipeline for real-time sign language translation.",
    tech: ["Python", "TensorFlow", "React", "Azure Cloud", "OpenCV"],
    metrics: [
      { label: "Accuracy", value: "98.2%", icon: <Zap className="w-4 h-4 text-yellow-400" /> },
      { label: "Latency", value: "32ms", icon: <Activity className="w-4 h-4 text-blue-400" /> },
      { label: "Impact", value: "Accessibility", icon: <Shield className="w-4 h-4 text-emerald-400" /> }
    ],
    color: "from-blue-600/20 to-indigo-600/20",
    borderGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]",
    deepDive: [
      { title: "The Problem", content: "Communication barriers for sign language users in everyday service scenarios remain a massive accessibility gap. Existing tools often require expensive hardware or suffer from high latency." },
      { title: "Why It Matters", content: "SignConnect democratizes accessibility by transforming any device with a camera into a real-time translator, empowering users in retail, healthcare, and daily interactions." },
      { title: "Architecture", content: "Engineered a hybrid inference model. Landmark extraction occurs on the edge via TensorFlow.js, while complex gesture sequence prediction is handled by a cloud-hosted LSTM model." },
      { title: "AI Integration", content: "Utilized MediaPipe for high-fidelity hand tracking and trained a custom LSTM neural network on over 50,000 frames of dynamic sign language data for fluid translation." },
      { title: "Technical Challenge", content: "Optimizing the model for mobile browser environments while maintaining high accuracy in varying lighting conditions and backgrounds." },
      { title: "Deployment", content: "Deployed as a scalable cloud-native application on Azure, utilizing Edge Functions for global low-latency delivery of the frontend and ML weights." },
      { title: "Scalability", content: "Designed a stateless architecture that allows the inference engine to scale horizontally, supporting thousands of concurrent real-time translation streams." },
      { title: "Engineering Tradeoffs", content: "Traded off model depth for inference speed. A slightly simpler model architecture allowed us to hit the 30fps target required for natural communication." },
      { title: "Lessons Learned", content: "The most powerful AI is useless if the UI doesn't respect the user's focus. Minimalist design was critical to prevent cognitive overload during translation." },
      { title: "Future Roadmap", content: "Implementing bidirectional communication with a real-time 3D avatar that translates speech back into sign language." }
    ]
  },
  {
    id: "02",
    title: "TaxPal",
    description: "An intelligent SaaS financial engine designed to automate complex tax calculations for independent contractors. Focused on precision, security, and intuitive data visualization.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
    metrics: [
      { label: "Precision", value: "100%", icon: <Zap className="w-4 h-4 text-yellow-400" /> },
      { label: "Security", value: "AES-256", icon: <Database className="w-4 h-4 text-blue-400" /> },
      { label: "Efficiency", value: "SaaS", icon: <Server className="w-4 h-4 text-emerald-400" /> }
    ],
    color: "from-emerald-600/20 to-teal-600/20",
    borderGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]",
    deepDive: [
      { title: "Problem Solved", content: "Independent contractors often struggle with fragmented financial data and complex tax brackets. TaxPal consolidates this into a single, automated engine." },
      { title: "Architecture Decisions", content: "Chose a server-side calculation engine using Next.js Server Actions to ensure sensitive financial formulas remain secure and never reach the client side." },
      { title: "Technical Challenges", content: "Handling floating-point precision issues in JavaScript. Solved by processing all currency calculations as integers (cents) throughout the entire pipeline." },
      { title: "Database Logic", content: "Utilized a strictly normalized PostgreSQL schema to handle multi-currency transactions and dynamic tax law updates across different regions." },
      { title: "Scalability", content: "Database designed with horizontal scaling in mind, supporting multi-tenant organizational structures for growing businesses." },
      { title: "Lessons Learned", content: "When building financial software, edge cases are the norm. Comprehensive unit testing for every tax formula was the most critical part of the build." }
    ]
  },
  {
    id: "03",
    title: "AUTI-CURE",
    description: "A specialized digital platform built for autism care and community support. Designed with strict accessibility standards and a calming, distraction-free environment.",
    tech: ["React", "Node.js", "Express", "MongoDB", "A11y"],
    metrics: [
      { label: "A11y Score", value: "100", icon: <Zap className="w-4 h-4 text-yellow-400" /> },
      { label: "Latency", value: "45ms", icon: <Database className="w-4 h-4 text-blue-400" /> },
      { label: "Impact", value: "Social", icon: <Shield className="w-4 h-4 text-emerald-400" /> }
    ],
    color: "from-purple-600/20 to-pink-600/20",
    borderGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)]",
    deepDive: [
      { title: "The Problem", content: "Digital resources for autism care often suffer from cluttered interfaces that cause sensory overload. There was a lack of a centralized, safe digital space." },
      { title: "Product Vision", content: "To create a 'calm tech' environment that prioritizes user well-being over engagement metrics, focusing on accessibility and clarity." },
      { title: "AI Integration", content: "Implemented NLP-based sentiment analysis on community boards to automatically flag and moderate distressing or toxic content in real-time." },
      { title: "Technical Challenges", content: "Maintaining a high-performance real-time community forum while adhering to strict AAA accessibility standards for screen readers and keyboard navigation." },
      { title: "Lessons Learned", content: "Designing for neurodiversity makes the product better for everyone. Clarity and predictability are the most important UI principles." }
    ]
  },
  {
    id: "04",
    title: "Viaagoo",
    description: "A modern intelligent travel assistant designed to optimize trip planning and navigation through personalized AI-driven recommendations.",
    tech: ["Next.js", "Go", "Redis", "Azure Maps API", "AI Model"],
    metrics: [
      { label: "Speed", value: "Realtime", icon: <Zap className="w-4 h-4 text-yellow-400" /> },
      { label: "Accuracy", value: "92%", icon: <Activity className="w-4 h-4 text-blue-400" /> },
      { label: "System", value: "Distributed", icon: <Server className="w-4 h-4 text-emerald-400" /> }
    ],
    color: "from-orange-600/20 to-red-600/20",
    borderGlow: "group-hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.5)]",
    deepDive: [
      { title: "Problem Solved", content: "Fragmented travel planning across multiple apps often leads to decision fatigue. Viaagoo unifies the experience with a single intelligent assistant." },
      { title: "Architecture", content: "Built a high-performance Go-based backend for real-time route optimization, utilizing Redis for ultra-fast caching of location-based data." },
      { title: "AI Integration", content: "Leveraged an LLM-based engine to process natural language travel preferences and generate personalized itineraries in seconds." },
      { title: "Cloud Thinking", content: "Utilized Azure Maps API for global geographic data and deployed the service across multiple regions to ensure low-latency access for travelers." },
      { title: "Technical Challenge", content: "Optimizing the routing algorithm to handle complex multi-stop trips while considering real-time traffic and transit data." }
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
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-16" />
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Engineering <span className="text-white/30">Case Studies</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-2xl text-xl font-light">
            Deep architectural dives into complex product engineering. Moving beyond UI to explore scalability, performance, and system design.
          </p>
        </motion.div>

        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn("group relative rounded-[2.5rem] bg-[#0a0a0e] border border-white/5 overflow-hidden transition-all duration-700", project.borderGlow)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row border-b border-white/5">
                {/* Visual Architecture Side */}
                <div className="w-full lg:w-5/12 p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 bg-[#050508]/50">
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity duration-1000 group-hover:opacity-40", project.color)} />
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
                  
                  <div className="relative z-10 mb-12">
                     <div className="flex items-center justify-between mb-4">
                      <div className="text-white/40 font-mono text-sm tracking-widest uppercase">System {project.id}</div>
                      <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                        <FileCode2 className="w-4 h-4 text-white/70" />
                      </button>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tighter mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-white/70 border border-white/5 backdrop-blur-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Diagram Visualization */}
                  <div className="relative z-10 w-full aspect-video rounded-2xl border border-white/10 bg-[#020203]/80 backdrop-blur-xl p-6 flex flex-col justify-between shadow-2xl">
                    <div className="text-[10px] text-white/40 font-mono tracking-widest uppercase mb-4">
                      {project.id === "01" ? "AI Inference Pipeline" : "System Architecture"}
                    </div>
                    
                    <div className="flex-1 flex items-center justify-between relative px-4">
                      {/* Connection Lines */}
                      <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
                      <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent -translate-y-1/2 z-0" 
                      />
                      
                      {project.id === "01" ? (
                        <>
                          {/* AI Pipeline Flow: Camera -> AI Node -> UI */}
                          <div className="relative z-10 flex flex-col items-center gap-2">
                             <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur-md">
                               <LayoutTemplate className="w-5 h-5 text-white/50" />
                             </div>
                             <span className="text-[8px] font-mono text-white/30">Camera</span>
                          </div>
                          
                          <div className="relative z-10 flex flex-col items-center gap-2">
                             <motion.div 
                               animate={{ scale: [1, 1.1, 1] }}
                               transition={{ repeat: Infinity, duration: 2 }}
                               className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                             >
                               <Cpu className="w-6 h-6 text-blue-400" />
                             </motion.div>
                             <span className="text-[8px] font-mono text-blue-400/50 uppercase tracking-tighter">TF.js / LSTM</span>
                          </div>

                          <div className="relative z-10 flex flex-col items-center gap-2">
                             <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur-md">
                               <Blocks className="w-5 h-5 text-white/50" />
                             </div>
                             <span className="text-[8px] font-mono text-white/30">Output</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="relative z-10 w-12 h-12 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur-md">
                            <LayoutTemplate className="w-5 h-5 text-white/70" />
                          </div>
                          <div className="relative z-10 w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            <Server className="w-6 h-6 text-blue-400" />
                          </div>
                          <div className="relative z-10 w-12 h-12 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur-md">
                            <Database className="w-5 h-5 text-white/70" />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* High-Level Overview Side */}
                <div className="w-full lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center relative z-10 bg-transparent">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm text-white/50 uppercase tracking-widest mb-3 font-mono">Product Goal</h4>
                      <p className="text-white/80 text-lg leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                       {project.metrics.map((metric, idx) => (
                         <div key={idx} className="bg-white/[0.02] rounded-2xl p-5 border border-white/5">
                           <div className="flex items-center gap-2 mb-3">
                             {metric.icon}
                             <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">{metric.label}</span>
                           </div>
                           <div className="text-xl font-bold text-white tracking-tight">{metric.value}</div>
                         </div>
                       ))}
                    </div>

                    <div className="pt-4">
                      <button 
                        onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                        className="group/btn flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 text-white font-mono text-sm uppercase tracking-wider rounded-full hover:bg-white/10 transition-colors w-full justify-center"
                      >
                        {expandedId === project.id ? "Close Engineering Documentation" : "Read Engineering Documentation"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engineering Deep Dive Accordion */}
              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden bg-[#050508]/80 backdrop-blur-2xl"
                  >
                    <div className="p-8 lg:p-12 border-t border-white/5">
                      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {project.deepDive.map((item, idx) => (
                          <div key={idx} className="break-inside-avoid glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors bg-white/[0.01]">
                            <div className="flex items-center gap-2 mb-3 text-white/40 font-mono text-[10px] uppercase tracking-widest">
                              <Blocks className="w-3.5 h-3.5 text-blue-400" /> {item.title}
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed">{item.content}</p>
                          </div>
                        ))}
                      </div>
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
