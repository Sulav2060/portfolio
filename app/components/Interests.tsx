import { InterestCard } from "./interest-card"
import { Crown, Music, Mountain, Film, Languages, Search } from "lucide-react"
import Section from "./Section"

const interests = [
  {
    icon: Crown,
    title: "Chess",
    description:
      "I enjoy the strategic depth of chess, where each move requires careful planning and foresight. The game has taught me patience and the importance of thinking several steps ahead.",
  },
  {
    icon: Music,
    title: "Music & Guitar",
    description:
      "Music is my creative outlet. I play the guitar and enjoy exploring different genres. There's something magical about creating melodies and rhythms that can express emotions without words.",
  },
  {
    icon: Mountain,
    title: "Trekking & Travel",
    description:
      "Exploring the natural beauty of Nepal through trekking is one of my favorite activities. There's nothing quite like the sense of achievement when reaching a summit after a challenging climb.",
  },
  {
    icon: Film,
    title: "Movies & Anime",
    description:
      "I'm a fan of storytelling in all its forms. Whether it's a thought-provoking film or an engaging anime series, I appreciate narratives that challenge perspectives and spark imagination.",
  },
  {
    icon: Languages,
    title: "Languages",
    description:
      "I'm fluent in English, Nepali, and Hindi, and I'm currently learning Spanish. Language learning opens doors to new cultures and ways of thinking.",
  },
  {
    icon: Search,
    title: "Random Research",
    description:
      "I have an insatiable curiosity that leads me to research random interesting topics. From quantum physics to ancient history, I enjoy diving deep into subjects that catch my attention.",
  },
]

export default function InterestsSection() {
  return (
   <Section title="Beyond Code" id="interests">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <InterestCard key={interest.title} {...interest} index={index} />
          ))}
        </div>
    </Section>
  )
}

