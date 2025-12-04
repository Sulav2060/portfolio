"use client";

import { useState, useEffect } from "react";
import { InterestCard } from "./interest-card";
import {
  Crown,
  Music,
  Mountain,
  Film,
  Languages,
  Search,
  X,
} from "lucide-react";
import Section from "./Section";

const interests = [
  {
    icon: Crown,
    title: "Chess",
    description:
      "Playing chess with my brother since my childhood. I like to think that it translates directly to problem-solving in code. Never learnt theory to not be overpowered",
    details:
      "Always up for a match. Whether it's a quick blitz or a daily game, I'm ready to move.",
    link: "https://www.chess.com/member/sulav14",
    linkText: "Challenge me on Chess.com",
  },
  {
    icon: Music,
    title: "Music & Guitar",
    description:
      "My music taste is incredibly diverse, ranging from classical to rock. You’ll often find me jamming to music while coding. The guitar is my escape, though I’m still learning.",
    details:
      "Can't share my playlist here😂. But I'll be sharing some of my guitar covers soon.",
  },
  {
    icon: Mountain,
    title: "Trekking & Travel",
    description:
      "There is no better reset than the mountains of Nepal. Trekking challenges my physical limits and offers a perspective that only high altitudes can provide.",
    details:
      "I've treked trails like Mardi Himal, Khumai, and more, with many more summits on my bucket list. My travels are a search for new horizons.",
    link: "https://www.instagram.com/su7av_acharya/",
    linkText: "Follow my adventures on Instagram",
  },
  {
    icon: Film,
    title: "Cinema & Sports",
    description:
      "Storytelling in all its forms captivates me. From the epic world-building of anime to the dramatic highs and lows of football.",
    details:
      "My loyalty lies with Manchester United hence the Red Devil mascot guarding this site. Stuck with united through the lows, you cant doubt my loyalty!I'm a fan of One Piece for its boundless adventure. I watch alot of movies, and series, not many new animes tho.",
  },
  {
    icon: Languages,
    title: "Languages",
    description:
      "Fluent in English, Nepali, and Hindi, I'm expanding my linguistic stack to include Spanish.",
    details:
      "Currently battling the owl on Duolingo to master Spanish. The streak is alive, even if my interest sometimes falters!",
    link: "https://www.duolingo.com/profile/Sulav2060",
    linkText: "Join me on Duolingo",
  },
  {
    icon: Search,
    title: "Random Research",
    description:
      "Curiosity killed the cat, but satisfaction brought it back. I love diving deep whether it's astrophysics, history, or obscure tech trivia.",
    details:
      "My browser tabs are a chaotic mix of deep dives and technical documentation. No formal papers yet, but the research never stops.",
  },
];

export default function InterestsSection() {
  const [selectedInterest, setSelectedInterest] = useState<
    (typeof interests)[0] | null
  >(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedInterest(null);
      }
    };

    if (selectedInterest) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedInterest]);

  return (
    <Section title="Beyond Code" id="interests">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, index) => (
          <InterestCard
            key={interest.title}
            {...interest}
            index={index}
            onClick={() => {
              setSelectedInterest(interest);
              if (interest.title === "Cinema & Sports") {
                window.dispatchEvent(new Event('mascot-center'));
              }
            }}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedInterest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-[#0f172a] border border-[#DA291C]/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(218,41,28,0.2)] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedInterest(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#DA291C]/10 text-[#DA291C] rounded-xl border border-[#DA291C]/20">
                <selectedInterest.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {selectedInterest.title}
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                {selectedInterest.details}
              </p>

              {selectedInterest.link && (
                <a
                  href={selectedInterest.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#DA291C] text-white font-medium rounded-full hover:bg-[#DA291C]/90 transition-colors shadow-lg shadow-[#DA291C]/20"
                >
                  {selectedInterest.linkText}
                  <span className="text-xs">→</span>
                </a>
              )}
            </div>
          </div>

          {/* Backdrop click to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedInterest(null)}
          />
        </div>
      )}
    </Section>
  );
}
