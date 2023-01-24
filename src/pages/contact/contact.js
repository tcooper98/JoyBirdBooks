import React, { Component } from "react";
import "./contact.css";

class ContactUs extends Component {
  render() {
    return (
      <div className="form-container">
        <div className="form-row">
          <div className="form-column">
            <input
              type="text"
              placeholder="First Name"
              className="form-input"
            />
          </div>
          <div className="form-column">
            <input type="text" placeholder="Last Name" className="form-input" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <input type="email" placeholder="Email" className="form-input" />
          </div>
          <div className="form-column">
            <input type="text" placeholder="Subject" className="form-input" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <textarea
              placeholder="Message"
              className="form-input form-textarea"
            ></textarea>
          </div>
        </div>

        <div className="form-row">
          <div className="form-column">
            <button className="form-submit-btn">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
