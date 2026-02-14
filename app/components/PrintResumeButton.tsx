"use client";

import { Printer } from "lucide-react";

export default function PrintResumeButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-medium transition-shadow shadow-sm"
      title="Print or save as PDF"
      aria-label="Print or save resume as PDF"
    >
      <Printer className="w-4 h-4" />
      Print / Save PDF
    </button>
  );
}
