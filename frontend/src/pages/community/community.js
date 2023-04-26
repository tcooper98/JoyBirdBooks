import React from 'react'
import Button from '@mui/material/Button';
import './community.css'

export default function Community() {
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
        href="/blog">Blog</Button><br/>

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
        href="/calender">Calender</Button><br/>

          <Button 
        variant="outlined" 
         style={{
        width: "300px",
        backgroundColor: "#7E9E32",
        padding: "18px 36px",
        fontSize: "18px",
        color: "#ffffff",
        margin: "10px",
    }}
        href="/newsletter">Newsletter</Button><br/>

        </div>
    )
}

