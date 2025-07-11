"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, MapPin, Send, MessageCircle, ArrowUpRight, Clock } from "lucide-react"
import { profileData } from "@/data/profile"

export default function Contact() {
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

  const socialLinks = [
    {
      name: "Email",
      url: `mailto:${profileData.contact.email}`,
      icon: Mail,
      description: "Direct communication for professional inquiries"
    },
    {
      name: "GitHub",
      url: profileData.contact.github,
      icon: Github,
      description: "Code repositories and open source contributions"
    },
    {
      name: "LinkedIn",
      url: profileData.contact.linkedin,
      icon: Linkedin,
      description: "Professional network and career updates"
    },
    {
      name: "Twitter",
      url: profileData.contact.twitter,
      icon: Twitter,
      description: "Latest research updates and technical insights"
    }
  ]

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-light tracking-tight text-black mb-6">
            Contact
          </h2>
          <div className="w-24 h-0.5 bg-black mb-8"></div>
          <p className="text-gray-600 max-w-2xl font-light leading-relaxed">
            Let&apos;s discuss research opportunities, technical collaborations, 
            or any questions about my work in AI and computer vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <h3 className="text-xl font-medium text-black">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black mb-2">Research & Technical Consultation</h4>
                    <p className="text-gray-600 leading-relaxed">
                      AI・機械学習・コンピュータビジョンに関する技術相談や研究に関するご質問
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <Send className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black mb-2">Collaboration Opportunities</h4>
                    <p className="text-gray-600 leading-relaxed">
                      共同研究や技術開発プロジェクトへの参加についてのご相談
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black mb-2">Location</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {profileData.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="surface-elevated p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-5 w-5 text-black" />
                <h4 className="text-lg font-medium text-black">Availability</h4>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="font-mono">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="font-mono">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-mono">By appointment</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-200">
                Response time may vary during research activities and conference participation
              </p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-medium text-black">Connect</h3>
            
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group surface-elevated p-6 hover-lift flex items-center gap-4 transition-all duration-300"
                  variants={itemVariants}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-12 h-12 bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:border-black transition-colors">
                    <link.icon className="h-6 w-6 text-black group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-black mb-1 group-hover:text-gray-700 transition-colors">
                      {link.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>
              ))}
            </motion.div>

            {/* Quick Message */}
            <motion.div
              className="surface-elevated p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-medium text-black mb-4">Send a Message</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI・機械学習に関する技術相談や研究についてのご質問など、
                どのようなことでもお気軽にお問い合わせください。
              </p>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium text-sm tracking-wide hover-lift transition-all duration-300 hover:bg-gray-800"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-24 pt-12 border-t border-gray-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <p className="text-gray-600 font-light">
              © 2025 {profileData.name}. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 font-mono">
              Building the future through AI research and innovation.
            </p>
            <div className="flex items-center justify-center gap-8 text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                <span>AI Research</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                <span>Computer Vision</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                <span>Machine Learning</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}