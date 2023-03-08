import React from 'react'
import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { createOrder } from "../../redux/actions/orderActions"
import { useDispatch, useSelector } from 'react-redux'
import { Chip, Divider, Grid } from '@mui/material'
import CheckoutItem from './CheckoutItem'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './checkout.css';
import PayPalButton from '../../components/paypal/PayPalButton';


const CheckoutOrderSummary = () => {
    const cartItems = useSelector((state) => state.cart);
    const { cart, subtotal, expressShipping } = cartItems;

    const user = useSelector((state) => state.user);
    const { userInfo } = user;

    const shippingInfo = useSelector((state) => state.order);
    const { error, shippingAddress } = cartItems;

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const dispatch = useDispatch();

    const shipping = useCallback(
        () => (expressShipping === 'true' ? 14.99 : subtotal <= 50 ? 4.99: 0)
        ,[expressShipping,subtotal]
    );

    const total = useCallback(
    () => Number(shipping() === 0 ? Number(subtotal) : Number(subtotal) + shipping()).toFixed(2),
    [shipping, subtotal]
  );

  useEffect(() => {
    if (!error) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [error, shippingAddress, total, expressShipping, shipping, dispatch]);

   const onPaymentSuccess = async () => {
    alert("Payment Successful");
   }

   const onPaymentError = () => {
    alert("Payment Failed");
   }


  return (
    <div className='checkoutSummary'>
        <Grid>
            <Grid item>
                <h1 className="summary-title">Order Summary</h1>
            </Grid>
            
            <Grid item>
                <Divider/>
                {cart.map((item) => (
                  <CheckoutItem key={item.id} cartItem={item}/>
                ))}
                <Divider/>
            </Grid>
            <div className='totalWrap'>
            <Grid item>
               <h2>Subtotal: ${subtotal}</h2>
            </Grid>
            <Grid item>
               <h2>Shipping: {shipping() === 0 ?(
                <Chip icon={<AutoStoriesIcon/>}
                label="Free Shipping"/>
               ) :(`$${shipping()}`)}</h2>
            </Grid>
            <Divider/>
            <Grid item>
               <h1>Total: ${Number(total())}</h1>
            </Grid>
            <Grid item>
               <PayPalButton total={total} onPaymentSuccess={onPaymentSuccess} onPaymentError={onPaymentError} disabled={buttonDisabled}/>
            </Grid>
            </div>
        </Grid>
    </div>
  )
}

export default CheckoutOrderSummary