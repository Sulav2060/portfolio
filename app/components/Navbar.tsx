"use client";

import { useState } from "react";
import { Home, Map, Zap, Briefcase, Heart, Mail, Grid2X2, X, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/#journey", label: "Journey", icon: Map },
    { href: "/#skills", label: "Skills", icon: Zap },
    { href: "/#projects", label: "Projects", icon: Briefcase },
    // { href: "/cv", label: "CV", icon: FileText },
    { href: "/#interests", label: "Interests", icon: Heart },
    { href: "/#contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-card px-6 py-3 rounded-full gap-8 text-sm font-medium text-slate-300">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-[#DA291C] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation - Creative Floating Stack */}
      <div className="md:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* Menu Items Stack */}
        <div className={`flex flex-col items-end gap-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${isOpen ? (navLinks.length - 1 - index) * 50 : 0}ms` }}
              className="glass-card px-5 py-3 rounded-full flex items-center gap-3 text-slate-300 hover:text-[#DA291C] hover:bg-slate-800/80 transition-all shadow-lg transform hover:scale-105 active:scale-95"
            >
              <span className="text-sm font-medium">{link.label}</span>
              <link.icon size={18} />
            </a>
          ))}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-4 glass-card rounded-full text-slate-300 hover:text-[#DA291C] transition-all duration-300 shadow-lg hover:shadow-[#DA291C]/20 ${isOpen ? 'rotate-90 bg-slate-800' : ''}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Grid2X2 size={24} />}
        </button>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
