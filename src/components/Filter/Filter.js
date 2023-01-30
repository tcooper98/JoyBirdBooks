import React from "react";
import "./Filter.css";

function Filter() {
    return (
        <>
        <form>
        <div className="filter">
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
            <br/>
            <br/>
            </div>

        <div className="category">
            <legend>Category</legend>
          
            <input type="checkbox" id="books" name="category" value="books"></input>
            <label for="books">Books</label> <br/>

             <input type="checkbox" id="magazine" name="category" value="magazine"></input>
            <label for="magazine">Magazine</label> <br/>

            <input type="checkbox" id="stickers" name="category" value="stickers"></input>
            <label for="stickers">Stickers</label> <br/>

            <input type="checkbox" id="merchandise" name="category" value="merchandise"></input>
            <label for="merchandise">Store Merchandise</label> 
            <br/>
            <br/>
        </div>

        <div className="age">
            <legend>Age</legend>
            <input type="checkbox" id="children" name="age" value="children"></input>
            <label for="children">Children</label> <br/>

            <input type="checkbox" id="teen" name="age" value="teen"></input>
            <label for="teen">Teen</label> <br/>

            <input type="checkbox" id="young" name="age" value="young"></input>
            <label for="young">Young Adult</label> <br/>

            <input type="checkbox" id="adult" name="age" value="adult"></input>
            <label for="adult">Adult</label>  <br/><br/>

       
        </div>


        <div className="price">
          <p>High to Low</p>
          <br/>
        </div>

        <div className="shipping">
            <legend>Shipping</legend>
            
            <input type="checkbox" id="free" name="shipping" value="free"></input>
            <label for="free">Free Shipping</label> <br/> <br/>

            </div>

             <button type="button">APPLY</button>
             </div>

             </form>
        </>
    )
}

export default Filter
