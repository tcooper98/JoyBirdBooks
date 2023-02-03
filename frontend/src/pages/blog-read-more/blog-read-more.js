import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import "./blog-read-more.css"
import { Link } from 'react-router-dom';

export default function BlogReadMore() {
    const [isMobile, setMobile] = useState(window.innerWidth < 821);

    const updateScreenSize = () => {
        setMobile(window.innerWidth < 821);
    }

    useEffect (() => {
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    })

    return (
        <>
            {/*Renders image and text below each other if mobile screen size*/}
            {isMobile ? (
                <>
                    <div>
                        <h1 className="blog-title">Blog</h1>
                    </div>

                    <div className="author-spotlight page-spacing">
                        <div>
                            <h2 className='subheading'>Local Author Spotlight</h2>
                            <p className="subheading2">Author Name</p>
                        </div>

                        <div className="row">
                            <div className="col-image">
                                <img className="img" src="images/Poissant.jpg" />
                            </div>

                            <div className="col-blog-text">

                                <p className="description">
                                    Description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-20"></div>

                    <div className="book-spotlight">
                        <img src="images/lakelife.jpg" alt="David James Poissant Lake Life" />
                        <div className="book-text">
                            <h1>Lake Life</h1>
                            <h2>By David James Possiant</h2>
                            <p>The Starling family is scattered across the country. Parents Richard and Lisa live in Ithaca, New York, and work at Cornell University.
                                Their son, a salesperson, lives in Dallas, with his elementary school teacher wife, Diane. Michael's brother, Thad, an aspiring poet makes
                                his home in New York City with his famous painter boyfriend, Jake. For years they've traveled to North Carolina to share a summer vacation
                                at the family's lake house. The tradition is coming to an end, as Richard and Lisa have decided to sell the lake house. But what should be
                                joyous farewell takes a nightmarish turn when the family witnesses a tragedy that triggers a series of dramatic revelation among the
                                Starlings-alcoholism, infidelity, and a shocking secret that will change the family forever. </p>
                            <div className="pickup">

                                <input className="ship" type="radio" value=""></input>
                                <label for="ship">Ship This Item - Qualifies fir Free Shipping</label> <br /> <br />
                                <input className="buy" type="radio" value=""></input>
                                <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label>
                            </div>
                            <div className="cartbutton">
                                <button>ADD TO CART</button>
                                <button>BUY NOW</button>
                            </div>
                        </div>
                    </div>

                    <div className="past-spotlights page-spacing">
                        <h2>See Past Spotlights</h2>

                        <div className="pb-30"></div>

                        <BookCard />

                        <div className="pb-40"></div>
                    </div>
                </>
            ) : (
                <>
                    <div className="author-spotlight row page-spacing">
                        <div className="col-blog-text">
                            <h1>Blog</h1>
                            <h2 className='subheading'>Local Author Spotlight</h2>
                            <p className='subheading2'>Date Text</p>

                            <div className="p-30"></div>

                            <h2 className='subheading'>Title Text</h2>
                            <p className="description">
                                Description text description text description text description text description text description text
                                description text description text description text description text description text description text
                                description text description text description text description text description text description text
                                description text description text description text description text description text description text
                                description text description text description text description text description text description text
                                description text description text description text description text description text description text
                            </p>
                        </div>

                        <div className="col-image">
                            <h2 className="subheading">Author Name</h2>
                            <p className="author-description">Author Text</p>
                            <img className="img" src="images/Poissant.jpg" />

                            <Link to='/blog-read-more' className="btn">
                                <p>Read More</p>
                            </Link>
                        </div>
                    </div>

                    <div className="past-spotlights page-spacing">
                        <h2>See Past Spotlights</h2>

                        <div className="pb-30"></div>

                        <BookCard />

                        <div className="pb-40"></div>
                    </div>
                </>
            )
            }

        </>
    )
}