import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './blog.css';
import { Link } from 'react-router-dom';
import { Drawer } from '@mui/material';
import BookSpotlight from '../../components/BookSpotlight/BookSpotlight';
import MarchSpotlight from '../../components/BookSpotlight/MarchSpotlight';

export default function BlogMarch() {
    const [isMobile, setMobile] = useState(window.innerWidth <= 820);

    const updateScreenSize = () => {
        setMobile(window.innerWidth <= 820);
    }

    useEffect(() => {
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    })

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
                            <p className="subheading2">Nicole M. Namara</p>
                        </div>

                        <div className="row author-spotlight-row">
                            <div className="col-image">
                                <img className="img" src="images/nicole.jpg" alt="author" />
                            </div>

                            <div className="col-blog-text">

                                <p className="blog-description">
                                   Nicole M. Namara is a local Florida author who recently published her very first book, Hot Voodoo. She is a full time mom finding time in-between to explore her passions in writing novels. She also enjoys going out to our local coffee shops. She has hosted several events at these coffee shops, like Qreate, where she talks about her work and meets more people in the book-loving community.
	Hot Voodoo is a thriller romance book for young adults. It has a mystery with the main character, Casey's little sister being kidnapped. Casey has to find her sister with practically no evidence to lead off from while also dealing with her unpredictable mother. Casey has to balance the changes of going back to her hometown in New Orleans, finding her missing sister, and hating the feeling of being alone.
	Namara’s Instagram is how she connects with her followers, posts her own book reviews, shares events she's hosting, and updates her own personal writing. As a local Orlando, Florida author herself, Namara also enjoys sharing local authors she finds. Check out her Instagram to find new authors or read our Past Local Author Spotlight blogs posts.
                                </p>

                                {/* <Link to='/blog-read-more'>
                                    <p className="btn">Read More</p>
                                </Link> */}
                                <button className='btn' onClick={() => setIsDrawerOpen(true)}>Read More</button>
                            <Drawer anchor='bottom' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                                <MarchSpotlight/>

                            </Drawer>
                            </div>
                        </div>
                    </div>

                    <div className="p-20"></div>

                    <div className="past-spotlights page-spacing">
                        <h2>See Past Spotlights</h2>

                        <div className="pb-30"></div>

                        <BookCard />

                        <div className="pb-40"></div>
                    </div>
                </>
            ) : (
                <>
                    <div className="author-spotlight row author-spotlight-row page-spacing">
                        <div className="col-blog-text">
                            <h1>Blog</h1>
                            <h2 className='subheading'>Local Author Spotlight</h2>
                            <p className='subheading2'>March 2023</p>

                            <div className="p-30"></div>

                            <h2 className='subheading'>Thrilling Romance</h2>
                            <p className="blog-description">
                            Nicole M. Namara is a local Florida author who recently published her very first book, Hot Voodoo. She is a full time mom finding time in-between to explore her passions in writing novels. She also enjoys going out to our local coffee shops. She has hosted several events at these coffee shops, like Qreate, where she talks about her work and meets more people in the book-loving community.
	Hot Voodoo is a thriller romance book for young adults. It has a mystery with the main character, Casey's little sister being kidnapped. Casey has to find her sister with practically no evidence to lead off from while also dealing with her unpredictable mother. Casey has to balance the changes of going back to her hometown in New Orleans, finding her missing sister, and hating the feeling of being alone.
	Namara’s Instagram is how she connects with her followers, posts her own book reviews, shares events she's hosting, and updates her own personal writing. As a local Orlando, Florida author herself, Namara also enjoys sharing local authors she finds. Check out her Instagram to find new authors or read our Past Local Author Spotlight blogs posts.
                            </p>
                        </div>

                        <div className="col-image">
                            <h2 className="subheading">Nicole M. Namara</h2>
                            <p className="author-description">First Time Author</p>
                            <img className="img" src="images/nicole.jpg" alt="author" />

                            {/* <Link to='/blog-read-more' className="btn">
                                <p>Read More</p>
                            </Link> */}
                            <button className='btn' onClick={() => setIsDrawerOpen(true)}>Read More</button>
                            <Drawer anchor='bottom' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                                <MarchSpotlight/>

                            </Drawer>
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