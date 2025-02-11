"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { host } from "../lib/host";
import { useRouter } from "next/navigation";

export default function ProductGrid({ title = "NEW PRODUCTS", propProducts = [] }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleNavigateToProductDetails = (productId) => {
    router.push(`/product-details?id=${productId}`);
  };

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/products/get/all`, {
        withCredentials: true,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.data.statusCode === 200) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (!propProducts.length) {
      fetchAllProducts();
    } else {
      setProducts(propProducts);
      setLoading(false);
    }

  }, [products,propProducts]);

  return (
    <div className="container mx-auto px-6 pt-32 sm:px-32 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-m sm:text-2xl sm:font-semibold !important">{title}</h2>
      </div>

      {/* Product Grid or Skeleton Loader */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => <ProductSkeleton key={index} />)
        ) : products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-md group">
              {/* Product Images with Hover Effect */}
              <div className="relative overflow-hidden  min-h-[300px]">
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
                  className="w-full h-[300px] object-cover-cover- transition-opacity duration-300 group-hover:opacity-0"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end">
                  <img
                    src={product.images[0]}
                    alt={`${product.productDescriptionImage} - alternate view`}
                    className="w-full h-[300px] object-cover-cover transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                    onClick={() => handleNavigateToProductDetails(product._id)}
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-2 flex flex-col justify-between h-[130px]">
                <h3 className="text-lg font-medium mb-2">
                  {product.name.length > 53 ? product.name.slice(0, 53) + "..." : product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl text-red-500">
                    ₹{Number(product.sellingPrice.toFixed(2)).toLocaleString("en-IN")}
                  </span>
                  {product.sellingPrice && (
                    <span className="text-gray-400 line-through">
                      ₹{Number(product.originalPrice.toFixed(2)).toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

function ProductSkeleton() {
  return (
    <div className="bg-gray-200 animate-pulse p-4 rounded-md shadow-md">
      <div className="w-full h-[300px] bg-gray-300 rounded-md mb-4"></div>
      <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
    </div>
  );
}
