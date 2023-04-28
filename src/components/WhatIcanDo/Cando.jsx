import React from "react";
import Title from "../Title";
import Domain from "./Domain";
import img from "./images/81e567e6215b7f2b7150dff3a76c68de.jpg";
function Cando() {
  return (
    <div className="domains">
      <Title title="What I Do ?" />

      <div className="container">
        <div className="image">
          {" "}
          <img src={img} alt="" />
        </div>
        <div className="options">
          <Domain
            domain="Web Development"
            details="I am a very passionate web developer, for the front-end i use HTML,CSS,JavaScript or React and for the back-end i use PHP or SpringBoot"
          />
          <Domain
            domain="Web Design"
            details="As a web designer, my approach is to prioritize simplicity, and I primarily utilize Figma for designing websites."
          />
          <Domain
            domain="Software Engineering"
            details="As a software engineer, I have a passion for all aspects of software development and enjoy using Java primarily to solve problems."
          />
        </div>
      </div>
    </div>
  );
}

export default Cando;
