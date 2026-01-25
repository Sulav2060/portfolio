"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Decrypt email to prevent spam bots
    // Base64: Sulav2060@gmail.com
    setEmail(atob("U3VsYXYyMDYwQGdtYWlsLmNvbQ=="));
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-(--background) pt-16 sm:pt-0">

      {/* Subtle Grid */}
   <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[64px_64px] z- opacity-50 sm:opacity-100"></div>

      <div className="container mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center pb-12">
        
        {/* Left: Text Content */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">


          <div className="space-y-4">
            <h2 className="text-slate-400 text-xl sm:text-2xl font-light tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-(--foreground)">
              Sulav <span className="text-transparent bg-clip-text bg-linear-to-r from-(--primary) to-(--secondary)">Acharya</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Software Developer transforming ideas into elegant, scalable solutions.
              Passionate about clean code and user-centric design.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a href="#projects" className="group px-8 py-3 bg-sky-700 text-white font-bold rounded-full hover:bg-sky-600 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] flex items-center gap-2">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-3 bg-slate-900 text-slate-300 font-medium rounded-full hover:bg-slate-800 transition-colors border border-slate-800">
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-slate-500">
            <SocialLink href="https://github.com/Sulav2060" icon={<Github size={22} />} label="GitHub Profile" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={22} />} label="LinkedIn Profile" />
            <SocialLink 
              href={email ? `mailto:${email}` : "#"} 
              icon={<Mail size={22} />} 
              label="Email Contact" 
            />
          </div>
        </div>

        {/* Right: Visual / Profile */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          {/* Profile Image Container */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] group">
            {/* Decorative Elements */}
            <div className="absolute -inset-1 bg-linear-to-r from-sky-500 to-indigo-500 rounded-full opacity-30  blur-2xl " />

            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800/50 shadow-2xl">
              <Image
                src="/SulavAcharya.webp"
                alt="Sulav Acharya"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mountains Layer 1 (Back) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 md:h-64 lg:h-80 text-slate-800/40 z-0">
        <MountainLineArt preserveAspectRatio="none" />
      </div>

      {/* Mountains Layer 2 (Front) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-48 lg:h-64 text-slate-700 z-10">
        <MountainLineArt preserveAspectRatio="none" className="drop-shadow-2xl" gradient />
      </div>

    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 hover:text-sky-400 transition-all hover:bg-slate-800/50 rounded-full hover:scale-110"
    >
      {icon}
    </a>
  )
}

function MountainLineArt({ className, preserveAspectRatio = "xMidYMax slice", gradient }: { className?: string, preserveAspectRatio?: string, gradient?: boolean }) {
  const id = React.useId();
  return (
    <svg
      viewBox="0 0 1200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full ${className}`}
      preserveAspectRatio={preserveAspectRatio}
    >
      {gradient && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" />
            <stop offset="100%" stopColor="var(--background)" />
          </linearGradient>
        </defs>
      )}

      {/* Main mountain range */}
      <path
        d="M0 200 L100 120 L180 160 L280 80 L360 140 L450 40 L520 100 L600 60 L680 120 L780 30 L860 90 L940 50 L1020 110 L1100 70 L1200 130 L1200 200 Z"
        fill={gradient ? `url(#${id})` : "currentColor"}
        className="opacity-10"
      />

      {/* Secondary peaks */}
      <path
        d="M0 200 L150 140 L250 170 L380 100 L480 150 L580 90 L680 140 L800 80 L900 130 L1000 100 L1100 150 L1200 120 L1200 200 Z"
        fill={gradient ? `url(#${id})` : "currentColor"}
        className="opacity-20"
      />

      {/* Line details */}
      <path
        d="M0 180 L200 130 L400 160 L600 100 L800 140 L1000 110 L1200 150"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-10"
        fill="none"
      />
    </svg>
  );
}
