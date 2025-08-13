"use client"

import { useLanguage } from "./LanguageProvider"

export default function WorkExperience() {
  const { language } = useLanguage()
  
  // Work experience data based on language
  const workExperience = language === 'ja'
    ? [
        {
          id: 1,
          company: "株式会社 zero-to-one",
          position: "Internship",
          period: "2024/10 〜 現在",
          description: "AIの講義教材の作成やコンテンツ作成に従事",
          type: "internship"
        },
        {
          id: 2,
          company: "株式会社 onecareer",
          position: "3days Business Internship",
          period: "2025/3",
          description: "ビジネス戦略とマーケティングに関するインターンシップ",
          type: "internship"
        },
        {
          id: 3,
          company: "PKSHA Technology",
          position: "3days Hackathon",
          period: "2025/6",
          description: "AI技術を活用したプロダクト開発ハッカソンに参加",
          type: "hackathon"
        }
      ]
    : [
        {
          id: 1,
          company: "zero-to-one Corporation",
          position: "Internship",
          period: "October 2024 - Present",
          description: "Engaged in creating AI lecture materials and content development",
          type: "intern"
        },
        {
          id: 2,
          company: "onecareer Corporation",
          position: "3-day Business Internship",
          period: "March 2025",
          description: "Internship focused on business strategy and marketing",
          type: "internship"
        },
        {
          id: 3,
          company: "PKSHA Technology",
          position: "3-day Hackathon",
          period: "June 2025",
          description: "Participated in product development hackathon utilizing AI technology",
          type: "hackathon"
        }
      ]
  return (
    <section id="work-experience">
      <div>
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-black mb-2">
            Work Experience
          </h2>
          <div className="w-16 h-px bg-black"></div>
        </div>

        <div className="space-y-6">
          {workExperience.map((work, index) => (
            <div key={work.id} className="border border-black/10 rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <p className="text-xs font-light text-black opacity-60 tracking-wide uppercase mb-2">
                    {language === 'ja' ? '期間' : 'Period'}
                  </p>
                  <p className="text-sm font-light text-black">
                    {work.period}
                  </p>
                  {work.type && (
                    <p className="text-xs font-light text-black opacity-70 mt-2 capitalize">
                      {work.type}
                    </p>
                  )}
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className={`text-lg font-light text-black mb-2 ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                      {work.position}
                    </h3>
                    <p className={`text-base font-light text-black opacity-70 mb-4 ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                      {work.company}
                    </p>
                  </div>
                  
                  <div className="max-w-xl">
                    <p className={`text-sm font-light text-black opacity-70 leading-relaxed ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                      {work.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}