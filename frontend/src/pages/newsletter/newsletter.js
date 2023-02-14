import React from 'react'
export default function News() {
    return <>
        <h1>News Letter</h1>
        <div className="newsletter">
            <h1>SUBSCRIBE TO OUR NEWSLETTER!</h1>    
            <label>              
            <input type="text" name="email" placeholder="Enter Your Email"></input>
            </label>
            <button>SEND</button>
        </div> 
    </>
}