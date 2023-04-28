import React from "react";

function Domain(props) {
  return (
    <div className="domain">
      <div className="text">
        {" "}
        <h2>{props.domain}</h2>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default Domain;
