import React, { useState } from 'react';
import './BookCard.css';
import { Link, useLocation } from 'react-router-dom';
import { BookItems } from "./BookItems.js";

function BookCard () {
    return (
        <div>
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
    if (location.pathname == "/blog") {
        className = 'background-blog';
    } else if (location.pathname == "/") {
        className = "background-home";
    }

    return (
        <>
            {/*rename the styles here to what i created*/}
            {BookItems.map((item, index) => {
                return (
                    /*sets className variable*/
                    <li key={index} className={className}>
                        <div className="row">
                            <div className="col-past-spotlights past-spotlights-content">

                                <img className="image" src={item.image}/>
                                <h1 className="title">{item.name}</h1>
                                <p className="price">{item.price}</p>
                                <p className="description">{item.description}</p>

                                <div className="spacing"></div>

                                <p className="date">{item.date}</p>
                            </div>
                        </div>
                    </li>
                )
            })}

            {/*sets className variable*/}
            {/* <div className={className}>

                <div className="row">
                    <div className="col-past-spotlights past-spotlights-content">
                        <img src="src/components/images/placeholder-image.jpg"/>
                        <h3 className="past-spotlights-text">Title 1</h3>
                        <p className="past-spotlights-text">Description text</p>

                        <div className="spacing"></div>

                        <p>Month Text</p>
                    </div>

                    <div className="col-past-spotlights past-spotlights-content">
                        <img src="src/components/images/placeholder-image.jpg"/>
                        <h3 className="past-spotlights-text">Title 2</h3>
                        <p className="past-spotlights-text">Description text</p>

                        <div className="spacing"></div>

                        <p>Month Text</p>
                    </div>

                    <div className="col-past-spotlights past-spotlights-content">
                        <img src="src/components/images/placeholder-image.jpg"/>
                        <h3 className="past-spotlights-text">Title 3</h3>
                        <p className="past-spotlights-text">Description text</p>

                        <div className="spacing"></div>

                        <p>Month Text</p>
                    </div>

                    <div className="col-past-spotlights past-spotlights-content-last">
                        <img src="src/components/images/placeholder-image.jpg"/>
                        <h3 className="past-spotlights-text">Title 4</h3>
                        <p className="past-spotlights-text">Description text</p>

                        <div className="spacing"></div>

                        <p>Month Text</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default BookCard;