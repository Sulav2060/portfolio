import { Mail, Linkedin, Github } from "lucide-react";
import Section from "./Section";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "Sulav2060@gmail.com",
    href: "mailto:sulav2060@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sulav-acharya",
    href: "https://linkedin.com/in/sulav-acharya",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sulav2060",
    href: "https://github.com/sulav2060",
  },
];

export default function ContactSection() {
  return (
    <Section title="Get In Touch" id="contact">
       <div className="absolute right-0 top-0 bottom-0 w-48 opacity-5 pointer-events-none">
        <GuitarFretArt />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        {/* Left column - message */}
        <div className="space-y-6">
          <p className="text-lg text-slate-400 leading-relaxed">
            Feel free to reach out through any of these channels. I'm always
            open to discussing new projects, creative ideas, or opportunities to
            be part of your vision.
          </p>
          {/* <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="w-8 h-px bg-(--accent)" />
            <span>Based in Nepal</span>
          </div> */}
        </div>

        {/* Right column - contact links */}
        <div className="space-y-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="group flex items-center gap-4 p-4 glass-card hover:border-(--accent)/50 transition-all duration-300 rounded-xl"
            >
              <div className="p-2 bg-white/5 text-slate-400 transition-colors group-hover:bg-(--accent) group-hover:text-white rounded-lg">
                <link.icon size={18} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-widest group-hover:text-(--accent) transition-colors">
                  {link.label}
                </span>
                <p className="text-sm text-(--foreground) mt-1">{link.value}</p>
              </div>
              <span className="text-slate-500 group-hover:text-(--accent) transition-colors">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
function GuitarFretArt() {
  return (
    <svg
      viewBox="0 0 100 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Guitar fret lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={`fret-${i}`}
          x1="10"
          y1={30 + i * 30}
          x2="90"
          y2={30 + i * 30}
          stroke="currentColor"
          strokeWidth="1"
          className="opacity-60"
        />
      ))}

      {/* Strings */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={`string-${i}`}
          x1={20 + i * 12}
          y1="0"
          x2={20 + i * 12}
          y2="400"
          stroke="currentColor"
          strokeWidth={0.5 + i * 0.15}
          className="opacity-40"
        />
      ))}

      {/* Fret markers */}
      <circle
        cx="50"
        cy="90"
        r="3"
        fill="currentColor"
        className="opacity-30"
      />
      <circle
        cx="50"
        cy="150"
        r="3"
        fill="currentColor"
        className="opacity-30"
      />
      <circle
        cx="50"
        cy="210"
        r="3"
        fill="currentColor"
        className="opacity-30"
      />
      <circle
        cx="40"
        cy="270"
        r="3"
        fill="currentColor"
        className="opacity-30"
      />
      <circle
        cx="60"
        cy="270"
        r="3"
        fill="currentColor"
        className="opacity-30"
      />
    </svg>
  );
}
