import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './blog.css';
import { Divider, Drawer } from '@mui/material';
import BookSpotlight from '../../components/BookSpotlight/BookSpotlight';

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
                           <img className="img" src="images/Poissant.jpg" alt="author" />
                           </div>
                            

                           <div className='blogText'>
                            <p className='subheading2'>April 2023</p>
                            <h1 className="subheading">David James Poissant</h1>
                            <h2 className='subheading'>From Professor to Author</h2>
                            
                            <p className="blog-description">
                               David James Possiant is an award-winning author, finalist for the LA Times Book Prize, and a professor for UCF’s MFA program. He is one of our cherished local Orlando, Florida authors. Possiant has had his works displayed in a variety of prestigious settings such as The Atlantic Monthly, The Chicago Tribune, The New York Times, One Story, Ploughshares, and The Southern Review. He only released his passion and desire to become a writer until after his college days. He taught high school English where he wrote in the summer. This time spent during his summers made his passion grow more and more. He wanted more time spent writing, which encouraged him to go back to college for an English degree. Poissant has been writing ever since his major life change.
He made his novel debut with the release of Lake Life in July 2020. Lake Life is a fiction novel for adults showcasing what it means to be a true family. It takes place in North Carolina at their family lake house and illustrates how complicated and intertwined family matters become. Troubled relationships, confrontation, and acceptance create empathy for Poissant’s characters as each reader has someone they can relate to. Lake Life is both heart-wrenching and hilarious with Poissant perfecting this memorable story.
Possiant shares his new endeavors on his own personal website. He has two released books, book reviews, a contact me, and a spot for events he plans on having. If you are interested in fiction novels for adults, check out Lake Life or some of our catalog of recommended fiction novels. 
                            </p>

                            <button className='btn' onClick={() => setIsDrawerOpen(true)}>Read More</button>
                            <Drawer anchor='bottom' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                                <BookSpotlight/>

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