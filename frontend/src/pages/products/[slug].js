import React from 'react'
import './solo.css'

import { useParams } from 'react-router-dom';
import { GET_ITEM_QUERY } from '../../lib/query'
import { useQuery, gql } from 'urql';



function SoloProduct () {
   
 
    return (
        <>
        <div className='soloproduct'>
            <img src="" alt=""/>
            <div className="product-details">
              <h1>Title  </h1>
              <h3>Author </h3>
              <h3>Rating</h3>
              <p>Description</p>
              <h3>Price</h3>
                <button>Add to Cart</button>
                <button>Buy Now</button>
            </div>
        </div>  

        <div className='reviews'>

        </div>

        </>
    )
}

export default SoloProduct;