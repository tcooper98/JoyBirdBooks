import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, deleteOrder, setDelivered, resetErrorAndRemoval } from '../../redux/actions/adminActions';
import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmRemovalAlert from './ConfirmRemovalAlert';
import { useDisclosure, useToast } from '@chakra-ui/react';
import "./admin.css";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PendingIcon from '@mui/icons-material/Pending';
import { getProducts, resetProductError } from '../../redux/actions/productActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { deleteProduct } from '../../redux/actions/adminActions';
import AddNewProduct from './AddNewProduct';

const ProductsTab = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const { error, loading } = admin;
  const productInfo = useSelector((state) => state.products);
  const { products, productUpdate} = productInfo;
  const toast = useToast();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(resetProductError());
    if (productUpdate) {
      toast({ description: 'Product has been updated', status: 'success', isClosable: true });
    }
  }, [dispatch, toast, productUpdate]);

   const openDeleteConfirmBox = () => {
    onOpen();
  };
  return (<div>
    {error && (
      <Alert severity="error">{error}</Alert>
      
    )}
    {loading ? (
     <CircularProgress/>
    ): (<Box>
         <Accordion> 
            <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>Add New Product</h2>
        </AccordionSummary>
        <AccordionDetails>
         <AddNewProduct/>
        </AccordionDetails>
         </Accordion>

         <Accordion> 
            <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2>Delete Products</h2>
        </AccordionSummary>
        <AccordionDetails>
            <TableContainer>
                     <Table>
              <TableHead style={{
              padding: "18px 36px",
              backgroundColor: "#489fb5",
           }}>
                <TableRow>
              <TableCell 
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Image
            </TableCell>
                  

                  <TableCell
                 style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
                  Name & Author
                  </TableCell>

                  <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Age Range & Genre
            </TableCell>

                  <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Category & Conditon
            </TableCell>
    
            <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Description
            </TableCell>
            
            <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Price & Stock
            </TableCell>
        
            <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Status & Delete
            </TableCell>
            
            
                </TableRow>
              </TableHead>
              <TableBody>
                {products.length > 0 && products.map((product) => (
                    <>
                    <TableRow key={product._id}>
                      <TableCell>
                        <img src={product.image} alt={product.name} style={{width: '80px', height: '80px', objectFit: 'cover'}}/>
                      </TableCell>

                      <TableCell>
                        <h3>{product.name}</h3>
                        <p>{product.author}</p>
                      </TableCell>

                      <TableCell>
                        <p>{product.age}</p>
                        <p>{product.genre}</p>
                      </TableCell>

                      <TableCell>
                        <p>{product.category}</p>
                        <p>{product.condition}</p>
                      </TableCell>

                      <TableCell>
                        <p style={{maxWidth:200,}}>{product.description}</p>
                      </TableCell>

                      <TableCell>
                        <p>${product.price}</p>
                        <p>#{product.stock}</p>
                      </TableCell>

                      <TableCell>
                        <p>{product.status}</p>
                        <Button color="error" onClick={openDeleteConfirmBox}>
                         <DeleteIcon mr='5px' />
                         Remove Product
                       </Button>
                      </TableCell>
                    </TableRow>
                     <ConfirmRemovalAlert
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                   cancelRef={cancelRef}
                    itemToDelete={product}
                   deleteAction={deleteProduct}
                   />
                    </>
                ))}
                
              </TableBody>
                </Table>
            </TableContainer>
        </AccordionDetails>
         </Accordion>
        
    </Box>)}

    </div>
  )
}

export default ProductsTab