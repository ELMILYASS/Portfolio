import React from "react";

function Step(props) {
  return (
    <div className="step">
      <h3 className="year">{props.year}</h3>
      <div className="shape">
        <div className="border">
          <div className="circle"></div>
        </div>
        
      </div>
      <div className="infos">
        <h3>{props.school}</h3>
        <p>{props.study}</p>
      </div>
    </div>
  );
}

export default Step;
