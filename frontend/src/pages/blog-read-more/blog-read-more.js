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
                    <div className="author-spotlight row page-spacing">
                        <div className="col-blog-text">
                            <h2>Local Author Spotlight</h2> 
                            <p className='subheading2'>Date Text</p>

                            <div className="p-10"></div>

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

                    <div className="p-20"></div>

                    <div className="col-image">
                        <h2 className="subheading">Author Name</h2>
                        <p className="author-description">Author Text</p>
                        <img className="img" src="./placeholder.jpg"/>
                    </div>

                    <div className="p-20"></div>

                    <div className="past-spotlights page-spacing">
                        <h2>See Past Spotlights</h2>

                        <div className="pb-30"></div>

                        <div>
                            <BookCard/>
                        </div>

                        <div className="pb-40"></div>
                    </div> 
                </>
                ) : (
                    <>
                        <div className="author-spotlight row page-spacing">
                            <div className="col-blog-text">
                                <h2>Local Author Spotlight</h2> 
                                <p className='subheading2'>Date Text</p>

                                <div className="p-10"></div>

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
                                <img className="img" src="./placeholder.jpg"/>
                            </div>

                            <div className="p-20"></div>
                        </div>

                        <div className="past-spotlights page-spacing">
                            <h2>See Past Spotlights</h2>

                            <div className="pb-30"></div>

                            <div>
                                <BookCard/>
                            </div>

                            <div className="pb-40"></div>
                        </div>
                    </>
                )
            }
            
        </>
    )
}