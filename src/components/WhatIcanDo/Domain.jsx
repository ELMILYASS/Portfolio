import React from "react";

function Domain(props) {
  return (
    <div className="domain">
      <div className="text">
        <h3>{props.domain}</h3>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default Domain;
