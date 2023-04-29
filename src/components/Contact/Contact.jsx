import React from "react";
import img from "./R.gif";
import Title from "../Title";
function Contact() {
  return (
    <div className="contact">
      <Title title=" Contact Me" />
      <div className="container">
        <div class="image">
          <img src={img} alt="" />
        </div>
        <div class="form">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />

            <textarea placeholder="Type your message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
