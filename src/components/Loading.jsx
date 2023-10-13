import React from "react";
import "../index.css";

function Loading() {
  return (
    <div className="loading">
      <div className="circles">
        <div></div>
        <div></div>
        <div></div>
        <span></span>
      </div>
    </div>
  );
}

export default Loading;
