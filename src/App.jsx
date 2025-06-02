import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import {  useState } from "react"
import Contact from "./components/Contact"
function App() {
    const [position, setPosition] = useState({ x: '50%', y: '50%' });
    const handleMouseMove = (e) => {
      setPosition({ x: `${e.clientX}px`, y: `${e.clientY}px` });
    };
  return (
    <div className="bg-[#001f3b] text-[#ffffffcc] overflow-y-scroll h-screen w-screen custom-scrollbar overflow-x-hidden" onMouseMove={handleMouseMove}>
      <div
        className="absolute w-full h-full z-4"
        style={{
          background: `radial-gradient(210px circle at ${position.x} ${position.y}, #10569433, transparent)`,
          pointerEvents: 'none',
        }}></div>
      <Navbar/>
      <div className ="min-h-screen h-full w-screen pt-4">
        <Hero/>
        <About/>
        <Projects />
        <Contact/>
      </div>
    </div>
  )
}

export default App;
