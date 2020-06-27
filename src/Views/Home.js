import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequest'

function Home(){
    const url = `https://5ef575ecef110d001687c880.mockapi.io/products?page=1&limit=10`
    
    let products = useAxiosGet(url)

    let content = null

    if(products.loading){
        content = 
            <Loader />
    }
    if(products.error){
        content=
            <p>There was an error!</p>
    }

    if(products.data){
        content =
            products.data.map((product) => 
                <div key={product.id}>
                    <ProductCard 
                    product={product} 
                    />
                </div>
            )
    }

    return(
        <div>
            <h1 className='font-bold text-2xl mb-3'>
                Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default Home;