'use client'

import { Card, CardContent } from "../../components/ui/card"
import { Home } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Rss, Facebook, Twitter, Globe } from 'lucide-react'



export default function AboutUs() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
      name: "Jennifer Lawrence",
      role: "Co Founder"
    },
  ]

  const teamMembers = [
    {
      id: 1,
      image: "/image/demo/about/ourmember01.png?height=400&width=300",
      name: "Helen Mirren",
      role: "Co Founder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum",
    },
    {
      id: 2,
      image: "/image/demo/about/ourmember02.png?height=400&width=300",
      name: "Kate Winslet",
      role: "Co Founder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum",
      
    },
    {
      id: 3,
      image: "/image/demo/about/ourmember03.png?height=400&width=300",
      name: "liam DiCaprio",
      role: "Co Founder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum",
      
    },
    {
      id: 4,
      image: "/image/demo/about/ourmember04.png?height=400&width=300",
      name: "Charlize Theron",
      role: "Co Founder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum",
      
    },
    {
      id: 5,
      image: "/image/demo/about/ourmember01.png?height=400&width=300",
      name: "Victoria Beckham",
      role: "Co Founder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum",
      
    },
    {
      id: 6,
      image: "/image/demo/about/ourmember03.png?height=400&width=300",
      name: "Nicole Kidman",
      role: "Co Founder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum",
   
    },
  ]

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === teamMembers.length ? 0 : prevIndex + 1
    )
  }

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? teamMembers.length - 1 : prevIndex - 1
    )
  }

  const visibleMembers = () => {
    const items = []
    let current = currentIndex

    const itemsToShow = {
      default: 1, // mobile
      md: 2,      // tablet
      lg: 4       // desktop
    }

    for (let i = 0; i < itemsToShow.lg; i++) {
      items.push(teamMembers[current])
      current = (current + 1) % teamMembers.length
    }

    return items
  }
  const visibleMembersMobile = () => {
    const items = []
    let current = currentIndex

    const itemsToShow = {
      default: 1, // mobile
      md: 2,      // tablet
      lg: 4       // desktop
    }

    for (let i = 0; i < itemsToShow.default; i++) {
      items.push(teamMembers[current])
      current = (current + 1) % teamMembers.length
    }

    return items
  }

  return (
    <div className="container mx-auto px-4  sm:px-32 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm">
        <Link href="/" className="text-gray-500 hover:text-primary">
          <Home className="h-4 w-4" />
        </Link>
        <span className="mx-2">/</span>
        <Link href="/AboutUs " className="text-gray-500 hover:text-primary">Page</Link>
        <span className="mx-2">/</span>
        <span className="text-primary">About Us</span>
      </nav>

      {/* About Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="relative h-[400px] lg:h-full">
          <Image
            src='/image/demo/about/wellcometoshop.png'
            alt="About Us"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            About Us
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></span>
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
            <p>Nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-center relative inline-block">
          What Clients Say
          <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></span>
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 italic mb-6">{testimonials[activeTestimonial].text}</p>
          <h3 className="font-semibold">{testimonials[activeTestimonial].name}</h3>
          <p className="text-gray-500">{testimonials[activeTestimonial].role}</p>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full ${idx === activeTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12 italic">Our Team</h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Team Members Grid desktop */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleMembers().map((member) => (
              <Card key={member.id} className="overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-[300px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover "
                  />
                </div>
                <CardContent className="text-center p-6">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary italic">— {member.role} —</p>
                  <p className="text-gray-600 text-sm mt-2">{member.description}</p>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-3 mt-4">
                    <a
                      href="#"
                      className="bg-orange-400 p-2 rounded-full text-white hover:bg-orange-500 transition-colors"
                      aria-label="RSS Feed"
                    >
                      <Rss className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition-colors"
                      aria-label="Facebook Profile"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="bg-sky-500 p-2 rounded-full text-white hover:bg-sky-600 transition-colors"
                      aria-label="Twitter Profile"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="bg-red-500 p-2 rounded-full text-white hover:bg-red-600 transition-colors"
                      aria-label="Website"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Team Members Grid mobile */}
          <div className="sm:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleMembersMobile().map((member) => (
              <Card key={member.id} className="overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-[300px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover "
                  />
                </div>
                <CardContent className="text-center p-6">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary italic">— {member.role} —</p>
                  <p className="text-gray-600 text-sm mt-2">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

