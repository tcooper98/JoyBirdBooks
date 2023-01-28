import React from 'react'
import './products.css'
import ProductItems from '../../components/Products/ProductItems'
import Filter from '../../components/Filter/Filter'


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
  
    return (
      <>
  
        {ProductItems.map((item, index) => {
        return (
        <li key={index}>
        <div className="card">
        <div className="body">
          <img className="image" src={item.image}/>
          <h1 className="title">{item.name}</h1>
          <h2 className="Rating">{item.rating}</h2>
          <h2 className="Author">{item.author}</h2>
          <p className="price">{item.price}</p>
          
          
          </div>
        
        </div>
        </li>
      )
      })}
      </>
    )
  }