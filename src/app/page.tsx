import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Metrics from "@/components/Metrics";
import Projects from "@/components/Projects";
import Insights from "@/components/Insights";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import CloudAI from "@/components/CloudAI";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Experience from "@/components/Experience";
import Github from "@/components/Github";
import About from "@/components/About";
import Contact from "@/components/Contact";

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
      <Contact />
    </>
  );
}
