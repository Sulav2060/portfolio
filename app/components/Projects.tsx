import React from 'react';
import Section from './Section';
import { Github, ExternalLink, FolderGit2, Star, GitFork } from 'lucide-react';

const projects = [
  {
    title: "Arcticgust Website",
    description:
      "A portfolio/marketing website built for the Arcticgust, a company based in Texas, USA. Implemented with modern TypeScript tooling and a focus on performance and accessibility.",
    tags: ["TypeScript", "Next.js", "arcticgust", "freelance"],
    github: "https://github.com/Sulav2060/Arcticgust-Website",
    demo: `https://arcticgust.com`,
  },
  {
    title: "NEPSE (nepse)",
    description:
      "A TypeScript project focused on solving problems around NEPSE data: scraping, analysis, and visualization. Built as a personal/hobby project to explore exchange data and algorithmic approaches.",
    tags: ["TypeScript", "nepse", "personal/hobby/problemsolving"],
    github: "https://github.com/Sulav2060/nepse",
    demo: `https://nepse-three.vercel.app/`,
  },
  {
    title: "Fantasy Sports App (FPL)",
    description:
      "An SAAS-style fantasy sports application (FPL) that supports team management, live scoring and league features. Focused on scalability and product UX.",
    tags: ["JavaScript", "fpl", "SaaS"],
    github: "https://github.com/SurajAdhikari01/fantasy-sports-app",
    demo: "#",
  },
  {
    title: "Monopoly (Multiplayer)",
    description:
      "A collaborative Monopoly implementation focusing on multiplayer interactions and game rules. Built as a team project to explore realtime sync and game state management.",
    tags: ["JavaScript", "monopoly", "team collaboration"],
    github: "https://github.com/Sulav2060/Monopoly",
    demo: "#"
  },
];

export default function Projects() {

  return (
    <Section title="Featured Projects" id="projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full border border-white/5 hover:border-[#DA291C]/30"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-[#DA291C]/10 text-[#DA291C] rounded-xl border border-[#DA291C]/20 group-hover:scale-110 transition-transform duration-300">
                <FolderGit2 size={24} />
              </div>
              <div className="flex gap-3">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[#DA291C] transition-colors"
                    title="View Code"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-[#DA291C] transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-[#DA291C] transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
              {project.description}
            </p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:border-[#DA291C]/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>


            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}