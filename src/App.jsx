import { useState , useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"


function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("portfolio-theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem(
      "portfolio-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark
          ? "dark bg-[#160f18] text-pink-50"
          : "bg-[#fff9fc] text-[#382431]"
      }`}
    >
      <Navbar dark={dark} setDark={setDark} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
export default App;