"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  Code,
  Github,
  Linkedin,
  Mail,
  Music,
  Twitter,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ChessEasterEgg } from "@/components/chess-easter-egg";
import { CommandMenu } from "@/components/command-menu";
import { InteractiveBackground } from "@/components/interactive-background";
import { MusicVisualizer } from "@/components/music-visualizer";
import { ProjectShowcase } from "@/components/project-showcase";
import { SkillsGlobe } from "@/components/skills-globe";
import { ThemeToggle } from "@/components/theme-toggle";
import { TrekMap } from "@/components/trek-map";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [konami, setKonami] = useState<string[]>([]);
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
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "projects",
        "skills",
        "interests",
        "contact",
      ];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKonami = [...konami, e.key];
      if (newKonami.length > konamiCode.length) {
        newKonami.shift();
      }
      setKonami(newKonami);

      if (newKonami.join(",") === konamiCode.join(",")) {
        setShowEasterEgg(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konami]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-lavender-900/5">
      <CommandMenu />
      <InteractiveBackground />

      {/* Navigation Dots */}
      <div className="fixed z-50 flex-col items-center hidden transform -translate-y-1/2 md:flex right-8 top-1/2">
        {["hero", "about", "projects", "skills", "interests", "contact"].map(
          (section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="relative my-2 group"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section
                    ? "bg-lavender-500 scale-125"
                    : "bg-lavender-300/50 hover:bg-lavender-400/70 dark:bg-lavender-700/50 dark:hover:bg-lavender-600/70"
                }`}
              ></div>
              <span className="absolute left-0 px-2 py-1 ml-6 text-sm font-medium transition-all duration-300 scale-0 rounded opacity-0 bg-lavender-100 text-lavender-900 dark:bg-lavender-900 dark:text-lavender-100 whitespace-nowrap group-hover:opacity-100 group-hover:scale-100">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </Link>
          )
        )}
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 backdrop-blur-sm bg-background/70">
        <div className="text-xl font-bold tracking-tight">
          <span className="text-lavender-500">S</span>
          <span className="text-red-500">.</span>
          <span className="text-lavender-500">A</span>
          <span className="text-red-500">.</span>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in Touch
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("translate-x-full");
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="fixed inset-y-0 right-0 z-50 w-64 transition-transform duration-300 transform translate-x-full bg-background/95 backdrop-blur-md md:hidden"
      >
        <div className="flex flex-col h-full p-6">
          <Button
            variant="ghost"
            size="icon"
            className="self-end"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) {
                menu.classList.toggle("translate-x-full");
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
          <div className="flex flex-col items-start mt-8 space-y-6">
            {[
              "hero",
              "about",
              "projects",
              "skills",
              "interests",
              "contact",
            ].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`text-lg font-medium transition-colors ${
                  activeSection === section
                    ? "text-lavender-500"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: "smooth" });
                  const menu = document.getElementById("mobile-menu");
                  if (menu) {
                    menu.classList.toggle("translate-x-full");
                  }
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-auto mb-8 space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/sulav2060"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/sulav-acharya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://twitter.com/sulav2060"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative flex items-center justify-center min-h-screen pt-16"
      >
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Sulav Acharya</span>
                <span className="block mt-2 text-2xl font-bold sm:text-3xl md:text-4xl text-lavender-500">
                  Software Engineer
                </span>
              </h1>
              <p className="max-w-md mt-6 text-lg text-muted-foreground">
                Crafting digital experiences with code, creativity, and a dash
                of chess strategy.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8 md:justify-start">
                <Button
                  size="lg"
                  className="bg-lavender-600 hover:bg-lavender-700"
                  onClick={() => {
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get In Touch
                </Button>
              </div>
              <div className="flex justify-center mt-8 space-x-4 md:justify-start">
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://github.com/sulav2060"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://linkedin.com/in/sulav-acharya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href="https://twitter.com/sulav2060"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center"
            >
              <div className="relative w-64 h-64 overflow-hidden rounded-full sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-lavender-500 to-red-500 p-1">
                <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
                  <Image
                    src="/pp.jpg"
                    alt="Sulav Acharya"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute w-12 h-12 bg-lavender-500 rounded-full opacity-70 animate-float-slow top-10 left-10"></div>
                <div className="absolute w-8 h-8 bg-red-500 rounded-full opacity-70 animate-float-medium bottom-10 right-10"></div>
                <div className="absolute w-6 h-6 bg-yellow-500 rounded-full opacity-70 animate-float-fast bottom-20 left-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            className="w-8 h-8 text-lavender-500"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded bg-lavender-500"></div>
          </motion.div>

          <div className="grid gap-12 mt-16 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative p-6 overflow-hidden rounded-lg bg-lavender-50 dark:bg-lavender-900/20"
            >
              <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10">
                <div className="absolute w-full h-full bg-lavender-300 dark:bg-lavender-700 rounded-full opacity-30"></div>
              </div>
              <h3 className="text-xl font-semibold">Background</h3>
              <p className="mt-4 text-muted-foreground">
                I&#39;m a software engineer currently pursuing my Bachelor&#39;s
                degree in Software Engineering at Pokhara University, expected
                to graduate in 12 months. I have experience working with
                development teams and building complex applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative p-6 overflow-hidden rounded-lg bg-red-50 dark:bg-red-900/20"
            >
              <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10">
                <div className="absolute w-full h-full bg-red-300 dark:bg-red-700 rounded-full opacity-30"></div>
              </div>
              <h3 className="text-xl font-semibold">Current Focus</h3>
              <p className="mt-4 text-muted-foreground">
                I&#39;m currently developing a SaaS-based fantasy sports
                platform focusing on cricket and football. The system supports
                small tournaments with manually uploaded data. I&#39;m also
                working on freelance projects through platforms like
                Freelancer.com.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative p-6 overflow-hidden rounded-lg bg-yellow-50 dark:bg-yellow-900/20"
            >
              <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10">
                <div className="absolute w-full h-full bg-yellow-300 dark:bg-yellow-700 rounded-full opacity-30"></div>
              </div>
              <h3 className="text-xl font-semibold">Beyond Coding</h3>
              <p className="mt-4 text-muted-foreground">
                When I&#39;m not coding, you might find me contemplating my next
                move in chess, strumming my guitar, or planning my next trekking
                adventure. I&#39;m learning Spanish as my current linguistic
                challenge.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="p-6 mt-12 rounded-lg bg-gradient-to-r from-lavender-500/10 to-red-500/10"
          >
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex-1 mb-6 md:mb-0 md:mr-6">
                <h3 className="text-xl font-semibold">My Journey</h3>
                <p className="mt-4 text-muted-foreground">
                  My journey in software development began with a curiosity
                  about how digital products work. This led me to explore
                  various programming languages and frameworks, eventually
                  specializing in web development. Along the way, Ive developed
                  a passion for creating intuitive user experiences and solving
                  complex problems through code.
                </p>
                <p className="mt-4 text-muted-foreground">
                  I believe in continuous learning and staying updated with the
                  latest technologies. My approach combines technical expertise
                  with creative thinking to deliver solutions that not only work
                  well but also provide a delightful user experience.
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3">
                <div className="p-4 rounded-lg bg-background">
                  <h4 className="text-lg font-medium">Quick Facts</h4>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">🎓</span> Software Engineering
                      student
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">💻</span> Full-stack developer
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">♟️</span> Chess enthusiast
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🎸</span> Guitar player
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🏔️</span> Trekking enthusiast
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🎬</span> Movies & anime fan
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🗣️</span> Multilingual
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-lavender-50/50 dark:bg-lavender-900/5"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">My Projects</h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded bg-lavender-500"></div>
            <p className="mt-6 text-lg text-muted-foreground">
              Here are some of the projects I&#39;ve been working on. Each one
              represents a unique challenge and learning opportunity.
            </p>
          </motion.div>

          <ProjectShowcase />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Technical Skills</h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded bg-lavender-500"></div>
            <p className="mt-6 text-lg text-muted-foreground">
              My technical toolkit includes a variety of languages, frameworks,
              and technologies that I use to build robust and scalable
              applications.
            </p>
          </motion.div>

          <div className="mt-16">
            <SkillsGlobe />
          </div>

          <div className="grid gap-8 mt-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-lavender-50 dark:bg-lavender-900/20"
            >
              <h3 className="text-xl font-semibold">Backend Development</h3>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">PHP & Laravel</span>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <div className="w-full h-2 mt-2 rounded-full bg-lavender-200 dark:bg-lavender-800">
                    <div
                      className="h-2 rounded-full bg-lavender-500"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">MongoDB</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <div className="w-full h-2 mt-2 rounded-full bg-lavender-200 dark:bg-lavender-800">
                    <div
                      className="h-2 rounded-full bg-lavender-500"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Django</span>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <div className="w-full h-2 mt-2 rounded-full bg-lavender-200 dark:bg-lavender-800">
                    <div
                      className="h-2 rounded-full bg-lavender-500"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">RESTful APIs</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="w-full h-2 mt-2 rounded-full bg-lavender-200 dark:bg-lavender-800">
                    <div
                      className="h-2 rounded-full bg-lavender-500"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-red-50 dark:bg-red-900/20"
            >
              <h3 className="text-xl font-semibold">Frontend Development</h3>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">React & JSX</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <div className="w-full h-2 mt-2 rounded-full bg-red-200 dark:bg-red-800">
                    <div
                      className="h-2 rounded-full bg-red-500"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Tailwind CSS</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div className="w-full h-2 mt-2 rounded-full bg-red-200 dark:bg-red-800">
                    <div
                      className="h-2 rounded-full bg-red-500"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">JavaScript</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="w-full h-2 mt-2 rounded-full bg-red-200 dark:bg-red-800">
                    <div
                      className="h-2 rounded-full bg-red-500"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">NextJs</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="w-full h-2 mt-2 rounded-full bg-red-200 dark:bg-red-800">
                    <div
                      className="h-2 rounded-full bg-red-500"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-6 mt-8 rounded-lg bg-gradient-to-r from-lavender-500/10 to-red-500/10"
          >
            <h3 className="text-xl font-semibold">Other Skills & Tools</h3>
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Git",
                "GitHub",
                "VS Code",
                "MySQL",
                "Figma",
                "Agile",
                "Team Collaboration",
                "Problem Solving",
                "UI/UX",
                "Responsive Design",
                "SEO",
                "Performance Optimization",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-background border border-lavender-200 dark:border-lavender-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interests Section */}
      <section
        id="interests"
        className="py-20 bg-lavender-50/50 dark:bg-lavender-900/5"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Beyond Coding</h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded bg-lavender-500"></div>
            <p className="mt-6 text-lg text-muted-foreground">
              Life isn&#39;t all about code. Here are some of the things I&#39;m
              passionate about outside of software development.
            </p>
          </motion.div>

          <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg"
            >
              <div className="relative h-48 bg-lavender-200 dark:bg-lavender-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-16 h-16 text-lavender-600 dark:text-lavender-400"
                  >
                    <path d="M12 2v5"></path>
                    <path d="M20 11h-5"></path>
                    <path d="M4 11h5"></path>
                    <path d="M12 17v5"></path>
                    <path d="m15 8-3 3-3-3"></path>
                    <path d="m15 16-3-3-3 3"></path>
                    <path d="m8 15 3-3 3 3"></path>
                    <path d="m8 9 3 3 3-3"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-background">
                <h3 className="text-xl font-semibold">Chess</h3>
                <p className="mt-2 text-muted-foreground">
                  I enjoy the strategic depth of chess, where each move requires
                  careful planning and foresight. The game has taught me
                  patience and the importance of thinking several steps ahead.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg"
            >
              <div className="relative h-48 bg-red-200 dark:bg-red-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Music className="w-16 h-16 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-background">
                <h3 className="text-xl font-semibold">Music & Guitar</h3>
                <p className="mt-2 text-muted-foreground">
                  Music is my creative outlet. I play the guitar and enjoy
                  exploring different genres. There&#39;s something magical
                  about creating melodies and rhythms that can express emotions
                  without words.
                </p>
                {/* <button
                  className="px-4 py-2 mt-4 text-sm font-medium transition-colors rounded-full bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-800/50"
                  onClick={() => {
                    const visualizer = document.getElementById("music-visualizer")
                    if (visualizer) {
                      visualizer.classList.toggle("hidden")
                    }
                  }}
                >
                  Try Music Visualizer
                </button> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg"
            >
              <div className="relative h-48 bg-yellow-200 dark:bg-yellow-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-16 h-16 text-yellow-600 dark:text-yellow-400"
                  >
                    <path d="m2 16 2 6h2l1-2h2l1 2h2l2-6"></path>
                    <path d="M18 16v.01"></path>
                    <path d="M22 16v.01"></path>
                    <path d="M20 20v.01"></path>
                    <path d="M18 20v.01"></path>
                    <path d="M22 20v.01"></path>
                    <path d="M20 16v.01"></path>
                    <path d="m14 12-8.5-8.5c-.83-.83-2.17-.83-3 0 0 0 8.5 8.5 8.5 8.5"></path>
                    <path d="M13.5 5.5 12 4"></path>
                    <path d="M16.5 8.5 15 7"></path>
                    <path d="M10.5 2.5 9 1"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-background">
                <h3 className="text-xl font-semibold">Trekking & Travel</h3>
                <p className="mt-2 text-muted-foreground">
                  Exploring the natural beauty of Nepal through trekking is one
                  of my favorite activities. There&#39;s nothing quite like the
                  sense of achievement when reaching a summit after a
                  challenging climb.
                </p>
                {/* <button
                  className="px-4 py-2 mt-4 text-sm font-medium transition-colors rounded-full bg-yellow-100 text-yellow-700 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:hover:bg-yellow-800/50"
                  onClick={() => {
                    const trekMap = document.getElementById("trek-map")
                    if (trekMap) {
                      trekMap.classList.toggle("hidden")
                    }
                  }}
                >
                  View Trek Map
                </button> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg"
            >
              <div className="relative h-48 bg-green-200 dark:bg-green-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-16 h-16 text-green-600 dark:text-green-400"
                  >
                    <path d="M19 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                    <rect width="6" height="10" x="15" y="7" rx="1"></rect>
                  </svg>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-background">
                <h3 className="text-xl font-semibold">Movies & Anime</h3>
                <p className="mt-2 text-muted-foreground">
                  I&#39;m a fan of storytelling in all its forms. Whether
                  it&#39;s a thought-provoking film or an engaging anime series,
                  I appreciate narratives that challenge perspectives and spark
                  imagination.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg"
            >
              <div className="relative h-48 bg-blue-200 dark:bg-blue-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-16 h-16 text-blue-600 dark:text-blue-400"
                  >
                    <path d="M21.59 11.59a9 9 0 0 1-13.4 10.73"></path>
                    <path d="M7.96 7.96a9 9 0 0 1 11.47-.32"></path>
                    <path d="M11.41 2.3a9 9 0 0 1 2.65 14.5"></path>
                    <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-background">
                <h3 className="text-xl font-semibold">Languages</h3>
                <p className="mt-2 text-muted-foreground">
                  I&#39;m fluent in English, Nepali, and Hindi, and I&#39;m
                  currently learning Spanish. Language learning opens doors to
                  new cultures and ways of thinking, enriching my perspective on
                  the world.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg"
            >
              <div className="relative h-48 bg-purple-200 dark:bg-purple-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="p-6 bg-white dark:bg-background">
                <h3 className="text-xl font-semibold">Random Research</h3>
                <p className="mt-2 text-muted-foreground">
                  I have an insatiable curiosity that leads me to research
                  random interesting topics. From quantum physics to ancient
                  history, I enjoy diving deep into subjects that catch my
                  attention.
                </p>
              </div>
            </motion.div>
          </div>

          <div id="music-visualizer" className="hidden mt-12">
            <MusicVisualizer />
          </div>

          <div id="trek-map" className="hidden mt-12">
            <TrekMap />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Get In Touch</h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded bg-lavender-500"></div>
            <p className="mt-6 text-lg text-muted-foreground">
              Interested in working together or just want to say hello? Feel
              free to reach out!
            </p>
          </motion.div>

          <div className="grid gap-12 mt-16 md:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <p className="mt-4 text-muted-foreground">
                Feel free to reach out through any of these channels. I&#39;m
                always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lavender-100 dark:bg-lavender-900/30">
                      <Mail className="w-5 h-5 text-lavender-600 dark:text-lavender-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Email</h4>
                    <a
                      href="mailto:sulav2060@example.com"
                      className="text-lavender-600 dark:text-lavender-400 hover:underline"
                    >
                      sulav2060@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lavender-100 dark:bg-lavender-900/30">
                      <Linkedin className="w-5 h-5 text-lavender-600 dark:text-lavender-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/sulav-acharya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lavender-600 dark:text-lavender-400 hover:underline"
                    >
                      linkedin.com/in/sulav-acharya
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lavender-100 dark:bg-lavender-900/30">
                      <Github className="w-5 h-5 text-lavender-600 dark:text-lavender-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">GitHub</h4>
                    <a
                      href="https://github.com/sulav2060"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lavender-600 dark:text-lavender-400 hover:underline"
                    >
                      github.com/sulav2060
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <div className="p-6 rounded-lg shadow-lg bg-background">
                <h3 className="text-xl font-semibold">Send Me a Message</h3>
                <form className="mt-6 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 mt-1 border rounded-lg border-input bg-background"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 mt-1 border rounded-lg border-input bg-background"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 mt-1 border rounded-lg border-input bg-background"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 mt-1 border rounded-lg border-input bg-background"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-lavender-600 hover:bg-lavender-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center bg-lavender-900 text-lavender-100">
        <div className="container px-4 mx-auto">
          <div className="text-2xl font-bold">
            <span className="text-lavender-300">S</span>
            <span className="text-red-400">.</span>
            <span className="text-lavender-300">A</span>
            <span className="text-red-400">.</span>
          </div>
          <p className="mt-4">
            © {new Date().getFullYear()} Sulav Acharya. All rights reserved.
          </p>
          <div className="flex justify-center mt-6 space-x-6">
            <a
              href="https://github.com/sulav2060"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lavender-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sulav-acharya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lavender-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/sulav2060"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lavender-300 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          {/* <p className="mt-8 text-sm text-lavender-400"> */}
          {/* Crafted with code and creativity.  */}
          {/* <span className="text-xs">Psst... try the Konami code: ↑↑↓↓←→←→BA</span> */}
          {/* </p> */}
        </div>
      </footer>

      {/* Easter Egg */}
      <AnimatePresence>
        {showEasterEgg && (
          <ChessEasterEgg onClose={() => setShowEasterEgg(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
