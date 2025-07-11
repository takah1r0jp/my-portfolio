import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Research from "@/components/Research"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Research />
      <Experience />
      <Contact />
    </div>
  );
}
