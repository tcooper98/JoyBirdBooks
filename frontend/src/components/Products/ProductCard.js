import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductCard.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions'
import { useEffect } from 'react';


// this determines how many items on page by screen size
const responsive = {
  extraLargeDesktop: {
    breakpoint: { max: 6000, min: 2250 },
    items: 5,
    slidesToSlide: 5 // optional, default to 1
  },
    superLargeDesktop: {
    breakpoint: { max: 2250, min: 2097 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1
  },
  desktop: {
    breakpoint: { max: 2096, min: 1288 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1287, min: 900 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 899, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function Product() {
    return (
      <div>
          <ProductCard/>
       </div> 
    )
}




// Building model for product card so it can be populated with data later on refer to ProductItems.js for data structure
// function ProductCard() {
 
//   return (
//     <>

//       {ProductItems.map((item, index) => {
//       return (
//       <li key={index}>
//       <div className="card">
      
//       <div className="body">
//           <Link to={`/product/}`} style={{ textDecoration: 'none', color: 'inherit'}}> 
//         <img className="image" src={item.image} alt="book"/>
//         <h1 className="title">{item.name}</h1>
//         <p className="price">${item.price}</p>
//          </Link>
//         <p className="description">{item.description}</p>
        
       
//         </div>
      
//       </div>
//       </li>
//     )
//     })}
//     </>
//   )
// }


function ProductCard() {

  
  
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/products/search/fresh`, {
      method: 'GET',
    }).then((response) => {
      response.json().then((data) => {
        setIsLoading(false);
        setProducts(data);
      });
    })
  },[]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  
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

      {products.map((product) => {
      return (
      <div key={product._id}>
      <div className="card">
      
      <div className="body">
          <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit'}}> 
        <img className="image" src={product.image} alt={product.name}/>
        <h1 className="title">{product.name}</h1>
        <p className="price">${product.price}</p>
         </Link>
        <p className="description">{product.description}</p>
        
       
        </div>
      
      </div>
      </div>
    )
    })}
    </Carousel>
    </div>
  )
}

export default Product;
