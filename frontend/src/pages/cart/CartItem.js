import React from 'react'
import { useDispatch } from 'react-redux';
import './Cart.css';
import { addCartItem } from '../../redux/actions/cartActions';
import { Divider, FormControl, InputLabel, MenuItem, Select } from '@mui/material';



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
         <h1 className="cartname">{name}</h1>
         <h1 className="cartauthor">By {author}</h1>
         <p className="cartcondition">Item Condition: {condition}</p>
         </div>
         <div className='cartQuantityWrapper'>
            <FormControl  sx={{ minWidth: 120 }}>
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
              </FormControl>
         </div>
         <div className='cartPriceWrapper'>
         <h1 className="cartprice">${price}</h1>
         </div>

        </div>  
        <Divider variant="middle"/> 
        </div>
    )
}

export default CartItem