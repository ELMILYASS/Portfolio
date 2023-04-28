import React from "react";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Cando from "./components/WhatIcanDo/Cando";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <>
      <Home />
      <Cando />
      <Skills />
      <Projects />
      <Education />
    </>
  );
}

export default App;
