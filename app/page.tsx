import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import InterestsSection from "./components/Interests";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sulav Acharya',
    url: 'https://sulavacharya.name.np',
    jobTitle: 'Software Engineer',
    sameAs: [
      'https://github.com/sulav2060', 
      'https://linkedin.com/in/sulav-acharya-8b5629169/', 
      'https://www.freelancer.com/u/sulav2060', 
      'https://www.instagram.com/su7av_acharya/'
    ],
  }

  return (
    <main className="min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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


