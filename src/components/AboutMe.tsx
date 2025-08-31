"use client"

import { useLanguage } from "./LanguageProvider"

export default function AboutMe() {
  const { t, language } = useLanguage()

  return (
    <>
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-black mb-2">
          About Me
        </h2>
        <div className="w-16 h-px bg-black"></div>
      </div>

      {/* Introduction */}
      <div className="border border-black/10 rounded-lg p-6">
        <div className="border-l-2 border-black pl-6">
          <p className={`text-base font-light text-black leading-relaxed ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
            {t("hero.introduction")}
          </p>
        </div>
      </div>
    </>
  )
}