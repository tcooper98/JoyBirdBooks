import React from 'react';
import { logout } from "../../redux/actions/userActions";
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Alert, Button, Snackbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const PaymentSuccessModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    navigate('/products');
  };

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
    navigate('/products');
  };

  return (
    <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert severity='success' variant='outlined' elevation={6} onClose={handleClose}>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <Typography variant='h5' align='center'>
              Payment Successful!
            </Typography>
          </Box>
          <Box mt={4} display='flex' justifyContent='center' alignItems='center'>
            <Button color='primary' variant='outlined' component={RouterLink} to='/your-orders'>
              Your Order
            </Button>
            <Box ml={2}>
              <Button color='primary' variant='outlined' component={RouterLink} to='/products'>
                Products
              </Button>
            </Box>
            <Box ml={2}>
              <Button color='primary' variant='outlined' onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </Box>
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PaymentSuccessModal;