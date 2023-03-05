import { Button, Chip, Divider } from "@mui/material";
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
        <div className="total">
           <p className="totaltitle">ORDER SUMMARY</p>
            <div className="cartSummery">
           
            <div className="cartSubtotal">
            <Divider/>
            <p className="cartBefore">Cart total ${subtotal}</p> 
            <Divider />
            </div>
            <div className="cartShipping">
            <p>Shipping&nbsp; $</p>
            {subtotal <= 50 ? (
                standardShipping
            ): ( 
            <Chip icon={<AutoStoriesIcon/>}
             label="Free Shipping"/>
             )}
            </div>

            <div className="cartTotal">
            
           <h3>Total: ${(subtotal <= 50 ? Number(subtotal) + Number(standardShipping) :Number(subtotal) + Number(0)).toFixed(2)}</h3>

            </div>
            
            <button as={ReactLink} to='/checkout' 
            righticon={<ArrowCircleRightIcon/>}
            isloading={buttonLoading} 
            onClick={() => checkoutHandler()} className="SummaryButton" >Checkout</button>
          
            
         </div>
        </div>
    )
}

export default CartOrderSummary