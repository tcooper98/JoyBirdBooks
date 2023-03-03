import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Cart.css';


const CartOrderSummary = () => {
    const [buttonLoading, setButtonLoading] = useState(false);
    const standardShipping = Number(5.99).toFixed(2);
    const cartItems = useSelector((state) => state.cart.cart);
    const {subtotal} = cartItems
    const navigate = useNavigate();

    const checkoutHandler = () => {
        setButtonLoading(true)
        navigate('/checkout')
    }


    return (
        <div>
            {subtotal <= 50? (
                standardShipping
            ): (<p>Free shipping</p>)}

            {subtotal <= 50 ? Number(subtotal) + Number(standardShipping) : subtotal }
            
            <Link to='/checkout'>
            <Button isLoading={buttonLoading} onClick={() => checkoutHandler()}>Checkout</Button>
            </Link>
        </div>
    )
}

export default CartOrderSummary