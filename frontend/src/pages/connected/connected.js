import React from 'react'
import Button from '@mui/material/Button';
import './connected.css'

export default function Connected() {
     return (
         <div className='communityCon'>
        <Button 
        variant="outlined" 
         style={{
         width: "300px",
        backgroundColor: "#489FB5",
        padding: "18px 36px",
        fontSize: "18px",
        color: "#ffffff",
        margin: "10px",
    }}
        href="/contact">Contact US!</Button><br/>

           <Button 
        variant="outlined" 
         style={{
         width: "300px",
        backgroundColor: "#F2C202",
        padding: "18px 36px",
        fontSize: "18px",
        color: "#ffffff",
        margin: "10px",
    }}
        href="/about">About Us</Button><br/>

          <Button 
        variant="outlined" 
         style={{
        width: "300px",
        backgroundColor: "##7E9E32",
        padding: "18px 36px",
        fontSize: "18px",
        color: "#ffffff",
        margin: "10px",
    }}
        href="/partner">Partner With Us</Button><br/>


        </div>
    )
}