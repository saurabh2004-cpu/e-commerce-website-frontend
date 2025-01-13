'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Star } from 'lucide-react'
import Image from "next/image"



export function ProductTabs() {

  const technicalDetails = [
    { label: "Model Name", value: "Buds N1" },
    { label: "Connectivity Technology", value: "Wireless" },
    { label: "Wireless Communication Technology", value: "Bluetooth" },
    { label: "Special Feature", value: "Sweatproof, Lightweight, Rechargeable Battery, Fast Charging, Microphone Included" },
    { label: "Included Components", value: "1N Bluetooth Headphone, 1N Charging Case, 1N Charging Cable, 1N User Manual, 1N Warranty Registration Card" },
    { label: "Age Range (Description)", value: "Adult" },
    { label: "Material", value: "Polycarbonate (PC)" },
    { label: "Specific Uses For Product", value: "Entertainment" },
    { label: "Compatible Devices", value: "Cellphones, Tablets, Laptops" },
    { label: "Control Type", value: "Media Control" },
    { label: "Cable Feature", value: "Without Cable" },
    { label: "Item Weight", value: "50 Grams" },
    { label: "Water Resistance Level", value: "Water Resistant" },
    { label: "Net Quantity", value: "1 Piece" },
    { label: "Style", value: "Modern" },
    { label: "Battery Life", value: "40 Hours" },
    { label: "Bluetooth Range", value: "10 Metres" },
  ]

  return (
    <Accordion type="single" collapsible className="w-full mt-8">
      <AccordionItem value="description">
        <AccordionTrigger className="text-lg font-semibold">DESCRIPTION</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-8">

            <div className="bg-[#FFFFE0] rounded-lg overflow-hidden">
              <Image
                src="/image/ProductImages/productImage2.jpg?height=300&width=600"
                alt="Rock On Feature"
                width={600}
                height={300}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">ROCK ON ALL DAY AND NIGHT</h3>
                <p className="text-gray-600">
                  Binge your playlists with an incredible 40-hour playtime. From morning workouts
                  to late-night jam sessions, never let the music stop.
                </p>
              </div>
            </div>
            <div className="bg-[#FFFFE0] rounded-lg overflow-hidden">
              <Image
                src="/image/ProductImages/productImage3.jpg?height=300&width=600"
                alt="Rock On Feature"
                width={600}
                height={300}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">ROCK ON ALL DAY AND NIGHT</h3>
                <p className="text-gray-600">
                  Binge your playlists with an incredible 40-hour playtime. From morning workouts
                  to late-night jam sessions, never let the music stop.
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="information">
        <AccordionTrigger className="text-lg font-semibold">INFORMATION</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-8">
            {/* Product Image */}
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/image/ProductImages/productImage4.jpg?height=600&width=600"
                alt="Product Information"
                fill
                className=" sm:object-cover"
              />
            </div>

            {/* Technical Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 gap-4">
                {technicalDetails.map((detail, index) => (
                  <div key={index} className="border-b pb-2">
                    <dt className="text-gray-600 text-sm">{detail.label}</dt>
                    <dd className="font-medium">{detail.value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="reviews">
        <AccordionTrigger className="text-lg font-semibold">REVIEWS</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-6">
            {/* Current Reviews Summary */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-5 h-5 text-gray-300" />
              </div>
              <span className="text-gray-600">Based on 3 reviews</span>
            </div>

            {/* Review Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        className="text-gray-300 hover:text-yellow-400"
                      >
                        <Star className="w-6 h-6" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Review
                </label>
                <Textarea
                  id="message"
                  placeholder="Write your review here..."
                  className="min-h-[100px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Submit Review
              </Button>
            </form>

            {/* Existing Reviews */}
            <div className="border-t pt-6 mt-6">
              <h3 className="font-semibold mb-4">Previous Reviews</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">John D. - Verified Buyer</span>
                  </div>
                  <p className="text-gray-700">
                    Great sound quality and battery life is amazing. The fit is comfortable for long listening sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

