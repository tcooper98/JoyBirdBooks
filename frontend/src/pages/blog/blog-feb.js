import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './blog.css';
import { Drawer } from '@mui/material';
import FebSpotlight from '../../components/BookSpotlight/FebSpotlight';

export default function BlogFeb() {
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
                   
                    <div className="author-spotlight page-spacing">
                        <div>
                            <h2 className='subheading'>Local Author Spotlight</h2>
                            <p className="subheading2">Margaret Edwards</p>
                        </div>

                        <div className="row author-spotlight-row">
                            <div className="col-image">
                                <img className="img" src="images/marg.jpg" alt="author" />
                            </div>

                            <div className="col-blog-text">

                                <p className="blog-description">
                                   Margaret Edwards is a local author who grew up in Illinois in the 1950s and 1960s. She used to teach children English all around the world at international and embassy schools. After this endeavor, she now resides in Orlando, Florida exploring her passion for writing. Sharing her story and everything she had to go through is her biggest passion. This allows her to show people that your past does not make you, but what you do with it is who you can be.
	She wrote a memoir revolving around her own life and the struggles she faced while growing up in Midwest America as an African American woman. Thus Edwards released Slue Foot in 2021. Edwards was one of 15 children that moved to Illonois. There she had to face many difficulties head on such as racial discrimination, unwanted sexual advances, and her own authoritarian father. This biography shows how hard Edwards had to fight to get to where she is today. She never considered herself a victim, but she grew and became stronger from these setbacks. Edwards is able to set an example and become a role model for African American women who still face these same struggles.
	Margarete Edwards has her own personal website where she shares her books, featured articles she had the joy of partaking in, and some testimonials. Edwards is currently working on her second book being another memoir to create a series. Check out her website for updates on this novel. If you are wanting to read more memoirs or biographies, look at our current catalog.
                                </p>

                                {/* <Link to='/blog-read-more'>
                                    <p className="btn">Read More</p>
                                </Link> */}
                                <button className='btn' onClick={() => setIsDrawerOpen(true)}>Read More</button>
                            <Drawer anchor='bottom' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                                <FebSpotlight/>

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
                            <p className='subheading2'>Febuary 2023</p>

                            <div className="p-30"></div>

                            <h2 className='subheading'>Story of Growth</h2>
                            <p className="blog-description">
Margaret Edwards is a local author who grew up in Illinois in the 1950s and 1960s. She used to teach children English all around the world at international and embassy schools. After this endeavor, she now resides in Orlando, Florida exploring her passion for writing. Sharing her story and everything she had to go through is her biggest passion. This allows her to show people that your past does not make you, but what you do with it is who you can be.
	She wrote a memoir revolving around her own life and the struggles she faced while growing up in Midwest America as an African American woman. Thus Edwards released Slue Foot in 2021. Edwards was one of 15 children that moved to Illonois. There she had to face many difficulties head on such as racial discrimination, unwanted sexual advances, and her own authoritarian father. This biography shows how hard Edwards had to fight to get to where she is today. She never considered herself a victim, but she grew and became stronger from these setbacks. Edwards is able to set an example and become a role model for African American women who still face these same struggles.
	Margarete Edwards has her own personal website where she shares her books, featured articles she had the joy of partaking in, and some testimonials. Edwards is currently working on her second book being another memoir to create a series. Check out her website for updates on this novel. If you are wanting to read more memoirs or biographies, look at our current catalog.
                            </p>
                        </div>

                        <div className="col-image">
                            <h2 className="subheading">Margaret Edwards</h2>
                            <p className="author-description">Biographic Author</p>
                            <img className="img" src="images/marg.jpg" alt="author" />

                            {/* <Link to='/blog-read-more' className="btn">
                                <p>Read More</p>
                            </Link> */}
                            <button className='btn' onClick={() => setIsDrawerOpen(true)}>Read More</button>
                            <Drawer anchor='bottom' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                                <FebSpotlight/>

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