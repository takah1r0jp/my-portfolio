"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Code, Brain, ChevronRight } from "lucide-react"
import { profileData } from "@/data/profile"

export default function About() {
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
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-light tracking-tight text-black mb-6">
            About
          </h2>
          <div className="w-24 h-0.5 bg-black mb-8"></div>
          <p className="text-gray-600 max-w-2xl font-light leading-relaxed">
            Background, education, and expertise in artificial intelligence research 
            and computer vision applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Introduction & Education */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Introduction */}
            <div className="surface-elevated p-8">
              <h3 className="text-xl font-medium text-black mb-6">Research Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                {profileData.about.introduction}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-black" />
                <h3 className="text-xl font-medium text-black">Education</h3>
              </div>
              
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {profileData.about.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="surface-elevated p-6 hover-lift"
                    variants={itemVariants}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-medium text-black mb-1">{edu.degree}</h4>
                        <p className="text-gray-600 mb-1">{edu.school}</p>
                        <p className="text-sm text-gray-500">{edu.field}</p>
                        {edu.specialization && (
                          <p className="text-sm text-black font-mono mt-2">
                            専攻: {edu.specialization}
                          </p>
                        )}
                        {edu.note && (
                          <p className="text-sm text-gray-500 font-mono mt-2">
                            {edu.note}
                          </p>
                        )}
                      </div>
                      <span className="text-sm text-gray-400 font-mono whitespace-nowrap ml-4">
                        {edu.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-black" />
                <h3 className="text-xl font-medium text-black">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {profileData.about.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="surface-elevated p-4 hover-lift"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-black">{cert.name}</h4>
                        <p className="text-sm text-gray-600">{cert.organization}</p>
                      </div>
                      <span className="text-sm text-gray-400 font-mono">
                        {cert.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <Code className="h-5 w-5 text-black" />
              <h3 className="text-xl font-medium text-black">Technical Stack</h3>
            </div>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* AI/ML */}
              <motion.div 
                variants={itemVariants} 
                className="surface-elevated p-6 hover-lift"
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="h-4 w-4 text-black" />
                  <h4 className="font-medium text-black">AI / Machine Learning</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {profileData.techStack.aiMl.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-mono border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Programming */}
              <motion.div 
                variants={itemVariants} 
                className="surface-elevated p-6 hover-lift"
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-4 w-4 text-black" />
                  <h4 className="font-medium text-black">Programming Languages</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {profileData.techStack.programming.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-mono border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Web Development */}
              <motion.div 
                variants={itemVariants} 
                className="surface-elevated p-6 hover-lift"
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <ChevronRight className="h-4 w-4 text-black" />
                  <h4 className="font-medium text-black">Web Development</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {profileData.techStack.webDev.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-mono border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div 
                variants={itemVariants} 
                className="surface-elevated p-6 hover-lift"
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <ChevronRight className="h-4 w-4 text-black" />
                  <h4 className="font-medium text-black">Tools & Infrastructure</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {profileData.techStack.tools.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-mono border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="surface-elevated p-12 text-center">
            <h3 className="text-2xl font-light text-black mb-6">
              Research Philosophy
            </h3>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              AI技術の実用化を通じて、産業界の課題解決に貢献することを目指しています。
              学術的な研究と実際の応用を結びつけ、社会にとって価値のある技術開発に取り組んでいます。
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
                <span>Social Impact</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}