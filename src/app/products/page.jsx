'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import ProductsCards from '../../components/ProductsCards'


export default function ProductsByCategoryPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductsByCategory />
        </Suspense>
    );
}

const ProductsByCategory = () => {

    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const products = searchParams.get('products');

    useEffect(() => {
        console.log("category on cat", category)
        console.log("products on cat", products)
    })


    return (
        <div>
            <ProductsCards title={category} products={products} />
        </div>
    )
}


