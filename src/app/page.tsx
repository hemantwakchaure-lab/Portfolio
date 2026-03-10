import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-white/20">
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <Experience />
      <Projects />
      <footer className="py-8 text-center text-sm text-neutral-500 border-t border-white/5">
        <p>© {new Date().getFullYear()} Hemant Wakchaure. All rights reserved.</p>
      </footer>
    </main>
  );
}
