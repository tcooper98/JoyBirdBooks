import React from 'react';
import './App.css';
import Navbar from './components/navBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import Products from './pages/products/products'
import Donate from './pages/donate/donate'
import Blog from './pages/blog/blog'
import Calender from './pages/calender/calender'
import News from './pages/newsletter/newsletter'
import Contact from './pages/contact/contact'
import About from './pages/about/about'
import Partner from './pages/partner/partner'
import Cart from './pages/cart/cart'
import Footer from './components/Footer/Footer';
import TrackOrder from './pages/track-order/track-order';
import RefundPolicy from './pages/refund-policy/refund-policy';
import ShippingPolicy from './pages/shipping-policy/shipping-policy';
import ReturnPolicy from './pages/return-item/return-policy';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BlogReadMore from './pages/blog-read-more/blog-read-more';
import SoloProduct from './pages/products/[id]';
import Community from './pages/community/community';
import Connected from './pages/connected/connected';
import SearchResults from './pages/search/searchResults';
import Login from './pages/User/login';
import SignUp from './pages/User/signup';
import Account from './pages/User/account';
import Checkout from './pages/checkout/checkout';
import PaymentSuccessModal from './pages/checkout/PaymentSuccessModal';
import UserOrders from './pages/User/UserOrders';
import Admin from './pages/User/admin';
import UsersTab from './pages/User/UsersTab';
import ProductsTab from './pages/User/productsTab';









function App() {
  return( 
  <Router>

 
    
   
    <ScrollToTop/>
    <Navbar />
    
    {/* Setting up routes for each page */}
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/donate' element={<Donate/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
      <Route exact path='/blog-read-more' element={<BlogReadMore/>}/>
      <Route exact path='/calender' element={<Calender/>}/>
      <Route exact path='/newsletter' element={<News/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/partner' element={<Partner/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/track-order' element={<TrackOrder/>}/>
      <Route exact path='/refund-policy' element={<RefundPolicy/>}/>
      <Route exact path='/shipping-policy' element={<ShippingPolicy/>}/>
      <Route exact path='/return-policy' element={<ReturnPolicy/>}/>
      {/* <Route exact path='/product}' element={<SoloProduct/>}/> */}
       <Route exact path='/product/:id' element={<SoloProduct/>}/>
      <Route exact path='/community' element={<Community/>}/>
      <Route exact path='/connected' element={<Connected/>}/>
      <Route path='/search/:keyword' element={<SearchResults/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
      <Route exact path='/account' element={<Account/>}/>
      <Route exact path='/checkout' element={<Checkout/>}/>
      <Route exact path='/paymentsuccess' element={<PaymentSuccessModal/>}/>
       <Route exact path='/your-orders' element={<UserOrders/>}/>
       <Route eact path='/admin' element={<Admin/>}/>
        <Route eact path='/users' element={<UsersTab/>}/>
        <Route eact path='/admin-products' element={<ProductsTab/>}/>
        
    </Routes>

  <Footer/>

 
  </Router>
 
 
  );
}

export default App;
