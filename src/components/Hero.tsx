"use client"

import Image from "next/image"
import { Mail, Github, ExternalLink } from "lucide-react"
import { useLanguage } from "./LanguageProvider"
import { IconWithButton } from "./ui/IconWithButton"

export default function Hero() {
  const { t, language } = useLanguage()

  return (
    <section className="pt-20 pb-16 bg-white min-h-screen flex items-center">
      <div className="container-standard w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-8">
            {/* Name */}
            <div className="mb-2">
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl text-display text-black font-bold ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                {t("hero.title")}
              </h1>
            </div>

            {/* Subtitle */}
            <div className="">
              <p className="text-4xl text-heading text-black opacity-70 font-bold">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
            <p className="text-lg text-body text-black max-w-2xl font-bold">
                {t("hero.affiliation")}
              </p>
              <p className="text-lg text-body text-black max-w-2xl font-bold">
                Interests
              </p>
              <p className="text-sm text-body text-black max-w-2xl">
                {t("hero.description")}
              </p>
            </div>


            {/* Introduction */}
            <div className="mb-12">
              <div className="border-l-2 border-black pl-6">
                <p className={`text-base text-body text-black max-w-3xl ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                  {t("hero.introduction")}
                </p>
              </div>
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
                width={200}
                height={200}
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