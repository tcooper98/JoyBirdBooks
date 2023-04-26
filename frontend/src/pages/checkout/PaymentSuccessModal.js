import React from 'react';
import { logout } from "../../redux/actions/userActions";
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import './Success.css';

const PaymentSuccessModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 

  const handleLogout = () => {
    dispatch(logout());
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
          <div className='suc'>
            <Button style={{
              width: "400px",
               color: "#489fb5",
              padding: "18px 36px",
              fontSize: "18px",
              minWidth: "10px"
           }} variant='outlined' component={RouterLink} to='/your-orders'>
              Your Orders
            </Button>
            <Box ml={2}>
              <Button style={{
                width: "400px",
               color: "#489fb5",
              padding: "18px 36px",
              fontSize: "18px"
           }} variant='outlined' component={RouterLink} to='/products'>
                Products
              </Button>
            </Box>
            <Box ml={2}>
              <Button style={{
                width: "400px",
               color: "#489fb5",
              padding: "18px 36px",
              fontSize: "18px"
           }} variant='outlined' onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </div>
    
    </Box>
    </div>
  );
};

export default PaymentSuccessModal;