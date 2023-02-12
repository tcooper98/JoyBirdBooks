import React from "react";
import "./about.css";

function About() {

  const handleClick = () => {
        window.location.href = 'https://www.google.com/maps/dir//joybird+books/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88e76fa80d58a57d:0xcb3e5d096693157b?sa=X&ved=2ahUKEwi3sti11vb8AhVdTTABHa5sDYkQ9Rd6BAhWEAU';
    };

  return (
    <>
    
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

      <div className="location-donate">
        <div className="visit-donate">
          <h1>Visit Us</h1>
          <img src="images/map.jpg" alt="location of store on map" className="donate-visitimg"/>
        </div>
        <div className="address-donate">
          <h1>Address</h1>
          <p>Joybird Books LLC
              <br/>
              3018 Corrine Drive
              <br/>
              Orlando, FL 32803
              <br/>
              407 951-5436
          </p>
          <button onClick={handleClick}>Get Directions</button>
        </div>
        <div className='hours-donate'>
            <h1>Working Hours</h1>
            <p>Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
            <p>Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
            <p>Wednesday &nbsp;&nbsp;10AM - 5PM</p>
            <p>Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
            <p>Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
            <p>Saturday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
            <p>Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
        </div>   
      </div>

      <div className="newsletter">
        <h1>SUBSCRIBE TO OUR NEWSLETTER!</h1>    
        <label>              
          <input type="text" name="email" placeholder="enter your email"></input>
        </label>
        <button>SEND</button>
      </div> 

    </>
  );
}

export default About;
