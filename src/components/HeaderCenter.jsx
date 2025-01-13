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

          {/* Cart */}
          <div className="w-full lg:w-1/4 flex justify-center sm:justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center space-x-4 hover:text-[#f4a137] transition-colors h-auto p-2 mt-4"
                >
                  <div className="relative">
                    <ShoppingCart className="h-10 w-10 text-[#f4a137]" />
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#f4a137] text-white text-xs flex items-center justify-center">
                      2
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">MY CART</p>
                    <p className="text-sm text-gray-600">2 item(s) - $1,262.00</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[300px] p-4">
                <div className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-2">
                    {/* Item 1 */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Filet Mign"
                        width={50}
                        height={50}
                        className="rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Filet Mign</p>
                        <p className="text-sm text-gray-500">1 x $1,202.00</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-red-500"
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                    {/* Item 2 */}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Canon EOS 5D"
                        width={50}
                        height={50}
                        className="rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Canon EOS 5D</p>
                        <p className="text-sm text-gray-500">1 x $60.00</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-red-500"
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>
                  </div>

                  {/* Cart Summary */}
                  <div className="border-t pt-2">
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Sub-Total</span>
                        <span>$1,060.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Eco Tax (-2.00)</span>
                        <span>$2.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>VAT (20%)</span>
                        <span>$200.00</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>$1,262.00</span>
                      </div>
                    </div>
                  </div>

                  {/* Cart Actions */}
                  <div className="flex gap-2">
                    <Link
                      href="/cart"
                      className="flex-1 px-4 py-2 text-center hover:bg-[#f4a137] rounded-md text-sm"
                    >
                      View Cart
                    </Link>
                    <Link
                      href="/checkout"
                      className="flex-1 px-4 py-2 text-center  hover:bg-[#f4a137]/90 text-black rounded-md text-sm"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}

