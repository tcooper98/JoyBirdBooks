import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './blog.css';
import { Divider, Drawer } from '@mui/material';
import BookSpotlight from '../../components/BookSpotlight/BookSpotlight';
import JanSpotlight from '../../components/BookSpotlight/JanSpotlight';

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
                           <img className="charlie" src="images/charlie.jpg" alt="author" />
                           </div>
                            

                           <div className='blogText'>
                            <p className='subheading2'>January 2023</p>
                            <h1 className="subheading">Charlie Griffen</h1>
                            <h2 className='subheading'>Educator to Author</h2>
                            
                            <p className="blog-description">
                              Charlie Griffin originally started his career as a music educator and being a free-lance musical composer. Since then he has now made the shift in his career to focus on writing. He graduated as valedictorian from Full Sail University in 2019 earning his BFA in Creative Writing for Entertainment. He is continuing his education in UCLA’s professional Program in Television Writing (comedy track). It was in his undergrad where he found his enjoyment of writing for kids. His journey for writing children's books continued as he wrote, rewrote, ghost-wrote for clients on Fiverr.com.
He, along with illustrator Rebbeca Sampson, worked together to tell the story of Indy and Jenny. Based on a true story, this illustrated children’s book shows how Indy, a rescued pit bull is able to overcome the changes he faces from the support of people. Jenny, his caregiver formed a bond with him instantly becoming his best friend. Charlie Griffin wrote this heart-warming story to reach an young audience showing them the importance of compassion, strength, and friendship.
 For more information on local author Charlie Griffin check out his personal website. Indy and Jenny is available in our shop for in-store pickup or shipped to your home. Be sure to check it out along with our other children’s books. 
                            </p>

                            <button className='btn' onClick={() => setIsDrawerOpen(true)}>Read More</button>
                            <Drawer anchor='bottom' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                                <JanSpotlight/>

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