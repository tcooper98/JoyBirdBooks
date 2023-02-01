import React from 'react'
import './products.css'
import ProductItems from '../../components/Products/ProductItems'
import Filter from '../../components/Filter/Filter'
import { ITEM_QUERY } from '../../lib/query'
import { useQuery } from 'urql';
import { Link } from 'react-router-dom'


//what is displayed on the products page
export default function Products() {
    return (
        <div className='container'>
         {/* class for filter please look at filter.js for component */}
             <div className='product-filter'>
                <Filter/>
            </div>
          {/* class for products please look below for formatting */}
            <div className='products'>
            <h1>Products</h1>
            <ProductCard/>
            </div>
            
           
        </div>
    )
}


function ProductCard() {

   //fetch products from strapi
   const[results] = useQuery({ query: ITEM_QUERY });
     
   const { data, fetching, error } = results;

   if (fetching) return <p>Loading...</p>;
      if (error) return <p>Oh no... {error.message}</p>;

      const items = data.items.data;
      console.log(items);
   
    //formatting how products are displayed 
    return (
      <div className='productcontainer'>
         {items.map((item) => (
         
          <div key={item.attributes.slug} className="product-card">
          
           <div className="product_container" >
            {/* linking to individual product page */}
           <Link to={`/product/${item.attributes.slug}`} style={{ textDecoration: 'none', color: 'inherit'}}> 
          <div className="product-body">
          <img className="product-image" src={item.attributes.image.data.attributes.formats.medium.url} alt={item.attributes.name}/>
          <h1 className="product-title">{item.attributes.name}</h1>
          <h3 className="product-rating">{item.attributes.rating}/5 Stars</h3>
          <h3 className="product-author">By {item.attributes.author}</h3>
         <p className="product-price">${item.attributes.price}</p>
        
        
        </div>
         </Link>
      </div> 
      </div>
         ))}

      </div>
    )
  
  }

  