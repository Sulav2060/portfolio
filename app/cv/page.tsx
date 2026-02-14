import Section from "../components/Section";
import PrintResumeButton from "../components/PrintResumeButton";
import { Github, Link, Globe, FileText } from "lucide-react";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "CV — Sulav Acharya",
  description: "Curriculum Vitae — Sulav Acharya, Software Engineer (React, Next.js, Laravel)",
};

export default function CVPage() {
  return (
    <main className="min-h-screen pb-24">
        <Navbar/>
      <Section className="pt-12 mt-10" id="cv-hero">
        <div className="glass-card p-8 rounded-3xl mx-2 md:mx-0">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-1">
                Sulav Acharya
              </h1>
              <p className="text-slate-400 text-lg md:text-xl mb-4">
                Software Engineer — Full-Stack Developer
              </p>

              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Software Engineer and Full-Stack Developer specializing in React,
                Next.js, and Laravel. Experience building SaaS platforms,
                real-time systems, and data-driven web applications for
                international clients.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <a
                  href="https://github.com/sulav2060"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800 transition"
                >
                  <Github className="w-4 h-4" /> github.com/sulav2060
                </a>

                <a
                  href="https://linktr.ee/sulav2060"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900/40 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800/40 transition"
                >
                  <Link className="w-4 h-4" /> linktr.ee/sulav2060
                </a>

                <a
                  href="https://www.freelancer.com/u/sulav2060"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900/40 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800/40 transition"
                >
                  <Globe className="w-4 h-4" /> freelancer.com/sulav2060
                </a>

                <PrintResumeButton />
              </div>
            </div>

            <div className="mt-6 md:mt-0 md:w-48 lg:w-56 shrink-0">
              <div className="glass-card p-4 rounded-2xl text-sm text-slate-300">
                <div className="font-semibold text-(--secondary) mb-1">Contact</div>
                <dl className="text-sm text-slate-400 leading-relaxed">
                  <div>
                    <dt className="sr-only">Website</dt>
                    <dd>
                      <a
                        href="https://sulavacharya.name.np"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-slate-200"
                      >
                        sulavacharya.name.np
                      </a>
                    </dd>
                  </div>
                  <div className="mt-2">
                    <dt className="sr-only">Email</dt>
                    <dd>Available on request</dd>
                  </div>
                  <div className="mt-2">
                    <dt className="sr-only">Location</dt>
                    <dd>Pokhara, Nepal</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Professional Snapshot" id="summary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - Main CV content */}
          <div className="md:col-span-2 space-y-6">
            <article className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3">Professional Summary</h3>
              <p className="text-slate-300 leading-relaxed">
                Software Engineer and Full-Stack Developer specializing in
                React, Next.js, and Laravel. Experienced building SaaS
                platforms, real-time systems, and analytic dashboards for
                international clients. Skilled at full project lifecycle — from
                requirements and architecture to deployment, performance
                optimization and SEO.
              </p>
            </article>

            <article className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3">Professional Experience</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Freelance Full‑Stack Developer</div>
                      <div className="text-sm text-slate-400">Self‑Employed — Remote</div>
                    </div>
                    <div className="text-sm text-slate-500">2022 — Present</div>
                  </div>

                  <ul className="mt-3 list-disc pl-5 text-slate-300 space-y-2">
                    <li>Delivered end-to-end web solutions for international clients across multiple industries.</li>
                    <li>Built scalable applications using React, Next.js and Laravel with a focus on performance and accessibility.</li>
                    <li>Managed deployments, hosting and client communications throughout full project lifecycles.</li>
                    <li>Implemented SEO strategies and performance improvements for marketing and product websites.</li>
                    <li>Designed and executed outreach email campaigns using Lemlist.</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3">Client Projects (selected)</h3>

              <div className="grid gap-4">
                <ProjectCard
                  title="Arcticgust Website"
                  subtitle="Company Website — arcticgust.com"
                  bullets={[
                    "Built production marketing website for US-based company",
                    "Optimized for performance, accessibility and SEO",
                  ]}
                  href="https://arcticgust.com"
                />

                <ProjectCard
                  title="Jigyasa Academy"
                  subtitle="Educational Platform — jigyasa.academy"
                  bullets={["Developed and deployed the website for an education institute", "Mobile-first responsive design with SEO-friendly structure"]}
                  href="https://jigyasa.academy"
                />

                <ProjectCard
                  title="Luxor Arts"
                  subtitle="Business Website — luxorarts.com"
                  bullets={["Built and deployed website for an international arts brand", "Focused on clean UI and cross-browser compatibility"]}
                  href="https://luxorarts.com"
                />
              </div>
            </article>

            <article className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3">Personal Projects</h3>

              <div className="space-y-4 text-slate-300">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">NEPSE Stock Exchange Platform</div>
                    <div className="text-sm text-slate-500">TypeScript • Data Scraping • Analytics</div>
                  </div>
                  <p className="mt-2 text-sm">Automated data scraper and analytics dashboard with real‑time visualizations for stock market trends and analysis.</p>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Fantasy Premier League (FPL) SaaS</div>
                    <div className="text-sm text-slate-500">JavaScript • Real‑time APIs</div>
                  </div>
                  <p className="mt-2 text-sm">Full‑scale SaaS platform with a live scoring engine, league management and WebSocket‑powered real‑time synchronization.</p>
                </div>
              </div>
            </article>

            <article className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3">Leadership & Training</h3>
              <ul className="list-disc pl-5 text-slate-300 space-y-3">
                <li>
                  <strong>College Representative</strong> — Code for Change (CFC): organized technical events and led a 3‑day UI/UX workshop for 50+ students.
                </li>
                <li>
                  <strong>JavaScript Trainer</strong> — National Innovation Center (NIC): mentored junior students and designed hands‑on curriculum.
                </li>
                <li>Active hackathon participant — delivered prototype solutions under time constraints.</li>
              </ul>
            </article>
          </div>

          {/* Right column - Sidebar */}
          <aside className="space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-md font-bold mb-3">Technical Skills</h4>
              <div className="grid grid-cols-1 gap-3">
                <SkillGroup title="Frontend" items={["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]} />
                <SkillGroup title="Backend" items={["Laravel", "PHP", "Node.js", "REST APIs"]} />
                <SkillGroup title="Database" items={["MySQL", "PostgreSQL", "MongoDB"]} />
                <SkillGroup title="Tools" items={["Git", "GitHub", "WebSockets", "SEO", "Web Scraping"]} />
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-md font-bold mb-3">Education</h4>
              <div className="text-slate-300 text-sm">
                <div className="font-semibold">Bachelor of Software Engineering</div>
                <div className="text-slate-400">Pokhara University — Expected: May 2026</div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-md font-bold mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>English — Fluent</Badge>
                <Badge>Nepali — Native</Badge>
                <Badge>Hindi — Fluent</Badge>
                <Badge>Spanish — Basic</Badge>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-md font-bold mb-3">Quick Links</h4>
              <div className="flex flex-col gap-3 text-sm">
                <a href="https://github.com/sulav2060" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-slate-100">
                  <Github className="w-4 h-4 text-slate-300" /> GitHub
                </a>
                <a href="https://linktr.ee/sulav2060" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-slate-100">
                  <Link className="w-4 h-4 text-slate-300" /> Linktree
                </a>
                <a href="https://www.freelancer.com/u/sulav2060" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-slate-100">
                  <Globe className="w-4 h-4 text-slate-300" /> Freelancer
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="pb-24" id="notes">
        <div className="text-sm max-w-3xl mx-auto text-center">
          <strong>Tip:</strong> Use the "Print / Save PDF" button to generate a clean PDF of this CV (browser print → Save as PDF). Page is responsive and print‑friendly.
        </div>
      </Section>
    </main>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold text-(--secondary) mb-2">{title}</div>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="px-3 py-1 rounded-full bg-white/3 text-xs text-slate-200">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="px-3 py-1 rounded-full bg-white/3 text-xs text-slate-200">{children}</span>;
}

function ProjectCard({ title, subtitle, bullets, href }: { title: string; subtitle: string; bullets: string[]; href?: string }) {
  return (
    <div className="p-4 rounded-xl bg-linear-to-r from-slate-800/40 to-slate-900/20 border border-slate-800/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-slate-400">{subtitle}</div>
        </div>
        {href && (
          <a href={href} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-200 text-sm inline-flex items-center gap-2">
            <FileText className="w-4 h-4" /> Visit
          </a>
        )}
      </div>
      <ul className="mt-3 list-disc pl-5 text-slate-300 text-sm space-y-2">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
