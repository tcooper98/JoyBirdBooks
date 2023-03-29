import React from 'react'
import { useSelector } from 'react-redux'
import {Link, Navigate, useLocation} from 'react-router-dom'
import { Alert, AlertTitle, Card, CardActions, CardContent, FormControl, Grid, TextField } from "@mui/material";
import CheckoutOrderSummary from './CheckoutOrderSummary';
import './checkout.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Shippinginformation from './Shippinginformation';


export const Checkout = () => {
    const user = useSelector((state) => state.user);
  const { userInfo } = user;
  const location = useLocation();


   return userInfo ? (
    <div className='checkout'>
      <div>
    <Link to={`/cart`} style={{ textDecoration: 'none', color: 'inherit'}}> 
      <KeyboardArrowLeftIcon fontSize="large"/>
      </Link>
      </div>
    <div className='check'>
        
    <div className='shippingInfo'>
        
            
            <Grid>
            <Grid item>
                <h1 className="shipping-title">Shipping Info</h1>
            </Grid>
            <Grid item>
                <Shippinginformation/>
            </Grid>
            </Grid>
            
    </div>
    <div className='checkOutInfo'>
            
           <Card variant="outlined" style={{maxWidth:600}}>
             <CardContent>
              <Grid>
                     <Grid item>
                        <CheckoutOrderSummary/>
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
                
    </div>
    </div>
    </div>
  ) : (
    <Navigate to='/login' replace={true} state={{from: location}} />
  )
}

export default Checkout
