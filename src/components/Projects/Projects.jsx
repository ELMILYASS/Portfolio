import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { MdScreenSearchDesktop } from "react-icons/md";
import Title from "../Title";
import Project from "./Project";
function Projects() {
  return (
    <div className="Projects">
      <Title title="My Projects" />
      <div className="container">
        <Project
          Name="Donation Site"
          Decription=" An online donation management application using React and Spring
            Boot that allows donors to make donations and those in need to
            request them"
        />
        <Project
          Name="Chat App"
          Decription="Real-time web chat application using PHP, JavaScript, CSS, AJAX,
          MySQL."
        />
        <Project
          Name="Assignments Tracker"
          Decription=" Development of a web-based homework tracking application that allows
          a user to manage (add/remove/modify) their courses and corresponding
          homework using PHP, JavaScript, CSS, MySQL, and the MVC pattern for
          better project structuring."
        />
        <Project
          Name="Template Clone"
          Decription="A responsive clone of a template using CSS and HTML"
        />
      </div>
    </div>
  );
}

export default Projects;
