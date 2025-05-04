import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
  level?: "basic" | "intermediate" | "advanced"
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  let badgeClass = "bg-lavender-500/20 hover:bg-lavender-500/30 text-lavender-600 dark:text-lavender-300"

  if (level === "basic") {
    badgeClass =
      "bg-slate-200 hover:bg-slate-300 text-slate-700 dark:bg-slate-700/50 dark:hover:bg-slate-700/70 dark:text-slate-300"
  } else if (level === "advanced") {
    badgeClass = "bg-lavender-500/40 hover:bg-lavender-500/50 text-lavender-700 dark:text-lavender-200"
  }

  return (
    <Badge variant="secondary" className={`${badgeClass} font-normal`}>
      {name}
    </Badge>
  )
}
