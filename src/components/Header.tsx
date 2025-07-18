"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "./LanguageProvider"
import { LanguageSwitch } from "./ui/LanguageSwitch"

const getNavigation = (t: (key: string) => string) => [
  { name: t("nav.education"), href: "#education" },
  { name: t("nav.projects"), href: "#projects" },
  { name: t("nav.experience"), href: "#work-experience" },
  { name: t("nav.achievements"), href: "#achievements" },
  { name: t("nav.skills"), href: "#skills" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()
  const navigation = getNavigation(t)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-gradient-to-r from-white via-white to-gray-50/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
          : "bg-gradient-to-r from-transparent via-transparent to-transparent"
      }`}
    >
      <div className="header-container">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-xl font-medium tracking-[0.15em] bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent hover:from-gray-600 hover:via-gray-700 hover:to-gray-500 transition-all duration-500"
          >
            {t("hero.title")}
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-16">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-700 hover:text-black transition-all duration-500 text-sm font-medium tracking-[0.1em] uppercase group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-500 group-hover:w-full"></span>
              </motion.button>
            ))}
            
            {/* Elegant separator */}
            <div className="flex items-center space-x-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <LanguageSwitch />
              </motion.div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-6 lg:hidden">
            <LanguageSwitch />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 group"
            >
              <motion.div
                animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-black/10"
          >
            <div className="header-container py-12">
              <div className="space-y-8">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-black hover:opacity-40 transition-all duration-500 text-lg font-extralight tracking-[0.2em] uppercase py-3 border-b border-black/5 last:border-b-0"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}