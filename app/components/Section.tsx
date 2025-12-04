import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ title, children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-4 md:py-12 px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {title && (
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {title}
            </h2>
            <div className="h-px flex-1 bg-linear-to-r from-(--primary) to-transparent opacity-30" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
