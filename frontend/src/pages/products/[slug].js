import React from 'react'
import './solo.css'
import Product from '../../components/Products/ProductCard';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { ITEM_QUERY } from '../../lib/query'
import { useQuery } from 'urql';
import {SINGLE_ITEM_QUERY} from '../../lib/query'


function SoloProduct () {
   
 
    return (
        <>
        <div className='soloproduct'>
        <SoloProductCard/>
{/*             
            <div className="product-details">
             <img src="https://images.urbndata.com/is/image/UrbanOutfitters/80218514_000_b?$xlarge$&fit=constrain&qlt=80&wid=640" alt="book"/>
             <div className="product-info">
              <h1>A Cigarette Lit Backwards</h1>
              <h3> By Author</h3>
              <Rating name="size-medium" defaultValue={5} size="medium"/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue, arcu a ornare dictum, nisl neque aliquet est,
                 et ultricies arcu mauris vel velit. Curabitur porta feugiat imperdiet. Duis id turpis scelerisque, cursus mauris iaculis,
                  tempus orci. Nulla ornare eu augue nec pharetra. Aliquam erat volutpat. Suspendisse sagittis venenatis enim, eget porta
                   nibh malesuada ut. Nullam feugiat euismod leo nec congue. Vivamus aliquet tellus pharetra massa rutrum convallis.
                    Integer posuere massa nec iaculis ullamcorper. Curabitur ligula nunc, tincidunt ac lorem facilisis, euismod feugiat tellus.
                     In et consequat augue. Etiam fermentum nibh nisi, vitae mattis dolor consequat vitae. </p>
          
               <h2>$19.99</h2>

               <input className="ship" type="radio" value=""></input>
                        <label for="ship">Ship This Item - Qualifies fir Free Shipping</label> <br/> <br/>
                        <input className="buy" type="radio" value=""></input>   
                        <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label><br/>
              
                <button className='leftbutton'>Add to Cart</button>
                <button className='rightbutton'>Buy Now</button>
            </div>
            </div> */}
            
        </div>  

        <div className='reviews'>
            <div className="review-menu">
              <h1>Customer Reviews</h1> 
              <Rating name="size-large" defaultValue={4} size="large"/> 
              {/* I still havent figured out how to get the rating to display the number of stars so all these boxes will be replaced*/}
              <Box
                sx={{
                width: 325,
                margin: 'auto',
                marginBottom: "20px",
                height: 32,
                backgroundColor: '#f2c202',
                '&:hover': {
                backgroundColor: 'gray',
               opacity: [0.9, 0.8, 0.7],
                 },
                 }}
                 />

                  <Box
                sx={{
                width: 325,
                margin: 'auto',
                marginBottom: "20px",
                height: 32,
                backgroundColor: '#f2c202',
                '&:hover': {
                backgroundColor: 'gray',
               opacity: [0.9, 0.8, 0.7],
                 },
                 }}
                 />

                  <Box
                sx={{
                width: 325,
                margin: 'auto',
                marginBottom: "20px",
                height: 32,
                backgroundColor: '#f2c202',
                '&:hover': {
                backgroundColor: 'gray',
               opacity: [0.9, 0.8, 0.7],
                 },
                 }}
                 />

                  <Box
                sx={{
                width: 325,
                margin: 'auto',
                marginBottom: "20px",
                height: 32,
                backgroundColor: '#f2c202',
                '&:hover': {
                backgroundColor: 'gray',
               opacity: [0.9, 0.8, 0.7],
                 },
                 }}
                 />

                  <Box
                sx={{
                width: 325,
                margin: 'auto',
                marginBottom: "20px",
                height: 32,
                backgroundColor: '#f2c202',
                '&:hover': {
                backgroundColor: 'gray',
               opacity: [0.9, 0.8, 0.7],
                 },
                 }}
                 />




              <Divider variant="middle" />
              <h2>Review this item</h2>
                <p>Share your thoughts with the community</p>
                <button className='product-review'>Write a product review</button>
             </div>


             <div className="review-info">
                  <select name="rating" id="rating" className='ratingdropdown'>
                  <option value="high">Sort by Highest Rating</option>
                  <option value="low">Sort by Lowest Rating</option>
                 </select>
              
              <div className='review-content'>
               <h2>By She Treads Lightly</h2>
                 <Rating name="size-small" defaultValue={3} size="small"/> 
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue, arcu a ornare dictum, nisl neque aliquet est,
                 et ultricies arcu mauris vel velit. Curabitur porta feugiat imperdiet. Duis id turpis scelerisque, cursus mauris iaculis.</p>

               <p className='review-date'>Reviewed on 22/22/2022</p>
                

               <h2>By She Treads Lightly</h2>
                 <Rating name="size-small" defaultValue={3} size="small"/> 
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue, arcu a ornare dictum, nisl neque aliquet est,
                 et ultricies arcu mauris vel velit. Curabitur porta feugiat imperdiet. Duis id turpis scelerisque, cursus mauris iaculis.</p>

                  <p className='review-date'>Reviewed on 22/22/2022</p>

               <h2>By She Treads Lightly</h2>
                 <Rating name="size-small" defaultValue={3} size="small"/> 
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas congue, arcu a ornare dictum, nisl neque aliquet est,
                 et ultricies arcu mauris vel velit. Curabitur porta feugiat imperdiet. Duis id turpis scelerisque, cursus mauris iaculis.</p>
                 <p className='review-date'>Reviewed on 22/22/2022</p>
              </div>
              </div>

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


function SoloProductCard() {

  //  fetch products from strapi
   const[results] = useQuery({ query: ITEM_QUERY });
     
   const { data, fetching, error } = results;

   if (fetching) return <p>Loading...</p>;
      if (error) return <p>Oh no... {error.message}</p>;

      const items = data.items.data[0];
      // console.log(items);
   
    //formatting how products are displayed 
    return (
      
      <div className='soloproduct'>
         {items.map((item) => (
          <div key={item.attributes.slug} className="product-details">
          <img src={item.attributes.image.data.attributes.formats.medium.url} alt={item.attributes.name}/>
          <div className="product-info">
          <h1>{item.attributes.name}</h1>
          <h3>By {item.attributes.author}</h3>
          <Rating name="size-small" defaultValue={item.attributes.rating} size="small"/>
         <p>{item.attributes.description}</p>
         <h2>${item.attributes.price}</h2>
          <input className="ship" type="radio" value=""></input>
                        <label for="ship">Ship This Item - Qualifies for Free Shipping</label> <br/> <br/>
                        <input className="buy" type="radio" value=""></input>   
                        <label for="buy">Pick up at store - 3018 Corrine Dr, Orlando, FL 32803</label><br/>
              
                <button className='leftbutton'>Add to Cart</button>
                <button className='rightbutton'>Buy Now</button>
        
        </div>
      </div>
         ))}

      </div>
    )
  
  }


export default SoloProduct;