import React from 'react'
// import BookCard from '../../components/BookCard/BookCard'
import HeroBanner from '../../components/Hero/Header'
import Product from '../../components/Products/ProductCard'
import './home.css'

export default function Home() {
    return (
    <>
        <HeroBanner>

        </HeroBanner>
        

        <div className="fresh-off-press">

            <h2>FRESH OFF THE PRESS</h2>
            
            {/* <BookCard/> */}
            <Product/>

            <div className="spotlight">
              <img src="images/Poissant.jpg" alt="David James Poissant"/>
             <div className="spotlight-text">
              <h1>Local Author Spotlight</h1>
               <p>DAVID JAMES POISSANT is the author of the story collection The Heaven of Animals, in print in five languages, winner of the GLCA
                New Writers Award, and a finalist for the Los Angeles Times Book Prize. He teaches the MFA program at the University of Central Florida 
                and lives in Orlando with his wife and daughters. His debut novel, Lake Life will be published by Simon & Schuster on July 7, 2020.
               </p>
               <button>Learn More</button>
             </div>
            </div>

            <div className="book-spotlight">
                <h1>Book Spotlight</h1>
            </div>
            
            <Product/>

            <div className="testimonials">
                <h1>Testimonials</h1>
            </div>

            <div className="community">
              <img src="images/community.jpg" alt="Band playing at community event"/>
              <h1>COMMUNITY</h1>
               <p>We are Orlando's very own used bookseller, focused on bringing together local authors and artists to share their work and celebrate 
                the spirit of art, literacy, and community in a collaborative space. View our calender for events such as book readings, live music,
                and vendor street festivals.
               </p>
               <button>CALENDER</button>
            </div>

            <div className="newsletter">
              <h1>SUBSCRIBE TO OUR NEWSLETTER!</h1>
              <label>
                        Type your email here:
                        <input type="text" name="email"></input>
               </label>

                <button>SEND</button>
            </div>

            <div className="instgram">
               <h1>Instgram feed</h1>

            </div>

            <div className="visit">
                <h1>Visit Us</h1>
                <h1>Address</h1>
                <p>Joybird Books LLC 
                    3018 Corrine Drive
                    Orlando, FL 32803
                    407 951-5436
                </p>
                <h1>Working Hours</h1>
                <p>Monday 10AM - 5PM</p>
                <p>Tuesday 10AM - 5PM</p>
                <p>Wednesday 10AM - 5PM</p>
                <p>Thursday 10AM - 5PM</p>
                <p>Friday 10AM - 5PM</p>
                <p>Saturday 10AM - 5PM</p>
                <p>Sunday 10AM - 5PM</p>
                
                <button>Get Directions</button>

            </div>
        </div>
    </>
    )
}