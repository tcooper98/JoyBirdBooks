import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Inputfield from '../../components/input/Textfield'
import { useDispatch } from 'react-redux'
import { setExpress } from "../../redux/actions/cartActions"
import { useState } from 'react'
import { setShippingAddress, setShippingAddressError } from '../../redux/actions/orderActions'
import { Alert, AlertTitle, Card, CardActions, CardContent, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import { ErrorMessage } from 'formik';




const Shippinginformation = () => {
    const dispatch = useDispatch();
    const [formStateChanged, setFormStateChanged] = useState(false);

    const setErrorState = (input, data) => {
    if (!input) {
      dispatch(setShippingAddress(data));
    }
    if ((!formStateChanged && !input) || (formStateChanged && input)) {
      return;
    } else {
      setFormStateChanged(input);
      dispatch(setShippingAddressError(input));
    }
  };
  return(<Formik
      initialValues={{ address: '', postalCode: '', city: '', country: '' }}
      validationSchema={Yup.object({
        address: Yup.string().required('This field is required.').min(2, 'This address is too short.'),
        postalCode: Yup.string().required('This field is required.').min(2, 'This postal code is too short.'),
        city: Yup.string().required('This field is required.').min(2, 'This city is too short.'),
        country: Yup.string().required('This field is required.').min(2, 'This country is too short.'),
      })}>
        {(formik) => (<Grid as='form'>
            <FormControl onChange={
                Object.keys(formik.errors).length === 0 && Object.keys(formik.touched).length >= 2
                ? setErrorState(false, formik.values)
                : setErrorState(true)
            }>
               <TextField name='address' placeholder='Address' label='Street Address' margin="normal"/>
               <ErrorMessage name='address' component='div' className='error'>
                { (msg) => <div className='error'>{msg}</div> } 
                </ErrorMessage>
                
               <Grid item>
                <TextField name='postalCode' placeholder='Postal Code' label='Postal Code' type="number" margin="normal"/>
                <TextField name='city' placeholder='City' label='City' margin="normal"/>
               </Grid>
                <Grid item>
                <TextField name='country' placeholder='Country' label='Country' fullWidth margin="normal" />
                </Grid>
            </FormControl>
                <Grid item>
                  <RadioGroup
                  defaultValue="false"
                  onChange={(e) => {
                    dispatch(setExpress(e));
                  }}>
                    {/* <FormControlLabel value="true" control={<Radio />} label="Express $14.99 (Shipped in 24 hours)" /> */}
                    <FormControlLabel value="false" control={<Radio />} label="Standard Shipping (Shipped within 7 days)" />

                  </RadioGroup>
                </Grid>
            </Grid>)}
        </Formik>
        )
        }

      
    
  

export default Shippinginformation