import React, { useState } from 'react';
import './Searchbar.css'

function SearchBar() {
    return (
        <>
            <div>

                <input
                    className="searchbar"
                    type="search"
                    placeholder="Search by Title, ISBN, Tag, Keyword...">
                </input>

                <button className="searchbutton search-icon" type="submit">
                    <i className="fas fa-search"></i>
                </button>

            </div>
        </>
    )
}

export default SearchBar;