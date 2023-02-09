import React, { useState } from 'react';
import './Searchbar.css'

function SearchBar() {
    return (
        <>
            <input
                className="searchbar"
                type="search"
                placeholder="Search by Title, ISBN, Tag, Keyword...">
            </input>

            <button className="searchbutton" type="submit">
                <i className="fas fa-search"></i>
            </button>
        </>
    )
}

export default SearchBar;