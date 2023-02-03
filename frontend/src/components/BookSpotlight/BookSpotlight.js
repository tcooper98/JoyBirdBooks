import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import './BookSpotlight.css';
import { Link } from 'react-router-dom';

export default function BookSpotlight() {
    const [isMobile, setMobile] = useState(window.innerWidth <= 820);

    const updateScreenSize = () => {
        setMobile(window.innerWidth <= 820);
    }

    useEffect(() => {
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    })

    return (
        <>
            {isMobile ? (
                <>  
                    <div className="book-spotlight">
                        <img className="book-spotlight-img" src="images/lakelife.jpg" alt="David James Poissant Lake Life" />
                        <div>
                            <h1>Lake Life</h1>
                            <h2>By David James Possiant</h2>
                            <p> The Starling family is scattered across the country. Parents Richard and Lisa live in Ithaca, New York, and work at Cornell University.
                                Their son, a salesperson, lives in Dallas, with his elementary school teacher wife, Diane. Michael's brother, Thad, an aspiring poet makes
                                his home in New York City with his famous painter boyfriend, Jake. For years they've traveled to North Carolina to share a summer vacation
                                at the family's lake house. The tradition is coming to an end, as Richard and Lisa have decided to sell the lake house. But what should be
                                joyous farewell takes a nightmarish turn when the family witnesses a tragedy that triggers a series of dramatic revelation among the
                                Starlings-alcoholism, infidelity, and a shocking secret that will change the family forever. </p>

                            <div className="pickup">
                                <input className="ship" type="radio" value=""></input>
                                <label for="ship">Ship This Item - Qualifies for Free Shipping</label> <br /> <br />
                                <input className="buy" type="radio" value=""></input>
                                <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label>
                            </div>

                            <div>
                                <button>ADD TO CART</button>
                                <button className="book-spotlight-button-last">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="book-spotlight">
                        <img className="book-spotlight-img" src="images/lakelife.jpg" alt="David James Poissant Lake Life" />
                        <div>
                            <h1>Lake Life</h1>
                            <h2>By David James Possiant</h2>
                            <p> The Starling family is scattered across the country. Parents Richard and Lisa live in Ithaca, New York, and work at Cornell University.
                                Their son, a salesperson, lives in Dallas, with his elementary school teacher wife, Diane. Michael's brother, Thad, an aspiring poet makes
                                his home in New York City with his famous painter boyfriend, Jake. For years they've traveled to North Carolina to share a summer vacation
                                at the family's lake house. The tradition is coming to an end, as Richard and Lisa have decided to sell the lake house. But what should be
                                joyous farewell takes a nightmarish turn when the family witnesses a tragedy that triggers a series of dramatic revelation among the
                                Starlings-alcoholism, infidelity, and a shocking secret that will change the family forever. </p>

                            <div className="pickup">
                                <input className="ship" type="radio" value=""></input>
                                <label for="ship">Ship This Item - Qualifies for Free Shipping</label> <br /> <br />
                                <input className="buy" type="radio" value=""></input>
                                <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label>
                            </div>

                            <div>
                                <button>ADD TO CART</button>
                                <button className="book-spotlight-button-last">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </>
            )
            }

        </>
    )
}
