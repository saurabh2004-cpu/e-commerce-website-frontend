'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImageLightboxCarousel } from './image-lightbox-carousel'
import { Maximize2 } from 'lucide-react'



export function ProductImages({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const selectImage = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative  aspect-square rounded-lg overflow-hidden mb-4">
        <Image
          src={images[currentIndex]}
          alt={`Product image ${currentIndex + 1}`}
          fill
          className="object-contain "
        />
        <button
          onClick={() => setShowLightbox(true)}
          className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
          aria-label="View full size"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="relative">
        <div className="flex sm:gap-4 overflow-x-auto scrollbar-hide md:p-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden ${
                index === currentIndex ? 'sm:ring-2 ring-primary' : ''
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <ImageLightboxCarousel
          images={images}
          currentIndex={currentIndex}
          onClose={() => setShowLightbox(false)}
          onPrevious={previousImage}
          onNext={nextImage}
        />
      )}
    </div>
  )
}

