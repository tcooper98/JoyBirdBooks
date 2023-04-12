import React, { Component } from 'react';
import axios from 'axios';

import './contact.css';

class ContactUs extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    success: false,
    showSuccessMessage: false,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting form...');
    const { firstName, lastName, email, subject, message } = this.state;

    // field check
    if (!firstName || !lastName || !email || !subject || !message) {
      this.setState({ error: true });
      return;
    }

    try {
      // Data sent to the contacts collection on MDB server
      const response = await axios.post('/api/contact', {
        firstName,
        lastName,
        email,
        subject,
        message,
      });

      console.log(response.data);
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        success: true,
        showSuccessMessage: true,
      });


    } catch (error) {
      console.error(error);
    }
  };


  render() {
    const { firstName, lastName, email, subject, message, success, error } = this.state;
    return (
      <div className="form-container">
        <div className="contact-heading">
          <h2>Contact us</h2>
          <h5>Submit the form below if you have any general questions!</h5>
        </div>

        <form onSubmit={this.handleSubmit} className="Contact-form-box">
          <div className="form-row">
            <div className="form-column">
              <label className="required-input-contact">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="form-input"
                value={firstName}
                onChange={(event) => this.setState({ firstName: event.target.value })}
              />
            </div>
            <div className="form-column">
              <label className="required-input-contact">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="form-input"
                value={lastName}
                onChange={(event) => this.setState({ lastName: event.target.value })}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label className="required-input-contact">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={(event) => this.setState({ email: event.target.value })}
              />
            </div>
            <div className="form-column">
              <label className="required-input-contact">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="form-input"
                value={subject}
                onChange={(event) => this.setState({ subject: event.target.value })}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column1">
              <label className="required-input-contact">Message</label>
              <textarea
                placeholder="Message"
                className="form-textarea-m"
                value={message}
                onChange={(event) => this.setState({ message: event.target.value })}
              ></textarea>
            </div>
          </div>

          {error && (
            <div className="error-message">Please fill in all required fields</div>
          )}

          {success ? (
            <div className="success-message">
              sending...
            </div>
          ) : (
            <div className="form-rowb">
              <div className="max">
                <p>Maximum characters 5000</p>
              </div>

              <div className="form-columnb">
                <button className="form-about-submit-btn">Submit</button>
              </div>
            </div>
          )}
          {this.state.showSuccessMessage && (
            <div className="success-message">
              Thanks for contacting us! We will be in touch with you soon.
            </div>
          )}

          <div className="contact-heading">
            <h5 className="h5-contact">
              For business inquiries, check out our Partnership Page
            </h5>
          </div>
        </form>

      </div>
    );
  }

}

export default ContactUs;
