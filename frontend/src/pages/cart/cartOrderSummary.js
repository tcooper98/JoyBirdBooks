import { Button, Chip } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link as ReactLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Cart.css';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


const CartOrderSummary = () => {
  const [buttonLoading, setButtonLoading] = useState();
  const standardShipping = Number(4.99).toFixed(2);
  const cartItems = useSelector((state) => state.cart);
  const { subtotal } = cartItems;
  const navigate = useNavigate();


  console.log('subtotal', subtotal);

  const checkoutHandler = () => {
    setButtonLoading(true);
    navigate('/checkout');
  };


    return (
        <div>
            <div className="cartSummery">
            <p>Order Summery</p>
            </div>
            <div className="cartSubtotal">
            <h3>{subtotal}</h3> 
            </div>
            <div className="cartShipping">
            {subtotal <= 50 ? (
                standardShipping
            ): ( 
            <Chip icon={<AutoStoriesIcon/>}
             label="Free Shipping"/>
             )}
            </div>

            <div className="cartTotal">
           <p>{subtotal <= 50 ? (subtotal) + (standardShipping) : subtotal} </p>
            </div>
            
            <Button as={ReactLink} to='/checkout' 
            rightIcon={<ArrowCircleRightIcon/>}
            isLoading={buttonLoading} 
            onClick={() => checkoutHandler()}>Checkout</Button>
          
            

        </div>
    )
}

export default CartOrderSummary