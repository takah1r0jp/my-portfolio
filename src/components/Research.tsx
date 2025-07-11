"use client"

import { motion } from "framer-motion"
import { BookOpen, Award, Calendar, Tag, Users, ArrowUpRight, Target } from "lucide-react"
import { profileData } from "@/data/profile"

export default function Research() {
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
    <section id="research" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-light tracking-tight text-black mb-6">
            Research
          </h2>
          <div className="w-24 h-0.5 bg-black mb-8"></div>
          <p className="text-gray-600 max-w-2xl font-light leading-relaxed">
            Current research activities, academic publications, and contributions
            to the field of artificial intelligence and computer vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Current Research */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-black" />
              <h3 className="text-xl font-medium text-black">Current Research</h3>
            </div>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {profileData.research.map((research, index) => (
                <motion.div
                  key={index}
                  className="surface-elevated p-8 hover-lift"
                  variants={itemVariants}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                      <span className="text-sm font-mono text-gray-500 tracking-wider uppercase">
                        {research.status === "ongoing" ? "In Progress" : "Completed"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                      <Calendar className="h-4 w-4" />
                      {research.period}
                    </div>
                  </div>

                  <h4 className="text-xl font-medium text-black mb-4">
                    {research.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {research.description}
                  </p>

                  {/* Keywords */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Keywords</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {research.keywords.map((keyword, keywordIndex) => (
                        <span
                          key={keywordIndex}
                          className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-mono border border-gray-200"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Research Goals */}
            <motion.div
              className="surface-elevated p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-5 w-5 text-black" />
                <h4 className="text-lg font-medium text-black">Research Objectives</h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">
                    産業界での実用的な異常検知システムの開発
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">
                    学術論文の執筆と国際会議での発表
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">
                    オープンソースでの研究成果の公開
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Publications */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-black" />
              <h3 className="text-xl font-medium text-black">Publications</h3>
            </div>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {profileData.publications.map((publication, index) => (
                <motion.div
                  key={index}
                  className="surface-elevated p-8 hover-lift"
                  variants={itemVariants}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`px-3 py-1 border text-xs font-mono tracking-wider uppercase ${
                        publication.type === "poster" 
                          ? "bg-gray-50 border-gray-200 text-gray-700" 
                          : "bg-black text-white border-black"
                      }`}>
                        {publication.type === "poster" ? "Poster" : "Paper"}
                      </div>
                      <div className={`px-3 py-1 border text-xs font-mono tracking-wider uppercase ${
                        publication.status === "accepted" 
                          ? "bg-gray-50 border-gray-200 text-gray-700" 
                          : "bg-gray-50 border-gray-200 text-gray-700"
                      }`}>
                        {publication.status === "accepted" ? "Accepted" : "Under Review"}
                      </div>
                    </div>
                    <span className="text-sm text-gray-400 font-mono">
                      {publication.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-medium text-black mb-4">
                    {publication.title}
                  </h4>

                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {publication.authors.join(", ")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span className="font-medium">{publication.venue}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Research Impact */}
            <motion.div
              className="surface-elevated p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-medium text-black mb-6">
                Research Impact
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                私の研究は、製造業における品質管理の自動化と効率化を目指しています。
                AI技術を活用した異常検知システムの開発により、人的コストの削減と品質向上の両立を実現し、
                日本の製造業の競争力強化に貢献することを目標としています。
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Quality Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Cost Reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span>Industrial Innovation</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Future Research */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="surface-elevated p-12 text-center">
            <h3 className="text-2xl font-light text-black mb-6">
              Future Research Directions
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              今後は、より高度な異常検知アルゴリズムの開発、リアルタイム処理の最適化、
              そして他の産業分野への応用展開を目指していきます。
              また、国際会議での発表や共同研究を通じて、グローバルな研究コミュニティへの貢献も進めていく予定です。
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 font-medium text-sm tracking-wide hover-lift transition-all duration-300 hover:border-black hover:text-black"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Discuss Research
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}