import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'

function Product(){
    const {id} = useParams() 
    const url = `https://5ef575ecef110d001687c880.mockapi.io/products/${id}`
    
    let product = useAxiosGet(url)

    let content = null

    if(product.loading){
        content = 
            <Loader />
    }
    if(product.error){
        content=
            <p>There was an error!</p>
    }

    if(product.data){
        content =
            <div>
                <h1 className='font-bold text-2xl mb-3'>
                    Product
                </h1>
                <h1 className='font-bold text-1xl mb-3'>
                {product.data.name} 
                </h1>
                <div>
                    <img 
                    src={product.data.images[0].imageUrl}
                    alt={product.data.name} 
                    />
                </div>
                <div className='font-bold text-xl mb-3'>
                    ₱ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
    }
    return(
        <div>
            {content}
        </div>
    )
}

export default Product