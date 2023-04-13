import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeReview } from '../../redux/actions/adminActions';
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

const ReviewsTab = () => {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const { error, loading } = admin;
  const productInfo = useSelector((state) => state.products);
    const { products, reviewRemoval } = productInfo;
  const toast = useToast();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(resetProductError());
    if (reviewRemoval) {
      toast({ description: 'Review has been removed.', status: 'success', isClosable: true });
    }
    
  }, [dispatch, toast, reviewRemoval, loading]);
const onRemoveReview = (productId, reviewId) => {
    dispatch(removeReview(productId, reviewId));
}

  
  return (<div>
    {error && (
      <Alert severity="error">{error}</Alert>
      
    )}
    {loading ? (
     <CircularProgress/>
    ): (<Box>
         {products.length > 0 && products.map((product) => (
             <Box key={product._id}>
                <Accordion>
                    <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                     >
                     <h2>{product.name} Reviews</h2>
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
            Username
            </TableCell>
                  

                  <TableCell
                 style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
                  Rating
                  </TableCell>

                  <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Title
            </TableCell>

                  <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Comment
            </TableCell>
    
            <TableCell
                  style={{
                  color: "black",
                  fontSize: '20px',
                  fontWeight: 'bold',
           }}>
            Delete
            </TableCell>
            
            
            
                </TableRow>
              </TableHead>
              <TableBody>
                {product.reviews.map((review) => (
                    <>
                    <TableRow key={review._id}>
                      <TableCell>
                        <p>{review.name}</p>
                      </TableCell>

                      <TableCell>
                        <p>{review.rating}</p>
                      </TableCell>

                      <TableCell>
                        <p>{review.title}</p>
                      </TableCell>

                      <TableCell>
                        <p>{review.comment}</p>
                      </TableCell>

                      <TableCell>
                        <Button color="error" onClick={() => onRemoveReview(product._id, review._id)}>
                        <DeleteIcon/>
                        Delete Review
                         </Button>
                      </TableCell>

                     

                      
                    </TableRow>
                    
                    </>
                ))}
                
              </TableBody>
                </Table>
            </TableContainer>
                </AccordionDetails>
                </Accordion>

             </Box>
         ))}
    </Box>
    )}

    </div>
  )
}

export default ReviewsTab