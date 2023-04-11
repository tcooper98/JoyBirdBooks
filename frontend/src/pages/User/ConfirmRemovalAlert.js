import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';

const ConfirmRemovalAlert = ({ isOpen, onClose, cancelRef, itemToDelete, deleteAction }) => {
  const dispatch = useDispatch();
  const onDeleteItem = () => {
    dispatch(deleteAction(itemToDelete._id));
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} leastDestructiveRef={cancelRef}>
      <DialogTitle>Delete {itemToDelete.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Would you like to delete this user? This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button ref={cancelRef} onClick={onClose} style={{color: "black", background: '#d3d3d3'}}>Cancel</Button>
        <Button onClick={onDeleteItem} ml={3} variant="outlined" color="error">
          Delete {itemToDelete.name}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmRemovalAlert;

