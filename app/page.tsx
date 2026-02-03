import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import InterestsSection from "./components/Interests";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {

  return (
    <main className="min-h-screen relative">
      <div className="glow-bg" />

      <Navbar />
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


