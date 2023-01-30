import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-us-container">
      <div className="image-container1">
        <img src={require("./joybirdaboutus.jpg")} alt="About Us" />
      </div>
      <div className="text-container">
        <h1>About Us</h1>
        <p>
          We are Orlando’s very own used bookseller, focused on bringing
          together local authors and artists to share their work and celebrate
          the spirit of art, literacy, and community in a collaborative space.
        </p>
      </div>
    </div>
  );
}

export default About;
