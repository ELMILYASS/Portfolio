import React from "react";
import img from "./images/IMG_20230219_185029_391-removebg-preview.png";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
function Section() {
  return (
    <div className="section">
      <div className=" info myInfo">
        <div className="line left"></div>
        <span className="text">
          I'm{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="286"
              height="88"
              viewBox="0 0 359 88"
              fill="none"
            >
              <g filter="url(#filter0_d_338_232)">
                <path
                  d="M17.984 1.50004L175.948 1.5L270.939 1.5L314.387 1.50004C335.988 1.50006 353.5 19.0117 353.5 40.6134C353.5 61.5376 336.538 78.5 315.613 78.5L190.436 78.4998L18.7535 78.4998C4.72861 78.4998 2.0817 58.5601 15.6209 54.9011C30.4621 50.8903 29.9746 29.9256 15.3888 25.8609C8.46735 23.9321 5.53934 17.8731 6.14951 12.1961C6.75784 6.53605 10.8466 1.50005 17.984 1.50004Z"
                  stroke="#24FF00"
                  stroke-opacity="0.47"
                  stroke-width="3"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_338_232"
                  x="0.571289"
                  y="0"
                  width="358.429"
                  height="88"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_338_232"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_338_232"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            Ilyass El-mazidi
          </span>
          , a web developer
        </span>
        <div className="line right"></div>
      </div>

      <img src={img} className="my-img" />

      <div className="info Links">
        <div className="welcome">
          <h2>Welcome</h2>
          <p>TO MY PORTFOLIO</p>
        </div>
        <div className="social">
          <a href="">
            <FaLinkedinIn className="icon" />
          </a>
          <a href="">
            <HiMail className="icon" />
          </a>
          <a href="">
            <BsGithub className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section;
