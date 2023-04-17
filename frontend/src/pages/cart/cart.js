import React from 'react';
import { Link, Link as ReactLink } from 'react-router-dom';
import { Button, Snackbar, Alert, Paper, Box } from '@mui/material';
import { Rating } from '@mui/lab';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import CartOrderSummary from './cartOrderSummary';
import './Cart.css';



const Cart = () => {
 const cartInfo = useSelector((state) => state.cart)
 const { loading, error, cart } = cartInfo;



const getHeadingContent = () => (cart.length === 1 ? '(1 Item)' : `(${cart.length} Items)`);
 
    return( 
         <div className='productCartcontainer'>
        {loading ? 
        (<p>loading</p>) 
        : error ? 
        (<p>error {error} </p>) 
        : cart.length <= 0 ? 
        (
        <>
        <Box className='cartEmpty'>
         <Paper elevation={3}  style={{maxWidth:'1000px', alignContent:'center', justifyContent: "center", alignItems: "center",textAlign: "center", verticalAlign: "middle"}}>
          <Box>
            <img src="images/empty.png"></img>
         
         <Box>
          <h1>Your Cart is Empty!</h1>
          <h2>It looks like you have not added anything to your cart yet.</h2>
          <Link to='/products'>
          <Button variant="outlined" style={{margin:"20px", color:"#489FB5", width:"500px"}}>Go Shopping</Button>
          </Link>
          </Box>
           </Box>
          </Paper>
          </Box>
         
          </>
          ) 
        : (
             <div className='cartContainer'>
              <div className='cartContent'>
             <div>{getHeadingContent()}
             <h1 className='carttitle'>My Cart</h1>
              </div>
             
             {cart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem}/>
              
             ))}
             <div className='cartReceipt'> 
              <CartOrderSummary className='cartReceipt'></CartOrderSummary>
             </div>

             </div>
             </div>
            
             )
       
        
        }

       
          

      </div>
     

      
    )
}

export default Cart