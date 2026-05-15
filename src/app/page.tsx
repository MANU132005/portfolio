import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";

// Lazy load non-critical sections for faster initial paint and lower bundle size
const Philosophy = dynamic(() => import("@/components/Philosophy"), { ssr: true });
const Metrics = dynamic(() => import("@/components/Metrics"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Insights = dynamic(() => import("@/components/Insights"), { ssr: true });
const CurrentlyBuilding = dynamic(() => import("@/components/CurrentlyBuilding"), { ssr: true });
const CloudAI = dynamic(() => import("@/components/CloudAI"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Leadership = dynamic(() => import("@/components/Leadership"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Github = dynamic(() => import("@/components/Github"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Feedback = dynamic(() => import("@/components/Feedback"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Metrics />
      <Projects />
      <CloudAI />
      <Insights />
      <CurrentlyBuilding />
      <Skills />
      <Leadership />
      <Experience />
      <Github />
      <About />
      <Feedback />
      <Contact />
    </>
  );
}
