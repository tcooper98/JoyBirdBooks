import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cart from './slices/cart';
import products from './slices/products';
import user from './slices/user';
import order from './slices/order';



const reducer = combineReducers({
  products,
  cart,
  user,
  order,
});


export default configureStore({
  reducer,
});