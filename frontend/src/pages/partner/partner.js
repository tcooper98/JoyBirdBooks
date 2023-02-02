import React from "react";
import "./partner.css";
function Partner() {
  return (
    <>
      <div className="partner-container">
        <div className="about-img-container">
          <img src={require("./joybirdpartner.jpg")} alt="partner" />
        </div>
        <div className="partner-text-container">
          <h2>Partner with us</h2>
          <h4> If you are: </h4>
          <div className="partner-body-text">
            <p>-Local Author</p>
            <p>-Representative of a local entity</p>
            <p>-Local event manager</p>
            <p>-Local Vendor</p>
            <p>Please contact either of us individually at:</p>
            <p>Andrew Walker (He/Him): co-owner, andrew@joybirdbooks.com</p>
            <p>Ollie Bird (They/Them): co-owner, ollie@joybirdbooks.com</p>
          </div>
        </div>
      </div>
      <div className="text2">
        <div className="text-final">
          <p>We hope to hear from you soon!</p>
        </div>
      </div>
    </>
  );
}
export default Partner;
