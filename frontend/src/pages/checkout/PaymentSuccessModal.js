import React from 'react';
import { logout } from "../../redux/actions/userActions";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {Link as ReactLink} from 'react-router-dom';

const PaymentSuccessModal = ({isOpen, onClose}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
        alert('You have been logged out');
        navigate('/products');
    }

  return (
   <>
     <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Payment Successful
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            From here you can either continue<ReactLink to="/products">shopping</ReactLink>
          </Typography>
          <Button onClick={logoutHandler}>Logout</Button>
        </Box>
      </Modal>
   </>
  )
}

export default PaymentSuccessModal