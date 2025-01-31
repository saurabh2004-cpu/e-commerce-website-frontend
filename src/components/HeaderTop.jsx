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
        <div className="flex flex-col sm:flex-row items-end justify-end text-sm py-2">
          

         
        </div>
      </div>
    </header>
  );
};
