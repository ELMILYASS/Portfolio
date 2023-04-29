import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import Donationimg from "./images/Donation Site.PNG";
import Chatimg from "./images/Chat App.PNG";
import Assignment from "./images/Assignment.PNG";
import Template3 from "./images/Template3.PNG";
import Template2 from "./images/Template2 .PNG";
import Template1 from "./images/Template1.PNG";
import { MdScreenSearchDesktop } from "react-icons/md";
import Title from "../Title";
import Project from "./Project";

function Projects() {
  return (
    <div className="Projects">
      <Title title="My Projects" />

      <div className="container">
        <div className="github">
          <h1>My Best Projects</h1>
          <p>You can find more details in my github account </p>
          <div className="more">
            <span>See More</span>
            <FiGithub className="githubIcon" />
          </div>
        </div>
        <div className="projects">
          <Project
            img={Donationimg}
            Name="Donation Site"
            Decription=" An online donation management application using React and Spring
            Boot that allows donors to make donations and those in need to
            request them"
          />
          <Project
            img={Chatimg}
            Name="Chat App"
            Decription="Real-time web chat application using PHP, JavaScript, CSS, AJAX,
          MySQL."
          />
          <Project
            img={Assignment}
            Name="Assignments Tracker"
            Decription=" Development of a web-based homework tracking application that allows
          a user to manage (add/remove/modify) their courses and corresponding
          homework using PHP, JavaScript, MySQL, and the MVC pattern for
          better project structuring."
          />
          <Project
            img={Template1}
            Name="Template Clone 1"
            Decription="A responsive clone of a template using CSS and HTML"
          />
          <Project
            img={Template2}
            Name="Template Clone 2"
            Decription="A responsive clone of a template using CSS and HTML"
          />
          <Project
            img={Template3}
            Name="Template Clone 3"
            Decription="A responsive clone of a template using CSS and HTML"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
