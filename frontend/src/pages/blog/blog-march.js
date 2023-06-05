import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './blog.css';
import { Divider, Drawer } from '@mui/material';
import MarchSpotlight from '../../components/BookSpotlight/MarchSpotlight';

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
                           <img className="img" src="images/nicole.jpg" alt="author" />
                           </div>
                            

                           <div className='blogText'>
                            <p className='subheading2'>March 2023</p>
                            <h1 className="subheading">Nicole M. Namara</h1>
                            <h2 className='subheading'>Thrilling Romance</h2>
                            
                            <p className="blog-description">
                               Nicole M. Namara is a local Florida author who recently published her very first book, Hot Voodoo. She is a full time mom finding time in-between to explore her passions in writing novels. She also enjoys going out to our local coffee shops. She has hosted several events at these coffee shops, like Qreate, where she talks about her work and meets more people in the book-loving community.
	Hot Voodoo is a thriller romance book for young adults. It has a mystery with the main character, Casey's little sister being kidnapped. Casey has to find her sister with practically no evidence to lead off from while also dealing with her unpredictable mother. Casey has to balance the changes of going back to her hometown in New Orleans, finding her missing sister, and hating the feeling of being alone.
	Namara’s Instagram is how she connects with her followers, posts her own book reviews, shares events she's hosting, and updates her own personal writing. As a local Orlando, Florida author herself, Namara also enjoys sharing local authors she finds. Check out her Instagram to find new authors or read our Past Local Author Spotlight blogs posts.
                            </p>

                            <button className='btn' onClick={() => setIsDrawerOpen(true)}>Read More</button>
                            <Drawer anchor='bottom' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                                <MarchSpotlight />

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