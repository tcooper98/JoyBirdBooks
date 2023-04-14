import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import './BookSpotlight.css';
import { Link } from 'react-router-dom';

export default function MarchSpotlight() {
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
                            <img className="book-spotlight-img" src="images/voodoo.jpg" alt="Hot Voodoo cover" />
                    
                            <div>
                                <h1>Hot Voodoo</h1>
                                <h2>By Nicole M. Namara</h2>
                                <p> Nicole M. Namara is a local Florida author who recently published her very first book, Hot Voodoo. She is a full time mom finding time in-between to explore her passions in writing novels. She also enjoys going out to our local coffee shops. She has hosted several events at these coffee shops, like Qreate, where she talks about her work and meets more people in the book-loving community.
	Hot Voodoo is a thriller romance book for young adults. It has a mystery with the main character, Casey's little sister being kidnapped. Casey has to find her sister with practically no evidence to lead off from while also dealing with her unpredictable mother. Casey has to balance the changes of going back to her hometown in New Orleans, finding her missing sister, and hating the feeling of being alone.
	Namara’s Instagram is how she connects with her followers, posts her own book reviews, shares events she's hosting, and updates her own personal writing. As a local Orlando, Florida author herself, Namara also enjoys sharing local authors she finds. Check out her Instagram to find new authors or read our Past Local Author Spotlight blogs posts.
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
                                <Link to='/product/6438b2739edd9b9a97faef06' className="book-spotlight-button">
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
                        <img className="book-spotlight-img" src="images/voodoo.jpg" alt="Hot Voodoo Cover" />
                        <div>
                            <h1>Lake Life</h1>
                            <h2>By Nicole M. Namara</h2>
                            <p> Nicole M. Namara is a local Florida author who recently published her very first book, Hot Voodoo. She is a full time mom finding time in-between to explore her passions in writing novels. She also enjoys going out to our local coffee shops. She has hosted several events at these coffee shops, like Qreate, where she talks about her work and meets more people in the book-loving community.
	Hot Voodoo is a thriller romance book for young adults. It has a mystery with the main character, Casey's little sister being kidnapped. Casey has to find her sister with practically no evidence to lead off from while also dealing with her unpredictable mother. Casey has to balance the changes of going back to her hometown in New Orleans, finding her missing sister, and hating the feeling of being alone.
	Namara’s Instagram is how she connects with her followers, posts her own book reviews, shares events she's hosting, and updates her own personal writing. As a local Orlando, Florida author herself, Namara also enjoys sharing local authors she finds. Check out her Instagram to find new authors or read our Past Local Author Spotlight blogs posts. </p>

                            {/* <div className="pickup">
                                <input className="ship" type="radio" value=""></input>
                                <label for="ship">Ship This Item - Qualifies for Free Shipping</label> <br /> <br />
                                <input className="buy" type="radio" value=""></input>
                                <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label>
                            </div> */}

                            <div className="col-buttons">
                                <Link to='/product/6438b2739edd9b9a97faef06' className="book-spotlight-button">
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
