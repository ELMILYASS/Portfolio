import React, { useEffect, useRef, useState } from "react";
import Title from "../Title";
import Quote from "./Quote";
import Journey from "./Journey";
function Education() {
  return (
    <div className="education">
      <Title title="Education" />
      <Quote />
      <Journey />
    </div>
  );
}

export default Education;
