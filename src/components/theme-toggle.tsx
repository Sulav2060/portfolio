"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (typeof window !== "undefined" && (localStorage.getItem("theme") as "light" | "dark")) || "light"
  )

  useEffect(() => {
    setMounted(true)
    // On initial mount, check for user preference or OS preference
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme")
      if (stored === "dark" || stored === "light") {
        setTheme(stored)
        setHtmlTheme(stored)
      } else {
        // System preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setTheme(prefersDark ? "dark" : "light")
        setHtmlTheme(prefersDark ? "dark" : "light")
      }
    }
  }, [])

  function setHtmlTheme(newTheme: "light" | "dark") {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement
      if (newTheme === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    }
  }

  function toggleTheme() {
    const newTheme: "light" | "dark" = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    setHtmlTheme(newTheme)
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme)
    }
  }

  if (!mounted) return (
    <button
      aria-label="Toggle theme"
      type="button"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-transparent border border-lavender-300 dark:border-lavender-800 transition-colors"
      tabIndex={-1}
    >
      <Sun className="w-5 h-5 text-lavender-400" />
    </button>
  )

  return (
    <button
      aria-label="Toggle theme"
      type="button"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-transparent border border-lavender-300 dark:border-lavender-800 hover:bg-lavender-100 dark:hover:bg-lavender-900/30 transition-colors"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-lavender-600" />
      )}
    </button>
  )
}