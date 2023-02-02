import React, {useState} from 'react';
import './donate.css';
import FAQ from './FAQ'

export default function Donate() {
    const [faqs, setfaqs] = useState( [
        {
            question: "How does store credit work?",
            answer: "Store credit is given for adult paperbacks and hardcovers at 25% of our selling price. For example: $2.00 in credit per hardcover book sold at $8.00 in store. $1.25 in credit per paperback book sold at $5.00 in store.",
        },
        {
            question: "Does the condition of my books matter?",
            answer: "Books must be clean (no moldew or mold) and have all their pages, tight bindings, and front/back covers.",
        },{
            question: "What if my books are not all accepted?",
            answer: "Your books we are unable to accept can either be returned to you or given to the appropriate non-profit entity on your behalf.",
        },
    ]);
    return <>
        <div class="hero-banner"></div>
        <h1 className="donate-header">What would you like to do today?</h1>
        <div className="donate-container">
            <form action="" method="" name="donate-form">
                <div>
                    {/*Donate Books Radio Button */}
                    <label for="donate" className="donate-radiobuttons">Donate Books</label>
                    <input type="radio" name="donateTrade" id="accent-color" value="yes" />
                </div>
                <div>
                    {/*Trade Books Radio Button */}
                    <label for="trade" className="donate-radiobuttons">Trade Books</label>                      
                    <input type="radio" name="donateTrade" id="accent-color" value="no" />
                </div>
                <div className="full-width">
                    <h2 class="sub-title">CONTACT INFORMATION</h2>
                </div>
                <div>
                    {/*First Name*/}
                    <label for="firstName" class="required-input">First Name</label>
                    <input type="text" placeholder="First Name" className="donate-input"></input>
                </div>
                <div>
                    {/*Last Name*/}
                    <label for="lastName" class="required-input">Last Name</label>
                    <input type="text" placeholder="Last Name" className="donate-input"></input>
                </div>
                <div className="full-width">
                    {/*Email*/}
                    <label for="email" class="required-input">Email</label>
                    <input type="text" placeholder="Email Address" className="donate-input"></input>
                </div>
                <div className="full-width">
                    <h2 class="sub-title">BOOK INFORMATION</h2>
                </div>
                <div>
                    {/*Book Title*/}
                    <label for="bookTitle" class="required-input">Book Title</label>
                    <input type="text" placeholder="Book Title" className="donate-input"></input>
                </div>
                <div>
                    {/*Book Author*/}
                    <label for="bookAuthor" class="required-input">Book Author</label>
                    <input type="text" placeholder="Book Author" className="donate-input"></input>
                </div>
                <div>
                    {/*Book Edition*/}
                    <label for="bookEdition" class="required-input">Book Edition/Print</label>
                    <input type="text" placeholder="Book Edition/Print" className="donate-input"></input>
                </div>        
                <div>
                    {/*Book ISBN*/}
                    <label for="bookISBN" class="required-input">ISBN/LOC Number</label>
                    <input type="text" placeholder="Book ISBN/LOC Number" className="donate-input"></input>
                </div>
                <div>
                    {/*Book Condition*/}
                    <label for="bookCondition" class="required-input">Book Condtion</label>
                    <input type="text" placeholder="Book Condition" className="donate-input"></input>
                </div>
                <div>
                    {/*Hardcover or Softcover*/}
                    <label for="bookCover" class="required-input">Hardcover or Softcover</label>
                    <input type="text" placeholder="Hardcover or Softcover" className="donate-input"></input>
                </div>
                <div className="full-width">
                    {/*Submit Button*/}
                    <button className="donate-submitbutton" value="Submit">Submit</button>
                </div>
            </form>
            
            <div className="faq-container">
                <h2 className="faq-title">FAQ</h2>
                <div className="faqs">
                    {faqs.map((faq, i) => (
                        <FAQ faq={faq} index={i}></FAQ>
                    ))}
                </div>
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
    </>
}