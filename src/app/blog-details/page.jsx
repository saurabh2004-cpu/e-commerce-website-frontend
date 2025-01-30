'use client'
import { use, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Home, Calendar, Star, MessageCircle, User } from 'lucide-react'
import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { ImageCard } from '../../components/ImageCard'
import { host } from '../../lib/host.js'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'



export default function BlogDetails() {
  const [showLightbox, setShowLightbox] = useState(false)
  const [blog, setBlog] = useState({})
  const router = useRouter()

  const searchParams = useSearchParams();
  const blogId = searchParams.get('blogId')

  //fetch blog by id
  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/blogs/${blogId}`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
          },
        },
      )


      if (response.data.statusCode === 200) {
        console.log("blog details", response.data)
        setBlog(response.data.data)
      }

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBlog()
  }, [blogId])

  // categories
  const categories = [
    "Our Blog",
    "Demo Category 2",
    "Demo Category 3",
    "Demo Category 4",
    "Demo Category 5"
  ]

  const latestProducts = [
    {
      id: 1,
      name: "Sunt Molup",
      price: 100.00,
      image: "/image/demo/shop/product/m1.jpg?height=82&width=100",
      rating: 5
    },
    {
      id: 2,
      name: "Et Spare",
      price: 99.00,
      image: "/image/demo/shop/product/m2.jpg?height=82&width=100",
      rating: 4
    },
    {
      id: 3,
      name: "Cisi Chicken",
      price: 59.00,
      image: "/image/demo/shop/product/18.jpg?height=82&width=100",
      rating: 4
    },
    {
      id: 4,
      name: "Kevin Labor",
      price: 245.00,
      image: "/image/demo/shop/product/9.jpg?height=82&width=100",
      rating: 4
    }
  ]

  const renderRating = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            {index < rating ? (
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ) : (
              <Star className="w-4 h-4 text-gray-300" />
            )}
          </span>
        ))}
      </div>
    )
  }

  if (!blog) {
    return <h1>Loading ...</h1>
  }
  
  return (<>
    <div className="container mx-auto px-4 md:px-32 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-[#f4a137]">
          <Home className="w-4 h-4" />
        </Link>
        <span>/</span>
        <Link href="/blog" className="text-primary hover:text-[#f4a137]">Blog</Link>
        <span>/</span>
        <Link href="/blog" className="text-primary hover:text-[#f4a137]">{blog.title}</Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Left Sidebar */}
        <aside className="lg:col-span-1">
          {/* Blog Categories */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Blog Category</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className={`block p-2 rounded transition-colors hover:text-[#f4a137]`}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Products */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Latest Product</h3>
            <div className="space-y-4">
              {latestProducts.map((product) => (
                <div key={product.id} className="flex gap-4 group">
                  <div className="relative w-24 h-20 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover border border-transparent hover:border-[#f4a137] transition-all "
                    />
                  </div>
                  <div>
                    <h4 className="font-medium hover:text-primary">
                      <Link href="#">{product.name}</Link>
                    </h4>
                    <p className="text-primary font-semibold">${product.price.toFixed(2)}</p>
                    {renderRating(product.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <article className="w-fulln lg:col-span-3">
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              {blog.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Post by: <a href="#" className="text-primary hover:underline">Admin</a></span>
              </div>
              <div className="flex items-center gap-2">
                {/* <Calendar className="w-4 h-4" />
                <span>
                  Created Date: {blog.createdAt.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span> */}
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>0 Comments</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden"
            onClick={() => setShowLightbox(true)}
          >
            <Image
              src={blog.detailImage}
              alt="blog-img"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12 flex flex-col gap-6">
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
            >
            </div>
          </div>

          {/* Comment Form */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6">Leave your comment</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-semibold block">
                      Your Name:
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="comment" className="font-semibold block">
                    Your Comment:
                  </label>
                  <Textarea
                    id="comment"
                    name="comment"
                    rows={6}
                    required
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500">Note: HTML is not translated!</p>
                </div>

                <div className="space-y-2 max-w-sm">
                  <label htmlFor="captcha" className="font-semibold block">
                    Enter the code in the box below:
                  </label>
                  <Input
                    id="captcha"
                    name="captcha"
                    type="text"
                    required
                    className="w-full"
                  />
                  <div className="mt-2">
                    <Image
                      src="/image/demo/content/captcha.jpg?height=50&width=150"
                      alt="Captcha"
                      width={150}
                      height={50}
                      className="border rounded"
                    />
                  </div>
                </div>

                <Button type="submit" className="px-8">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>

    {showLightbox && (
      <ImageCard
        image="/image/demo/blog/blog4.jpg?height=800&width=1200"
        alt="Kire tuma demonstraverunt lector"
        onClose={() => setShowLightbox(false)}
      />
    )}
  </>
  )
}

