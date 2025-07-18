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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-black/10"
          : "bg-transparent"
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="header-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ opacity: 0.7 }}
            whileTap={{ scale: 0.98 }}
            className="text-lg font-light tracking-[0.2em] text-black transition-opacity duration-300"
            style={{ color: '#000000' }}
          >
            {t("hero.title")}
          </motion.button>

          {/* Language Switch Only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <LanguageSwitch />
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-black/10"
          >
            <div className="header-container py-8">
              <div className="space-y-4">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-black hover:opacity-50 transition-opacity duration-300 text-base font-light py-3 border-b border-black/5 last:border-b-0"
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