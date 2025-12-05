import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import InterestsSection from "./components/Interests";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="glow-bg" />

      {/* Floating Nav */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-card px-6 py-3 rounded-full flex gap-6 md:gap-8 text-sm font-medium text-slate-300">
        <a href="#" className="hover:text-[#DA291C] transition-colors">Home</a>
        <a href="#journey" className="hover:text-[#DA291C] transition-colors">Journey</a>
        <a href="#skills" className="hover:text-[#DA291C] transition-colors">Skills</a>
        <a href="#projects" className="hover:text-[#DA291C] transition-colors">Projects</a>
        <a href="#interests" className="hover:text-[#DA291C] transition-colors">Interests</a>
        <a href="#contact" className="hover:text-[#DA291C] transition-colors">Contact</a>
      </nav>
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <InterestsSection />
      <Contact />

      {/* <footer className="py-8 text-center text-slate-500 text-sm">
        <p>© 2025 Sulav Acharya. Crafted with Next.js & Tailwind.</p>
      </footer> */}
    </main>
  );
}

