import React from 'react'
import HeroBanner from '../../components/Hero/Header'
import Product from '../../components/Products/ProductCard'
import './home.css'
import { Link } from 'react-router-dom'
import BookSpotlight from '../../components/BookSpotlight/BookSpotlight'
import News from '../../components/newsletter/news'
import Turner from '../../components/Products/turnerCard'

export default function Home() {
    const handleClick = () => {
        window.location.href = 'https://www.google.com/maps/dir//joybird+books/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88e76fa80d58a57d:0xcb3e5d096693157b?sa=X&ved=2ahUKEwi3sti11vb8AhVdTTABHa5sDYkQ9Rd6BAhWEAU';
    };
    return (
    <>
        <HeroBanner>

        </HeroBanner>
        

        <div className="fresh-off-press">

            <h2>FRESH OFF THE PRESS</h2>
            
          
            <Product/>
             
            <div className="spotlight">
              <img src="images/Poissant.jpg" alt="David James Poissant"/>
             <div className="spotlight-text">
              <h1>Local Author Spotlight</h1>
               <p>DAVID JAMES POISSANT is the author of the story collection The Heaven of Animals, in print in five languages, winner of the GLCA
                New Writers Award, and a finalist for the Los Angeles Times Book Prize. He teaches the MFA program at the University of Central Florida 
                and lives in Orlando with his wife and daughters. His debut novel, Lake Life will be published by Simon & Schuster on July 7, 2020.
               </p>
               <div className="learn">
                <Link to={`/blog`} style={{ textDecoration: 'none', color: 'inherit'}}>
               <button >Learn More</button>
               </Link>
               </div>
             </div>
            </div>

            <BookSpotlight/>
            
            <div className="turner">
            <h2>PAGE TURNERS</h2>
            </div>
            <Turner/>
            
            <h2>TESTIMONIALS</h2>
            <div className="testimonials">
                <div className='testimonials1'>
                <p>"In an ever-evolving digital age, it's so refreshing to see another small independent bookstore pop up in this area! It has the perfect mix of a little bit of everything" <br/> -Josh D.</p>
                </div>
                
                <div className='testimonials2'>
                <p>"This place is awesome and so fun for children! They offer super resonably priced used books and new books from local authors. The store is designed with families in mind" <br/> -Hannah M.</p>
                </div>

                <div className='testimonials3'>
                <p>"Joybird Books is a delightful cozy used book and curio shop in the heart of the busy Corrine Drive commercial distract of Audubon park. The amazing selection seems curated and the space is very welcoming" <br/> -Cinna S.</p>
                </div>
            </div>

            <div className="community">
              <img src="images/community.jpg" alt="Band playing at community event"/>
              <div className="communitytext">
              <h1>COMMUNITY</h1>
               <p>We are Orlando's very own used bookseller, focused on bringing together local authors and artists to share their work and celebrate 
                the spirit of art, literacy, and community in a collaborative space. View our calender for events such as book readings, live music,
                and vendor street festivals.
               </p>
               <Link to={`/calender`} style={{ textDecoration: 'none', color: 'inherit'}}>
               <button>Calendar</button>
               </Link>
               {/* <button>CALENDER</button> */}
               </div>
            </div>

            {/* <div className="newsletter">
              <h1>SUBSCRIBE TO OUR NEWSLETTER!</h1>
              
              <label>
                        
                        <input type="text" name="email" placeholder="enter your email"></input>
               </label>

                <button>SEND</button>
            
            </div> */}

            <News/>
            
            {/* I need to find a way to embed instagram feed without access to token maybe a widget or something */}
            <div className="instagram">
               <h2>INSTAGRAM FEED</h2>
               
               <div className='instaposts'>
               <iframe src="https://www.instagram.com/p/CnFDthIOc-H/embed" 
               width="400" height="400" frameborder="0" scrolling="no" allowtransparency="true" title='insta1'></iframe>

              <iframe src="https://www.instagram.com/p/CmM0m6xOszI/embed" 
               width="400" height="400" frameborder="0" scrolling="no" allowtransparency="true" title='insta2'></iframe>

               <iframe src="https://www.instagram.com/p/CmHrvoQuDOU/embed" 
               width="400" height="400" frameborder="0" scrolling="no" allowtransparency="true" title='insta3'></iframe>


               </div>

            </div>
                        
            <div className="location-donate">
            <div className="visit-donate">
                <h1>Visit Us</h1>
                <img src="images/map.jpg" alt="location of store on map" className="donate-visitimg"/>
            </div>
            <div className="address-donate">
                <h1>Address</h1>
                <p>Joybird Books LLC
                   <br/>
                    3018 Corrine Drive
                    <br/>
                    Orlando, FL 32803
                    <br/>
                    407 951-5436
                </p>
                <button onClick={handleClick}>Get Directions</button>
            </div>

            <div className='hours-donate'>
                <h1>Working Hours</h1>
                <p>Monday Closed</p>
                <p>Tuesday-Saturday 11AM - 7PM</p>
                <p>Sunday 12AM - 6PM</p>
            </div>   
        </div>



            </div>
      
    </>
    )
}