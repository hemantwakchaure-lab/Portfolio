import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import SAPCapabilities from "@/components/SAPCapabilities";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-white/20">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Education />
      <Certifications />
      <Experience />
      <Skills />
      <SAPCapabilities />
      <Projects />
      <Contact />
    </main>
  );
}
