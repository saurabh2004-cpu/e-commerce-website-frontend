'use client'

import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, X } from 'lucide-react'

import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"

export const HeaderCenter = () => {
  return (
    <div className="w-full py-6 bg-white border-b sm:px-32 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="w-full lg:w-1/4">
            <Link href="/" className="flex items-center justify-center sm:justify-start">
              <div className="relative w-12 h-12">
                <Image
                  src="/image/demo/logos/theme_logo.png"
                  alt="Market Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="ml-2 text-2xl font-bold text-gray-800">MARKET</span>
            </Link>
          </div>

          {/* Search */}
          <div className="w-full lg:w-2/4 ">
            <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex w-full h-[36px] ">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px] rounded-none bg-[#eeeeee]">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="apparel">Apparel</SelectItem>
                    <SelectItem value="cables">Cables & Connectors</SelectItem>
                    <SelectItem value="cameras">Cameras & Photo</SelectItem>
                    <SelectItem value="lights">Flashlights & Lamps</SelectItem>
                    <SelectItem value="mobile">Mobile Accessories</SelectItem>
                    <SelectItem value="games">Video Games</SelectItem>
                    <SelectItem value="jewelry">Jewelry & Watches</SelectItem>
                    <SelectItem value="earrings">Earings</SelectItem>
                    <SelectItem value="rings">Wedding Rings</SelectItem>
                    <SelectItem value="watches">Men Watches</SelectItem>
                  </SelectContent>
                </Select>
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 px-4 py-2 border"
                />
                <Button
                  type="submit"
                  className="px-6  hover:bg-[#f4a137]/90 text-white rounded-l-none"
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

