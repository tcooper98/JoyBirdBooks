import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommunityDropdown from './CommunityDropdown';
import ConnectedDropdown from './ConnectedDropdown';
import './Navbar.css'
import Logo from './primarylogo.png';

function Navbar () {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return(
        <>
            <nav className='navbar'>

                <div className={click ? 'nav-menu active' : 'nav-menu'}>

                    <p>
                        <Link to='/' className='nav-item navbar-logo'> 
                            <img src={Logo} alt='logo' />
                        </Link>
                        <div className='menu-icon' onClick={handleClick}> 
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                    </p>

                    <p className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            PRODUCTS
                        </Link>
                    </p>

                    <p className='nav-item'>       
                        <Link to='/donate' className='nav-links' onClick={closeMobileMenu}>
                            DONATE/TRADE
                        </Link>
                    </p>

                    <p className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >       
                        <Link to='/community' className='nav-links' onClick={closeMobileMenu}>
                            COMMUNITY <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <CommunityDropdown />}
                    </p>

                    <p className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >       
                        <Link to='/connected' className='nav-links' onClick={closeMobileMenu}>
                           GET CONNECTED <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <ConnectedDropdown />}
                    </p>

                    <p className='nav-item-last'>       
                        <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                    </p>  
                </div>
            </nav>

            <nav className='navbar greenNav'>
                <h2 className='nav-item green-nav-item'>OFFERS</h2>
                <div className='nav-item green-nav-item'> - </div>
                <h2 className='nav-item green-nav-item'>PROMO CODE</h2>
                <div className='nav-item green-nav-item'> - </div>
                <h2 className='nav-item green-nav-item'>ANNOUNCEMENTS</h2>
            </nav>
        </>
    )
}

export default Navbar;