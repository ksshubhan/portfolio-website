import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import { useRef } from "react";

function App() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col overflow-x-hidden
                 bg-white text-black
                 dark:bg-black dark:text-white
                 transition-colors"
    >
      <Navbar sectionRefs={sectionRefs} />

      {/* Sections */}
      <Home       sectionRef={sectionRefs.home} />
      <About      sectionRef={sectionRefs.about} />
      <Skills     sectionRef={sectionRefs.skills} />
      <Projects   sectionRef={sectionRefs.projects} />
      <Experience sectionRef={sectionRefs.experience} />
      <Contact    sectionRef={sectionRefs.contact} />
    </div>
  );
}

export default App;
