"use client"

import Image from "next/image"
import { Mail, Github, ExternalLink } from "lucide-react"
import { useLanguage } from "./LanguageProvider"
import { IconWithButton } from "./ui/IconWithButton"

export default function Hero() {
  const { t, language } = useLanguage()

  return (
    <section className="pt-20 pb-16 bg-gray-100 min-h-screen flex items-center">
      <div className="container-standard w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-8">
            {/* Name */}
            <div className="mb-6">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl text-display text-black font-bold ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                {t("hero.title")}
              </h1>
            </div>

            {/* Subtitle */}
            <div className="mb-6">
              <p className="text-2xl sm:text-3xl text-heading text-black opacity-70 font-bold">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Basic Info */}
            <div className="mb-8">
              <p className="text-lg text-body text-black font-bold mb-2">
                {t("hero.affiliation")}
              </p>
              <p className="text-lg text-body text-black font-bold mb-2">
                Interests : LLM・画像認識・異常検知・プロダクト開発
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-3">
              <IconWithButton
                href="mailto:takahiro.cvdev@gmail.com"
                icon={<Mail size={16} />}
                label="Email"
                aria-label="Email"
              />
              <IconWithButton
                href="https://github.com/takah1r0jp"
                target="_blank"
                rel="noopener noreferrer"
                icon={<Github size={16} />}
                label="GitHub"
                aria-label="GitHub"
              />
              <IconWithButton
                href="https://x.com/TCvlab78380"
                target="_blank"
                rel="noopener noreferrer"
                icon={
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                }
                label="X"
                aria-label="X (Twitter)"
              />
              <IconWithButton
                href="https://qiita.com/takah1r0_tt"
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLink size={16} />}
                label="Qiita"
                aria-label="Qiita"
              />
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-4 order-first lg:order-last flex items-center justify-center">
            <div className="relative">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                width={250}
                height={250}
                className="object-cover rounded-full border-4 border-black"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}