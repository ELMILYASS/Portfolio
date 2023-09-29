import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { MdScreenSearchDesktop } from "react-icons/md";

function Project(props) {
  let [bottomDetails, setbottomDetails] = useState(-100);
  let [bottomArrow, setbottomArrow] = useState(10);
  function displayDetails() {
    setbottomArrow(-100);
    setbottomDetails(10);
    setTimeout(() => {
      setbottomDetails(-100);
      setbottomArrow(5);
    }, 4000);
  }
  console.log(props);
  console.log(props.img);
  return (
    <div className="project">
      <img src={props.img} alt="" />

      <div className="info">
        <h3>{props.Name}</h3>
        <p>{props.Description}</p>
      </div>
      <AiOutlineArrowUp
        className="arrow"
        onClick={displayDetails}
        style={{ bottom: bottomArrow }}
      />
      <div className="details" style={{ bottom: `${bottomDetails}%` }}>
        <a href={props.githubLink} target="_blank">
          <FiGithub className="detail" />
        </a>
        <a href={props.siteLink} target="_blank">
          <MdScreenSearchDesktop className="detail" />
        </a>
      </div>
    </div>
  );
}

export default Project;
