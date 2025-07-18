import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import WorkExperience from "@/components/WorkExperience"
import Achievements from "@/components/Achievements"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <div className="container-standard">
          <div className="section-card">
            <Education />
          </div>
          <div className="section-card">
            <Projects />
          </div>
          <div className="section-card">
            <WorkExperience />
          </div>
          <div className="section-card">
            <Achievements />
          </div>
          <div className="section-card">
            <Skills />
          </div>
        </div>
      </main>
    </div>
  );
}
