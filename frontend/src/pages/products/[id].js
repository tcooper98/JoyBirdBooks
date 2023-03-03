import React from 'react'
import './solo.css'
import Product from '../../components/Products/ProductCard';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';






export default function SoloProduct () {
   
 
    return (
        <>
        <div className='soloproduct'>
        <SoloProductCard/>
            
            {/* <div className="product-details">
             <img src="https://images.urbndata.com/is/image/UrbanOutfitters/80218514_000_b?$xlarge$&fit=constrain&qlt=80&wid=640" alt="book"/>
             <div className="product-info">
              <h1>A Cigarette Lit Backwards</h1>
              <h3> By Author</h3>
              <Rating name="size-medium" defaultValue={5} size="medium"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue, arcu a ornare dictum, nisl neque aliquet est,
                 et ultricies arcu mauris vel velit. Curabitur porta feugiat imperdiet. Duis id turpis scelerisque, cursus mauris iaculis,
                  tempus orci. Nulla ornare eu augue nec pharetra. Aliquam erat volutpat. Suspendisse sagittis venenatis enim, eget porta
                   nibh malesuada ut. Nullam feugiat euismod leo nec congue. Vivamus aliquet tellus pharetra massa rutrum convallis.
                    Integer posuere massa nec iaculis ullamcorper. Curabitur ligula nunc, tincidunt ac lorem facilisis, euismod feugiat tellus.
                     In et consequat augue. Etiam fermentum nibh nisi, vitae mattis dolor consequat vitae. </p>
          
               <h2>$19.99</h2>

               <input className="ship" type="radio" value=""></input>
                        <label for="ship">Ship This Item - Qualifies fir Free Shipping</label> <br/> <br/>
                        <input className="buy" type="radio" value=""></input>   
                        <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label><br/>
              
                <button className='leftbutton'>Add to Cart</button>
                <button className='rightbutton'>Buy Now</button>
            </div>
            </div> */}
            
        </div>  



        
        <div className='donate-link'>
            <h1>You can now donate and trade</h1>
            <p>You can now trade or donate books in a very easy and intuitive way. Please refer to our trading policy in our
                trade/donate page. Trading a book will allow you to have access to our library without spending money overhead.
                We are happy to accept your books to share them with the community.
            </p>

             <Link to={`/donate`} style={{ textDecoration: 'none', color: 'inherit'}}>
            <button className='donatebutton'>Donate</button>
            </Link>
            <Link to={`/donate`} style={{ textDecoration: 'none', color: 'inherit'}}>
                <button className='tradebutton'>Trade</button>
              </Link>


        </div>

        <div className='similar'>
        <h2 className='similar'>Similar Products</h2>
        <Product/>
        </div>
        </>
    )
}







function SoloProductCard() {
  const { id } = useParams();
  console.log('product id from soloProductCard', id);
   const dispatch = useDispatch();
    
   const [isLoading, setIsLoading] = useState(true);
   
   const [product, setProduct] = useState({});
  //const productList = useSelector((state) => state.products);
  //const { loading, error, products } = productList;

  //useEffect(() => {
  //  dispatch(getProducts());
  //}, [dispatch]);

  // we want one product
  
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
              
                <button className='leftbutton'>Add to Cart</button>
                <button className='rightbutton'>Buy Now</button>
                
        
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


