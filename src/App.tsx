import Navbar from "./components/common/Navbar"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"
import DSA from "./sections/DSA/DSA"
import Skills from "./sections/Skills/Skills"
import About from "./sections/About/About"
import Contact from "./sections/Contact/Contact"
function App() {
  return (
    <main className="bg-[#0B0B0F] text-[#F5F5F7] min-h-screen">
      <div
        className="
    pointer-events-none
    fixed
    inset-0
    -z-10
    overflow-hidden
  "
      >
        <div
          className="
      absolute
      top-[-10%]
      left-[-10%]
      h-125
      w-125
      rounded-full
      bg-[#4F8CFF]/10
      blur-3xl
    "
        />

        <div
          className="
      absolute
      bottom-[-20%]
      right-[-10%]
      h-100
      w-100
      rounded-full
      bg-purple-500/10
      blur-3xl
    "
        />
      </div>
      <Navbar />
      <Hero />
      <Projects />
      <DSA />
      <Skills />
      <About />
      <Contact />
    </main>
  )
}

export default App