import React from 'react'
// import BookCard from '../../components/BookCard/BookCard'
import HeroBanner from '../../components/Hero/Header'
import Product from '../../components/Products/ProductCard'
import './home.css'

export default function Home() {
    return (
    <>
        <HeroBanner>

        </HeroBanner>

        <div className="fresh-off-press">

            <h2>FRESH OFF THE PRESS</h2>
            
            {/* <BookCard/> */}
            <Product/>
        </div>
    </>
    )
}