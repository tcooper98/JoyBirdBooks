import React from 'react'
import Button from '@mui/material/Button';

export default function Connected() {
     return (
        <>
        <Button 
        variant="outlined" 
         style={{
         width: "500px",
        backgroundColor: "#16697a",
        padding: "18px 36px",
        fontSize: "18px",
        color: "#ffffff"
    }}
        href="/contact">Contact US!</Button><br/>

           <Button 
        variant="outlined" 
         style={{
         width: "500px",
        backgroundColor: "#16697a",
        padding: "18px 36px",
        fontSize: "18px",
        color: "#ffffff"
    }}
        href="/about">About Us</Button><br/>

          <Button 
        variant="outlined" 
         style={{
        width: "500px",
        backgroundColor: "#16697a",
        padding: "18px 36px",
        fontSize: "18px",
        color: "#ffffff"
    }}
        href="/partner">Partner With Us</Button><br/>


        </>
    )
}