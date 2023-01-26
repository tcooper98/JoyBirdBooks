import React from 'react'
import './donate.css'

export default function Donate() {
    return <>
        <div className="donate-container">
            <h1>Donation</h1>
            <form action="" method="" name="donate-form">
                <h2 class="title">What would you like to do today?</h2>
                 <dl>
                    {/*Donate Books Radio Button */}
                    <dt>
                        <label for="donateRadio">Donate Books</label>
                        <input className="DonateTrade" type="radio" value=""></input>
                    {/*Trade Books Radio Button */}
                        <label for="donateRadio">Trade Books</label>
                        <input className="DonateTrade" type="radio" value=""></input>                        
                    </dt>
                </dl>
                <fieldset>
                    <legend className="title">Contact Information</legend>
                    <dl>
                        <dt>
                            {/*First Name*/}
                            <label for="firstName">First Name:</label>
                            <input type="text" className="form-input"></input>
                            {/*First Name*/}
                            <label for="lastName">Last Name:</label>
                            <input type="text" className="form-input"></input>
                        </dt>
                        <dt>
                            {/*Email*/}
                            <label for="email">Email:</label>
                            <input type="text" className="form-input"></input>
                        </dt>
                    </dl>
                </fieldset>
                <fieldset>
                    <legend className="title">Book Information</legend>
                    <dl>
                        <dt>
                            {/*Book Title*/}
                            <label for="bookTitle">Book Title:</label>
                            <input type="text" className="form-input"></input>
                            {/*Book Author*/}
                            <label for="bookAuthor">Book Author:</label>
                            <input type="text" className="form-input"></input>
                        </dt>
                        <dt>
                            {/*Book Edition*/}
                            <label for="bookEdition">Book Edition/Print:</label>
                            <input type="text" className="form-input"></input>
                            {/*Book ISBN*/}
                            <label for="bookISBN">ISBN/LOC Number:</label>
                            <input type="text" className="form-input"></input>
                        </dt>
                        <dt>
                            {/*Book Condition*/}
                            <label for="bookCondition">Book Condtion:</label>
                            <input type="text" className="form-input"></input>
                            {/*Hardcover or Softcover*/}
                            <label for="bookCover">Hardcover or Softcover:</label>
                            <input type="text" className="form-input"></input>
                        </dt>
                    </dl>
                    <dl>
                        {/*Submit Button*/}
                        <dt>
                            <input type="submit" className="form-submit" value="Submit"></input>
                        </dt>
                    </dl>
                </fieldset>
            </form>
        </div>
    </>
}