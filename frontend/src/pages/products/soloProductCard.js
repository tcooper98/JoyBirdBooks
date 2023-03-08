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
import { CircularProgress, FormControl, Grid, Skeleton, TextField } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



const SoloProductCard = () => {
  // allow users to add reviews
const [comment, setComment] = useState('');
const [rating, setRating] = useState(1);
const [title, setTitle] = useState('');
const [reviewBoxOpen, setReviewBoxOpen] = useState(false);

const submitReview = (e) => {
  e.preventDefault();
  const review = { comment, rating, title };
  fetch(`/api/products/${id}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  })
    .then((response) => {
      if (response.ok) {
        // handle successful review submission, e.g. show a success message to the user
        console.log('Review submitted successfully!');
      } else {
        // handle error response from server
        console.error('Failed to submit review:', response.statusText);
      }
    })
    .catch((error) => {
      // handle network error
      console.error('Failed to submit review:', error);
    })
    .finally(() => {
      // reset the form fields and close the review form
      setComment('');
      setRating(1);
      setTitle('');
      setReviewBoxOpen(false);
    });
};

//  see if user is logged in
const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.cart);
  const { cart } = cartInfo;


  
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
  
  
 
  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/products/${id}`, {
      method: 'GET',
    })
      .then((response) => {
        response.json().then((data) => {
          setIsLoading(false);
          setProduct(data);
        });
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <CircularProgress/>
  }

    
    //formatting how products are displayed 
    return (
      
      <div className='soloproduct'>
      <Link to={`/products`} style={{ textDecoration: 'none', color: 'inherit'}}> 
      <KeyboardArrowLeftIcon fontSize="large"/>
      </Link>
          
        
          <div key={product._id} className="product-details">
          <img src={product.image} alt={product.name}/>
          <div className="product-info">
          <h1>{product.name}</h1>
          <h3 >By {product.author}</h3>
          <Rating name="size-small" value={product.rating} size="small" readOnly/>
           <h2>${product.price}</h2>
         <p className="product-details">{product.description}</p>
        
          {/* <input className="ship" type="radio" value=""></input>
                        <label for="ship">Ship This Item - Qualifies for Free Shipping</label> <br/> <br/>
                        <input className="buy" type="radio" value=""></input>   
                        <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label><br/> */}
              
                <button className='leftbutton' isDisabled={product.stock <= 0} onClick={()=>addItem(product._id)}>Add to Cart</button>
                 <Link to={`/cart`} style={{ textDecoration: 'none', color: 'inherit'}}> 
                <button className='rightbutton'isDisabled={product.stock <= 0} onClick={()=>addBuyNow(product._id)}
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
                <button className='product-review' onClick={() => setReviewBoxOpen(true)}>Write a product review</button>
                {reviewBoxOpen && (
                 <FormControl onSubmit={submitReview}>
                  <div className='ReviewWrap'>
                  <Grid>
                  <Grid item>
                  <label>
                    Title
                    </label>
                    <br/>
                    <TextField type="text" value={title} onChange={(e) => setTitle(e.target.value)} required fullWidth size='small'/>
                  </Grid>
                  <Grid item>
                  <label>
                     Rating
                    </label>
                    <br/>
                     <Rating name="size-small" value={rating} size="medium" onChange={(e, value) => setRating(value)} required />
                   
                   </Grid>
                    <Grid item>
                   <label>
                      Comment
                    </label>
                    <br/>
                    <TextField  value={comment} onChange={(e) => setComment(e.target.value)} required fullWidth size='small'/>
                    
                    </Grid>
                       <button type="submit">Submit</button>
                       <button type="button" onClick={() => setReviewBoxOpen(false)}>Cancel</button>
                       </Grid>
                       </div>
                     </FormControl>
                          )}
             </div>
            {product.reviews.length ===0 ? (
              <div className='noReviews'>
              <p className='reviewResult'>There Are No Reviews</p>
              <Box sx={{ width: 500 }}>
              <Skeleton/>
              <Skeleton sx={{ height: 200 }}/>
              </Box>
            
              </div>
            ):(product.reviews.map((review) => (
             <div className="review-info">
                  {/* <select name="rating" id="rating" className='ratingdropdown' >
                  <option value="high">Sort by Highest Rating</option>
                  <option value="low">Sort by Lowest Rating</option>
                 </select> */}
                 <p className='reviewResult'>Showing All Reviews</p>
              
              <div className='review-content'>
               <h2>{review.title}</h2>
                 <Rating name="size-small" defaultValue={review.rating} size="small" readOnly/> 
               <p>{review.comment}</p>

               <p className='review-date'>{review.createdAt}</p>
                
              </div>
              </div>
               ))
              )}

        </div>
                
               

      </div>

      
  
     
    )
  
  
  }

  export default SoloProductCard;