import React, { useEffect, useRef, useState } from "react";

function Language(props) {
  let [percentage, setpercentage] = useState(0);

  let div = useRef();
  let rev = useRef(0);
  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      let entry = entries[0];
      if (entry.isIntersecting) {
        let timer = setInterval(() => {
          if (rev.current == props.percentage) {
            clearInterval(timer);
          } else {
            rev.current++;
            console.log(rev.current);
            setpercentage(rev.current);
          }
        }, 20);
      } else {
        rev.current = 0;
        setpercentage(0);
      }
    });
    observer.observe(div.current);
  }, []);

  return (
    <div className="language">
      <div className="info">
        <h3>{props.name}</h3>
        <span>{rev.current} %</span>
      </div>
      <div className="rectangle">
        <div ref={div} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

export default Language;
