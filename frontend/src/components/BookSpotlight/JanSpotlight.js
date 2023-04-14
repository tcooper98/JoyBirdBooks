import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import './BookSpotlight.css';
import { Link } from 'react-router-dom';

export default function JanSpotlight() {
    const [isMobile, setMobile] = useState(window.innerWidth <= 1190);

    const updateScreenSize = () => {
        setMobile(window.innerWidth <= 1190);
    }

    useEffect(() => {
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    })

    return (
        <>
            {isMobile ? (
                <>  
                    <div className="row book-spotlight pt-70">
                        <div className="col-spotlight">
                            <img className="book-spotlight-img" src="images/indyjenny.jpg" alt="Indy and Jenny cover" />
                    
                            <div>
                                <h1>Indy + Jenny</h1>
                                <h2>Charlie Griffen</h2>
                                <p> Charlie Griffin is a local Florida author who in cooperation with Indy’s owner wrote to tell the story of Indy and Jenny. Indy and Jenny is about Indy, a rescued pit bull who is able to overcome the changes he faces along with Jenny, his caregiver. Jenny, who was new to the city, found her best friend, Indy, showing her to be strong and the ability to overcome challenging obstacles with a smile. This illustrated children's book 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row book-spotlight">
                        <div className="col-pickup">

                            {/* <div className="pickup">

                                <input className="ship" type="radio" value=""></input>
                                <label for="ship">Ship This Item - Qualifies for Free Shipping</label> <br /> <br />
                                <input className="buy" type="radio" value=""></input>
                                <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label>

                            </div> */}

                            <div className="col-buttons">
                                <Link to='/product/6369860d9540445b3c45e6b1' className="book-spotlight-button">
                                    <h3>ADD TO CART</h3>
                                </Link>
                                <Link to="/cart" className="book-spotlight-button-last">
                                    <h3>BUY NOW</h3>
                                </Link>
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="book-spotlight pt-70">
                        <img className="book-spotlight-img" src="images/indyjenny.jpg" alt="Indy and Jenny Cover" />
                        <div>
                            <h1>Indy + Jenny</h1>
                            <h2>By Charlie Griffen</h2>
                            <p> Charlie Griffin is a local Florida author who in cooperation with Indy’s owner wrote to tell the story of Indy and Jenny. Indy and Jenny is about Indy, a rescued pit bull who is able to overcome the changes he faces along with Jenny, his caregiver. Jenny, who was new to the city, found her best friend, Indy, showing her to be strong and the ability to overcome challenging obstacles with a smile. This illustrated children's book  </p>

                            {/* <div className="pickup">
                                <input className="ship" type="radio" value=""></input>
                                <label for="ship">Ship This Item - Qualifies for Free Shipping</label> <br /> <br />
                                <input className="buy" type="radio" value=""></input>
                                <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label>
                            </div> */}

                            <div className="col-buttons">
                                <Link to='/product/6369860d9540445b3c45e6b1' className="book-spotlight-button">
                                    <h3>Learn More</h3>
                                </Link>
                                {/* <Link to="/cart" className="book-spotlight-button-last">
                                    <h3>BUY NOW</h3>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </>
            )
            }

        </>
    )
}
