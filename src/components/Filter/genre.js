import React from "react";
import "./Filter.css";

function Genre() {
    return (
        <>
        <div className="filter">
        <h2>Product Filter</h2>
        <legend for="genre">Genre</legend>
       
        
        <select name="genre" id="genre">
        <option value="fiction">Fiction</option>
        <option value="nonfiction">Non-Fiction</option>
        <option value="fantasy">Fantasy</option>
        <option value="scifi">Science Fiction</option>
        <option value="mystery">Mystery</option>
        <option value="romance">Romance</option>
        <option value="horror">Horror</option>
        </select>


      

        </div>
        </>
    )
}

export default Genre
