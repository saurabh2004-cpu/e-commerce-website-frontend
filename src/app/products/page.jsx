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
    const subCategory = searchParams.get('subcategory');

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { toast } = useToast();

    //search product by category
    const handleGetProductsByCategory = async () => {
        try {

            console.log(" category", category)

            const response = await axios.get(`${host}/api/v1/products?category=${category}`,
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
            } else if (response.data.statusCode === 200 && response.data.data.length === 0) {
                {
                    toast({
                        title: 'No products found',
                        description: "No product found with this search",
                        duration: 3000,
                    })
                }
            }


        } catch (error) {
            toast({
                title: error.response.data.message,
                description: "No product found with this search ",
                duration: 3000,
            })
        }
    }

    //search product by subcategory
    const handleGetProductsBySubCategory = async () => {
        try {

            console.log(" subcategory", subCategory)
            setLoading(true)

            const response = await axios.get(`${host}/api/v1/products?subCategory=${subCategory}`,
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
                setLoading(false)
            } else if (response.data.statusCode === 200 && response.data.data.length === 0) {
                {
                    toast({
                        title: 'No products found',
                        description: "No product found with this search",
                        duration: 3000,
                    })
                }
            }

        } catch (error) {
            toast({
                title: error.response.data.message,
                description: "No product found with this search ",
                duration: 3000,
            })
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        if (subCategory) {
            handleGetProductsBySubCategory()
        }
    }, [subCategory])

    useEffect(() => {
        if (!subCategory) {
            handleGetProductsByCategory()
        }

        if (products.length > 0) {
            console.log("Products", products)
        }
    }, [category])

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            {products.length > 0 && <ProductsCards title={category} propProducts={products} />}

            {!products.length && <div className=' grid justify-center align-middle text-center text-2xl font-bold mt-4 mb-4 '>
                Products Not Found With This Category
            </div>}
        </div>
    )
}


