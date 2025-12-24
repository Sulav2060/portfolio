"use client";

import Navbar from "../components/Navbar";
import { Download, Briefcase, GraduationCap, Code } from "lucide-react";

export default function Resume() {
  return (
    <main className="min-h-screen relative">
      <div className="glow-bg" />
      
      <Navbar />

      <div className="container mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-slate-50">
            Sulav Acharya
          </h1>
          <p className="text-xl sm:text-2xl text-slate-400 mb-8">
            Software Developer
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-400 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-sky-400" size={28} />
            <h2 className="text-3xl font-bold text-slate-50">Experience</h2>
          </div>
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-lg hover:bg-slate-800/80 transition-all">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-50">Senior Software Developer</h3>
                  <p className="text-sky-400">Tech Company Inc.</p>
                </div>
                <span className="text-slate-400 text-sm mt-2 sm:mt-0">2022 - Present</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Led development of scalable web applications using React and Node.js</li>
                <li>Improved application performance by 40% through optimization techniques</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-lg hover:bg-slate-800/80 transition-all">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-50">Software Developer</h3>
                  <p className="text-sky-400">Startup Solutions</p>
                </div>
                <span className="text-slate-400 text-sm mt-2 sm:mt-0">2020 - 2022</span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Developed full-stack applications using modern JavaScript frameworks</li>
                <li>Collaborated with cross-functional teams to deliver projects on time</li>
                <li>Implemented RESTful APIs and database designs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-indigo-400" size={28} />
            <h2 className="text-3xl font-bold text-slate-50">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-lg hover:bg-slate-800/80 transition-all">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-50">Bachelor of Science in Computer Science</h3>
                  <p className="text-indigo-400">University of Technology</p>
                </div>
                <span className="text-slate-400 text-sm mt-2 sm:mt-0">2016 - 2020</span>
              </div>
              <p className="text-slate-300">
                Graduated with honors. Focused on software engineering, algorithms, and data structures.
              </p>
            </div>

            <div className="glass-card p-6 rounded-lg hover:bg-slate-800/80 transition-all">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-50">High School Diploma</h3>
                  <p className="text-indigo-400">High School Name</p>
                </div>
                <span className="text-slate-400 text-sm mt-2 sm:mt-0">2014 - 2016</span>
              </div>
              <p className="text-slate-300">
                Completed with distinction in Mathematics and Computer Science.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-pink-400" size={28} />
            <h2 className="text-3xl font-bold text-slate-50">Skills</h2>
          </div>
          <div className="glass-card p-6 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-50 mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">Java</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-50 mb-3">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">Express</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-50 mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">Git</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
