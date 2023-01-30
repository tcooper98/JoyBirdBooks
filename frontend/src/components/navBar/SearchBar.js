import React, { useState } from 'react';
import './Searchbar.css'

function SearchBar () {
    return (
        <>
            <input
                className="searchbar"
                type="search"
                placeholder="Search by Title, ISBN, Tag, Keyword..."
            />        
        </>
    )
}

export default SearchBar;