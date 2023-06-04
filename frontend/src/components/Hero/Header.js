import React from 'react';
import './Header.css';

function HeroBanner(){
    return(
        <div className="header-container">
        <div>
         <h1 className='head1'>JOYBIRD</h1>
         <h1 className='head2'>BOOKS</h1>
         </div>
         <div>
         <img className="hero" src="images/coverr.png" alt='woman reading book' />
         </div>
        </div>
    )
    
}

export default HeroBanner;