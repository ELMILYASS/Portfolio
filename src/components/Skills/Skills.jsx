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
          <Language name="PHP" percentage={80} />
          <Language name="JavaScript" percentage={60} />
          <Language name="React" percentage={80} />
          <Language name="CSS" percentage={70} />
          <Language name="JAVA" percentage={80} />
          <Language name="SpringBoot" percentage={70} />
        </div>
        <div className="image ">
          <img className="img" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
