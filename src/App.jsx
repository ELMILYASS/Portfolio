import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Cando from "./components/WhatIcanDo/Cando";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
function App() {
  let [isDark, setisDark] = useState(false);
  useEffect(() => {
    setisDark(localStorage.getItem("dark") === "false" ? false : true);
  }, []);
  let [displayScroll, setdisplayScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 2000) {
        setdisplayScroll(true);
      } else {
        setdisplayScroll(false);
      }
    });
  }, []);

  return (
    <div
      style={{
        "--main-color": isDark ? "#141516" : "rgba(36, 255, 0, 0.47)",
        "--second-color": isDark ? "rgba(36, 255, 0, 0.47)" : "#004338",

        color: isDark ? "white" : "",
      }}
    >
      <Home isDark={isDark} set={setisDark} />
      <Cando isDark={isDark} />
      <Skills isDark={isDark} />
      <Projects isDark={isDark} />
      <Education isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
      {displayScroll && (
        <a href="#home" className={isDark ? "goHome dark" : "goHome "}>
          <AiOutlineArrowUp className="icon" />
        </a>
      )}
    </div>
  );
}

export default App;
