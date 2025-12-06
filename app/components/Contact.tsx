"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Briefcase, Send } from "lucide-react";
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
  {
    icon: Briefcase,
    label: "Freelancer",
    value: "freelancer.com/u/sulav2060",
    href: "https://www.freelancer.com/u/sulav2060",
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xdkqdllk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section title="Get In Touch" id="contact">
      <div className="absolute right-5 top-0 bottom-0 w-48 opacity-2 sm:opacity-5 pointer-events-none">
        <GuitarFretArt />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        {/* Left column - Contact Form */}
        <div className="space-y-8">
          <p className="text-lg text-slate-400 leading-relaxed">
            Have a project in mind or just want to say hi? Drop me a message below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C] outline-none transition-all text-slate-200 placeholder:text-slate-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C] outline-none transition-all text-slate-200 placeholder:text-slate-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C] outline-none transition-all text-slate-200 placeholder:text-slate-500 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${submitted
                ? "bg-green-500 hover:bg-green-600"
                : "bg-[#DA291C] hover:bg-[#DA291C]/90 shadow-[0_0_20px_rgba(218,41,28,0.3)] hover:shadow-[0_0_30px_rgba(218,41,28,0.5)]"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {submitted ? (
                "Message Sent!"
              ) : isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
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
              className="group flex items-center gap-4 p-4 glass-card hover:border-[#DA291C]/50 transition-all duration-300 rounded-xl"
            >
              <div className="p-2 bg-white/5 text-slate-400 transition-colors group-hover:bg-[#DA291C] group-hover:text-white rounded-lg">
                <link.icon size={18} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-widest group-hover:text-[#DA291C] transition-colors">
                  {link.label}
                </span>
                <p className="text-sm text-(--foreground) mt-1">{link.value}</p>
              </div>
              <span className="text-slate-500 group-hover:text-[#DA291C] transition-colors">
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
