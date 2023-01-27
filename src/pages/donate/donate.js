import React from 'react'
import './donate.css'

export default function Donate() {
    return <>
        <div className="donate-container">
            <h1>"Donate & Trade" Hero Banner</h1>
            <form action="" method="" name="donate-form">
                <h2 className="full-width">What would you like to do today?</h2>
                <div>
                    {/*Donate Books Radio Button */}
                    <label for="donate">Donate Books</label>
                    <input type="radio" name="donateTrade" id="yes" value="yes" />
                    {/*Trade Books Radio Button */}
                </div>
                <div>
                    <label for="trade">Trade Books</label>                      
                    <input type="radio" name="donateTrade" id="no" value="no" />
                </div>
                <h3 class="full-width">Contact Information</h3>
                <div className="form-inputs">
                    {/*First Name*/}
                    <label for="firstName">First Name:*</label>
                    <input type="text" className="firstName"></input>
                </div>
                <div>
                    {/*Last Name*/}
                    <label for="lastName">Last Name:*</label>
                    <input type="text" className="lastName"></input>
                </div>
                <div className="full-width">
                    {/*Email*/}
                    <label for="email">Email:*</label>
                    <input type="text" className="email"></input>
                </div>
                <h3 class="full-width">Book Information</h3>
                <div className="form-inputs">
                    {/*Book Title*/}
                    <label for="bookTitle">Book Title:*</label>
                    <input type="text" className="bookTitle"></input>
                </div>
                <div>
                    {/*Book Author*/}
                    <label for="bookAuthor">Book Author:*</label>
                    <input type="text" className="bookAuthor"></input>
                </div>
                <div>
                    {/*Book Edition*/}
                    <label for="bookEdition">Book Edition/Print:*</label>
                    <input type="text" className="bookEdition"></input>
                </div>        
                <div>
                    {/*Book ISBN*/}
                    <label for="bookISBN">ISBN/LOC Number:*</label>
                    <input type="text" className="bookISBN"></input>
                </div>
                <div>
                    {/*Book Condition*/}
                    <label for="bookCondition">Book Condtion:*</label>
                    <input type="text" className="bookCondition"></input>
                </div>
                <div>
                    {/*Hardcover or Softcover*/}
                    <label for="bookCover">Hardcover or Softcover:*</label>
                    <input type="text" className="bookCover"></input>
                </div>
                <div className="full-width">
                    {/*Submit Button*/}
                    <input type="submit" className="form-submit" value="Submit"></input>
                </div>
            </form>
            <div className="faq">
                <h2>FAQ</h2>
                <h3>How does store credit work?</h3>
                <p>Store credit is given for adult paperbacks and hardcovers at 25% of our selling price.</p>
                <p>For example:</p>
                <p>$2.00 in credit per hardcover book sold at $8.00 in store.</p>
                <p>$1.25 in credit per paperback book sold at $5.00 in store.</p>
                <h3>Does the condition of my books matter?</h3>
                <p>Books must be clean (no moldew or mold) and have all their pages, tight bindings, and front/back covers.</p>
                <h3>What if my books are not all accepted?</h3>
                <p>Your books we are unable to accept can either be returned to you or given to the appropriate non-profit entity on your behalf.</p>
            </div>
            <h2>Visit Us</h2>
            <h3>Address</h3>
            <p>Joybird Books LLC 3018 Corrine Drive Orlando, Florida 32803 (407) 951-5436</p>
            <button>Get Directions</button>
            <h3>Working Hours</h3>
            <p>
                Sunday  10am-5pm
                Monday  10am-5pm
                Tuesday  10am-5pm
                Wednesday  10am-5pm
                Thursday  10am-5pm
                Friday  10am-5pm
                Saturday  10am-5pm
            </p>
        </div>
    </>
}