'use client'

import { Home, Star } from 'lucide-react'
import Link from 'next/link'
import { ProductImages } from '../../components/ProductImages'
import { ProductTabs } from '../../components/Product-tabs'
import { RelatedProducts } from '../../components/RelatedProducts'
import { Suspense, use, useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { host } from '../../lib/host.js'


export default function BlogDetailsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductDetails />
        </Suspense>
    );
}


function ProductDetails() {


    const [error, setError] = useState()
    const [product, setProduct] = useState()
    const router = useRouter();

    //get product id from url
    const searchParams = useSearchParams();
    const productId = searchParams.get('id');


    //calculate product discount
    const calculateDiscount = (originalPrice, discount) => {
        const discountAmount = (originalPrice * discount) / 100
        return discountAmount.toFixed(2).toLocaleString('en-IN')
    }


    //fetch product by id 
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`${host}/api/v1/products/${productId}`,
                {
                    withCredentials: true,
                    headers: {
                        Accept: 'application/json',
                    },
                },
            )


            if (response.data.statusCode === 200) {
                console.log("product", response.data)
                setProduct(response.data.data)
            }
        } catch (error) {
            setError(error)
            console.error(error)
        }

    }

    //api calls
    useEffect(() => {
        if (productId) {
            fetchProduct()
        }

    }, [productId])

    const handleAffiliateLink = (url) => {
        window.open(url, "_blank")
    }

    if (error) {
        return <div>{error.message}</div>
    }

    if (!product) {
        return <h1>Loading ...</h1>
    }

    return (
        <div className="container mx-auto px-4 sm:px-32 py-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8">
                <Link href="/" className="text-gray-500 hover:text-primary">
                    <Home className="w-4 h-4" />
                </Link>
                <span>/</span>
                <Link href="/shop" className="text-gray-500 hover:text-primary">
                    Shop
                </Link>
                <span>/</span>
                <span className="text-primary">{product?.category}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column - Product Images */}
                <div className='sm:sticky sm:top-0 sm:p-4'>
                    <ProductImages images={product?.images} thumbnailImage={product?.images[0]} />
                </div>

                {/* Right Column - Product Info */}
                <div className="h-full overflow-y-auto scrollbar-hidden">
                    <h1 className="text-2xl md:text-2xl font-semibold mb-4">
                        {product?.name}
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex">
                            {[1, 2, 3, 4].map((star) => (
                                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                            <Star className="w-5 h-5 text-gray-300" />
                        </div>
                        <span className="text-gray-600">(3 Reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                        <span className="text-3xl font-bold">
                            ₹{Number(product.sellingPrice).toLocaleString('en-IN')}
                        </span>
                        <span className="text-gray-500 line-through ml-2">
                            ₹{Number(product?.originalPrice).toLocaleString('en-IN')}
                        </span>
                        <span className="text-green-500 font-semibold ml-2">17% off</span>
                        <span className="text-gray-500 ml-2">
                            ₹{Number(calculateDiscount(product?.originalPrice, 17)).toLocaleString('en-IN')} off
                        </span>
                    </div>



                    {/* About This Item */}
                    <div>
                        <div
                            dangerouslySetInnerHTML={{ __html: product?.productDetail }}
                        />
                        <button className="text-primary hover:underline mt-4">
                            See more product details
                        </button>
                    </div>
                    <button
                        className="bg-black text-white p-2 mt-4 hover:bg-gray-800"
                        onClick={() => handleAffiliateLink(product?.affiliateLink)}
                    >
                        BUY ON AMAZON
                    </button>



                    <ProductTabs product={product} />

                </div>
            </div>
            <RelatedProducts product={product} />
        </div>
    )
}

