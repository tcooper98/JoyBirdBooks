import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Divider, Rating } from "@mui/material";
import "./search.css";
import { Link } from "react-router-dom";


 const SearchResults = () => {
  const { keyword } = useParams();
  console.log('product id from soloProductCard', keyword);

     const [isLoading, setIsLoading] = useState(true);
   
   const [products, setProducts] = useState({});
  
  
 useEffect(
  () => {
  fetch(`/api/products/search/${keyword}`, {
    method: 'GET',
    
  }).then((response) => {
    response.json().then((data) => {
      setIsLoading(false);
      console.log(data)
       setProducts(data);
    });
  })
  },
  []
  );
  if(isLoading) {
    return <p>Loading...</p>
  }
  return (
      <div className='searchproduct'>
        <h1 className="searchResults">Search Results</h1>
      {products.map(product => (
        
        <div key={product._id} >
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit'}}>
        <div className="search-details">
            
           <div className="searchImgCon">
          <img className="searchImg" src={product.image} alt={product.name}/>
          </div>
          <div className="search-info">
            <h1 className="searchTitle">{product.name}</h1>
             <Rating name="size-small" value={product.rating} size="small" readOnly/>
            <h3 className="searchBy">By {product.author}</h3>
            <p className="searchDes">{product.description}</p>
            <h2 className="searchPrice">${product.price}</h2>
          </div>
          </div>
          </Link>
        </div>
        
      ))}
      <h1 className="searchEnd">End of Results</h1>
    </div>
  
  );
}

export default SearchResults;