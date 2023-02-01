import React from 'react'
import './solo.css'

import { useParams } from 'react-router-dom';
import { GET_ITEM_QUERY } from '../../lib/query'
import { useQuery, gql } from 'urql';
import Product from '../../components/Products/ProductCard';

//This is the page that displays the individual book

function SoloProduct () {
   
 
    return (
        <>
        <div className='soloproduct'>
            
            <div className="product-details">
             <img src="https://images.urbndata.com/is/image/UrbanOutfitters/80218514_000_b?$xlarge$&fit=constrain&qlt=80&wid=640" alt="book"/>
             <div className="product-info">
              <h1>A Cigarette Lit Backwards</h1>
              <h3> Author</h3>
              <h3> Rating</h3>
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
            </div>
        </div>  

        <div className='reviews'>

        </div>
        
        <div className='donate-link'>
            <h1>You can now donate and trade</h1>
            <p>You can now trade or donate books in a very easy and intuitive way. Please refer to our trading policy in our
                trade/donate page. Trading a book will allow you to have access to our library without spending money overhead.
                We are happy to accept your books to share them with the community.
            </p>

            <button className='leftbutton'>Add to Cart</button>
                <button className='rightbutton'>Buy Now</button>


        </div>

        <div className='similar'>
        <h2>Similar Products</h2>
        <Product/>
        </div>
        </>
    )
}


export default SoloProduct;