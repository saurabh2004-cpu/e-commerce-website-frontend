'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Home, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { host } from '../../lib/host.js'
import { set } from 'zod'



export default function BlogPage() {

  // const latestProducts = [
  //   {
  //     id: 1,
  //     name: "Sunt Molup",
  //     price: 100.00,
  //     image: "/image/demo/shop/product/m1.jpg?height=82&width=100",
  //     rating: 5
  //   },
  //   {
  //     id: 2,
  //     name: "Et Spare",
  //     price: 99.00,
  //     image: "/image/demo/shop/product/m2.jpg?height=82&width=100",
  //     rating: 4
  //   },
  //   {
  //     id: 3,
  //     name: "Cisi Chicken",
  //     price: 59.00,
  //     image: "/image/demo/shop/product/18.jpg?height=82&width=100",
  //     rating: 4
  //   },
  //   {
  //     id: 4,
  //     name: "Kevin Labor",
  //     price: 245.00,
  //     image: "/image/demo/shop/product/9.jpg?height=82&width=100",
  //     rating: 4
  //   }
  // ]

  const [allBlogs, setAllBlogs] = useState([])
  const [latestProducts, setLatestProducts] = useState([])
  const [pageNo, setPageNo] = useState(1)

  //fetch products Get all products
  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/products/get/all`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
          },
        },
      )
      // console.log("object", response)

      if (response.data.statusCode === 200) {
        setLatestProducts(response.data.data.splice(0, 4))
      }
    } catch (error) {
      console.error(error)
    }
  }

  //fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/blogs/get/all`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
          },
        }
      )

      if (response.data.statusCode === 200) {
        console.log("object", response.data.data)
        setAllBlogs(response.data.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBlogs()
    fetchAllProducts()
  }, [])

  if(!allBlogs.length>0 && !latestProducts.length) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4 md:px-32 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-primary">
          <Home className="w-4 h-4" />
        </Link>
        <span>/</span>
        <Link href="/blog" className="text-primary">Blog</Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Left Sidebar */}
        <aside className="lg:col-span-1">
          {/* Latest Products */}
          <div>
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Latest Product</h3>
            <div className="space-y-4">
              {latestProducts.map((product) => (
                <div key={product._id} className="flex gap-4 group">
                  <div className="relative w-24 h-20 overflow-hidden">
                    <Image
                      src={product.thumbnail}
                      alt='product-img'
                      fill
                      className="object-cover border border-transparent hover:border-[#f4a137] transition-all "
                    />
                  </div>
                  <div>
                    <h4 className="font-medium hover:text-primary">
                      <Link href={`/product-details?id=${product._id}`}>{product.name.slice(0, product.name.length - (product.name.length - 53)) + '...'}</Link>
                    </h4>
                    <p className="text-primary font-semibold">${product.sellingPrice.toFixed(2).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 ">Our Blog</h1>
          </div>

          {/* Blog Posts */}
          <div className="space-y-8">
            {allBlogs.map((blog) => (
              <article key={blog._id} className="grid md:grid-cols-3 gap-6">
                <div className="relative h-60 md:h-full overflow-hidden group">
                  <Image
                    src={blog.thumbnail}
                    alt='blog-img'
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-xl font-semibold mb-2 hover:text-[#f4a137]">
                    <Link href={`/blog-details?blogId=${blog._id}`}>
                      {blog.title}
                    </Link>
                  </h2>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    {/* <Calendar className="w-4 h-4" />
                    {String(blog.createdAt)} */}
                  </div>
                  <p
                    className="text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: blog?.content }}
                  >

                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {blog?.comments &&
                      <Link href="#" className="hover:text-primary">
                        {post.comments} Comments
                      </Link>
                    }

                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-left gap-2 mt-12">
          {pageNo > 1 && <button
              className=
              "w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100"
              onClick={() => setPageNo(pageNo - 1)}
            >
              | &lt;
            </button>}
            <button
              className={`w-8 h-8 flex items-center justify-center rounded ${pageNo === 1 ? 'bg-primary text-secondary' : ''} text-black`}
              onClick={() => setPageNo(1)}
            >
              1
            </button>
            <button
              className={`w-8 h-8 flex items-center justify-center rounded ${pageNo === 2 ? 'bg-primary text-secondary' : ''} text-black`}
              onClick={() => setPageNo(2)}
            >
              2
            </button>
            {pageNo > 2 && <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 bg-primary text-secondary">
              {pageNo ||  '...'}
            </button>}
            <button
              className=
              "w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100"
              onClick={() => setPageNo(pageNo + 1)}
            >
              &gt;|
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

