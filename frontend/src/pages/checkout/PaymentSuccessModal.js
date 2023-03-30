import React from 'react';
import { logout } from "../../redux/actions/userActions";
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Alert, Button, Snackbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import './Success.css';

const PaymentSuccessModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

 

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
    navigate('/products');
  };

  return (
    <div className='success'>
    <Box  justifyContent='center' alignItems='center' minHeight='100vh'>
           <div className='JoyLogo'>
           <img  src='./joybirdlogo.png' alt='joybird logo'/>
           </div>
          <Box display='flex' alignItems='center' justifyContent='center'>
            
              <h1>Payment Successful!</h1>
            
          </Box>
          <Box mt={4} display='flex' justifyContent='center' alignItems='center'>
            <Button style={{
               color: "#489fb5",
              padding: "18px 36px",
              fontSize: "18px"
           }} variant='outlined' component={RouterLink} to='/your-orders'>
              Your Order
            </Button>
            <Box ml={2}>
              <Button style={{
               color: "#489fb5",
              padding: "18px 36px",
              fontSize: "18px"
           }} variant='outlined' component={RouterLink} to='/products'>
                Products
              </Button>
            </Box>
            <Box ml={2}>
              <Button style={{
               color: "#489fb5",
              padding: "18px 36px",
              fontSize: "18px"
           }} variant='outlined' onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </Box>
    
    </Box>
    </div>
  );
};

export default PaymentSuccessModal;