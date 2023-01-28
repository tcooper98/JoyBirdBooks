import React from "react";
import "./Filter.css";

function Category() {
    return (
        <>
        <div className="filter">
        <legend>Category</legend>
        <input type="checkbox" id="books" name="category" value="books"></input>
        <label for="books">Books</label> <br/>

        <input type="checkbox" id="magazine" name="category" value="magazine"></input>
        <label for="magazine">Magazine</label> <br/>

        <input type="checkbox" id="stickers" name="category" value="stickers"></input>
        <label for="stickers">Stickers</label> <br/>

        <input type="checkbox" id="merchandise" name="category" value="merchandise"></input>
        <label for="merchandise">Store Merchandise</label> 
        </div>
        </>
    )
}

export default Category