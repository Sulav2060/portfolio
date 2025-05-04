import { ChevronDown, Code, Github, Linkedin, Mail, MapPin, Send, Terminal, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import EasterEgg from "@/components/easter-egg"
import ThemeToggle from "@/components/theme-toggle"
import ManUtdBadge from "@/components/man-utd-badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-foreground">
      <EasterEgg />

      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lavender-400 to-red-400 dark:from-lavender-400 dark:to-red-400">
          <span className="text-foreground">Sulav</span>Dev
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="hover:text-lavender-400 transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-lavender-400 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-lavender-400 transition-colors">
            Projects
          </Link>
          <Link href="#interests" className="hover:text-lavender-400 transition-colors">
            Interests
          </Link>
          <Link href="#contact" className="hover:text-lavender-400 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Terminal className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[80vh] relative">
        <ManUtdBadge />
        <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden border-4 border-lavender-500 shadow-lg shadow-lavender-500/20">
          <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-lavender-400 via-purple-500 to-red-400">
            Hello, I'm Sulav
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-300 text-center mb-8 animate-fade-in-delay">
          Software Engineer & Fantasy Sports Enthusiast
        </h2>
        <p className="text-lg text-center max-w-2xl text-slate-400 mb-10 animate-fade-in-delay-2">
          Building digital experiences that make people say "wow" — or at least "hmm, that's neat" (I'll take either as
          a win).
        </p>
        <div className="flex space-x-4 animate-fade-in-delay-3">
          <Button className="bg-lavender-500 hover:bg-lavender-600 text-white">View Projects</Button>
          <Button variant="outline" className="border-lavender-500 text-lavender-400 hover:bg-lavender-500/10">
            Get in Touch
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about">
            <ChevronDown className="h-8 w-8 text-lavender-400" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-100/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lavender-400 to-red-400">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300">
                I'm a software engineer currently pursuing my bachelor's degree, with a passion for building innovative
                web applications that solve real problems.
              </p>
              <p className="text-lg text-slate-300">
                Currently, I'm developing a SaaS-based fantasy sports platform focused on cricket and football, designed
                for small tournaments with manually uploaded data.
              </p>
              <p className="text-lg text-slate-300">
                When I'm not debugging code that worked perfectly yesterday (and mysteriously doesn't today), you'll
                find me playing chess, strumming my guitar, or planning my next trek.
              </p>
              <div className="flex items-center space-x-2 text-slate-400">
                <MapPin className="h-5 w-5 text-red-400" />
                <span>Nepal</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-6 rounded-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-lavender-400">Education</h3>
                <p className="text-slate-300">Bachelor's in Computer Science</p>
                <p className="text-slate-400">In Progress</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-lavender-400">Experience</h3>
                <p className="text-slate-300">Team Development</p>
                <p className="text-slate-400">Collaborative Projects</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-lavender-400">Languages</h3>
                <p className="text-slate-300">English, Nepali, Hindi</p>
                <p className="text-slate-400">Learning Spanish</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-lavender-400">Personality</h3>
                <p className="text-slate-300">Creative Problem Solver</p>
                <p className="text-slate-400">With a dash of humor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lavender-400 to-red-400">
              Tech Stack
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-lavender-400">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="PHP" />
                <SkillBadge name="Laravel" />
                <SkillBadge name="MongoDB" />
                <SkillBadge name="Django" level="basic" />
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-lavender-400">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="React" />
                <SkillBadge name="JSX" />
                <SkillBadge name="Tailwind CSS" />
                <SkillBadge name="HTML/CSS" />
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-lavender-400">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Git" />
                <SkillBadge name="VS Code" />
                <SkillBadge name="npm" />
                <SkillBadge name="Composer" />
              </div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-lavender-400">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Team Collaboration" />
                <SkillBadge name="Problem Solving" />
                <SkillBadge name="Communication" />
                <SkillBadge name="Adaptability" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-100/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lavender-400 to-red-400">
              Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Fantasy Sports Platform"
              description="A SaaS-based platform for cricket and football fantasy leagues, supporting small tournaments with manual data uploads."
              tags={["Laravel", "MongoDB", "React", "Tailwind CSS"]}
              image="/placeholder.svg?height=300&width=500"
              featured={true}
            />
            <ProjectCard
              title="Personal Portfolio"
              description="A modern, responsive portfolio website showcasing my skills and projects. Features smooth animations and an easter egg!"
              tags={["React", "Next.js", "Tailwind CSS"]}
              image="/placeholder.svg?height=300&width=500"
            />
            <ProjectCard
              title="E-commerce Dashboard"
              description="Admin dashboard for managing products, orders, and customer data with comprehensive analytics."
              tags={["Laravel", "React", "Chart.js"]}
              image="/placeholder.svg?height=300&width=500"
            />
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-lavender-500 text-lavender-400 hover:bg-lavender-500/10">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lavender-400 to-red-400">
              Beyond Coding
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
              <div className="bg-lavender-500/20 p-4 rounded-full inline-flex mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Chess"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-lavender-400">Chess</h3>
              <p className="text-sm text-slate-400">Strategizing my way to checkmate (occasionally)</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
              <div className="bg-lavender-500/20 p-4 rounded-full inline-flex mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Guitar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-lavender-400">Guitar</h3>
              <p className="text-sm text-slate-400">
                My neighbors' favorite hobby too (they're too polite to complain)
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
              <div className="bg-lavender-500/20 p-4 rounded-full inline-flex mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Music"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-lavender-400">Music</h3>
              <p className="text-sm text-slate-400">From classical to rock, my coding soundtrack</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
              <div className="bg-lavender-500/20 p-4 rounded-full inline-flex mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Movies"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-lavender-400">Movies & Series</h3>
              <p className="text-sm text-slate-400">Expert at "one more episode" syndrome</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
              <div className="bg-lavender-500/20 p-4 rounded-full inline-flex mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Anime"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-lavender-400">Anime</h3>
              <p className="text-sm text-slate-400">Finding life lessons in animated adventures</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
              <div className="bg-lavender-500/20 p-4 rounded-full inline-flex mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Trekking"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-lavender-400">Trekking</h3>
              <p className="text-sm text-slate-400">Debugging my thoughts in nature's IDE</p>
            </div>
            <div className="bg-slate-800 dark:bg-slate-800 p-6 rounded-lg text-center transform transition-transform hover:scale-105">
              <div className="bg-lavender-500/20 p-4 rounded-full inline-flex mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Football"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-lavender-400">Football</h3>
              <p className="text-sm text-slate-400">Man Utd supporter through glory and pain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-100/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lavender-400 to-red-400">
              Get In Touch
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-lavender-400">Let's Connect</h3>
              <p className="text-slate-300">
                Whether you want to discuss a project, talk about tech, or challenge me to a chess match, I'm always
                open to new connections and opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-lavender-400" />
                  <span className="text-slate-300">email@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-lavender-400" />
                  <span className="text-slate-300">Nepal</span>
                </div>
                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-slate-800 hover:bg-lavender-500 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-slate-800 hover:bg-lavender-500 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-slate-800 hover:bg-lavender-500 hover:text-white"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-slate-800 hover:bg-lavender-500 hover:text-white"
                  >
                    <Code className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-lavender-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-lavender-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-lavender-500"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-lavender-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-lavender-500 hover:bg-lavender-600">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Sulav | Software Engineer & Fantasy Sports Enthusiast
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Built with Next.js and Tailwind CSS |{" "}
            <span className="text-lavender-400">There's an easter egg hidden somewhere...</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
