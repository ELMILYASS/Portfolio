import React from "react";
import Header from "./Header";
import Section from "./Section";
function Home() {
  return (
    <div className="home">
      <div className="bub">
        <div className="bubbles">
          <span style={{ "--i": "11" }} className="green"></span>{" "}
          <span style={{ "--i": "14", backgroundColor: "var(--second-color)" }}></span>{" "}
          <span style={{ "--i": "19" }}></span>{" "}
          <span style={{ "--i": "13", backgroundColor: "var(--second-color)" }}></span>{" "}
          <span style={{ "--i": "20", backgroundColor: "var(--second-color)" }}></span>{" "}
          <span style={{ "--i": "24" }}></span>{" "}
          <span style={{ "--i": "19" }}></span>{" "}
          <span style={{ "--i": "16" }}></span>{" "}
          <span style={{ "--i": "20" }}></span>{" "}
          <span style={{ "--i": "11" }}></span>{" "}
          <span style={{ "--i": "10", backgroundColor: "var(--second-color)" }}></span>{" "}
          <span style={{ "--i": "17", backgroundColor: "var(--second-color)" }}></span>{" "}
          <span style={{ "--i": "30", backgroundColor: "var(--second-color)" }}></span>{" "}
          <span style={{ "--i": "14" }}></span>{" "}
          <span style={{ "--i": "21", backgroundColor: "var(--second-color)" }}></span>{" "}
          <span style={{ "--i": "28" }}></span>{" "}
          <span style={{ "--i": "6" }}></span>{" "}
          <span style={{ "--i": "17", backgroundColor: "var(--second-color)" }}></span>{" "}
        </div>
      </div>
      <Header />
      <Section />
    </div>
  );
}

export default Home;
