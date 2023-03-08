import React from 'react';
import { logout } from "../../redux/actions/userActions";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import {Link as ReactLink} from 'react-router-dom';

const PaymentErrorModal = ({isOpen, onClose}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
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
            Payment Failed please try again
          </Typography>
        </Box>
      </Modal>
   </>
  )
}

export default PaymentErrorModal