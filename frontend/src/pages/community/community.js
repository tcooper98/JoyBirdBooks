import React from 'react'
import Button from '@mui/material/Button';

export default function Community() {
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
        href="/blog">Blog</Button><br/>

           <Button 
        variant="outlined" 
         style={{
         width: "500px",
        backgroundColor: "#16697a",
        padding: "18px 36px",
        fontSize: "18px",
        color: "#ffffff"
    }}
        href="/calender">Calender</Button><br/>

          <Button 
        variant="outlined" 
         style={{
        width: "500px",
        backgroundColor: "#16697a",
        padding: "18px 36px",
        fontSize: "18px",
        color: "#ffffff"
    }}
        href="/newsletter">Newsletter</Button><br/>

        </>
    )
}

