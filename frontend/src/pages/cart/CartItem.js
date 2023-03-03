import React from 'react'
import { useDispatch } from 'react-redux';
import './Cart.css';
import { addCartItem } from '../../redux/actions/cartActions';

const CartItem = ({ CartItem }) => {
   const {name, image, price, stock, qty, id, author, condition} = CartItem;
   const dispatch = useDispatch();

    return (
        <div>
        <h1 className='cart-title'>My Cart</h1>
        <div key={id} className='cartitem-wrapper'>
         <img className="cart_image" src={image} alt={name}/>
         <h1 className="cart_name">{name}</h1>
         <h1 className="cart_author">By {author}</h1>
         <p className="cart_condition">Item Condition {condition}</p>
         <h1 className="cart_price">{price}</h1>

        </div>  
        </div>
    )
}

export default CartItem