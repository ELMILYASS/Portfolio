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
          <Language
            name="Backend Development"
            tools="SpringBoot, PHP, NodeJs"
            percentage={80}
          />
          <Language
            name="Frontend Development"
            tools="ReactJs, AngularCSS, CSS, Tailwind"
            percentage={80}
          />
          <Language
            name="Blockchain"
            tools="ReactJs, AngularCSS, CSS, Tailwind"
            percentage={70}
          />

          <Language
            name="Devops"
            tools="Docker, Kubernetes, CI/CD, GithubActions, ArgoCD, DevSecOps"
            percentage={70}
          />
          <Language
            name="Programming"
            tools="JAVA, C++, JavaScript, TypeScript, Python"
            percentage={70}
          />
          <Language
            name="Machine Learning"
            tools="TensorFlow, Scikit learn, XGboost"
            percentage={60}
          />
        </div>
        <div className="image ">
          <img className="img" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
