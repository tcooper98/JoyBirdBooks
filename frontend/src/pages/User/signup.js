import React from "react";
import Inputfield from "../../components/input/Textfield";
import Passwordfield from "../../components/input/PasswordText";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link as ReactLink, useLocation } from "react-router-dom";
import { register } from "../../redux/actions/userActions";
import { Alert, AlertTitle, Card, CardActions, CardContent, FormControl, Grid, TextField } from "@mui/material";
import './login.css';



const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const {loading, error, userInfo} = user;
    const redirect = '/products';

    useEffect(() => {
       if(userInfo){
           navigate(redirect)
           alert("Account Created");
       }
    }, [userInfo, redirect, error, navigate])
    return (
           <div>
        <Formik
        initialValues={{ email: '', password: '', name: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('An name is required.'),
        email: Yup.string().email('Invalid email.').required('An email address is required.'),
        password: Yup.string()
          .min(1, 'Password is too short - must contain at least 1 character.')
          .required('Password is required.'),
        confirmPassword: Yup.string()
          .min(1, 'Password is too short - must contain at least 1 character.')
          .required('Password is required.')
          .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
      })}
        onSubmit={(values) => {
           dispatch(register(values.email, values.password, values.name));
        }}
        >
          {(formik) => (
            <div className="login">
            <Card variant="outlined" style={{maxWidth:450, margin:"0 auto",padding:"20px 5px"}}>
             <CardContent>
              <Grid>
                    <Grid item>
                        <h1 className="login-title">Sign Up</h1>
                        <p>Already have an account?</p>
                        <p>Click here to <ReactLink to="/login">Login</ReactLink></p>
                    </Grid>
                
                <Grid item as="form" onSubmit={formik.handleSubmit}> 
                    {error && (
                        <Alert severity="error">
                            <AlertTitle>Error {error}</AlertTitle>
                        </Alert>
                    )}
                
                
                    <FormControl>
                        <Grid item>
                         <Inputfield type='text' name='name' placeholder='Your name' label='Full name'/>
                        </Grid>
                        <Grid item>
                         <Inputfield type='text' name='email' placeholder='email@example.com' label='Email'/>
                        </Grid>
                        <Grid item>
                            <Passwordfield type='password' name='password' placeholder='password' label='Password'/>
                        </Grid>
                         <Grid item>
                            <Passwordfield type='password' name='confirmPassword' placeholder='Confirm password' label='Confirm Password'/>
                        </Grid>
                         <Grid item>
                            <CardActions>
                                <button type="submit" className="login-button" isLoading={loading}>Sign Up</button>
                            </CardActions>
                     </Grid>
                    </FormControl>
                
                </Grid>
                    
              </Grid>
             </CardContent>
           
            </Card>
             </div>
          )}

        </Formik>
       

        </div>
          )

}

export default SignUp;

