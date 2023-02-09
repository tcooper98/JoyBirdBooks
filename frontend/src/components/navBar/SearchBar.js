import React, { useState } from 'react';
import './Searchbar.css'

function SearchBar() {
    return (
        <>
            <div className='searchbar-place'>

                <input
                    className="searchbar"
                    type="search"
                    placeholder="Search by Title, ISBN, Tag, Keyword...">
                </input>

                <button className="searchbutton" type="submit">
                    <i className="s fas fa-search"></i>
                </button>

            </div>
        </>
    )
}

export default SearchBar;