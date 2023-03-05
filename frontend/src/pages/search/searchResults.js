import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Divider, Rating } from "@mui/material";
import "./search.css";



const SearchResults = () => {
  const { keyword } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/products/search/${keyword}`, {
      method: 'GET',
    }).then((response) => {
      response.json().then((data) => {
        setIsLoading(false);
        setProducts(data);
      });
    })
  }, [keyword]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="searchproduct">
      <h1 className="searchResults">Search Results</h1>
      {products.length ===0 ? (
        <div>
        <h2 className="searchNoResults">Sorry, we couldn't find any results matching "{keyword}"</h2>
            <ol>
               <li>1. Check your search for typos</li>
               <li>2. Use a more generic search term</li>
               <li>3. The product you are searching for may be sold out or not yet available in our online store</li>
               <li>4. Need help finding something? Call our store at 407-951-5436</li>
            </ol> 
             <Link to='/products'>
               <Button>Click here to view our full product section</Button>
             </Link>
        </div>
        
      ) : (products.map((product) => (
        <div key={product._id}>
          <Link
            to={`/product/${product._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="search-details">
              <div className="searchImgCon">
                <img className="searchImg" src={product.image} alt={product.name} />
              </div>
              <div className="search-info">
                <h1 className="searchTitle">{product.name}</h1>
                <Rating name="size-small" value={product.rating} size="small" readOnly />
                <h3 className="searchBy">By {product.author}</h3>
                <p className="searchDes">{product.description}</p>
                <h2 className="searchPrice">${product.price}</h2>
              </div>
            </div>
          </Link>
           <h1 className="searchEnd">End of Results</h1>
        </div>
      ))
    )}
     
    </div>
  
  );
};

export default SearchResults;