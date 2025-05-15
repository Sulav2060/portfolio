"use client"

import { Menu, Moon, Sun, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="text-xl font-bold text-lavender-600">
          Sulav<span className="text-red-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-lavender-600">
            About
          </Link>
          <Link href="#projects" className="text-sm font-medium transition-colors hover:text-lavender-600">
            Projects
          </Link>
          <Link href="#skills" className="text-sm font-medium transition-colors hover:text-lavender-600">
            Skills
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-lavender-600">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-16 bg-background md:hidden">
          <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
            <Link
              href="#about"
              className="text-lg font-medium transition-colors hover:text-lavender-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium transition-colors hover:text-lavender-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-lg font-medium transition-colors hover:text-lavender-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium transition-colors hover:text-lavender-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
