"use client"

import { useState, useEffect } from "react"
import { Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function EasterEgg() {
  const [konami, setKonami] = useState<string[]>([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKonami = [...konami, e.key]
      if (newKonami.length > konamiCode.length) {
        newKonami.shift()
      }
      setKonami(newKonami)

      // Check if konami code is entered
      if (newKonami.join(",") === konamiCode.join(",")) {
        setShowEasterEgg(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [konami])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // In a real implementation, you would play/pause audio here
  }

  const closeEasterEgg = () => {
    setShowEasterEgg(false)
    setIsPlaying(false)
  }

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-red-700 via-red-800 to-slate-900 p-8 rounded-lg max-w-md w-full text-center"
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white">🎸 Guitar Hero Mode Unlocked! 🎸</h2>
            <p className="text-slate-300 mb-6">
              You've discovered my hidden passion! When I'm not coding or cheering for Manchester United, I'm strumming
              away on my guitar. Here's a little tune I've been working on...
            </p>

            <div className="bg-slate-800 rounded-lg p-4 mb-6">
              <div className="flex justify-center mb-4">
                <Button
                  onClick={togglePlay}
                  className={`rounded-full ${isPlaying ? "bg-red-500 hover:bg-red-600" : "bg-lavender-500 hover:bg-lavender-600"}`}
                >
                  <Music className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex justify-between items-center">
                <div className="h-1 flex-1 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-lavender-500 to-red-500"
                    initial={{ width: "0%" }}
                    animate={isPlaying ? { width: "100%" } : { width: "0%" }}
                    transition={{ duration: 30, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </div>

              {isPlaying && (
                <div className="mt-4 text-center">
                  <p className="text-red-300 text-sm">"Glory Glory Man United" - A fan's tribute</p>
                </div>
              )}
            </div>

            <div className="text-sm text-slate-400 mb-6">
              <p>Konami code activated! Up, Up, Down, Down, Left, Right, Left, Right, B, A</p>
              <p className="mt-2">Share this easter egg with fellow developers!</p>
            </div>

            <div className="flex space-x-3 justify-center">
              <Button
                onClick={closeEasterEgg}
                variant="outline"
                className="border-lavender-500 text-lavender-400 hover:bg-lavender-500/10"
              >
                Close
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
