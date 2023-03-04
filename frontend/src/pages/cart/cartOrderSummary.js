import { Button, Chip } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link as ReactLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


const CartOrderSummary = () => {
  const [buttonLoading, setButtonLoading] = useState();
  const standardShipping = Number(5.99).toFixed(2);
  const cartItems = useSelector((state) => state.cart);
  const { subtotal } = cartItems;
  const navigate = useNavigate();


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
            <p>subtotal: ${subtotal}</p> 
            </div>
            <div className="cartShipping">
            <p>shipping</p>
            {subtotal <= 50 ? (
                standardShipping
            ): ( 
            <Chip icon={<AutoStoriesIcon/>}
             label="Free Shipping"/>
             )}
            </div>

            <div className="cartTotal">
            
           <h3>total: ${subtotal <= 50 ? Number(subtotal) + Number(standardShipping) :Number(subtotal)} </h3>
            </div>
            
            <Button as={ReactLink} to='/checkout' 
            righticon={<ArrowCircleRightIcon/>}
            isloading={buttonLoading} 
            onClick={() => checkoutHandler()}>Checkout</Button>
          
            

        </div>
    )
}

export default CartOrderSummary