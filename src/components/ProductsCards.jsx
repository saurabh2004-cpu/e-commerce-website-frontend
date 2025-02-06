'use client'

import { Heart, ArrowLeftRight, Star } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import { host } from '../lib/host'
import { useRouter } from 'next/navigation'

export default function ProductGrid({ title = "NEW PRODUCTS", propProducts = [] }) {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Cupim Bris",
  //     image: "/image/demo/shop/resize/J5-270x270.jpg?height=300&width=300&text=Cupim+Bris",
  //     secondImage: "/image/demo/shop/resize/J9-270x270.jpg?height=300&width=300&text=Cupim+Bris+2",
  //     rating: 4,
  //     price: 50.00,
  //     originalPrice: 62.00,
  //     discount: "-15%"
  //   },
  //   {
  //     id: 2,
  //     name: 'Apple Cinema 30"',
  //     image: "/image/demo/shop/resize/e11-270x270.jpg?height=300&width=300&text=Cupim+Bris",
  //     secondImage: "/image/demo/shop/resize/E3-270x270.jpg?height=300&width=300&text=Cupim+Bris+2",
  //     rating: 4,
  //     price: 50.00,
  //     originalPrice: 62.00,
  //     discount: "-15%"
  //   },
  //   {
  //     id: 3,
  //     name: "Cupim Bris",
  //     image: "/image/demo/shop/resize/B10-270x270.jpg?height=300&width=300&text=Cupim+Bris",
  //     secondImage: "/image/demo/shop/resize/B9-270x270.jpg?height=300&width=300&text=Cupim+Bris+2",
  //     rating: 4,
  //     price: 50.00,
  //     originalPrice: 62.00,
  //     discount: "-15%"
  //   },
  //   {
  //     id: 4,
  //     name: "Cisi Chicken",
  //     image: "/image/demo/shop/resize/w1-270x270.jpg?height=300&width=300&text=Cupim+Bris",
  //     secondImage: "/image/demo/shop/resize/w10-270x270.jpg?height=300&width=300&text=Cupim+Bris+2",
  //     price: 59.00,
  //     isNew: true
  //   }
  // ]

  const categories = ["JEWELRY & WATCHES", "ELECTRONICS", "SPORTS & OUTDOORS"]

  const [products, setProducts] = useState([])
  const router = useRouter()


  //navigate to product details 
  const handleNavigateToProductDetails = (productId) => {
    router.push(`/product-details?id=${productId}`);
  }


  //fetch products Get all products
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/products/get/all`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
          },
        },
      )
      // console.log("object", response)

      if (response.data.statusCode === 200) {
        setProducts(response.data.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useState(() => {

    if (!propProducts.length > 0) {
      fetchAllProducts()
    }
    setProducts(propProducts)
  }, [])


  if (!products) {
    return <h1>Loading</h1>
  }


  return (
    <div className="container mx-auto px-6 pt-32 sm:px-32 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md group">
            {/* Product Images with Hover Effect */}
            <div className="relative overflow-hidden">
              {/* Discount/New Badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm z-10">
                17%
              </span>

              {product?.isNew && (
                <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-md text-sm z-10">
                  NEW
                </span>
              )}

              <img
                src={product.thumbnail}
                alt={product.name}
                className="w-full h-[300px] object-cover transition-opacity duration-300 group-hover:opacity-0"

              />
              <div className="absolute inset-0 flex flex-col items-center justify-end">
                <img
                  src={product.images[0]}
                  alt={`${product.productDescriptionImage} - alternate view`}
                  className="w-full h-[300px] object-cover transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                  onClick={() => handleNavigateToProductDetails(product._id)}
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="p-2">
              <h3 className="text-lg font-medium mb-2">{product.name.slice(0, product.name.length - (product.name.length - 53)) + '...'}</h3>

              {/* Price */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl text-red-500">
                  ₹{Number(product.sellingPrice.toFixed(2)).toLocaleString('en-IN')}
                </span>
                {product.sellingPrice && (
                  <span className="text-gray-400 line-through">
                    ₹{Number(product.originalPrice.toFixed(2)).toLocaleString('en-IN')}
                  </span>
                )}
              </div>


              {/* Action Buttons */}
              <div className="flex gap-2">


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

