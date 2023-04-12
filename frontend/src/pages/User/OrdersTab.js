import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, deleteOrder, setDelivered, resetErrorAndRemoval } from '../../redux/actions/adminActions';
import { Alert, Box, Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmRemovalAlert from './ConfirmRemovalAlert';
import { useDisclosure, useToast } from '@chakra-ui/react';
import "./admin.css";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PendingIcon from '@mui/icons-material/Pending';




const OrdersTab = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [orderToDelete, setOrderToDelete] = useState('');
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const { error, loading, orders, deliveredFlag, orderRemoval } = admin;
  const toast = useToast();

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(resetErrorAndRemoval());
    if (orderRemoval) {
      toast({ description: 'Order has been removed.', status: 'success', isClosable: true });
    }
    if (deliveredFlag) {
      toast({ description: 'Order has been set to delivered.', status: 'success', isClosable: true });
    }
  }, [orderRemoval, dispatch, toast, deliveredFlag]);

  const openDeleteConfirmBox = (order) => {
    setOrderToDelete(order);
    onOpen();
  };

  const onSetToDelivered = (order) => {
    dispatch(resetErrorAndRemoval());
    dispatch(setDelivered(order._id));
  };
  
  return (<div>
    {error && (
      <Alert severity="error">{error}</Alert>
      
    )}
    {loading ? (
     <CircularProgress/>
    ): (<Box>
      <TableContainer>
            <Table>
              <TableHead style={{
              padding: "18px 36px",
              backgroundColor: "#16697a",
           }}>
                <TableRow>
              <TableCell 
                  style={{
                  color: "white",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Date
            </TableCell>
                  

                  <TableCell
                 style={{
                  color: "white",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
                  Email
                  </TableCell>

                  <TableCell
                  style={{
                  color: "white",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Shipping Address
            </TableCell>

                  <TableCell
                  style={{
                  color: "white",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Order Items
            </TableCell>
             <TableCell
                  style={{
                  color: "white",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Shipping Price
            </TableCell>
            <TableCell
                  style={{
                  color: "white",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Total
            </TableCell>
            <TableCell
                  style={{
                  color: "white",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Delivery Status
            </TableCell>
            <TableCell
                  style={{
                  color: "white",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Delete Order
            </TableCell>
            
            
                </TableRow>
              </TableHead>
              <TableBody>
                {orders && orders.map((order) => (
                
                  <TableRow key={order._id}>
                    <TableCell>{new Date(order.createdAt).toDateString()} </TableCell>
                    <TableCell>
                     {order.email}
                    </TableCell>
                    <TableCell>
                      <p>Address:{order.shippingAddress.address}</p> <br/>
                      <p>City:{order.shippingAddress.city}</p> <br/>
                      <p>Postal Code:{order.shippingAddress.postalCode}</p> <br/>
                      <p>Country:{order.shippingAddress.country}</p> <br/>
                    </TableCell>
                    <TableCell>
                     {order.orderItems.map((item) => (
                        <div key={item._id}>
                        <p>{item.qty} x {item.name}</p> <br/>
                        </div>
                     ))}
                    </TableCell>
                    <TableCell>
                    <div className='Ordersprice'>
                     <p>${order.shippingPrice}</p>
                     </div>
                    </TableCell>
                    <TableCell>
                    <div className='Ordersprice'>
                     <p>${order.totalPrice}</p>
                     </div>
                    </TableCell>
                    <TableCell>
                    {order.isDelivered ?
                     
                     <div style={{
                     display: 'flex',
                     alignItems: 'center',
                     flexWrap: 'wrap',
                     }}>
                     <CheckCircleIcon style={{color: 'green'}}/>  
                     <span>Delivered</span>
                     </div>:
                     <div style={{
                     display: 'flex',
                     alignItems: 'center',
                     flexWrap: 'wrap',
                     }}>
                        <PendingIcon style={{color: 'orange'}}/>
                        <span>Pending</span>
                      </div>
                      }
                    </TableCell>
                    <TableCell>
                     <Button color="error" onClick={() => openDeleteConfirmBox(order)}>
                        <DeleteIcon/>
                        Delete Order
                     </Button>
                     {!order.isDelivered && (
                        <Button color="success" onClick={() => onSetToDelivered(order)}>
                        <LocalShippingIcon/> Set Delivered
                        </Button>
                     )}
                    </TableCell>
                  </TableRow>
                 
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        <ConfirmRemovalAlert isOpen={isOpen} onOpen={onOpen} onClose={onClose} cancelRef={cancelRef} itemToDelete={orderToDelete} deleteAction={deleteOrder}/>
    </Box>)}

    </div>
  )
}

export default OrdersTab