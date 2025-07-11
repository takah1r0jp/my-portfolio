"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Trophy, Code, Zap, Eye, ArrowUpRight } from "lucide-react"
import { profileData } from "@/data/profile"

export default function Projects() {
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "research":
        return <Eye className="h-4 w-4" />
      case "hackathon":
        return <Trophy className="h-4 w-4" />
      case "demo":
        return <Zap className="h-4 w-4" />
      default:
        return <Code className="h-4 w-4" />
    }
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "research":
        return "Research"
      case "hackathon":
        return "Hackathon"
      case "demo":
        return "Demo"
      default:
        return "Project"
    }
  }

  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-light tracking-tight text-black mb-6">
            Selected Projects
          </h2>
          <div className="w-24 h-0.5 bg-black mb-8"></div>
          <p className="text-gray-600 max-w-2xl font-light leading-relaxed">
            A collection of research projects, hackathon victories, and experimental work
            spanning computer vision, machine learning, and AI applications.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profileData.projects.map((project) => (
            <motion.div
              key={project.id}
              className="group surface-elevated hover-lift"
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              {/* Project Header */}
              <div className="p-8 pb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(project.category)}
                    <span className="text-sm font-mono text-gray-500 tracking-wider uppercase">
                      {getCategoryName(project.category)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.status === "ongoing" && (
                      <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                    )}
                    <span className="text-sm text-gray-400 font-mono">
                      {project.status === "ongoing" ? "In Progress" : "Completed"}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-black mb-4 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievement/Role */}
                {project.achievement && (
                  <div className="bg-gray-50 border border-gray-200 p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="h-4 w-4 text-black" />
                      <span className="text-sm font-medium text-black">
                        Achievement
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{project.achievement}</p>
                  </div>
                )}

                {project.role && (
                  <div className="bg-gray-50 border border-gray-200 p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-4 w-4 text-black" />
                      <span className="text-sm font-medium text-black">
                        Role
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{project.role}</p>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-black mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-mono border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 pt-6 border-t border-gray-200">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm font-medium">Code</span>
                      <ArrowUpRight className="h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm font-medium">Demo</span>
                      <ArrowUpRight className="h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="surface-elevated p-12">
            <h3 className="text-2xl font-light text-black mb-4">
              Interested in collaboration?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              I&apos;m always open to discussing new projects, research opportunities, 
              and potential collaborations in AI and computer vision.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-medium text-sm tracking-wide hover-lift transition-all duration-300 hover:bg-gray-800"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}