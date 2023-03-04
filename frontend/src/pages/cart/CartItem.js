import React from 'react'
import { useDispatch } from 'react-redux';
import './Cart.css';
import { addCartItem, removeCartItem } from '../../redux/actions/cartActions';
import { Divider, FormControl, IconButton, InputLabel, MenuItem, Select } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';




const CartItem = ({ cartItem }) => {
   const {name, image, price, stock, qty, id, author, condition} = cartItem;
   const dispatch = useDispatch();

   

    return (
        
        <div>
        <div key={id} className='cartitemWrapper'>
        <div className='cartImageWrapper'>
         <img className="cartimage" src={image} alt={name}/>
         </div>
         <div className='cartInfoWrapper'>
           <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit'}}> 
         <h1 className="cartname">{name}</h1>
           </Link>
         <h1 className="cartauthor">By {author}</h1>
         <p className="cartcondition">Item Condition: {condition}</p>
         </div>
         <div className='cartQuantityWrapper'>
            
            <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 label="Quantity"
                value={qty}
                 onChange={(e) => {
                    dispatch(addCartItem(id, e.target.value));
                 }}>
                {[...Array(stock).keys()].map((x) => (
              <MenuItem key={ x + 1} value={x + 1}>
                {x + 1}
                </MenuItem>
                ))}
            
              </Select>
             
         </div>
         <div className='cartPriceWrapper'>
         <h1 className="cartprice">${price}</h1>
         </div>
         
         <div className='cartDelete'>
            <IconButton aria-label="delete" onClick={() => dispatch(removeCartItem(id))}>
            <ClearIcon />
          </IconButton>

          </div>

        </div>  
        <Divider variant="middle"/> 
        </div>
    )
}

export default CartItem