import React, { useEffect, useRef, useState } from "react";
import Title from "../Title";
import Quote from "./Quote";
import Journey from "./Journey";
function Education(props) {
  return (
    <div id="education"
    style={{ backgroundColor: props.isDark ? "var(--dark)" : "" }}
      className={props.isDark ? "education dark" : "education "}
    >
      <Title title="Education" isDark={props.isDark}/>
      <div className="container">
        <Quote />
        <Journey />
      </div>
    </div>
  );
}

export default Education;
