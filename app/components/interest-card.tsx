import type { LucideIcon } from "lucide-react"

interface InterestCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export function InterestCard({ icon: Icon, title, description, index }: InterestCardProps) {
  return (
    <div
      className="group relative glass-card p-6 transition-all duration-300 hover:border-(--accent)/50 hover:-translate-y-1 rounded-xl"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Top border accent on hover */}
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-(--accent) transition-all duration-300 group-hover:w-full" />

      <div className="flex items-start gap-4">
        <div className="p-2 bg-white/5 text-(--accent) transition-colors group-hover:bg-(--accent) group-hover:text-white rounded-lg">
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="font-medium text-(--foreground)">{title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
