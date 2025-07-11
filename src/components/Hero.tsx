"use client"

import { motion } from "framer-motion"
import { ArrowDown, Mail, Github } from "lucide-react"
import { profileData } from "@/data/profile"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-16"
        >
          {/* Main Content */}
          <div className="space-y-8">
            {/* Name */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-black">
                {profileData.name}
              </h1>
              <div className="w-24 h-0.5 bg-black"></div>
            </motion.div>

            {/* Title & Subtitle */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono text-gray-600 tracking-wide">
                {profileData.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-500 max-w-2xl font-light leading-relaxed">
                {profileData.subtitle}
              </p>
            </motion.div>

            {/* Affiliation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm text-gray-400 font-mono tracking-wider uppercase">
                {profileData.affiliation}
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-gray-600 leading-relaxed">
                画像認識・コンピュータビジョン専門のAI研究者として、産業用画像の異常検知手法の開発に取り組んでいます。
                PKSHAハッカソン2025で最優秀賞を受賞し、実践的なAI開発経験を積んでいます。
              </p>
            </motion.div>
          </div>

          {/* Actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <button
              onClick={scrollToProjects}
              className="group px-8 py-3 bg-black text-white font-medium text-sm tracking-wide hover-lift transition-all duration-300 hover:bg-gray-800 flex items-center gap-3"
            >
              VIEW PROJECTS
              <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
            
            <button
              onClick={scrollToContact}
              className="group px-8 py-3 border border-gray-300 text-gray-700 font-medium text-sm tracking-wide hover-lift transition-all duration-300 hover:border-black hover:text-black flex items-center gap-3"
            >
              GET IN TOUCH
              <Mail className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-8 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <a
              href={profileData.contact.github}
              className="text-gray-400 hover:text-black transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="text-gray-400 hover:text-black transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-300 hover:text-gray-500 cursor-pointer transition-colors"
            onClick={scrollToProjects}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}