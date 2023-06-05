import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import './insta.css'

export const Insta = () => {
  return (
    <div className='insta'>
        <div className='instaWrap'>
        <a href="https://www.instagram.com/p/CrrFivgvE_4/" target="_blank">  
       <img src="./images/insta1.png" alt="women in front of of store"></img>
         </a>
       <div className='instaText'>
        <div>
       <FavoriteBorderIcon fontSize="large" sx={{ color: "#82C0CC" }}/> 
       </div>
       <h1>112</h1>
       
       <div>
       <ChatBubbleOutlineIcon fontSize="large" sx={{ color: "#82C0CC" }}/>
       </div>
       <h1>3</h1>
       </div>
       </div>

       <div className='instaWrap'>  
       <a href="https://www.instagram.com/p/CrYFP7zuVdl/" target="_blank">     
       <img src="./images/insta2.png" alt="The book cover Men are from Mars"></img>
         </a>
       <div className='instaText'>
        <div>
       <FavoriteBorderIcon fontSize="large" sx={{ color: "#82C0CC" }}/>
       </div>
       <h1>110</h1>
       
       <div>
       <ChatBubbleOutlineIcon fontSize="large" sx={{ color: "#82C0CC" }}/>
       </div>
       <h1>8</h1>
       </div>
       </div> 

       <div className='instaWrap'>
        <a href="https://www.instagram.com/p/CpSgk0JMeY6/" target="_blank">
       <img src="./images/insta3.png" alt="author at book q and a"></img> 
       </a>
       <div className='instaText'>
        <div>
       <FavoriteBorderIcon fontSize="large" sx={{ color: "#82C0CC" }}/>
       </div>
       <h1>170</h1>
       
       <div>
       <ChatBubbleOutlineIcon fontSize="large" sx={{ color: "#82C0CC" }}/>
       </div>
       <h1>12</h1>
       </div>
       </div>
       
    </div>
  )
}
