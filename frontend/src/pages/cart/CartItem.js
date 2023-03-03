import React from 'react'
import { useDispatch } from 'react-redux';
import './Cart.css';
import { addCartItem } from '../../redux/actions/cartActions';
import { Divider, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CartItem = ({ CartItem }) => {
   const {name, image, price, stock, qty, id, author, condition} = CartItem;
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
                // value={age}
                 label="Quantity"
                //  onChange={handleChange}
                 >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
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