import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import './BookSpotlight.css';
import { Link } from 'react-router-dom';

export default function FebSpotlight() {
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
                            <img className="book-spotlight-img" src="images/slue.jpg" alt="Slue Foot cover" />
                    
                            <div>
                                <h1>Slue Foot</h1>
                                <h2>Margaret Edwards</h2>
                                <p> Slue Foot is a memoir revolving around her own life and the struggles she faced while growing up in Midwest America as an African American woman. Edwards was one of 15 children that moved to Illinois where she faced many difficulties such as racial discrimination, unwanted sexual advances, and her own authoritarian father. This biography shows how hard Edwards had to fight to get to where she is today. Edwards sets an example and becomes a role model for African American women who still face these same struggles.
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
                                <Link to='/product/6438b3249edd9b9a97faefba' className="book-spotlight-button">
                                    <h3>Learn More</h3>
                                </Link>
                               
                            </div>

                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="book-spotlight pt-70">
                        <img className="book-spotlight-img" src="images/slue.jpg" alt="Slue Foot Cover" />
                        <div>
                            <h1>Slue Foot</h1>
                            <h2>By Margaret Edwards</h2>
                            <p> Slue Foot is a memoir revolving around her own life and the struggles she faced while growing up in Midwest America as an African American woman. Edwards was one of 15 children that moved to Illinois where she faced many difficulties such as racial discrimination, unwanted sexual advances, and her own authoritarian father. This biography shows how hard Edwards had to fight to get to where she is today. Edwards sets an example and becomes a role model for African American women who still face these same struggles. </p>

                            {/* <div className="pickup">
                                <input className="ship" type="radio" value=""></input>
                                <label for="ship">Ship This Item - Qualifies for Free Shipping</label> <br /> <br />
                                <input className="buy" type="radio" value=""></input>
                                <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label>
                            </div> */}

                            <div className="col-buttons">
                                <Link to='/product/6438b3249edd9b9a97faefba' className="book-spotlight-button">
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
