import './solo.css'
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../redux/actions/cartActions';
import React from 'react';
import { Button, CircularProgress, FormControl, Grid, Skeleton, TextField, Tooltip, Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { getProduct } from '../../redux/actions/productActions';
import { createProductReview, resetProductError } from '../../redux/actions/productActions';
import { userLogin } from '../../redux/slices/user';



const SoloProductCard = () => {
   const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);
  const [title, setTitle] = useState('');
  const [reviewBoxOpen, setReviewBoxOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  let { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { loading, error, product, reviewSend } = products;
  const cartContent = useSelector((state) => state.cart);
  const { cart } = cartContent;
  const user = useSelector((state) => state.user);
  const { userInfo } = user;


  
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

  
   
 useEffect(() => {
    dispatch(getProduct(id));

    if (reviewSend) {
      alert('Review sent');
      dispatch(resetProductError());
      
    }
  }, [dispatch, id, cart, reviewSend]);


  const hasUserReviewed = () => product.reviews.some((item) => item.user === userInfo._id);

  const onSubmit = () => {
    dispatch(createProductReview(product._id, userInfo._id, comment, rating, title));
  };
    //formatting how products are displayed 
    return (
      <div>
        {loading ? (
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Grid>
      ) : error ? (
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='h5'>{error}</Typography>
        </Grid>
      ): (
        product && (
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
             
              <p>This product is rated {product.rating}/5 stars. If you would like to share your thoughts <Link to={'/login'}>sign in</Link> to write a review</p>
        

              <Divider variant="middle" />
              {userInfo && (
                <>
              <h2>Review this item</h2>
                <p>Share your thoughts with the community</p>
                <Tooltip label={hasUserReviewed() ? 'You already have  a review for this product' : ''}>
                <Button className='product-review' disabled={hasUserReviewed()} onClick={() => setReviewBoxOpen(!reviewBoxOpen)}>Write a product review</Button>
                </Tooltip>
                {reviewBoxOpen && (
                 <FormControl>
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
                       <Button type="submit" onClick={() => onSubmit()}>Submit</Button>
                       <Button type="button" onClick={() => setReviewBoxOpen(false)}>Cancel</Button>
                       </Grid>
                       </div>
                     </FormControl>
                          )}
                          </>
                          )}
             </div>
             <div className="review-info">
            {product.reviews.length ===0 ? (
              <div className='noReviews'>
              <p className='reviewResult'>There Are No Reviews</p>
              <Box sx={{ width: 500 }}>
              <Skeleton/>
              <Skeleton sx={{ height: 200 }}/>
              </Box>
            
              </div>
            ):
            (product.reviews.map((review) => (
             <div key={review._id}>
              <div className='review-content'>
               <h2>{review.title}</h2>
                 <Rating name="size-small" defaultValue={review.rating} size="small" readOnly/> 
               <p>{review.comment}</p>

               <p className='review-date'>Reviewed By: {review.name}</p>
                
              </div>
               <Divider/>
              </div>
               ))
              )}</div>

        </div>
                
               

      </div>
        )
      )}
      </div>
  
    ) 
  }

  export default SoloProductCard;