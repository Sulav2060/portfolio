"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  featured?: boolean
  githubUrl?: string
  liveUrl?: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  featured = false,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md ${
        featured ? "md:col-span-2 lg:col-span-1 ring-2 ring-lavender-500/50" : ""
      }`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        {featured && (
          <div className="absolute top-2 right-2">
            <Badge className="bg-lavender-500 hover:bg-lavender-600">Featured</Badge>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-lavender-100">{title}</h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="border-lavender-500/50 text-lavender-300">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-3">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              className="border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" className="bg-lavender-500 hover:bg-lavender-600 text-white">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
