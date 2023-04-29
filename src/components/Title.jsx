import React, { useEffect, useRef, useState } from "react";

function Title(props) {
  let [display, setdisplay] = useState();
  let title = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let entry = entries[0];
      if (entry.boundingClientRect.top >= 0) {
        setdisplay(entry.isIntersecting);
      }
    });

    observer.observe(title.current);
  }, []);
  console.log(window.innerHeight);

  return (
    <div className="title">
      <div className="line"></div>
      <div
        className="mainTitle"
        style={{
          transform: display ? "translateY(0px)" : "translateY(150px) ",
        }}
      >
        {props.title}
      </div>
      <div ref={title} className="line"></div>
    </div>
  );
}

export default Title;
