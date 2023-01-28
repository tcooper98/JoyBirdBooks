import React from "react";
import "./Filter.css";

function Age() {
    return (
        <>
        <div className="filter">
        <legend>Age</legend>
        <input type="checkbox" id="children" name="age" value="children"></input>
        <label for="children">Children</label> <br/>

        <input type="checkbox" id="teen" name="age" value="teen"></input>
        <label for="teen">Teen</label> <br/>

        <input type="checkbox" id="young" name="age" value="young"></input>
        <label for="young">Young Adult</label> <br/>

        <input type="checkbox" id="adult" name="age" value="adult"></input>
        <label for="adult">Adult</label> 

       
        </div>
        </>
    )
}

export default Age