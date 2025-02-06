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


export const HeaderCenter = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();


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
        console.log("categories", response)
        setAllCategories(response.data.data)
      }
    } catch (error) {
      setError(error);
      console.error(error)
    }
  }

  //search product by keyword or filter
  const handleGetProductByKeywordOrFilter = async (e) => {
    e?.preventDefault()
    try {

      console.log("search", searchTerm)

      const response = await axios.get(`${host}/api/v1/products?search=${searchTerm}`,
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
        setSearchTerm("")
        router.push(`/product-details?id=${response.data.data[0]._id}`);
      }

    } catch (error) {
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
            <form className="flex w-full" onSubmit={handleGetProductByKeywordOrFilter}>
              <div className="relative flex w-full h-[36px]">
                <Select value={category} onValueChange={(value) => {
                  setCategory(value)
                  setSearchTerm(value)
                  handleGetProductByKeywordOrFilter()
                }}>
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

