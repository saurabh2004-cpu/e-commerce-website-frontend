'use client'

import Image from "next/image"
import Link from "next/link"
import { Search, X } from 'lucide-react'

import { Button } from "../components/ui/button"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { useEffect, useState } from "react"

import { host } from '../lib/host'
import { useRouter } from "next/navigation"
import axios from "axios"
import { useToast } from "../../@/hooks/use-toast"


export const HeaderCenter = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { toast } = useToast();


  //fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/categories/get/names`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
          },
        }
      )

      if (response.status === 200) {
        // console.log("categories", response)
        setAllCategories(response.data.data)
      }else if(response.status===200 && response.data.data.length === 0){
        toast({
          title: 'Error',
          description: "Error while fetching product categories",
          duration: 3000,
        })
      }

    } catch (error) {
      setError(error);
      console.error(error)
      toast({
        title: 'Error',
        description: "Error while fetching product categories",
        duration: 3000,
      })
    }
  }

  //search product by keyword 
  const handleGetProductByKeyword = async (e, query) => {
    e?.preventDefault();
    try {

      console.log("search", query)

      const response = await axios.get(`${host}/api/v1/products?search=${query}`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
          },
        }
      )
      console.log("searched", response)

      if (response.data.statusCode === 200 && response.data.data.length > 0) {

        setProduct(response.data.data[0])
        router.push(`/product-details?id=${response.data.data[0]._id}`);

      }

      toast({
        title: "No Products Found",
        description: "No product found with this search",
        duration: 3000,
      })

    } catch (error) {
      toast({
        title: "Error",
        description: "Error while searching product",
        duration: 3000,
      })
      console.error(error)
    }
  }

  //search product by Filter
  const handleGetProductByFilter = async (category) => {
    try {

      console.log("search", category)

      const response = await axios.get(`${host}/api/v1/products?search=${category}`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
          },
        }
      )
      console.log("searched", response)

      if (response.data.statusCode === 200 && response.data.data.length > 0) {

        const serializedProducts = encodeURIComponent(JSON.stringify(response.data.data));
        router.push(`/products?category=${category}&&products=${serializedProducts}`);
      }

      toast({
        title: "No Products Found",
        description: "No product found with this search",
        duration: 3000,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Error while searching product",
        duration: 3000,
      })
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);



  return (
    <div className="w-full py-6 bg-white border-b sm:px-32 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="w-full lg:w-1/4">
            <Link href="/" className="flex items-center justify-center sm:justify-start">
              <div className="relative w-450 h-220">
                <Image
                  src="/image/demo/logos/theme_logo.png"
                  alt="Market Logo"
                  width={208}
                  height={48}
                  // className="object-contain"
                  priority
                />
              </div>
              {/* <span className="ml-2 text-2xl font-bold text-gray-800">MARKET</span> */}
            </Link>
          </div>

          {/* Search */}
          <div className="w-full lg:w-2/4">
            <form className="flex w-full" onSubmit={(e) => handleGetProductByKeyword(e, searchTerm)}>
              <div className="relative flex w-full h-[36px]">
                <Select
                  value={category}
                  onValueChange={(value) => {
                    setCategory(value);
                    handleGetProductByFilter(value);
                  }}
                >
                  <SelectTrigger className="w-[140px] sm:w-[180px] rounded-none bg-[#eeeeee]">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {allCategories.map((cat) => (
                      <SelectItem
                        key={cat._id}
                        value={cat.name}
                      >
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[140px] flex-1 px-4 py-2 border"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                  type="submit"
                  className="px-6 hover:bg-[#f4a137]/90 text-white rounded-l-none"
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/4 flex justify-center sm:justify-end"></div>
        </div>
      </div>
    </div>
  )
}

