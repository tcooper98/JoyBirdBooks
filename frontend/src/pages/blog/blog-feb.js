import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './blog.css';
import { Divider, Drawer } from '@mui/material';
import BookSpotlight from '../../components/BookSpotlight/BookSpotlight';
import FebSpotlight from '../../components/BookSpotlight/FebSpotlight';

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
                           <img className="slue" src="images/marg.jpg" alt="author" />
                           </div>
                            

                           <div className='blogText'>
                            <p className='subheading2'>February 2023</p>
                            <h1 className="subheading">Margaret Edwards</h1>
                            <h2 className='subheading'>Story of Growth</h2>
                            
                            <p className="blog-description">
                            Margaret Edwards is a local author who grew up in Illinois in the 1950s and 1960s. She used to teach children English all around the world at international and embassy schools. After this endeavor, she now resides in Orlando, Florida exploring her passion for writing. Sharing her story and everything she had to go through is her biggest passion. This allows her to show people that your past does not make you, but what you do with it is who you can be.
	She wrote a memoir revolving around her own life and the struggles she faced while growing up in Midwest America as an African American woman. Thus Edwards released Slue Foot in 2021. Edwards was one of 15 children that moved to Illonois. There she had to face many difficulties head on such as racial discrimination, unwanted sexual advances, and her own authoritarian father. This biography shows how hard Edwards had to fight to get to where she is today. She never considered herself a victim, but she grew and became stronger from these setbacks. Edwards is able to set an example and become a role model for African American women who still face these same struggles.
	Margarete Edwards has her own personal website where she shares her books, featured articles she had the joy of partaking in, and some testimonials. Edwards is currently working on her second book being another memoir to create a series. Check out her website for updates on this novel. If you are wanting to read more memoirs or biographies, look at our current catalog.
                            </p>

                            <button className='btn' onClick={() => setIsDrawerOpen(true)}>Read More</button>
                            <Drawer anchor='bottom' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                                <FebSpotlight/>

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