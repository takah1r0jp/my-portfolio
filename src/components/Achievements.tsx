"use client"

import { Trophy, Award, Users } from "lucide-react"
import { useLanguage } from "./LanguageProvider"

export default function Achievements() {
  const { language } = useLanguage()
  
  // Achievements data based on language
  const achievements = language === 'ja'
    ? [
        {
          id: 1,
          title: "東北地区大学軟式野球連盟 連盟委員長",
          year: "2023年度",
          description: "東北地区の大学軟式野球連盟において委員長を務めた。一球速報を導入し運営の効率化、リーグ戦の活性化を達成",
          icon: Users,
        },
        {
          id: 2,
          title: "東北大学工学部 3.5年の早期卒業",
          year: "2024年9月",
          description: "3.5年で工学部機械知能・航空工学科を早期卒業",
          icon: Award,
        },
        {
          id: 3,
          title: "PKSHA HACKATHON 2025 最優秀賞",
          year: "2025年6月",
          description: "アルゴリズムエンジニアとして参加したAIエージェントハッカソンにおいて最優秀賞を受賞",
          icon: Trophy,
        }
      ]
    : [
        {
          id: 1,
          title: "Chairman of Tohoku University Baseball Federation",
          year: "2023",
          description: "Served as chairman of the Tohoku region university baseball federation. Introduced live score updates and achieved operational efficiency and league revitalization",
          icon: Users,
        },
        {
          id: 2,
          title: "Early Graduation from Tohoku University (3.5 years)",
          year: "September 2024",
          description: "Early graduation from the Department of Mechanical and Aerospace Engineering in 3.5 years",
          icon: Award,
        },
        {
          id: 3,
          title: "PKSHA HACKATHON 2025 Grand Prize Winner",
          year: "June 2025",
          description: "Won the grand prize in AI agent hackathon as an algorithm engineer",
          icon: Trophy,
        }
      ]
  return (
    <section id="achievements">
      <div>
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-black mb-2">
            Achievements
          </h2>
          <div className="w-16 h-px bg-black"></div>
        </div>

        <div className="space-y-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="border border-black/10 rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <p className="text-xs font-light text-black opacity-60 tracking-wide uppercase mb-2">
                    {language === 'ja' ? 'Year' : 'Year'}
                  </p>
                  <p className="text-sm font-light text-black">
                    {achievement.year}
                  </p>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className={`text-lg font-light text-black mb-4 ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                      {achievement.title}
                    </h3>
                  </div>
                  
                  <div className="max-w-xl">
                    <p className={`text-sm font-light text-black opacity-70 leading-relaxed ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                      {achievement.description}
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