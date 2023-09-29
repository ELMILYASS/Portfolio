import React, { useState } from "react";

function Header(props) {
  let [state, setstate] = useState(window.innerWidth);

  let [isdisplayed, setisdisplayed] = useState(false);
  function displayNav() {
    setisdisplayed((prev) => !prev);
  }

  function changeColor() {
    localStorage.setItem("dark", !props.isDark);
    props.set((prev) => !prev);
  }

  return (
    <div className={props.isDark ? "header dark" : "header header"}>
      <div className="container">
        <h3 className="logo">
          <a href="#home">ilyass el-mazidi</a>
        </h3>
        <div className="nav">
          <div className="darkMode">
            <p className="light">Light</p>
            <div className="toggle">
              <span onClick={changeColor}></span>
            </div>
            <p className="dark">Dark</p>
          </div>

          <div className="burger" onClick={displayNav}>
            <div></div>
            <div style={{ width: isdisplayed ? "50%" : "100%" }}></div>
            <div></div>
          </div>
          <ul
            className="links phone"
            style={{
              transform: isdisplayed ? "translateY(0) " : "translateY(-125%)",
            }}
          >
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="links main">
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
            {/* <li className="darkMode">
              <p className="light">Light</p>
              <div className="toggle">
                <span onClick={changeColor}></span>
              </div>
              <p className="dark">Dark</p>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
