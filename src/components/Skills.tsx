"use client"

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
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-black mb-2">
            Skills
          </h2>
          <div className="w-16 h-px bg-black"></div>
        </div>

        <div className="space-y-6">
          {/* Certifications */}
          <div className="border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-light text-black mb-6 tracking-wide uppercase">
              Certifications
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillsData.certifications.map((cert, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-base font-light text-black">{cert.name}</h4>
                  <p className="text-sm font-light text-black opacity-60">{cert.organization}</p>
                  <p className="text-sm font-light text-black opacity-70">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-light text-black mb-6 tracking-wide uppercase">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.languages.map((language, index) => (
                <span
                  key={index}
                  className="text-sm font-light text-black border border-black px-3 py-1 tracking-wide uppercase"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-light text-black mb-6 tracking-wide uppercase">
              Frameworks
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.frameworks.map((framework, index) => (
                <span
                  key={index}
                  className="text-sm font-light text-black border border-black px-3 py-1 tracking-wide uppercase"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}