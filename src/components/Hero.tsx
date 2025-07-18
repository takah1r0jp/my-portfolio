"use client"

import { motion } from "framer-motion"
import { Mail, Github, ExternalLink } from "lucide-react"
import { useLanguage } from "./LanguageProvider"

export default function Hero() {
  const { t, language } = useLanguage()

  return (
    <section className="pt-32 pb-32 bg-white min-h-screen flex items-center">
      <div className="container-standard w-full">
        <div className="max-w-4xl">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className={`text-6xl sm:text-7xl lg:text-8xl text-display text-black ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
              {t("hero.title")}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-16"
          >
            <p className="text-xl text-heading text-black opacity-70">
              {t("hero.subtitle")}
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mb-16 space-y-8"
          >
            <p className="text-lg text-body text-black max-w-2xl">
              {t("hero.description")}
            </p>
            <div className="space-y-2">
              <p className="text-caption text-black opacity-60">
                {t("hero.affiliation")}
              </p>
              <p className="text-caption text-black opacity-60">
                {t("hero.location")}
              </p>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mb-20"
          >
            <div className="border-l-2 border-black pl-8">
              <p className={`text-base text-body text-black max-w-3xl ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                {t("hero.introduction")}
              </p>
            </div>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="mailto:takahiro.cvdev@gmail.com"
              className="inline-flex items-center gap-3 text-caption text-black hover:opacity-50 transition-opacity"
              aria-label="Email"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href="https://github.com/takah1r0jp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-caption text-black hover:opacity-50 transition-opacity"
              aria-label="GitHub"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://x.com/TCvlab78380"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-caption text-black hover:opacity-50 transition-opacity"
              aria-label="X (Twitter)"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X
            </a>
            <a
              href="https://qiita.com/takah1r0_tt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-caption text-black hover:opacity-50 transition-opacity"
              aria-label="Qiita"
            >
              <ExternalLink size={16} />
              Qiita
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}