import React from 'react'
import './solo.css'
import Product from '../../components/Products/ProductCard';
import SoloProductCard from './soloProductCard';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { addCartItem } from '../../redux/actions/cartActions';






export default function SoloProduct () {
   
 
    return (
        <>
        <div className='soloproduct'>
        <SoloProductCard/>
            
        </div>  



        
        <div className='donate-link'>
            <h1>You can now donate and trade</h1>
            <p>You can now trade or donate books in a very easy and intuitive way. Please refer to our trading policy in our
                trade/donate page. Trading a book will allow you to have access to our library without spending money overhead.
                We are happy to accept your books to share them with the community.
            </p>

             <Link to={`/donate`} style={{ textDecoration: 'none', color: 'inherit'}}>
            <button className='donatebutton'>Donate</button>
            </Link>
            <Link to={`/donate`} style={{ textDecoration: 'none', color: 'inherit'}}>
                <button className='tradebutton'>Trade</button>
              </Link>


        </div>

        <div className='similar'>
        <h2 className='similar'>Similar Products</h2>
        <Product/>
        </div>
        </>
    )
}










