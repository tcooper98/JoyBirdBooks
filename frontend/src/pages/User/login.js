
import React from "react";
import './login.css';
import {useState, useEffect} from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link as ReactLink, useLocation } from "react-router-dom";
import { Alert, AlertTitle, Card, CardActions, CardContent, FormControl, Grid, TextField } from "@mui/material";
import { login } from "../../redux/actions/userActions";
import Inputfield from "../../components/input/Textfield";
import Passwordfield from "../../components/input/PasswordText";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const redirect = '/products';

    const user = useSelector((state) => state.user);
    const { error, userInfo, loading } = user;

    useEffect(() => {
        if (userInfo) {
            if(location.state && location.state.from){
                navigate(location.state.from)
        } else {
            navigate(redirect)
        }
        alert("You are logged in");
    }
    }, [userInfo, redirect, error, navigate, location.state])
    return (
        <div>
        <Formik
        initialValues={{email : '', password : ''}}
         validationSchema={Yup.object({
            email: Yup.string()
            .email("Invalid email address")
            .required("An email is required"),
            password: Yup.string()
            .min(1, "Password needs at least one character")
            .required("A password is required")})}
        onSubmit={(values) => {
           dispatch(login(values.email, values.password));
        }}>
          {(formik) => (
            <div className="login">
            <Card variant="outlined" style={{maxWidth:450, margin:"0 auto",padding:"20px 5px"}}>
             <CardContent>
              <Grid>
                    <Grid item>
                        <h1 className="login-title">Login</h1>
                        <p>Please Sign in to continue.</p>
                        <p>Don't have an account? <ReactLink to="/signup">Sign Up</ReactLink></p>
                    </Grid>
                
                <Grid item as="form" onSubmit={formik.handleSubmit}> 
                    {error && (
                        <Alert severity="error">
                            <AlertTitle>Error {error}</AlertTitle>
                        </Alert>
                    )}
                
                
                    <FormControl>
                        <Grid item>
                         <Inputfield type='text' name='email' placeholder='email@example.com' label='Email'/>
                        </Grid>
                        <Grid item>
                            <Passwordfield type='password' name='password' placeholder='password' label='Password'/>
                        </Grid>
                         <Grid item>
                            <CardActions>
                                <button type="submit" className="login-button" isLoading={loading}>Login</button>
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
    );
}

export default Login;

