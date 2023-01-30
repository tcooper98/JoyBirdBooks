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
          <img className="image"key={item.id} src={item.image}/>
          <h1 className="title" key={item.id}>{item.name}</h1>
          <h2 className="Rating" key={item.id}>{item.rating}</h2>
          <h2 className="Author" key={item.id}>{item.author}</h2>
          <p className="price" key={item.id}>{item.price}</p>
          
          
          </div>
        
        </div>
        </li>
      )
      })}
      </>
    )
  }