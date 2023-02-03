import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './blog.css';
import { Link } from 'react-router-dom';

export default function Blog() {
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
            {/*Renders image and text below each other if mobile screen size*/}
            {isMobile ? (
                <>
                    <div>
                        <h1 className="blog-title">Blog</h1>
                    </div>

                    <div className="author-spotlight page-spacing">

                        <div className="row">
                            <div className="col-blog-title">
                                <h2 className='subheading'>Local Author Spotlight</h2>
                                <p className="subheading">Author Name</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-image">
                                <img className="img" src="images/Poissant.jpg" />
                            </div>

                            <div className="col-blog-text">

                                <div className="p-30"></div>

                                <p className="description">
                                    Description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                    description text description text description text description text description text description text
                                </p>

                                <Link to='/blog-read-more'>
                                    <p className="btn">Read More</p>
                                </Link>
                            </div>       
                        </div>
                    </div>

                    <div className="p-20"></div>

                    <div className="past-spotlights page-spacing">
                        <h2>See Past Spotlights</h2>

                        <div className="pb-30"></div>

                        <BookCard/>

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

                        <div className="p-20"></div>
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