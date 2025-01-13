'use client'

import { Button } from "../components/ui/button"
import { ChevronRight } from 'lucide-react'

export default function HotCategories() {
  const categories = [
    {
      title: "AUTOMOTIVE & MOTORCYCLE",
      image: "/image/demo/shop/category/automotive-motocrycle.jpg?height=150&width=200&text=Automotive",
      subcategories: [
        "More Car Accessories",
        "Car Alarms and Security",
        "Car Audio & Speakers",
        "Gadgets & Auto Parts"
      ]
    },
    {
      title: "HEALTH & BEAUTY",
      image: "/image/demo/shop/category/health-beauty.jpg?height=150&width=200&text=Health",
      subcategories: [
        "Salon & Spa Equipment",
        "Fragrances",
        "Shaving & Hair Removal",
        "Bath & Body"
      ]
    },
    {
      title: "HOLIDAY SUPPLIES & GIFTS",
      image: "/image/demo/shop/category/bags-holiday-supplies-gifts.jpg?height=150&width=200&text=Holiday",
      subcategories: [
        "Gift & Lifestyle Gadgets",
        "Lighter & Cigar Supplies",
        "Gift for Woman",
        "Gift for Man"
      ]
    },
    {
      title: "TOYS & HOBBIES",
      image: "/image/demo/shop/category/toys-hobbies.jpg?height=150&width=200&text=Toys",
      subcategories: [
        "Helicopters & Parts",
        "RC Cars & Parts",
        "FPV System & Parts",
        "Walkera"
      ]
    },
    {
      title: "ELECTRONICS",
      image: "/image/demo/shop/category/electronics.jpg?height=150&width=200&text=Electronics",
      subcategories: [
        "Home Audio",
        "Mp3 Players & Accessories",
        "Headphones, Headsets",
        "Battereries & Chargers"
      ]
    },
    {
      title: "JEWELRY & WATCHES",
      image: "/image/demo/shop/category/jewelry-watches.jpg?height=150&width=200&text=Jewelry",
      subcategories: [
        "Men Watches",
        "Wedding Rings",
        "Earings",
        "Accessories"
      ]
    },
    {
      title: "SPORTS & OUTDOORS",
      image: "/image/demo/shop/category/sports-outdoors.jpg?height=150&width=200&text=Sports",
      subcategories: [
        "Outdoor & Traveling",
        "Camping & Hiking",
        "Golf Supplies",
        "Fishing"
      ]
    },
    {
      title: "SMARTPHONES & TABLETS",
      image: "/image/demo/shop/category/smartphone-tablets.jpg?height=150&width=200&text=Smartphones",
      subcategories: [
        "Accessories for iPhone",
        "Accessories for i Pad",
        "Accessories for Tablet PC",
        "Screen Protectors"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 sm:px-32 py-8">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">HOT CATEGORIES</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm  transition-shadow duration-300">
            <div className="p-4">
              {/* Category Header */}
              <div className="flex justify-between items-start mb-4">
                
                <Button 
                  variant="ghost"
                  size="sm"
                  className="text-orange-500 hover:text-white hover:bg-orange-500 transition-colors group"
                >
                  VIEW MORE
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Category Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[150px] object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Subcategories */}
              <ul className="space-y-2">
                {category.subcategories.map((subcategory, idx) => (
                  <li key={idx}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-orange-500 transition-colors flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                      {subcategory}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

