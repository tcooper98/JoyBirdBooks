import React from 'react'
import './products.css'
import ProductItems from '../../components/Products/ProductItems'
import Filter from '../../components/Filter/Filter'
import { ITEM_QUERY } from '../../lib/query'
import { useQuery } from 'urql';


export default function Products() {
    return (
        <div className='container'>
             <div className='product-filter'>
                <Filter/>
            </div>

            <div className='products'>
            <h1>Products</h1>
            <ProductCard/>
            </div>
            
           
        </div>
    )
}


function ProductCard() {

   //fetch products
   const[results] = useQuery({ query: ITEM_QUERY });
     
   const { data, fetching, error } = results;

   if (fetching) return <p>Loading...</p>;
      if (error) return <p>Oh no... {error.message}</p>;

      const items = data.items.data;
      console.log(items);
  
    return (
      <div className='productcontainer'>
         {items.map((item) => (
          <div key={item.id} className="product-card">
           <div className="card">
          <div className="product-body">
          <img className="product-image" src={item.attributes.image.data.attributes.formats.medium.url} alt={item.attributes.name}/>
          <h1 className="product-title">{item.attributes.name}</h1>
          <h3 className="product-rating">{item.attributes.rating}/5 Stars</h3>
          <h3 className="product-author">By {item.attributes.author}</h3>
         <p className="product-price">${item.attributes.price}</p>
        
        
        </div>
      
      </div> 
      </div>
         ))}

      </div>
    )
  
  }

  