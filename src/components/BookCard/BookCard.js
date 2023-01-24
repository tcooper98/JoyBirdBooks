import React, { useState } from 'react';
import './BookCard.css';
import { Link, useLocation } from 'react-router-dom';

function BookCard () {
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
            {/*sets className variable*/}
            <div className={className}>

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
            </div>
        </>
    )
}

export default BookCard;