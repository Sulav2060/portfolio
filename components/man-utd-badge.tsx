"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ManUtdBadge() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="absolute top-4 right-4 z-10 cursor-pointer"
      whileHover={{ scale: 1.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
        <div className="absolute inset-0 bg-red-600 rounded-full"></div>
        <div className="text-white font-bold text-xs">MUFC</div>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-10 right-0 bg-white dark:bg-slate-800 text-red-600 text-xs font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap"
          >
            Glory Glory Man United!
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
