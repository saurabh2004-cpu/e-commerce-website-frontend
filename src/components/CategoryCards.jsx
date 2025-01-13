'use client'

import { Gift, Sofa, Settings, Tent, Smartphone, ShoppingCartIcon as Shopping } from 'lucide-react'
import { Card, CardContent } from "../components/ui/card"

export default function CategoryCards() {
  const categories = [
    {
      title: "FURNITURE",
      icon: Sofa,
    },
    {
      title: "GIFT IDEA",
      icon: Gift,
    },
    {
      title: "COOL GADGETS",
      icon: Settings,
    },
    {
      title: "OUTDOOR ACTIVITIES",
      icon: Tent,
    },
    {
      title: "ACCESSORIES FOR",
      icon: Smartphone,
    },
    {
      title: "WOMEN WORLD",
      icon: Shopping,
    },
  ]

  return (
    <div className="container mx-auto px-6 sm:px-32 py-8">
      <h2 className="text-2xl font-bold mb-6">COLLECTIONS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 sm:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <Card 
            key={index}
            className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="p-4 rounded-full bg-gray-100 group-hover:bg-primary/10 transition-colors">
                  <category.icon className="w-8 h-8 text-gray-500 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

