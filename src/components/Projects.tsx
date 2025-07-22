"use client"

import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "./LanguageProvider"

export default function Projects() {
  const { t, language } = useLanguage()
  
  // Project data based on language
  const projectsData = language === 'ja' 
    ? [
        {
          title: "産業用画像異常検知システム",
          description: "深層学習を用いた製造業向けの異常検知システムの開発。リアルタイムでの欠陥検出が可能。",
          technologies: ["PyTorch", "OpenCV", "Python", "Streamlit"],
          category: "研究",
          status: "進行中",
          features: [
            "論理的異常を対象",
            "LLMを活用した学習不要の異常検知フレームワーク",
            "従来手法比較で20%精度向上を達成"
          ],
          link: "https://github.com/takah1r0jp/LLM4AD"
        },
        {
          title: "PKSHAハッカソン2025 優勝作品",
          description: "旅行プランを生成するAIシステムのアルゴリズム部分を担当。チームでの協力により最優秀賞を受賞。",
          technologies: ["Python", "Machine Learning", "API Integration"],
          category: "ハッカソン",
          status: "完了",
          achievement: "最優秀賞受賞",
          role: "アルゴリズムエンジニア",
          features: [
            "自然言語処理による要求理解",
            "最適化アルゴリズムによるプラン生成",
            "リアルタイム推薦システム"
          ]
        },
        {
          title: "異常検知体験アプリケーション",
          description: "研究成果をデモンストレーション用に一般向けに公開したWebアプリケーション。",
          technologies: ["Streamlit", "PyTorch", "Python"],
          category: "デモ",
          status: "完了",
          features: [
            "ドラッグ&ドロップでの画像アップロード",
            "異常検知プログラムの自動生成体験",
            "結果の可視化"
          ],
          demo: "https://takah1r0jp-streamlit-ad-app-appmain-ghw67a.streamlit.app"
        }
      ]
    : [
        {
          title: "Industrial Image Anomaly Detection System",
          description: "Development of anomaly detection system for manufacturing using deep learning. Capable of real-time defect detection.",
          technologies: ["PyTorch", "OpenCV", "Python", "Streamlit"],
          category: "Research",
          status: "Ongoing",
          features: [
            "Targeting logical anomalies",
            "Training-free anomaly detection framework utilizing LLM",
            "Achieved 20% accuracy improvement compared to conventional methods"
          ],
          link: "https://github.com/takah1r0jp/LLM4AD"
        },
        {
          title: "PKSHA Hackathon 2025 Winner",
          description: "Responsible for algorithm development of AI system for travel plan generation. Won the grand prize through team collaboration.",
          technologies: ["Python", "Machine Learning", "API Integration"],
          category: "Hackathon",
          status: "Completed",
          achievement: "Grand Prize Winner",
          role: "Algorithm Engineer",
          features: [
            "Natural language processing for requirement understanding",
            "Plan generation using optimization algorithms",
            "Real-time recommendation system"
          ]
        },
        {
          title: "Anomaly Detection Experience Application",
          description: "Web application published for general use to demonstrate research results.",
          technologies: ["Streamlit", "PyTorch", "Python"],
          category: "Demo",
          status: "Completed",
          features: [
            "Drag & drop image upload",
            "Automatic generation experience of anomaly detection programs",
            "Result visualization"
          ],
          demo: "https://takah1r0jp-streamlit-ad-app-appmain-ghw67a.streamlit.app"
        }
      ]

  return (
    <section id="projects">
      <div>
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-black mb-6">
            Projects
          </h2>
          <div className="w-16 h-px bg-black mb-8"></div>
          <p className="text-lg font-light text-black opacity-70 max-w-2xl leading-relaxed">
            Research & development projects and technical implementations.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {projectsData.map((project, index) => (
            <div key={index} className="group">
              <div className="border-b border-black pb-16 last:border-b-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  {/* Project Number & Links */}
                  <div className="lg:col-span-1 space-y-6">
                    <div className="text-6xl font-light text-black opacity-20">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Links */}
                    <div className="space-y-3">
                      {project.link && (
                        <a
                          href={project.link}
                          className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-black hover:opacity-50 transition-opacity"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                          {language === 'ja' ? 'リポジトリ' : 'Repository'}
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-black hover:opacity-50 transition-opacity"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          {language === 'ja' ? 'デモ' : 'Demo'}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-4 space-y-8">
                    {/* Title & Status */}
                    <div>
                      <div className="flex flex-wrap items-start gap-4 mb-4">
                        <h3 className={`text-3xl font-light text-black ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          {project.status && (
                            <span className="text-xs font-light tracking-wide uppercase text-black opacity-60 border border-black px-2 py-1">
                              {project.status}
                            </span>
                          )}
                          {project.achievement && (
                            <span className="text-xs font-light tracking-wide uppercase text-black bg-black text-white px-2 py-1">
                              {project.achievement}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className={`text-base font-light text-black opacity-70 leading-loose max-w-3xl ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Role */}
                    {project.role && (
                      <div>
                        <p className="text-sm font-light text-black opacity-60 tracking-wide uppercase mb-2">
                          {language === 'ja' ? '役割' : 'Role'}
                        </p>
                        <p className={`text-base font-light text-black ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                          {project.role}
                        </p>
                      </div>
                    )}

                    {/* Features */}
                    {project.features && (
                      <div>
                        <p className="text-sm font-light text-black opacity-60 tracking-wide uppercase mb-4">
                          {language === 'ja' ? '主な機能・特徴' : 'Key Features'}
                        </p>
                        <div className="space-y-3">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-4">
                              <div className="w-1 h-1 bg-black mt-3 flex-shrink-0"></div>
                              <p className={`text-base font-light text-black opacity-70 leading-loose ${language === 'ja' ? 'font-japanese' : 'font-sans'}`}>
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <p className="text-sm font-light text-black opacity-60 tracking-wide uppercase mb-4">
                        {language === 'ja' ? '技術スタック' : 'Technologies'}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-sm font-light text-black opacity-60 border border-black px-3 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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