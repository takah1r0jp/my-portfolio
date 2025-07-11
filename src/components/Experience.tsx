"use client"

import { motion } from "framer-motion"
import { Briefcase, Trophy, Calendar, ChevronRight, Star, Target } from "lucide-react"
import { profileData } from "@/data/profile"

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="experience" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-light tracking-tight text-black mb-6">
            Experience
          </h2>
          <div className="w-24 h-0.5 bg-black mb-8"></div>
          <p className="text-gray-600 max-w-2xl font-light leading-relaxed">
            Professional experience, internships, achievements, and continuous
            skill development in artificial intelligence and software engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-black" />
              <h3 className="text-xl font-medium text-black">Professional Experience</h3>
            </div>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {profileData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="surface-elevated p-8 hover-lift"
                  variants={itemVariants}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h4 className="text-xl font-medium text-black mb-2">
                        {exp.position}
                      </h4>
                      <p className="text-lg text-gray-600 font-medium mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 text-xs font-mono tracking-wider uppercase">
                      <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                      Current
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    <h5 className="font-medium text-black">Key Responsibilities</h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-3 text-sm text-gray-600">
                          <ChevronRight className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Development */}
            <motion.div
              className="surface-elevated p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-5 w-5 text-black" />
                <h4 className="text-lg font-medium text-black">Continuous Learning</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">
                    最新のAI・機械学習技術のキャッチアップ
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">
                    産業界での実用的なAI応用の研究
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">
                    チームでの開発経験とリーダーシップスキル
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <Trophy className="h-5 w-5 text-black" />
              <h3 className="text-xl font-medium text-black">Achievements</h3>
            </div>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {profileData.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="surface-elevated p-8 hover-lift"
                  variants={itemVariants}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-black" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-medium text-black">
                          {achievement.title}
                        </h4>
                        <span className="text-sm text-gray-400 font-mono">
                          {achievement.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="h-4 w-4 text-black" />
                        <span className="text-black font-medium">
                          {achievement.result}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Impact Metrics */}
            <motion.div
              className="surface-elevated p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-medium text-black mb-6">
                Impact & Recognition
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-light text-black mb-2">2025</div>
                  <div className="text-sm text-gray-600">Hackathon Winner</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-black mb-2">2</div>
                  <div className="text-sm text-gray-600">AI Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-black mb-2">1</div>
                  <div className="text-sm text-gray-600">Research Publication</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Career Vision */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="surface-elevated p-12 text-center">
            <h3 className="text-2xl font-light text-black mb-6">
              Career Vision
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              AI技術を活用して実世界の問題を解決するエンジニア・研究者として、
              学術界と産業界の架け橋となるような活動を続けていきたいと考えています。
              特に、製造業における品質管理の自動化と効率化に貢献し、
              日本の製造業の競争力強化に寄与したいと考えています。
            </p>
            <div className="flex items-center justify-center gap-12 text-sm text-gray-500 font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span>Academic Research</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Industrial Application</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span>Technology Innovation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}