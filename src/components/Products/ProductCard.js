import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductItems } from "./ProductItems.js";
import "./ProductCard.css";


function Product() {
    return (
        <div className="wrapper">
          <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
  
        
        keyBoardControl={true}
        customTransition="all .5"
       transitionDuration={500}
       containerClass="carousel-container"
       removeArrowOnDeviceType={["tablet", "mobile"]}
  
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
           </Carousel>
        
          
        </div>
    )
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 465 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


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
