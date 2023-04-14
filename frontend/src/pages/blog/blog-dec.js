import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './blog.css';
import { Drawer } from '@mui/material';
import FebSpotlight from '../../components/BookSpotlight/FebSpotlight';
import DecSpotlight from '../../components/BookSpotlight/decSpotlight';

export default function BlogDec() {
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
                            <p className="subheading2">Alyssa Altamirano</p>
                        </div>

                        <div className="row author-spotlight-row">
                            <div className="col-image">
                                <img className="img" src="images/alyssa.jpg" alt="author" />
                            </div>

                            <div className="col-blog-text">

                                <p className="blog-description">
                                   Alyssa Altamirano was originally from Southern California but now resides in Orlando, Fl. For over a decade she has been working in education with a love for both children and music. This is where her love of writing rhythmic children’s books comes from. Pulling inspiration from her younger self, she has created the main character Ellie Mae for her books. 
ABCs of All That I Can Be by Alyssa Altamirano and illustrated by Jecoe Firmalan, is a fun, playful children's book teaching kids the alphabet. This book features qualities that help celebrate diversity and teach young kids about being unique and special. The rhythmic style allows it to be easy to read and catchy for its young audience beginning to learn. Along with vibrant, colorful illustrations which help to reinforce its positive message. 
Alyssa Altamairano is active on her instagram where she updates her audience about her upcoming projects. We are excited to announce that she will be hosting a story time here in our store featuring her book! Join us on Sunday, November 6th, at 3:30 p.m in our kids area. For more details check out our Calendar or follow us on Instagram or Facebook to keep up to date. If you are unable to attend you can find ABCs of All That I Can Be on our products page. We hope to see you there!
                                </p>

                                {/* <Link to='/blog-read-more'>
                                    <p className="btn">Read More</p>
                                </Link> */}
                                <button className='btn' onClick={() => setIsDrawerOpen(true)}>Read More</button>
                            <Drawer anchor='bottom' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                                <DecSpotlight/>

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
                            <p className='subheading2'>December 2022</p>

                            <div className="p-30"></div>

                            <h2 className='subheading'>Sing Along?</h2>
                            <p className="blog-description">
Alyssa Altamirano was originally from Southern California but now resides in Orlando, Fl. For over a decade she has been working in education with a love for both children and music. This is where her love of writing rhythmic children’s books comes from. Pulling inspiration from her younger self, she has created the main character Ellie Mae for her books. 
ABCs of All That I Can Be by Alyssa Altamirano and illustrated by Jecoe Firmalan, is a fun, playful children's book teaching kids the alphabet. This book features qualities that help celebrate diversity and teach young kids about being unique and special. The rhythmic style allows it to be easy to read and catchy for its young audience beginning to learn. Along with vibrant, colorful illustrations which help to reinforce its positive message. 
Alyssa Altamairano is active on her instagram where she updates her audience about her upcoming projects. We are excited to announce that she will be hosting a story time here in our store featuring her book! Join us on Sunday, November 6th, at 3:30 p.m in our kids area. For more details check out our Calendar or follow us on Instagram or Facebook to keep up to date. If you are unable to attend you can find ABCs of All That I Can Be on our products page. We hope to see you there!
                            </p>
                        </div>

                        <div className="col-image">
                            <h2 className="subheading">Alyssa Altamairano</h2>
                            <p className="author-description">Rythmic Children's Author</p>
                            <img className="img" src="images/alyssa.jpg" alt="author" />

                            {/* <Link to='/blog-read-more' className="btn">
                                <p>Read More</p>
                            </Link> */}
                            <button className='btn' onClick={() => setIsDrawerOpen(true)}>Read More</button>
                            <Drawer anchor='bottom' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                                <DecSpotlight/>

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