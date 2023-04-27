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
    <div
      className="mainTitle"
      ref={title}
      style={{ transform: display ? "translateY(0px)" : "translateY(150px) " }}
    >
      {props.title}
    </div>
  );
}

export default Title;
