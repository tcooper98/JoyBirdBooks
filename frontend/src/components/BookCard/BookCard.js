import React, { useEffect, useState } from 'react';
import './BookCard.css';
import { useLocation } from 'react-router-dom';
import { BookItems } from "./BookItems.js";
import { Link } from 'react-router-dom';

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

                        <div className="p-20">

                            <Link to={`/${item.link}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <img className="image-card" src={item.image} alt="book"/>
                                <h1 className="title">{item.name}</h1>
                                <p className="description">{item.description}</p>
                            </Link>

                            <div className="spacing"></div>

                            <p className="date">{item.date}</p>
                        </div>

                    </div>
                )
            })}
        </>
    )
}

export default BookCard;