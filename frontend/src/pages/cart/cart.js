import React from 'react';
import { Link, Link as ReactLink } from 'react-router-dom';
import { Button, Snackbar, Alert } from '@mui/material';
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
         <div className='productcontainer'>
        {loading ? 
        (<p>loading</p>) 
        : error ? 
        (<p>error {error} </p>) 
        : cart.length <= 0 ? 
        (<Link to='/products'>
          <Button>Your Cart is Empty. Check out our Book Selection</Button>
          </Link>) 
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
              <CartOrderSummary/>
             </div>

             </div>
             </div>
            
             )
       
        
        }

       
          

      </div>
     

      
    )
}

export default Cart