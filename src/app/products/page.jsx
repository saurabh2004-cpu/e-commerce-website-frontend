'use client'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect } from 'react'
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
    let products = searchParams.get('products') || '[]';

    if(products === '[]') return null

    products = JSON.parse(decodeURIComponent(products));

    // useEffect(() => {
    //     console.log("category on cat", category)
    //     console.log("parsedproducts on cat", products)
    // })


    return (
        <div>
            <ProductsCards title={category} propProducts={products} />
        </div>
    )
}


