import React from "react";
import img from "./Subtract.png";

function Footer(props) {
  return (
    <div
      id="footer"
      style={{ backgroundColor: props.isDark ? "var(--dark)" : "" }}
      className={props.isDark ? "footer dark" : "footer "}
    >
      <img src={img} alt="" />
    </div>
  );
}

export default Footer;
