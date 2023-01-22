import React from 'react'
export default function Donate() {
    return <>
        <h1>Donation</h1>
        <form>
            <h2>What would you like to do today?</h2>
                <div>
                    <label>
                        Donate Books
                        <input type="radio" value="Donate" name="DonateTrade"></input>
                    </label>
                    <label>
                        Trade Books
                        <input type="radio" value="Trade" name="DonateTrade"></input>
                    </label>
                </div>
                <h3>Contact Information</h3>
                <div>
                    <label>
                        First Name:
                        <input type="text" name="FirstName"></input>
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="LastName"></input>
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="text" name="Email"></input>
                    </label>
                </div>
                <h3>Book Information</h3>
                <div>
                    <label>
                        Book Title:
                        <input type="text" name="BookTitle"></input>
                    </label>
                    <label>
                        Book Author:
                        <input type="text" name="BookAuthor"></input>
                    </label>
                </div>
                <div>
                    <label>
                        Book Edition/Print:
                        <input type="text" name="BookEdition"></input>
                    </label>
                    <label>
                        ISBN/LOC Number:
                        <input type="text" name="ISBN"></input>
                    </label>
                </div>
                <div>
                    <label>
                        Item Condition:
                        <input type="text" name="ItemCondition"></input>
                    </label>
                    <label>
                        Hardcover or Softcover:
                        <input type="text" name="HardcoverSoftcover"></input>
                    </label>
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
        </form>
    </>
}