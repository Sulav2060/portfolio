import React from "react";
import Section from "./Section";

export default function Journey() {
  return (
    <Section title="My Journey" id="journey">
      <div className="relative">
        {/* Timeline Line */}

        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-(--primary) via-(--secondary) to-transparent opacity-20 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="glass-card p-8 rounded-2xl relative">
            <div className="absolute top-8 -right-3 w-6 h-6 bg-(--background) border-2 border-(--primary) rounded-full hidden md:block z-10 translate-x-1/2" />
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              The Beginning
            </h3>
            <p className="text-slate-400 leading-relaxed">
              My journey in software development began with a curiosity about
              how digital products work. This led me to explore various
              programming languages and frameworks, eventually specializing in
              web development.
            </p>
          </div>

          <div className="md:mt-24 glass-card p-8 rounded-2xl relative">
            <div className="absolute top-8 -left-3 w-6 h-6 bg-(--background) border-2 border-(--secondary) rounded-full hidden md:block z-10 -translate-x-1/2" />
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              The Evolution
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Along the way, I've developed a passion for creating intuitive
              user experiences and solving complex problems through code. I
              believe in continuous learning and staying updated with the latest
              technologies.
            </p>
            <p className="text-right text-yellow-500 font-semibold mt-4">
              To be continued...
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
