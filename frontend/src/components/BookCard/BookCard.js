import React, { useEffect, useState } from 'react';
import './BookCard.css';
import { useLocation } from 'react-router-dom';
import { BookItems } from "./BookItems.js";
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

function BookCard () {
    return (
        <div className="past-spotlights-content">
            <Book/>
        </div>
    )
}

function Book () {
    let className;

    //gets page user is currently on
    let location = useLocation();

    console.log(location.pathname);

    //sets background styling to differ based on what page user is currently on
    if (location.pathname === "/blog" || location.pathname === "/blog-read-more") {
        className = 'background-blog';
    } else if (location.pathname === "/") {
        className = "background-home";
    }

    const [setMobile] = useState(window.innerWidth <= 820);

    const updateScreenSize = () => {
        setMobile(window.innerWidth <= 820);
    }

    useEffect(() => {
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    })

    return (
        <>
        
            {/*rename the styles here to what i created*/}
            {BookItems.map((item, index) => {

                return (
                    /*sets className variable*/
                    <div key={index} className={className}>

                        <div className="blogCont">

                            <Link to={`/${item.link}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                 <div>
                                <img className="blogIMG" src={item.image} alt="book"/>
                                
                                </div>
                                <div>
                                <h1 className="blogtitle">{item.name}</h1>
                                 <p className="blogdate">{item.date}</p>
                                <p className="blogDes">{item.description}</p>
                                </div>
                               
                            </Link>

                        <Divider orientation="vertical" flexItem />
                           
                        </div>

                    </div>
                )
            })}
        </>
    )
}

export default BookCard;