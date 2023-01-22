import React from 'react';
import './App.css';
import Navbar from './components/navBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Products from './pages/products'
import Donate from './pages/donate'
import Blog from './pages/blog'
import Calender from './pages/calender'
import News from './pages/newsletter'
import Contact from './pages/contact'
import About from './pages/about'
import Partner from './pages/partner'
import Cart from './pages/cart'

function App() {
 return( 
  <Router>
  <Navbar />
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/products' element={<Products/>}/>
    <Route exact path='/donate' element={<Donate/>}/>
    <Route exact path='/blog' element={<Blog/>}/>
    <Route exact path='/calender' element={<Calender/>}/>
    <Route exact path='/newsletter' element={<News/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/partner' element={<Partner/>}/>
    <Route exact path='/cart' element={<Cart/>}/>
  </Routes>
  </Router>
  );
}

export default App;
