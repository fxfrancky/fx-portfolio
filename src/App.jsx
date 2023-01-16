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
  return (
    <div className="font-poppins bg-ghostWhite">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
