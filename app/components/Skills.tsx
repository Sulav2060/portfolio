import React from 'react';
import Section from './Section';

const skillGroups = [
  {
    name: "The Powerhouse",
    description: "Core technologies I use to build robust applications.",
    skills: ["React", "Next.js", "Laravel", "TypeScript", "JavaScript", "PHP"]
  },
  {
    name: "Data & Backend",
    description: "Handling data and server-side logic efficiently.",
    skills: ["MongoDB", "SQL", "Python", "REST APIs"]
  },
  {
    name: "Styling & Design",
    description: "Crafting beautiful and intuitive user interfaces.",
    skills: ["Tailwind CSS", "UI/UX Design", "Responsive Design"]
  },
  {
    name: "Workflow & Tools",
    description: "Tools that streamline my development process.",
    skills: ["Git", "GitHub", "SEO", "Performance Optimization", "Web Scraping"]
  }
];

export default function Skills() {
  return (
    <Section title="Technical Arsenal" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div key={group.name} className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group">
            <h3 className="text-xl font-bold mb-2 text-(--secondary) group-hover:text-(--primary) transition-colors">
              {group.name}
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              {group.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-white/10 hover:border-(--primary)/30 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
