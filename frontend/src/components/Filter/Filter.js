import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./Filter.css";

function Filter() {
    const [showFilter, setShowFilter] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const closeFilter = () => {
        setShowFilter(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 960);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isMobile ? (
                <div className=" filter-icon-container">
                    <button className="filter-icon" onClick={toggleFilter}>
                        <FontAwesomeIcon icon={faFilter} />
                    </button>
                </div>
            ) : (
                <form className="filter">
                    <button className="close-button" onClick={closeFilter}>
                        Close filter
                    </button>
                    <h1>Product Filters</h1>
                    <div className="genre">
                        <h3>Genre</h3>
                        <select name="genre" id="genre">
                            <option value="fiction">Fiction</option>
                            <option value="nonfiction">Non-Fiction</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="scifi">Science Fiction</option>
                            <option value="mystery">Mystery</option>
                            <option value="romance">Romance</option>
                            <option value="horror">Horror</option>
                        </select>
                        <br />
                        <br />
                    </div>
                    <div className="category">
                        <legend>Category</legend>
                        <input type="checkbox" id="books" name="category" value="books" />
                        <label htmlFor="books">Books</label> <br />
                        <input type="checkbox" id="magazine" name="category" value="magazine" />
                        <label htmlFor="magazine">Magazine</label> <br />
                        <input type="checkbox" id="stickers" name="category" value="stickers" />
                        <label htmlFor="stickers">Stickers</label> <br />
                        <input type="checkbox" id="merchandise" name="category" value="merchandise" />
                        <label htmlFor="merchandise">Store Merchandise</label>
                        <br />
                        <br />
                    </div>
                    <div className="age">
                        <legend>Age</legend>
                        <input type="checkbox" id="children" name="age" value="children" />
                        <label htmlFor="children">Children</label> <br />
                        <input type="checkbox" id="teen" name="age" value="teen" />
                        <label htmlFor="teen">Teen</label> <br />
                        <input type="checkbox" id="young" name="age" value="young" />
                        <label htmlFor="young">Young Adult</label> <br />
                        <input type="checkbox" id="adult" name="age" value="adult" />
                        <label htmlFor="adult">Adult</label> <br />
                        <br />
                    </div>
                    <div className="price">
                        <p>High to Low</p>
                        <br />
                    </div>
                    <div className="shipping">
                        <legend>Shipping</legend>
                        <input type="checkbox" id="free" name="shipping" value="free" />
                        <label htmlFor="free">Free Shipping</label> <br /> <br />
                    </div>
                    <button type="button">APPLY</button>
                </form>
            )}
        </>
    );
}

export default Filter;
