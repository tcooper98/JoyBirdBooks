import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './blog.css';
import { Divider, Drawer } from '@mui/material';
import DecSpotlight from '../../components/BookSpotlight/decSpotlight';

export default function Blog() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
          
                <div className='blog-wrap'>
                    <div className="blog-head">
                        <Divider style={{ background: 'black', height: 2 }}/>
                         <h2 className='subheading'>Local Author Spotlight</h2>
                     </div>
                        <div className="blog-content">
                            <div>
                           <img className="abc" src="images/alyssa.jpg" alt="author" />
                           </div>
                            

                           <div className='blogText'>
                            <p className='subheading2'>December 2022</p>
                            <h1 className="subheading">Alyssa Altamairano</h1>
                            <h2 className='subheading'>Sing Along?</h2>
                            
                            <p className="blog-description">
                              Alyssa Altamirano was originally from Southern California but now resides in Orlando, Fl. For over a decade she has been working in education with a love for both children and music. This is where her love of writing rhythmic children’s books comes from. Pulling inspiration from her younger self, she has created the main character Ellie Mae for her books. 
ABCs of All That I Can Be by Alyssa Altamirano and illustrated by Jecoe Firmalan, is a fun, playful children's book teaching kids the alphabet. This book features qualities that help celebrate diversity and teach young kids about being unique and special. The rhythmic style allows it to be easy to read and catchy for its young audience beginning to learn. Along with vibrant, colorful illustrations which help to reinforce its positive message. 
Alyssa Altamairano is active on her instagram where she updates her audience about her upcoming projects. We are excited to announce that she will be hosting a story time here in our store featuring her book! Join us on Sunday, November 6th, at 3:30 p.m in our kids area. For more details check out our Calendar or follow us on Instagram or Facebook to keep up to date. If you are unable to attend you can find ABCs of All That I Can Be on our products page. We hope to see you there!
                            </p>

                            <button className='btn' onClick={() => setIsDrawerOpen(true)}>Read More</button>
                            <Drawer anchor='bottom' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                                <DecSpotlight/>

                            </Drawer>
                            </div>
                        </div>

                        
                          
                      

                     </div>

                  <div className="past-spotlights page-spacing">
                       <Divider style={{ background: 'black', height: 2 }}/>

                        <div className="pb-30"></div>

                        <BookCard />

                        <div className="pb-40"></div>
                    </div>
               
            
            

        </>
    )
}