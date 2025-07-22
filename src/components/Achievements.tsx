"use client"

import { Trophy, Award, Users } from "lucide-react"

// Achievements data
const achievements = [
  {
    id: 1,
    title: "東北地区大学軟式野球連盟 連盟委員長",
    year: "2023年度",
    description: "東北地区の大学軟式野球連盟において委員長を務め、リーダーシップと組織運営能力を発揮",
    icon: Users,
    category: "leadership"
  },
  {
    id: 2,
    title: "東北大学工学部 3.5年の早期卒業",
    year: "2024年9月",
    description: "優秀な成績により通常4年のところを3.5年で卒業を達成",
    icon: Award,
    category: "academic"
  },
  {
    id: 3,
    title: "PKSHA HACKATHON 2025 最優秀賞",
    year: "2025年6月",
    description: "AI技術を活用したプロダクト開発において最優秀賞を受賞",
    icon: Trophy,
    category: "competition"
  }
]

export default function Achievements() {
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
          {achievements.map((achievement, index) => (
            <div key={achievement.id} className="border border-black/10 rounded-lg p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <p className="text-sm font-light text-black opacity-60 tracking-wide uppercase mb-2">
                    Year
                  </p>
                  <p className="text-base font-light text-black">
                    {achievement.year}
                  </p>
                  <p className="text-sm font-light text-black opacity-70 mt-2 capitalize">
                    {achievement.category}
                  </p>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-light text-black mb-4">
                      {achievement.title}
                    </h3>
                  </div>
                  
                  <div className="max-w-xl">
                    <p className="text-base font-light text-black opacity-70 leading-loose">
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