import React from 'react'
import './products.css'
import Filter from '../../components/Filter/Filter'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions'
import { useEffect } from 'react';
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';


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


// // waiting to figure out where to host database
// export function ProductCard() {
 
  
//    //fetch products from strapi
//    const[results] = useQuery({ query: ITEM_QUERY });
     
//    const { data, fetching, error } = results;

//    if (fetching) return <p>Loading...</p>;
//       if (error) return <p>Oh no... {error.message}</p>;

//       const items = data.items.data;
//       console.log(items);
   
//     //formatting how products are displayed 
//     return (
//       <div className='productcontainer'>
//          {items.map((item) => (
         
//           <div key={item.attributes.slug} className="product-card">
          
//            <div className="product_container" >
//             {/* linking to individual product page */}
          
//            <Link to={`/product/${item.attributes.slug}`} style={{ textDecoration: 'none', color: 'inherit'}}> 
//           <div className="product-body">
//           <img className="product-image" src={item.attributes.image.data.attributes.formats.large.url} alt={item.attributes.name}/>
//           <h1 className="product-title">{item.attributes.name}</h1>
//           <Rating name="size-small" defaultValue={item.attributes.rating} size="small"/>
//           <h3 className="product-author">By {item.attributes.author}</h3>
//          <p className="product-price">${item.attributes.price}</p>
        
        
//         </div>
//          </Link>
         
//       </div> 
//       </div>
//          ))}

//       </div>
//     )
  
//   }

function ProductCard() {
 const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

 
 
    return (
      <div className='productcontainer'>
        {loading ? (<p>loading</p>) : error ? (<p>error</p>) : (null)}
         {products.map((product) => (
          <div key={product._id} className="product-card">
          
           <div className="product_container" >
            {/* linking to individual product page */}
           <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'inherit'}}> 
          <div className="product-body">
            <div className='product-image-container' >
          <img  className="product-image" src={product.image} alt={product.name}/>
          </div>
          <h1 className="product-title">{product.name}</h1>
          <Rating name="size-small" defaultValue={product.rating} size="small"/>
          <h3 className="product-author">By {product.author}</h3>
         <p className="product-price">${product.price}</p>
         <Button className="image_button" variant="outlined">Add to cart</Button>
           
        
        
        </div>
         </Link>
      </div> 
      </div>
         ))}

      </div>
    )
  
  }
