'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Eye } from 'lucide-react'
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"



export const RelatedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      id: 1,
      name: "Redmi A3 (Olive Green, 6GB RAM, 128GB Storage) | Premium Halo Design | 90Hz Display | Powerful 4G G36 Processor",
      image: "/image/ProductImages/related1.jpg?height=400&width=400",
      price: 8999.00,
      originalPrice: 11999.00,
      category: "Mobile & Computer Accessories",
      slug: "redmi-a3"
    },
    {
      id: 2,
      name: "Noise Buds N1 in-Ear Truly Wireless Earbuds with Chrome Finish, 40H of Playtime, Quad Mic with ENC",
      image: "/image/ProductImages/related2.jpg?height=400&width=400",
      price: 899.00,
      originalPrice: 3499.00,
      category: "Mobile & Computer Accessories",
      slug: "noise-buds-n1"
    },
    {
      id: 3,
      name: "SanDisk Ultra 128GB microSDXC UHS-I, 140MB/s R, Memory Card, 10 Y Warranty, for Smartphones",
      image: "/image/ProductImages/related2.jpg?height=400&width=400",
      price: 999.00,
      originalPrice: 2999.00,
      category: "Mobile & Computer Accessories",
      slug: "sandisk-ultra-128gb"
    },
    {
      id: 4,
      name: "boAt Rockerz 205 Pro in Ear Bluetooth Neckband with Mic, Beast Mode(Low Latency Upto 65ms)",
      image: "/image/ProductImages/related3.jpg?height=400&width=400",
      price: 998.00,
      originalPrice: 2499.00,
      category: "Mobile & Computer Accessories",
      slug: "boat-rockerz-205"
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">RELATED PRODUCTS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <Link
                  href={`/product/${product.slug}`}
                  className="text-sm font-medium line-clamp-2 hover:text-primary transition-colors"
                >
                  {product.name}
                </Link>

                <div className="mt-2 space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold">₹{product.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{product.category}</p>
                </div>
              </div>

              {/* Quick View Button - Appears on Hover */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <Button
                  variant="default"
                  className="w-full rounded-none bg-black hover:bg-gray-800"
                  onClick={() => setSelectedProduct(product)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  QUICK VIEW
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick View Dialog */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedProduct.name}</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="relative aspect-square">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold">₹{selectedProduct.price.toFixed(2)}</span>
                        <span className="text-gray-500 line-through">
                          ₹{selectedProduct.originalPrice.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{selectedProduct.category}</p>
                    </div>
                    <Button className="w-full">Add to Cart</Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

