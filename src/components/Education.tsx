"use client"

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
          specialization: "画像認識・異常検知",
          description: ""
        },
        {
          degree: "学士（早期卒業）",
          school: "東北大学",
          field: "工学部 機械知能・航空工学科",
          period: "2021年4月 - 2024年9月",
          note: "3.5年で早期卒業",
          description: "機械工学、制御工学、航空宇宙工学の基礎を学び、3.5年で早期卒業を達成しました。"
        }
      ]
    : [
        {
          degree: "Master's Program",
          school: "Tohoku University Graduate School",
          field: "Information Sciences, Systems Information Science",
          period: "Oct 2024 - Present",
          specialization: "Image Recognition & Anomaly Detection",
          description: ""
        },
        {
          degree: "Bachelor's (Early Graduation)",
          school: "Tohoku University",
          field: "Faculty of Engineering, Mechanical and Aerospace Engineering",
          period: "Apr 2021 - Sep 2024",
          note: "Early graduation in 3.5 years",
          description: "Studied fundamentals of mechanical engineering, control engineering, and aerospace engineering, achieving early graduation in 3.5 years."
        }
      ]

  return (
    <section id="education">
      <div>
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-black mb-2">
            Education
          </h2>
          <div className="w-16 h-px bg-black"></div>
        </div>

        {/* Education Items */}
        <div className="space-y-6">
          {educationItems.map((edu, index: number) => (
            <div key={index} className="border border-black/10 rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Period */}
                <div className="lg:col-span-1">
                  <p className="text-xs font-light text-black opacity-60 tracking-wide uppercase mb-1">
                    {language === 'ja' ? '期間' : 'Period'}
                  </p>
                  <p className="text-sm font-light text-black mb-1">
                    {edu.period}
                  </p>
                  {edu.note && (
                    <p className="text-xs font-light text-black opacity-70">
                      {edu.note}
                    </p>
                  )}
                </div>

                {/* Education Details */}
                <div className="lg:col-span-2 space-y-3">
                  <div>
                    <h3 className={`text-xl font-light text-black mb-1 ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                      {edu.degree}
                    </h3>
                    <p className={`text-base font-light text-black opacity-70 ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                      {edu.school} - {edu.field}
                    </p>
                  </div>

                  {edu.specialization && (
                    <div>
                      <p className="text-xs font-light text-black opacity-60 tracking-wide uppercase mb-1">
                        {language === 'ja' ? '専攻' : 'Specialization'}
                      </p>
                      <p className={`text-sm font-light text-black ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                        {edu.specialization}
                      </p>
                    </div>
                  )}

                  {edu.description && (
                    <div className="max-w-xl">
                      <p className={`text-sm font-light text-black opacity-70 leading-relaxed ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                        {edu.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}