import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import './BookSpotlight.css';
import { Link } from 'react-router-dom';

export default function DecSpotlight() {
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
                            <img className="book-spotlight-img" src="images/abcs.jpg" alt="ABCs All That I Can Be cover" />
                    
                            <div>
                                <h1>ABCs All That I Can Be</h1>
                                <h2>Alyssa Altamirano</h2>
                                <p> Alyssa Altamirano’s ABCs All That I Can Be is a fun illustrated children’s book teaching kids the alphabet. Its rhythmic style makes it catchy to learn while teaching kids about being unique and special.
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
                                <Link to='/product/6369863c9540445b3c45e6b3' className="book-spotlight-button">
                                    <h3>Learn More</h3>
                                </Link>
                                
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="book-spotlight pt-70">
                        <img className="book-spotlight-img" src="images/abcs.jpg" alt="ABCs All That I Can Be Cover" />
                        <div>
                            <h1>ABCs All That I Can Be</h1>
                            <h2>By Alyssa Altamirano</h2>
                            <p> Alyssa Altamirano’s ABCs All That I Can Be is a fun illustrated children’s book teaching kids the alphabet. Its rhythmic style makes it catchy to learn while teaching kids about being unique and special. </p>

                            {/* <div className="pickup">
                                <input className="ship" type="radio" value=""></input>
                                <label for="ship">Ship This Item - Qualifies for Free Shipping</label> <br /> <br />
                                <input className="buy" type="radio" value=""></input>
                                <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label>
                            </div> */}

                            <div className="col-buttons">
                                <Link to='/product/6369863c9540445b3c45e6b3' className="book-spotlight-button">
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
