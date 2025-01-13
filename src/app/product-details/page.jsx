'use client'

import { Home, Star } from 'lucide-react'
import Link from 'next/link'
import { ProductImages } from '../../components/ProductImages'
import {ProductTabs} from '../../components/Product-tabs'
import {RelatedProducts} from '../../components/RelatedProducts'

export default function ProductDetails() {
    const productImages = [
        "/image/ProductImages/productImahge1.jpg?height=600&width=600",
        "/image/ProductImages/productImage2.jpg?height=600&width=600",
        "/image/ProductImages/productImage3.jpg?height=600&width=600",
        "/image/ProductImages/productImage4.jpg?height=600&width=600",
        "/image/ProductImages/productImage5.jpg?height=600&width=600",
    ]

    const specifications = [
        { label: "Brand", value: "Noise" },
        { label: "Colour", value: "Black" },
        { label: "Ear Placement", value: "In Ear" },
        { label: "Form Factor", value: "True Wireless" },
        { label: "Headphones Jack", value: "wireless" },
    ]

    const features = [
        "Up to 40-hour playtime: Dive into a marathon of music with an incredible 40-hour playtime.",
        "Quad Mic with ENC: Experience crystal-clear calls with Quad Mic and ENC in action.",
        "11mm Driver: Enjoy a powerful sound experience elevated with the precision of an 11mm driver.",
        "Ultra-low latency: Enjoy lag-free communication thanks to the ultra-low latency of up to 40ms.",
        "Instacharge: Top up your beats in just 10 minutes for a playtime of 120 minutes.",
    ]

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
                <span className="text-primary">Mobile & Computer Accessories</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column - Product Images */}
                <ProductImages images={productImages} />

                {/* Right Column - Product Info */}
                <div>
                    <h1 className="text-2xl md:text-2xl font-semibold mb-4">
                        NOISE BUDS N1 IN-EAR TRULY WIRELESS EARBUDS WITH CHROME FINISH, 40H OF PLAYTIME, QUAD MIC WITH ENC, ULTRA LOW LATENCY(UP TO 40 MS), INSTACHARGE(10 MIN=120 MIN), BT V5.3(CARBON BLACK)
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
                        <span className="text-3xl font-bold">₹899.00</span>
                        <span className="text-gray-500 line-through ml-2">₹3499.00</span>
                    </div>

                    {/* Specifications */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                        <dl className="grid grid-cols-2 gap-4">
                            {specifications.map(({ label, value }) => (
                                <div key={label}>
                                    <dt className="text-gray-600">{label}</dt>
                                    <dd className="font-medium">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* About This Item */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">ABOUT THIS ITEM</h2>
                        <ul className="space-y-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex gap-2">
                                    <span className="text-primary">•</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="text-primary hover:underline mt-4">
                            See more product details
                        </button>
                    </div>
                    <button className="bg-black text-white p-2 mt-4 hover:bg-gray-800 ">
                        BUY ON AMAZON
                    </button>

                    <ProductTabs/>

                </div>
            </div>
            <RelatedProducts/>
        </div>
    )
}

