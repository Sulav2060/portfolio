
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Mountain line art decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-10 text-(--primary)">
        <MountainLineArt />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column - main content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Vertical line accent */}
            <div className="flex items-start gap-6">
              <div className="hidden sm:block w-px h-32 bg-linear-to-b from-(--accent) to-transparent" />
              <div className="space-y-6">
                <p className="font-mono text-xs tracking-[0.3em] text-(--primary) uppercase">Software Developer</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-(--foreground) text-balance">
                  Sulav
                  <span className="block text-gradient font-bold">Acharya</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                  Building intuitive digital experiences through code, curiosity, and creative problem-solving.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-(--primary) text-slate-900 font-bold text-sm tracking-wide hover:bg-(--primary)/90 transition-colors rounded-full"
              >
                Get in Touch
                <span className="text-xs">→</span>
              </a>
              <a
                href="#journey"
                className="inline-flex items-center gap-2 px-6 py-3 border border-(--card-border) text-sm tracking-wide hover:bg-white/5 transition-colors rounded-full text-slate-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right column - abstract geometric element */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Layered squares representing analytical thinking */}
              <div className="absolute inset-4 border border-(--card-border) rotate-3 transition-transform duration-500 hover:rotate-6" />
              <div className="absolute inset-8 border border-(--accent)/30 -rotate-3 transition-transform duration-500 hover:-rotate-6" />
              <div className="absolute inset-12 bg-(--secondary)/10 backdrop-blur-sm" />

              {/* Chess-inspired grid within */}
              <div className="absolute inset-16 grid grid-cols-4 gap-px">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className={`transition-colors duration-300 hover:bg-(--accent)/20 ${
                      (Math.floor(i / 4) + (i % 4)) % 2 === 0 ? "bg-white/5" : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-linear-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  )
}
function MountainLineArt() {
  return (
    <svg
      viewBox="0 0 1200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMax slice"
    >
      {/* Main mountain range */}
      <path
        d="M0 200 L100 120 L180 160 L280 80 L360 140 L450 40 L520 100 L600 60 L680 120 L780 30 L860 90 L940 50 L1020 110 L1100 70 L1200 130 L1200 200 Z"
        fill="currentColor"
        className="opacity-30"
      />

      {/* Secondary peaks */}
      <path
        d="M0 200 L150 140 L250 170 L380 100 L480 150 L580 90 L680 140 L800 80 L900 130 L1000 100 L1100 150 L1200 120 L1200 200 Z"
        fill="currentColor"
        className="opacity-20"
      />

      {/* Line details */}
      <path
        d="M0 180 L200 130 L400 160 L600 100 L800 140 L1000 110 L1200 150"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-40"
        fill="none"
      />
    </svg>
  )
}
