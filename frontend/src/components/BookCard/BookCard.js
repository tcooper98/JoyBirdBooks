import React, { useEffect, useState } from 'react';
import './BookCard.css';
import { Link, useLocation } from 'react-router-dom';
import { BookItems } from "./BookItems.js";

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
    if (location.pathname == "/blog" || location.pathname == "/blog-read-more") {
        className = 'background-blog';
    } else if (location.pathname == "/") {
        className = "background-home";
    }

    const [isMobile, setMobile] = useState(window.innerWidth <= 820);

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
                    <li key={index} className={className}>

                        <div className="p-20">

                            <Link to={`/product}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <img className="image-card" src={item.image} />
                                <h1 className="title">{item.name}</h1>
                                <p className="description">{item.description}</p>
                            </Link>

                            <div className="spacing"></div>

                            <p className="date">{item.date}</p>
                        </div>

                    </li>
                )
            })}
        </>
    )
}

export default BookCard;