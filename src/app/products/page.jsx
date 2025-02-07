'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import ProductsCards from '../../components/ProductsCards'

const ProductsByCategory = () => {

    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const products = searchParams.get('products');

    useEffect(()=>{
        console.log("category on cat",category)
        console.log("products on cat",products)
    })


    return (
        <div>
            <ProductsCards title={category} products={products} />
        </div>
    )
}

export default ProductsByCategory
