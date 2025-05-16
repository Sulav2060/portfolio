"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Fantasy Sports Platform",
    description:
      "A SaaS-based platform for cricket and football fantasy sports, supporting small tournaments with manual data management. Users can create teams, join leagues, and compete with friends.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Laravel", "PHP", "MongoDB", "React", "Tailwind CSS"],
    status: "Current Project",
    link: "#",
    github: "#",
    color: "from-lavender-500 to-purple-600",
  },
  {
    id: 2,
    title: "Khana",
    description:
      "A donation platform connecting those with excess food to those in need, reducing waste and fighting hunger. The platform facilitates food donations, tracks impact, and connects donors with recipients.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Laravel", "PHP", "React", "Tailwind CSS", "MySQL"],
    link: "#",
    github: "#",
    color: "from-red-500 to-orange-600",
  },
  {
    id: 3,
    title: "TrekSathi",
    description:
      "A comprehensive solution to trekking problems, helping adventurers plan, navigate, and connect during their journeys. Features include route planning, weather alerts, and community forums.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Laravel", "PHP", "React", "Tailwind CSS", "MongoDB"],
    link: "#",
    github: "#",
    color: "from-green-500 to-teal-600",
  },
];

export function ProjectShowcase() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="mt-16">
      <div className="relative overflow-hidden rounded-lg shadow-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${projects[currentProject].color} opacity-90`}
            ></div>
            <div className="relative grid gap-8 p-8 md:grid-cols-2 md:p-12">
              <div className="flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl">
                    {projects[currentProject].title}
                  </h3>
                  {projects[currentProject].status && (
                    <span className="inline-block px-3 py-1 mt-2 text-xs font-medium rounded-full bg-white/20">
                      {projects[currentProject].status}
                    </span>
                  )}
                  <p className="mt-4">{projects[currentProject].description}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {projects[currentProject].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button
                    asChild
                    variant="secondary"
                    size="sm"
                    className="gap-2"
                  >
                    <a
                      href={projects[currentProject].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent border-white text-white"
                  >
                    <a
                      href={projects[currentProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={projects[currentProject].image || "/placeholder.svg"}
                    width={800}
                    height={600}
                    alt={projects[currentProject].title}
                    className="object-cover w-full h-64 md:h-80"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          className="absolute transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 top-1/2 left-4"
          onClick={prevProject}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 top-1/2 right-4"
          onClick={nextProject}
        >
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentProject === index
                ? "bg-lavender-500 scale-125"
                : "bg-lavender-200 dark:bg-lavender-800"
            }`}
            onClick={() => setCurrentProject(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
