import React from 'react'
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
               <button>Learn More</button>
               </div>
             </div>
            </div>

            <div className="book-spotlight">
              <img src="images/lakelife.jpg" alt="David James Poissant Lake Life"/>
             <div className="book-text">
              <h1>Lake Life</h1>
              <h2>By David James Possiant</h2>
               <p>The Starling family is scattered across the country. Parents Richard and Lisa live in Ithaca, New York, and work at Cornell University.
                Their son, a salesperson, lives in Dallas, with his elementary school teacher wife, Diane. Michael's brother, Thad, an aspiring poet makes
                his home in New York City with his famous painter boyfriend, Jake. For years they've traveled to North Carolina to share a summer vacation 
                at the family's lake house. The tradition is coming to an end, as Richard and Lisa have decided to sell the lake house. But what should be 
                joyous farewell takes a nightmarish turn when the family witnesses a tragedy that triggers a series of dramatic revelation among the 
                Starlings-alcoholism, infidelity, and a shocking secret that will change the family forever. </p>
                <div className="pickup">
               
                        <input className="ship" type="radio" value=""></input>
                        <label for="ship">Ship This Item - Qualifies fir Free Shipping</label> <br/> <br/>
                        <input className="buy" type="radio" value=""></input>   
                        <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label>
                </div>
               <div className="cartbutton">
               <button>ADD TO CART</button>
               <button>BUY NOW</button>
               </div>
             </div>
            </div>

       
            
            <div className="turner">
            <h2>PAGE TURNERS</h2>
            </div>
            <Product/>
            
            <h2>TESTIMONIALS</h2>
            <div className="testimonials">
                <div className='testimonials1'>
                <p>"This is a testimonial"</p>
                </div>
                
                <div className='testimonials2'>
                <p>"This is a testimonial"</p>
                </div>

                <div className='testimonials3'>
                <p>"This is a testimonial"</p>
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
               {/* <button>CALENDER</button> */}
               </div>
            </div>

            <div className="newsletter">
              <h1>SUBSCRIBE TO OUR NEWSLETTER!</h1>
              
              <label>
                        
                        <input type="text" name="email"></input>
               </label>

                <button>SEND</button>
            
            </div>
            
            {/* I need to find a way to embed instagram feed without access to token maybe a widget or something */}
            <div className="instagram">
               <h2>Instagram feed</h2>
               
               <div className='instaposts'>
               <iframe src="https://www.instagram.com/p/CnFDthIOc-H/embed" 
               width="400" height="400" frameborder="0" scrolling="no" allowtransparency="true"></iframe>

              <iframe src="https://www.instagram.com/p/CmM0m6xOszI/embed" 
               width="400" height="400" frameborder="0" scrolling="no" allowtransparency="true"></iframe>

               <iframe src="https://www.instagram.com/p/CmHrvoQuDOU/embed" 
               width="400" height="400" frameborder="0" scrolling="no" allowtransparency="true"></iframe>


               </div>

            </div>
            
           <div className="locationhome">
            <div className="visit">
                <h1>Visit Us</h1>
                <img src="images/map.jpg" alt="location of store on map"/>
                </div>
            <div className="address">
                <h2>Address</h2>
                <p>Joybird Books LLC
                   <br/>
                    3018 Corrine Drive
                    <br/>
                    Orlando, FL 32803
                    <br/>
                    407 951-5436
                </p>
                <button>Get Directions</button>
            </div>
            <div className='hours'>
                <h2>Working Hours</h2>
                <p>Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
                <p>Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
                <p>Wednesday &nbsp;&nbsp;10AM - 5PM</p>
                <p>Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
                <p>Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
                <p>Saturday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
                <p>Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10AM - 5PM</p>
            </div>     
             </div>
            

            </div>
      
    </>
    )
}