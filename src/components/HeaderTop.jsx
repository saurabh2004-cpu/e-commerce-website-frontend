'use client';
import React, { useState } from "react";
import { ChevronDown, User, Heart, ShoppingCart, CheckCheck } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export const HeaderTop = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <header className="w-full bg-gray-100 border-b text-gray-600 border-gray-200 sm:px-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm py-2">
          {/* Left Section */}
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 hover:bg-orange-400 hover:text-white px-2 py-1 transition-colors duration-200">
                  <Image
                    src="/image/demo/flags/gb.png"
                    alt="English"
                    width={24}
                    height={16}
                    className="rounded"
                  />
                  <span>English</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="#">
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/image/demo/flags/gb.png"
                        alt="English"
                        width={24}
                        height={16}
                        className="rounded"
                      />
                      <span>English</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">
                    <div className="flex items-center space-x-2">
                      <Image
                        src="/image/demo/flags/lb.png"
                        alt="Arabic"
                        width={24}
                        height={16}
                        className="rounded"
                      />
                      <span>Arabic</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Currency Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 hover:bg-orange-400 hover:text-white px-2 py-1 transition-colors duration-200">
                  <span>US Dollar</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="#">
                    <span>€ Euro</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">
                    <span>£ Pounds</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">
                    <span>$ US Dollar</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Account Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 hover:bg-orange-400 hover:text-white px-2 py-1 transition-colors duration-200">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">My Account</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/register">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Register</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/login">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>Login</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/"
              className="flex items-center justify-center w-8 h-8 hover:text-orange-400 transition-colors duration-200 relative"
              onMouseEnter={() => handleMouseEnter("Wish List")}
              onMouseLeave={handleMouseLeave}
            >
              <Heart className="h-4 w-4" />
            </Link>

            <Link
              href="/"
              className="flex items-center justify-center w-8 h-8 hover:text-orange-400 transition-colors duration-200 relative"
              onMouseEnter={() => handleMouseEnter("Checkout")}
              onMouseLeave={handleMouseLeave}
            >
              <CheckCheck className="h-4 w-4" />
            </Link>

            <Link
              href="/"
              className="flex items-center justify-center w-8 h-8 hover:text-orange-400 transition-colors duration-200 relative"
              onMouseEnter={() => handleMouseEnter("Shopping Cart")}
              onMouseLeave={handleMouseLeave}
            >
              <ShoppingCart className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
