"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./LanguageProvider"

export default function Education() {
  const { t, language } = useLanguage()
  
  // Access the education items from translations
  const educationItems = language === 'ja' 
    ? [
        {
          degree: "修士課程",
          school: "東北大学大学院",
          field: "情報科学研究科 システム情報科学専攻",
          period: "2024年10月 - 現在",
          specialization: "画像認識・コンピュータビジョン",
          description: "コンピュータビジョンと異常検知を専門とし、産業応用に向けた実用的な手法の開発に取り組んでいます。"
        },
        {
          degree: "学士（早期卒業）",
          school: "東北大学",
          field: "工学部 機械知能・航空工学科",
          period: "2021年4月 - 2024年9月",
          note: "3.5年で早期卒業",
          description: "機械学習とデータサイエンスの基礎を学び、優秀な成績で早期卒業を達成しました。"
        }
      ]
    : [
        {
          degree: "Master's Program",
          school: "Tohoku University Graduate School",
          field: "Information Sciences, Systems Information Science",
          period: "Oct 2024 - Present",
          specialization: "Image Recognition & Computer Vision",
          description: "Specializing in computer vision and anomaly detection, working on developing practical methods for industrial applications."
        },
        {
          degree: "Bachelor's (Early Graduation)",
          school: "Tohoku University",
          field: "Faculty of Engineering, Mechanical and Aerospace Engineering",
          period: "Apr 2021 - Sep 2024",
          note: "Early graduation in 3.5 years",
          description: "Studied fundamentals of machine learning and data science, achieving early graduation with excellent grades."
        }
      ]

  return (
    <section id="education">
      <div>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className={`text-4xl sm:text-5xl font-light tracking-tight text-black mb-6 ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
            {t("education.title")}
          </h2>
          <div className="w-16 h-px bg-black mb-8"></div>
          <p className={`text-lg font-light text-black opacity-70 max-w-2xl leading-relaxed ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
            {t("education.subtitle")}
          </p>
        </motion.div>

        {/* Education Items */}
        <div className="space-y-16">
          {educationItems.map((edu, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="border-b border-black pb-16 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Period */}
                <div className="lg:col-span-1">
                  <p className="text-sm font-light text-black opacity-60 tracking-wide uppercase mb-2">
                    {language === 'ja' ? '期間' : 'Period'}
                  </p>
                  <p className="text-base font-light text-black">
                    {edu.period}
                  </p>
                  {edu.note && (
                    <p className="text-sm font-light text-black opacity-70 mt-2">
                      {edu.note}
                    </p>
                  )}
                </div>

                {/* Education Details */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className={`text-2xl font-light text-black mb-2 ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                      {edu.degree}
                    </h3>
                    <p className={`text-lg font-light text-black opacity-70 mb-2 ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                      {edu.school}
                    </p>
                    <p className={`text-base font-light text-black opacity-60 ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                      {edu.field}
                    </p>
                  </div>

                  {edu.specialization && (
                    <div>
                      <p className="text-sm font-light text-black opacity-60 tracking-wide uppercase mb-1">
                        {language === 'ja' ? '専攻' : 'Specialization'}
                      </p>
                      <p className={`text-base font-light text-black ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                        {edu.specialization}
                      </p>
                    </div>
                  )}

                  {edu.description && (
                    <div className="max-w-xl">
                      <p className={`text-base font-light text-black opacity-70 leading-loose ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                        {edu.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}