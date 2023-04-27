import React, { useState } from "react";

function Header() {
  let [state, setstate] = useState(window.innerWidth);
  console.log("rendered");
  let [isdisplayed, setisdisplayed] = useState(false);
  function displayNav() {
    setisdisplayed((prev) => !prev);
  }

  let display = isdisplayed ? "flex " : "none";
  console.log(display);
  return (
    <div className="header">
     
      <div className="container">
        <h3 className="logo">
          <a href="#Home">ilyass el-mazidi</a>
        </h3>
        <div className="nav">
          <div className="burger" onClick={displayNav}>
            <div></div>
            <div style={{ width: isdisplayed ? "50%" : "100%" }}></div>
            <div></div>
          </div>
          <ul className="links phone" style={{ display: display }}>
            <li>
              <a href="#Home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>

            <li>
              <a href="#contactus">Contact</a>
            </li>
          </ul>
          <ul className="links main">
            <li>
              <a href="#Home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>

            <li>
              <a href="#contactus">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
