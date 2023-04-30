import React, { useEffect, useRef, useState } from "react";

function Title(props) {
  let [display, setdisplay] = useState();
  let title = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let entry = entries[0];
      if (entry.boundingClientRect.top >= 0) {
        setdisplay(entry.isIntersecting);
      } else {
        setdisplay(true);
      }
    });

    observer.observe(title.current);
  }, []);
  console.log(window.innerHeight);

  return (
    <div id="title" className={props.isDark ? "title dark" : "title "}>
      <div className="line"></div>
      <div
        ref={title}
        className="mainTitle"
        style={{
          transform: display ? "translateY(0px)" : "translateY(150px) ",
          opacity: display ? 1 : 0,
        }}
      >
        {props.title}
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Title;
