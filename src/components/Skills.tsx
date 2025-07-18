"use client"

import { motion } from "framer-motion"

// Skills data
const skillsData = {
  certifications: [
    { name: "G検定", date: "2024年11月", organization: "日本ディープラーニング協会" },
    { name: "E資格", date: "2025年2月", organization: "日本ディープラーニング協会" }
  ],
  languages: ["Python", "JavaScript"],
  frameworks: ["React", "Next.js"]
}

export default function Skills() {
  return (
    <section id="skills">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-black mb-6">
            Skills
          </h2>
          <div className="w-16 h-px bg-black mb-8"></div>
          <p className="text-lg font-light text-black opacity-70 max-w-2xl leading-relaxed">
            Technical skills and professional certifications.
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-b border-black pb-16"
          >
            <h3 className="text-xl font-light text-black mb-8 tracking-wide uppercase">
              Certifications
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {skillsData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="space-y-3"
                >
                  <h4 className="text-lg font-light text-black">{cert.name}</h4>
                  <p className="text-sm font-light text-black opacity-60">{cert.organization}</p>
                  <p className="text-sm font-light text-black opacity-70">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-b border-black pb-16"
          >
            <h3 className="text-xl font-light text-black mb-8 tracking-wide uppercase">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-4">
              {skillsData.languages.map((language, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-sm font-light text-black border border-black px-4 py-2 tracking-wide uppercase"
                >
                  {language}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-light text-black mb-8 tracking-wide uppercase">
              Frameworks
            </h3>
            <div className="flex flex-wrap gap-4">
              {skillsData.frameworks.map((framework, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-sm font-light text-black border border-black px-4 py-2 tracking-wide uppercase"
                >
                  {framework}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}