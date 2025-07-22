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
        <div className="mb-24">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-black mb-6">
            Skills
          </h2>
          <div className="w-16 h-px bg-black mb-8"></div>
          <p className="text-lg font-light text-black opacity-70 max-w-2xl leading-relaxed">
            Technical skills and professional certifications.
          </p>
        </div>

        <div className="space-y-20">
          {/* Certifications */}
          <div className="border-b border-black pb-16">
            <h3 className="text-xl font-light text-black mb-8 tracking-wide uppercase">
              Certifications
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {skillsData.certifications.map((cert, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="text-lg font-light text-black">{cert.name}</h4>
                  <p className="text-sm font-light text-black opacity-60">{cert.organization}</p>
                  <p className="text-sm font-light text-black opacity-70">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="border-b border-black pb-16">
            <h3 className="text-xl font-light text-black mb-8 tracking-wide uppercase">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-4">
              {skillsData.languages.map((language, index) => (
                <span
                  key={index}
                  className="text-sm font-light text-black border border-black px-4 py-2 tracking-wide uppercase"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-xl font-light text-black mb-8 tracking-wide uppercase">
              Frameworks
            </h3>
            <div className="flex flex-wrap gap-4">
              {skillsData.frameworks.map((framework, index) => (
                <span
                  key={index}
                  className="text-sm font-light text-black border border-black px-4 py-2 tracking-wide uppercase"
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