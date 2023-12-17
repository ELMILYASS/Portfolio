import React from "react";
import Title from "../Title";
import Language from "./Language";
import img from "./images/undraw_feeling_proud_qne1-removebg-preview.png";
function Skills(props) {
  return (
    <div
      id="skills"
      style={{ backgroundColor: props.isDark ? "var(--dark)" : "" }}
      className={props.isDark ? "skills dark" : "skills "}
    >
      <Title title="Skills" isDark={props.isDark} />
      <div class="container">
        {" "}
        <div className="languages">
          <Language name="JavaScript-TypeScript-NodeJs" percentage={80} />
          <Language name="ReactJs-Angular" percentage={80} />
          <Language name="CSS-TailwindCss" percentage={70} />
          <Language name="JAVA-SpringBoot" percentage={70} />
          <Language name="Python-Flask" percentage={70} />
          <Language name="PHP" percentage={70} />
        </div>
        <div className="image ">
          <img className="img" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
