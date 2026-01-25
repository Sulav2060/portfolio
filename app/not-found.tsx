import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen relative flex items-center justify-center p-6 text-center overflow-hidden">
      <div className="glow-bg" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[64px_64px] opacity-20 pointer-events-none"></div>

      <div className="glass-card max-w-lg w-full p-12 rounded-3xl relative z-20 flex flex-col items-center border border-slate-700/50">
        
        <h1 className="text-9xl font-bold mb-2 tracking-tighter opacity-90">
          <span className="text-gradient">
            404
          </span>
        </h1>
        
        <h2 className="text-2xl font-semibold text-slate-200 mb-6">
          Lost in Space?
        </h2>

        <p className="text-slate-400 mb-8 leading-relaxed">
          The page you are looking for has drifted away or never existed. Let's get you back on track.
        </p>

        <Link
          href="/"
          className="group px-8 py-3 bg-sky-700 text-white font-bold rounded-full hover:bg-sky-600 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Return Home
        </Link>
      </div>
    </main>
  );
}
