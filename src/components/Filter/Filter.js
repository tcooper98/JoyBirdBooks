import React from "react";
import Category from "./Category";
import Genre from "./genre";
import Age from "./Age";
import Price from "./Price";
import Shipping from "./Shipping";
import "./Filter.css";

function Filter() {
    return (
        <>
        <div className="wrapper">
            
           <Genre/>
           <Category/>
           <Age/>
           <Price/>
           <Shipping/>
        </div>
        </>
    )
}

export default Filter
