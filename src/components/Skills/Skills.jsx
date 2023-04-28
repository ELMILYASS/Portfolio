import React from "react";
import Title from "../Title";
import Language from "./Language";
import img from "./images/81e567e6215b7f2b7150dff3a76c68de.jpg";
function Skills() {
  return (
    <div className="skills">
      <Title title="Skills" />
      <div class="container">
        {" "}
        <div className="languages">
          <Language name="PHP" percentage={80} />
          <Language name="JavaScript" percentage={60} />
          <Language name="CSS" percentage={70} />
          <Language name="JAVA" percentage={80} />
        </div>
        <div className="image ">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
