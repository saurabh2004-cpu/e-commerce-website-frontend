'use client'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
import ProductsCards from '../../components/ProductsCards'
import { useToast } from '../../../@/hooks/use-toast';
import axios from 'axios';
import { host } from '../../lib/host';


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
    const [products, setProducts] = useState([])
    const { toast } = useToast();

    //search product by category
    const handleGetProductsByCategory = async () => {
        try {

            console.log("searchTerm category", category)

            const response = await axios.get(`${host}/api/v1/products?search=${category}`,
                {
                    withCredentials: true,
                    headers: {
                        Accept: 'application/json',
                    },
                }
            )
            console.log("searched", response.data)

            if (response.data.statusCode === 200 && response.data.data.length > 0) {
                setProducts(response.data.data)
            } else {
                toast({
                    title: 'No products found',
                    description: "No product found with this search",
                    duration: 3000,
                })
            }

        } catch (error) {
            toast({
                title: 'Error',
                description: "Error while fetching products",
                duration: 3000,
            })
            console.error(error)
        }
    }

    useEffect(() => {
        handleGetProductsByCategory()

        if(products.length>0){
            console.log("Products",products)
        }
    },[category])


    return (
        <div>
           {products && <ProductsCards title={category} propProducts={products} />}
        </div>
    )
}


