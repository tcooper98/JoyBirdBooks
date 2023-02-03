import React, { useState, useEffect } from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';
import "./footer.css";

function Footer () {
    const [isMobile, setMobile] = useState(window.innerWidth <= 1190);

    const updateScreenSize = () => {
        setMobile(window.innerWidth <= 1190);
    }

    useEffect(() => {
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    })

    return (
        <>
            {isMobile ? (
                <>  
                    <div className="background">

                        <div className="row">
                            <div className="col-text">
                                <h2 className="heading-spacing">MAIN MENU</h2>

                                <Link to='/' className="p body-spacing">
                                    HOME
                                </Link>

                                <Link to='/donate' className="p body-spacing">
                                    DONATE/TRADE
                                </Link>

                                <Link to='/products' className="p body-spacing">
                                    SHOP NOW
                                </Link>

                                <Link to='/about' className="p body-spacing">
                                    ABOUT US
                                </Link>
                            </div>

                            <div className="col-text">
                                <h2 className="heading-spacing">COMMUNITY</h2>

                                <Link to='/calender' className="p body-spacing">
                                    CALENDAR
                                </Link>

                                <Link to='/blog' className="p body-spacing">
                                    BLOG
                                </Link>

                                <a className="p body-spacing" target="_blank" href="https://www.google.com/maps/dir/28.5868032,-81.2023808/3018+Corrine+Dr,+Orlando,+FL+32803/@28.5641678,-81.3398926,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88e77ab3d8af9ff7:0x70b098f8fba3fee5!2m2!1d-81.3453983!2d28.5676165">
                                    LOCATION
                                </a>
                                
                                <Link to='/contact' className="p body-spacing">
                                    CONTACT US
                                </Link>
                            </div>

                            <div className="col-text">
                                <h2 className="heading-spacing">ORDER</h2>

                                <Link to='/track-order' className="p body-spacing">
                                    TRACK AN ORDER
                                </Link>

                                <Link to='/refund-policy' className="p body-spacing">
                                    REFUND POLICY
                                </Link>

                                <Link to='/shipping-policy' className="p body-spacing">
                                    SHIPPING POLICY
                                </Link>

                                <Link to='/return-policy' className="p body-spacing">
                                    RETURN AN ITEM
                                </Link>
                            </div>

                            <div>
                                <h2 className="heading-icons-spacing">FOLLOW US</h2>

                                <div>
                                    <a className="p body-spacing" target="_blank" href="https://www.facebook.com/joybirdbooks/">
                                        <BsFacebook className="footer-icons"/>
                                    </a>

                                    <a className="p body-spacing" target="_blank" href="https://www.instagram.com/joybirdbooks/?utm_source=ig_embed&ig_rid=e1d6889d-5db3-46b0-9b74-5fa531cdf8e4">
                                        <BsInstagram className="footer-icons"/>
                                    </a>

                                    
                                    {/* <a className="p body-spacing" target="_blank" href="https://www.instagram.com/joybirdbooks/?utm_source=ig_embed&ig_rid=e1d6889d-5db3-46b0-9b74-5fa531cdf8e4">
                                        <BsTwitter className="footer-icons"/>
                                    </a> */}
                                </div>
                            </div>
                        </div>

                        <div className="div-spacing"></div>

                        <div className="pb-20">
                            <p className="disclaimer">Copyright 'Copyright symbol' 2022 JOYBIRDS BOOKSTORE LLC. All rights reserved.</p> 
                            <p className="disclaimer disclaimer-gray">Accessibility, User Agreement, Privacy, Cookies.</p>
                            <p className="disclaimer">Do not sell my personal information and AdChoice</p>
                        </div>
                    </div>
                </>
        </>     
    )
}

export default Footer;