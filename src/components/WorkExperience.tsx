"use client"

import { motion } from "framer-motion"

// Work experience data
const workExperience = [
  {
    id: 1,
    company: "株式会社 zero-to-one",
    position: "Intern",
    period: "2024/10 〜 現在",
    description: "AIの講義教材の作成やコンテンツ作成に従事",
    type: "intern"
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

export default function WorkExperience() {
  return (
    <section id="work-experience">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-black mb-6">
            Work Experience
          </h2>
          <div className="w-16 h-px bg-black mb-8"></div>
          <p className="text-lg font-light text-black opacity-70 max-w-2xl leading-relaxed">
            Professional experience and industry engagement.
          </p>
        </motion.div>

        <div className="space-y-16">
          {workExperience.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="border-b border-black pb-16 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <p className="text-sm font-light text-black opacity-60 tracking-wide uppercase mb-2">
                    Period
                  </p>
                  <p className="text-base font-light text-black">
                    {work.period}
                  </p>
                  {work.type && (
                    <p className="text-sm font-light text-black opacity-70 mt-2 capitalize">
                      {work.type}
                    </p>
                  )}
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-light text-black mb-2">
                      {work.position}
                    </h3>
                    <p className="text-lg font-light text-black opacity-70 mb-4">
                      {work.company}
                    </p>
                  </div>
                  
                  <div className="max-w-xl">
                    <p className="text-base font-light text-black opacity-70 leading-loose">
                      {work.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}