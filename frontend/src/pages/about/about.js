import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-us-container">
      <div className="image-container1">
        <img src={require("./joybirdaboutus.jpg")} alt="About Us" className="img-aboutus"/>
      </div>
      <div className="text-container">
        <h1 className="h1-aboutus">About Us</h1>
        <p className="p-aboutus">
          We are Orlando’s very own used bookseller, focused on bringing
          together local authors and artists to share their work and celebrate
          the spirit of art, literacy, and community in a collaborative space.
        </p>
      </div>
    </div>
  );
}

export default About;
