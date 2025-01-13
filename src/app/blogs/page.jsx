'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Home, Calendar, Star, StarHalf } from 'lucide-react'



export default function BlogPage() {

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

  const blogPosts = [
    {
      id: 1,
      title: "Kire Tuma Demonstraverunt Lector",
      date: "Tue, Feb 16, 2016",
      image: "/image/demo/blog/blog4.jpg?height=300&width=400",
      description: "Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non.",
      comments: 0,
      author: "Admin"
    },
    {
      id: 2,
      title: "Ac Tincidunt Suspendisse Malesuada",
      date: "Tue, Feb 16, 2016",
      image: "/image/demo/blog/blog5.jpg?height=300&width=400",
      description: "Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non.",
      comments: 0,
      author: "Admin"
    },
    {
        id: 3,
        title: "Nire Tmas Kite Traverunt Lector Legere Legunt",
        date: "Tue, Feb 16, 2016",
        image: "/image/demo/blog/blog6.jpg?height=300&width=400",
        description: "Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non.",
        comments: 0,
        author: "Admin"
      },
    {
      id: 4,
      title: "Neque Porro Quisquam Est, Qui Dolorem Ipsum",
      date: "Tue, Feb 16, 2016",
      image: "/image/demo/blog/blog1.jpg?height=300&width=400",
      description: "Morbi tempus, non ullamcorper euismod, erat odio suscipit purus, nec ornare lacus turpis ac purus. Mauris cursus in mi vel dignissim. Morbi mollis elit ipsum, a feugiat lectus gravida non. Aenean molestie justo sed aliquam euismod. Maecenas laoreet",
      comments: 0,
      author: "Admin"
    },
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
        <main className="lg:col-span-3">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 ">Our Blog</h1>
            <p className="text-gray-600">Ac tincidunt Suspendisse malesuada velit in Nullam elit magnis netus Vestibulum.</p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="grid md:grid-cols-3 gap-6">
                <div className="relative h-60 md:h-full overflow-hidden group">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-xl font-semibold mb-2 hover:text-[#f4a137]">
                    <Link href="/blog-details">{post.title}</Link>
                  </h2>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <Link href="#" className="hover:text-primary">
                      {post.comments} Comments
                    </Link>
                    <span>
                      Post by <span className="text-primary">{post.author}</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-left gap-2 mt-12">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
              &gt;
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
              &gt;|
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

