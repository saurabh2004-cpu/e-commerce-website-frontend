'use client'

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, DollarSign, Truck, Calendar, Umbrella } from 'lucide-react';
import { useEffect, useState,  } from 'react';

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

const promotionalBanners = [
  {
    src: '/image/demo/cms/banner1.jpg?height=200&width=300',
    alt: 'Watches up to 25% off',
    title: 'WATCHES',
    discount: '25% OFF'
  },
  {
    src: '/image/demo/cms/banner2.jpg?height=200&width=300',
    alt: 'Jewelry save 40% off',
    title: 'JEWELRY',
    discount: '40% OFF'
  },
  {
    src: '/image/demo/cms/banner3.jpg?height=200&width=300',
    alt: 'New Arrivals',
    title: 'NEW ARRIVALS',
    cta: 'BUY NOW'
  }
];

const features = [
  
  {
    icon: <Truck className="h-6 w-6" />,
    title: 'In-store',
    subtitle: 'exchange'
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'lowest price',
    subtitle: 'guarantee'
  },
  {
    icon: <Umbrella className="h-6 w-6" />,
    title: 'shopping',
    subtitle: 'guarantee'
  }
];

export function BlockSpotLight1() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <section className="w-full bg-white px-2 sm:px-32 sm:pl-[400px] py-6">
      <div className="container mx-auto">
        {/* Top Search Keywords */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <h5 className="font-medium">Top Search:</h5>
            <ul className="flex flex-wrap gap-2 overflow-x-auto">
              {topSearchKeywords.map((keyword, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#f4a137]">
                    {keyword}{index < topSearchKeywords.length - 1 ? ',' : ''}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Slider */}
          <div className="md:col-span-8 relative">
            <div className="relative h-[300px] md:h-[410px] overflow-hidden">
              {sliderImages.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 text-white">
                      <button className="bg-[#f4a137] hover:bg-[#f4a137]/90 px-4 py-2 text-sm md:px-6 md:py-2 rounded-md font-medium">
                        {slide.cta}
                      </button>
                    </div>
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
            {promotionalBanners.map((banner, index) => (
              <div key={index} className="relative h-[100px] md:h-[136px] overflow-hidden group">
                <Image
                  src={banner.src}
                  alt={banner.alt}
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
