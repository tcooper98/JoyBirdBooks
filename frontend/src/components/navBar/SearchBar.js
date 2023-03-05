import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const SearchBar = () => {
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/search/${keyword}`)
        } else {
            navigate('/')
        }
    }
    return (
      <div className='searchcontainer'>
                    <form onSubmit={submitHandler}>
                    <input
                        className="searchbar"
                        type="text"
                        name="q"
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder="Search by Title, Author, Genre..">
                    </input>

                    <button className="searchbutton" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                    </form>
                </div>
    )
}


export default SearchBar;