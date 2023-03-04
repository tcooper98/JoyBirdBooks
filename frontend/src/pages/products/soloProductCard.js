import './solo.css'
import Product from '../../components/Products/ProductCard';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../redux/actions/cartActions';
import React from 'react';
import { Link as ReactLink} from "react-router-dom";


const SoloProductCard = () => {
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.cart);
  const { cart } = cartInfo;

const buyHandler = () => {
    setButtonLoading(true);
    navigate('/cart');
  };
  
const addBuyNow = (id) => {
    if(cart.some((cartItem) => cartItem.id === id)) {
    } else{
      dispatch(addCartItem(id));
  
    }}

  const addItem = (id) => {
    if(cart.some((cartItem) => cartItem.id === id)) {
      alert('Item already in cart go to cart to update quantity');
    } else{
      dispatch(addCartItem(id));
      alert('Item added to cart');
    }}

  const { id } = useParams();
  console.log('product id from soloProductCard', id);
   
    
   const [isLoading, setIsLoading] = useState(true);
   
   const [product, setProduct] = useState({});
  
  
 useEffect(
  () => {
  fetch(`/api/products/${id}`, {
    method: 'GET',
    
  }).then((response) => {
    response.json().then((data) => {
      setIsLoading(false);
      setProduct(data)
      
    });
  })
  },
  []
  );

  if(isLoading) {
    return <p>Loading...</p>
  }
    
    //formatting how products are displayed 
    return (
       
      <div className='soloproduct'>
         
          
        
          <div key={product._id} className="product-details">
          <img src={product.image} alt={product.name}/>
          <div className="product-info">
          <h1>{product.name}</h1>
          <h3>By {product.author}</h3>
          <Rating name="size-small" value={product.rating} size="small" readOnly/>
         <p>{product.description}</p>
         <h2>${product.price}</h2>
          <input className="ship" type="radio" value=""></input>
                        <label for="ship">Ship This Item - Qualifies for Free Shipping</label> <br/> <br/>
                        <input className="buy" type="radio" value=""></input>   
                        <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label><br/>
              
                <button className='leftbutton' isDisabled={product.stock <= 0} onClick={()=>addItem(product._id)}>Add to Cart</button>
                 <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit'}}> 
                <button className='rightbutton'isDisabled={product.stock <= 0} onClick={()=>{addBuyNow(product._id); buyHandler();}}
                  >Buy Now</button>
                  </Link>
                
        
        </div>
      </div>
       
                  <div className='reviews'>
            <div className="review-menu">
              <h1>Customer Reviews</h1> 
             
              <p>This book is rated {product.rating}/5 stars. This rating based on {product.numberOfReviews} reviews from our readers</p>
        

              <Divider variant="middle" />
              <h2>Review this item</h2>
                <p>Share your thoughts with the community</p>
                <button className='product-review'>Write a product review</button>
             </div>

            {product.reviews.map((review) => (
             <div className="review-info">
                  <select name="rating" id="rating" className='ratingdropdown' >
                  <option value="high">Sort by Highest Rating</option>
                  <option value="low">Sort by Lowest Rating</option>
                 </select>
              
              <div className='review-content'>
               <h2>{review.title}</h2>
                 <Rating name="size-small" defaultValue={review.rating} size="small" readOnly/> 
               <p>{review.comment}</p>

               <p className='review-date'>{review.createdAt}</p>
                
              </div>
              </div>
               ))}

        </div>
                
               

      </div>

      
  
     
    )
  
  
  }

  export default SoloProductCard;