import { InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../../redux/actions/cartActions'

const CheckoutItem = ({cartItem}) => {
    const {name, image, price, stock, qty, id} = cartItem
    const dispatch = useDispatch()
  return (
    <div className="checkoutItem">
        <div className="checkoutItem_image">
        <img src={image} alt={name}/>
        </div>
        <div className="checkoutItem_name">
        <h3>{name}</h3>
        </div>
        <div className="checkoutItem_total">
         <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 label="Quantity"
                 size="small"
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
        <div className="checkoutItem_price">
         <p>${price}</p>
        </div>
    </div>
  )
}

export default CheckoutItem