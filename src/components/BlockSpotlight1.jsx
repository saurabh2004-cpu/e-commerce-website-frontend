'use client'

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, DollarSign, Truck, Calendar, Umbrella } from 'lucide-react';
import { useEffect, useState, } from 'react';
import axios from 'axios';
import { host } from '../lib/host';

const topSearchKeywords = [
  'Acer', 'APPLE', 'Black', 'Canon', 'Cogs', 'Confi', 'Kate', 'Lor', 'Product',
  'Zolof The Rock And Roll Destroyer'
];

const sliderImages = [
  {
    src: '/image/demo/slider/slider-1.png?height=600&width=800',
    alt: 'New Range of Smartphone',
    title: 'Our New Range of Smartphone',
    cta: 'Buy Now'
  },
  {
    src: '/image/demo/slider/slider-2.png?height=600&width=800',
    alt: 'slider2',
    title: 'Latest Smartphones',
    cta: 'Shop Now'
  },
  {
    src: '/image/demo/slider/slider-3.png?height=600&width=800',
    alt: 'slider3',
    title: 'Special Offers',
    cta: 'Learn More'
  }
];

// const promotionalBanners = [
//   {
//     src: '/image/demo/cms/banner1.jpg?height=200&width=300',
//     alt: 'Watches up to 25% off',
//     title: 'WATCHES',
//     discount: '25% OFF'
//   },
//   {
//     src: '/image/demo/cms/banner2.jpg?height=200&width=300',
//     alt: 'Jewelry save 40% off',
//     title: 'JEWELRY',
//     discount: '40% OFF'
//   },
//   {
//     src: '/image/demo/cms/banner3.jpg?height=200&width=300',
//     alt: 'New Arrivals',
//     title: 'NEW ARRIVALS',
//     cta: 'BUY NOW'
//   }
// ];

// const features = [

//   {
//     icon: <Truck className="h-6 w-6" />,
//     title: 'In-store',
//     subtitle: 'exchange'
//   },
//   {
//     icon: <Calendar className="h-6 w-6" />,
//     title: 'lowest price',
//     subtitle: 'guarantee'
//   },
//   {
//     icon: <Umbrella className="h-6 w-6" />,
//     title: 'shopping',
//     subtitle: 'guarantee'
//   }
// ];

export function BlockSpotLight1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [banners, setBanners] = useState([])

  //fetch banners
  const fetchBanners = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/banners/get`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
          },
        },
      )

      if (response.data.statusCode === 200) {
        // console.log("banners", response.data.data)
        setBanners(response.data.data)
      }

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBanners()
  }, [])




  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <section className="w-full bg-white px-2 sm:px-32 sm:pl-[400px] ">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Slider */}
          <div className="md:col-span-8 relative">
            <div className="relative h-[300px] md:h-[510px] overflow-hidden">
              {banners.map((banner, index) => (
                <div
                  key={banner._id}
                  className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <Image
                    src={banner.image}
                    alt='banner'
                    fill
                    className="object-cover-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    
                  </div>
                </div>
              ))}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
          </div>

          {/* Right Side Banners */}
          <div className="md:col-span-4 grid gap-4 hidden sm:block">
            {banners && banners.map((image, index) => (
              <div key={index} className="relative h-[100px] md:h-[170px] overflow-hidden group">
                <Image
                  src={image.image}
                  alt="banner Img"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
