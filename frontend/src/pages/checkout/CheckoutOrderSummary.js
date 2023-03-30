import React from 'react'
import { useEffect, useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createOrder, resetOrder } from "../../redux/actions/orderActions"
import { resetCart } from "../../redux/actions/cartActions"
import { useDispatch, useSelector } from 'react-redux'
import { Chip, Divider, Grid } from '@mui/material'
import CheckoutItem from './CheckoutItem'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './checkout.css';
import PayPalButton from '../../components/paypal/PayPalButton';
import PaymentSuccessModal from './PaymentSuccessModal';
import PaymentErrorModal from './PaymentErrorModal';



const CheckoutOrderSummary = () => {
    const cartItems = useSelector((state) => state.cart);
    const { cart, subtotal, expressShipping } = cartItems;

    const user = useSelector((state) => state.user);
    const { userInfo } = user;

    const shippingInfo = useSelector((state) => state.order);
    const { error, shippingAddress } = shippingInfo;


    const [buttonDisabled, setButtonDisabled] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();

 const shipping = useCallback(
  () => (cartItems.expressShipping ? 14.99 : subtotal <= 50 ? 5.99 : 0),
  [cartItems.expressShipping, subtotal]
);

   const total = useCallback(() => {
  const shippingCost = shipping();
  const totalWithoutShipping = Number(subtotal);
  const totalWithShipping = Number(totalWithoutShipping + shippingCost);

  return totalWithShipping.toFixed(2);
}, [shipping, subtotal]);

  useEffect(() => {
    if (!error) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [error, shippingAddress, total, expressShipping, shipping, dispatch]);

   const onPaymentSuccess = async (data) => {
    dispatch(createOrder({
      orderItems: cart,
      shippingAddress,
      paymentMethod: data.PaymentSource,
      paymentDetails: data,
      shippingPrice: shipping(),
      totalPrice: total(),
      userInfo,
    })
    );
    dispatch(resetOrder());
    dispatch(resetCart());
    navigate('/paymentsuccess');
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