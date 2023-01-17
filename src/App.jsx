import React from "react";
import { useState, useEffect } from "react";
import { themeChange } from "theme-change";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
  );
  const toggleDarkmode = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };
  return (
    <React.StrictMode>
      <div className="font-poppins bg-ghostWhite">
        <Navbar darkMode={darkMode} toggleDarkmode={toggleDarkmode} />
        <Home darkMode={darkMode} toggleDarkmode={toggleDarkmode} />
        <About darkMode={darkMode} toggleDarkmode={toggleDarkmode} />
        <Skills darkMode={darkMode} toggleDarkmode={toggleDarkmode} />
        <Projects darkMode={darkMode} toggleDarkmode={toggleDarkmode} />
        <Contact darkMode={darkMode} toggleDarkmode={toggleDarkmode} />
        <Footer darkMode={darkMode} toggleDarkmode={toggleDarkmode} />
      </div>
    </React.StrictMode>
  );
}

export default App;
