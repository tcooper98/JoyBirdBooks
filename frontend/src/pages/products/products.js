import React from 'react'
import './products.css'
import Filter from '../../components/Filter/Filter'
import { ITEM_QUERY } from '../../lib/query'
import { useQuery } from 'urql';
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';


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
            <div className='products-page-title'>
            <h1>Products</h1>
            </div>
            <div className='products-container'>
            <ProductCard/>
            </div>
            </div>
            
           
        </div>
    )
    
}


// waiting to figure out where to host database
export function ProductCard() {
  
   const handleClick= (item) => {
    console.log((item));
  };
   //fetch products from strapi
   const[results] = useQuery({ query: ITEM_QUERY });
     
   const { data, fetching, error } = results;

   if (fetching) return <p>Loading...</p>;
      if (error) return <p>Oh no... {error.message}</p>;

      const items = data.items.data;
      // console.log(items);
   
    //formatting how products are displayed 
    return (
      <div className='productcontainer'>
         {items.map((item) => (
         
          <div key={item.attributes.slug} className="product-card">
          
           <div className="product_container" >
            {/* linking to individual product page */}
          
           <Link onClick={() => handleClick(item)} to={`/product/${item.attributes.slug}`} style={{ textDecoration: 'none', color: 'inherit'}}> 
          <div className="product-body">
          <img className="product-image" src={item.attributes.image.data.attributes.formats.large.url} alt={item.attributes.name}/>
          <h1 className="product-title">{item.attributes.name}</h1>
          <Rating name="size-small" defaultValue={item.attributes.rating} size="small"/>
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

// function ProductCard() {

 
//     return (
//       <div className='productcontainer'>
//          {ProductItems.map((item, index) => (
         
//           <div key={index} className="product-card">
          
//            <div className="product_container" >
//             {/* linking to individual product page */}
//            <Link to={`/product}`} style={{ textDecoration: 'none', color: 'inherit'}}> 
//           <div className="product-body">
//           <img className="product-image" src={item.image} alt={item.name}/>
//           <h1 className="product-title">{item.name}</h1>
//           <Rating name="size-small" defaultValue={5} size="small"/>
//           <h3 className="product-author">By {item.author}</h3>
//          <p className="product-price">${item.price}</p>
        
        
//         </div>
//          </Link>
//       </div> 
//       </div>
//          ))}

//       </div>
//     )
  
//   }

