import React from "react";
import { ProductItems } from "./ProductItems.js";
import "./ProductCard.css";

function Product() {
    return (
        <div className="wrapper">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          
        </div>
    )
}

//Building map for product card so it can be populated with data later on
function ProductCard() {
  
  return (
    <>

    {ProductItems.map((item, index) => {
    return (
    <li key={index}>
    <div className="card">
     <div className="body">
      <img className="image" src={item.image}/>
      <h1 className="title">{item.name}</h1>
      <p className="price">{item.price}</p>
      <p className="description">{item.description}</p>
      
      </div>
     
    </div>
    </li>
    )
    })}
    </>
  )
}

export default Product;
