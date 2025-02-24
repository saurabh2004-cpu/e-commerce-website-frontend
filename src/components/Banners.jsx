'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import { host } from "../lib/host"


export default function Banners() {
  // const banners = [
  //   {
  //     title: "SKI ACCESSORIES",
  //     subtitle: "Duis autem vel eum irure dolor in hendrerit in vulputate",
  //     buttonText: "SHOP NOW",
  //     image: "/image/demo/cms/banner2-1.png?height=400&width=600&text=Ski+Accessories",
  //     type: "large"
  //   },
  //   {
  //     title: "SPRING SUMMER",
  //     subtitle: "TOP SELLERS",
  //     highlight: "50% OFF",
  //     image: "/image/demo/cms/banner2-2.png?height=200&width=600&text=Spring+Summer",
  //     type: "small"
  //   },
  //   {
  //     title: "SAVE",
  //     subtitle: "ON DISPLAY MODEL TABLETS",
  //     highlight: "UP TO 60%",
  //     image: "/image/demo/cms/banner2-3.png?height=200&width=600&text=Tablets",
  //     type: "small"
  //   },
  //   {
  //     title: "IPOD & MP3",
  //     subtitle: "CHOOSE STYLISH WAYS TO PROTECT YOUR IPOD",
  //     image: "/image/demo/cms/banner2-4.png?height=400&width=600&text=iPod",
  //     type: "large"
  //   }
  // ]

  const [banners, setBanners] = useState([])

  const fetchBanners = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/banners/get`, {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
        }
      })

      // console.log("respose banners", response)

      if (response.data.statusCode === 200) {
        setBanners(response.data.data)
      }
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    fetchBanners()
  },[])



  return (
    <div className="container mx-auto p-4 p-6 sm:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Banner */}
        <div className="relative group overflow-hidden rounded-lg">
          <a href="#" className="block relative">
            <img
              src={banners[0]?.image}
              alt='banner-img'
              className="w-full h-full object-cover"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
              <div>
              </div>
              
            </div>
          </a>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-4">
          {banners.slice(1, 3).map((banner, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg h-[175px]">
              <a href="#" className="block relative h-full">
                <img
                  src={banner?.image}
                  alt='banner-img'
                  className="w-full h-full object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </div>
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center">

                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Right Banner */}
        <div className="relative group overflow-hidden rounded-lg">
          <a href="#" className="block relative">
            <img
              src={banners[3]?.image}
              alt='banner-img'
              className="w-full h-full object-cover"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>

          </a>
        </div>
      </div>
    </div>
  )
}

