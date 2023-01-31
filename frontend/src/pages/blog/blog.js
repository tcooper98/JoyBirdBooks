import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import './blog.css';

export default function Blog() {
    return (
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
                    <img className="img" src="./placeholder.jpg"/>

                    <div>
                        <button className="btn">Read More</button>
                    </div>
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