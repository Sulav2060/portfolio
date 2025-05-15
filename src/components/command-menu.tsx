"use client"

import { useEffect, useState } from "react"
import { Command } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCommands, setFilteredCommands] = useState<string[]>([])

  const commands = [
    "About",
    "Projects",
    "Skills",
    "Interests",
    "Contact",
    "Toggle Theme",
    // "Show Easter Egg",
    "Play Music",
    "View Trek Map",
  ]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }

      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (searchTerm) {
      const filtered = commands.filter((cmd) => cmd.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredCommands(filtered)
    } else {
      setFilteredCommands(commands)
    }
  }, [searchTerm])

  const handleCommandClick = (command: string) => {
    setIsOpen(false)

    // Handle command actions
    switch (command) {
      case "About":
      case "Projects":
      case "Skills":
      case "Interests":
      case "Contact":
        document.getElementById(command.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
        break
      case "Toggle Theme":
        document.querySelector("[aria-label='Toggle theme']")?.dispatchEvent(new MouseEvent("click"))
        break
      case "Show Easter Egg":
        // Simulate Konami code
        const konamiCode = [
          "ArrowUp",
          "ArrowUp",
          "ArrowDown",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "ArrowLeft",
          "ArrowRight",
          "b",
          "a",
        ]
        konamiCode.forEach((key) => {
          window.dispatchEvent(new KeyboardEvent("keydown", { key }))
        })
        break
      case "Play Music":
        const visualizer = document.getElementById("music-visualizer")
        if (visualizer) {
          visualizer.classList.remove("hidden")
          const playButton = visualizer.querySelector("button")
          playButton?.click()
        }
        break
      case "View Trek Map":
        const trekMap = document.getElementById("trek-map")
        if (trekMap) {
          trekMap.classList.remove("hidden")
          document.getElementById("interests")?.scrollIntoView({ behavior: "smooth" })
        }
        break
    }
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="fixed z-50 flex items-center gap-2 px-3 py-1.5 bottom-4 right-4 bg-background/80 backdrop-blur-sm"
        onClick={() => setIsOpen(true)}
      >
        <Command className="w-4 h-4" />
        <span className="text-xs">Press</span>
        <kbd className="px-1.5 py-0.5 text-xs border rounded-md bg-muted">⌘K</kbd>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md bg-background rounded-lg shadow-xl">
            <div className="flex items-center p-4 border-b">
              <Command className="w-4 h-4 mr-2 opacity-50" />
              <input
                type="text"
                placeholder="Type a command or search..."
                className="w-full bg-transparent border-none outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
              <kbd className="px-1.5 py-0.5 ml-2 text-xs border rounded-md bg-muted">Esc</kbd>
            </div>
            <div className="py-2 max-h-[300px] overflow-y-auto">
              {filteredCommands.map((command) => (
                <button
                  key={command}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-muted"
                  onClick={() => handleCommandClick(command)}
                >
                  {command}
                </button>
              ))}
              {filteredCommands.length === 0 && (
                <div className="px-4 py-2 text-sm text-muted-foreground">No commands found</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
