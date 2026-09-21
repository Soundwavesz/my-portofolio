import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Project"
import Contact from "./components/Contact"

export default function App() {
  return (
    <main className="bg-slate-900 min-h-screen font-sans selection:bg-sky-500 selection:text-white">
      <Navbar />
      <Hero />
      <Projects/>
      <Contact/>
    </main>
  )
}