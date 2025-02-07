'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ChevronRight, Menu, Smartphone, Camera, Watch, Gift, Car, Tv, Gamepad, Lightbulb, Plane, Star, Instagram, Facebook, Twitter, Phone } from 'lucide-react'
import { Button } from "../components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import axios from 'axios'
import { host } from '../lib/host'
import { usePathname, } from 'next/navigation'

export const HeaderBottom = () => {
  const [isVerticalMenuOpen, setIsVerticalMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [allCategories, setAllCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();

  //set vertical menu open for only home page 
  useEffect(() => {
    // console.log("page", pathname)

    if (pathname === '/') {
      setIsVerticalMenuOpen(true)
    } else {
      setIsVerticalMenuOpen(false)
    }

  }, [pathname]);


  //horixontal menu
  const menuItems = [
    {
      name: 'Home',
      type: 'link',
      href: '/',

    },
    {
      name: 'About Us',
      type: 'link',
      href: '/about-us'
    },
    {
      name: 'Blogs',
      type: 'link',
      href: '/blogs'
    },
    {
      name: 'Collaborate',
      type: 'link',
      href: '/collaboration'
    },
    {
      name: 'Contact us',
      type: 'link',
      href: '/',
      content: [
        {
          title: 'homeshoppr247@gmail.com',
          icon: 'Mail:\u00A0\u00A0'

        },
        {
          title: '+91 9336768443',
          icon: <Phone className='h-5 w-5' />
        }
      ]
    },
    


  ]


  //fetch categories and subcategories
  const fetchCategoriesAndSubCategories = async () => {
    try {
      const response = await axios.get(`${host}/api/v1/categories/get/names`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
          },
        }
      )

      if (response.status === 200) {
        console.log("cate", response.data.data)
        const sortedCategories = response.data.data.sort((a, b) => a.name.localeCompare(b.name));
        setAllCategories(sortedCategories)

      }
    } catch (error) {
      setError(error);
      console.error(error)
    }
  }


  useEffect(() => {
    fetchCategoriesAndSubCategories();
  }, []);


  //search product by category
  const handleGetProductsByCategory = async (category) => {
    try {

      console.log("searchTerm category", category)

      const response = await axios.get(`${host}/api/v1/products?search=${category}`,
        {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
          },
        }
      )
      console.log("searched", response.data)

      if (response.data.statusCode === 200 && response.data.data.length > 0) {
        setSearchTerm("")
        router.push(`/products?category=${category}&products=${response.data.data}`);
      }

    } catch (error) {
      console.error(error)
    }
  }

  //contact us dropdown
  const renderDropdownContent = (item) => {
    if (!item) return null;

    switch (item.name) {
      case 'Contact us':
        return (
          <div className="grid block justify-start  gap-4">
            {item.content.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <div className="font-medium text-gray-900 flex"><span>{section.icon} </span><span className='hover:text-[#f4a137]'>{section.title}</span></div>
                <ul className="space-y-2">
                </ul>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };




  return (
    <div className="w-full bg-[#444444] text-white px-4 lg:px-32 overflow-visible relative">
      <div className="container mx-auto relative">
        <div className="flex items-center lg:items-stretch">
          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open mobile menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0">
              <SheetHeader className="border-b p-4">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="overflow-y-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="categories">
                    <AccordionTrigger className="px-4">All Categories</AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="space-y-1">
                        {allCategories.map((category) => (
                          <Accordion
                            key={category._id}
                            type="single"
                            collapsible
                            className="w-full"
                          >
                            <AccordionItem value={category._id}>
                              {category.subCategories && category.subCategories.length > 0 ? (
                                <>
                                  <AccordionTrigger className="px-4 py-2">
                                    <span
                                      className="flex items-center gap-2"
                                      onClick={() => {
                                        handleGetProductsByCategory(category.name)
                                        setSearchTerm(category.name)
                                      }}
                                    >
                                      {category.name}
                                    </span>
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <div className="space-y-4 px-4">
                                      {category.subCategories.map((subcategory, idx) => (
                                        <Link
                                          key={idx}
                                          href={`/category/${subcategory.name}`}
                                          className="block text-sm text-gray-700 hover:text-primary"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {subcategory.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </AccordionContent>
                                </>
                              ) : (
                                <Link
                                  href={`/category/${category.name}`}
                                  className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {category.name}
                                </Link>
                              )}
                            </AccordionItem>
                          </Accordion>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  {menuItems.map((item) => (
                    <AccordionItem key={item.name} value={item.name}>
                      {item.type === 'dropdown' ? (
                        <>
                          <AccordionTrigger className="px-4">
                            <span className="flex items-center gap-2">
                              {item.name}
                              {item.hot && (
                                <span className="rounded bg-red-500 px-1 py-0.5 text-[10px] font-bold text-white">
                                  Hot
                                </span>
                              )}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 px-4">
                              {item.content?.map((section, idx) => (
                                <div key={idx}>
                                  <h4 className="mb-2 font-medium">{section.title}</h4>
                                  <ul className="space-y-2">
                                    {section.links?.map((link, linkIdx) => (
                                      <li key={linkIdx}>
                                        <Link
                                          href="#"
                                          className="block text-sm text-muted-foreground hover:text-primary"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {link}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center px-4 py-2 hover:bg-accent"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>

          {/* Vertical Categories Menu */}
          <div className="relative w-[270px] z-20 hidden sm:block">
            <Button
              variant="ghost"
              className="flex w-full items-center justify-between bg-[#525252] px-4 py-6 text-white hover:bg-[#525252] hover:text-white rounded-none"
              onClick={() => setIsVerticalMenuOpen(!isVerticalMenuOpen)}
            >
              <div className="flex items-center gap-2">
                <Menu className="h-5 w-5" />
                <span className="text-base font-medium">All Categories</span>
              </div>
              <ChevronDown className={`h-5 w-5 transition-transform ${isVerticalMenuOpen ? 'rotate-180' : ''}`} />
            </Button>
            {isVerticalMenuOpen && (
              <div className="absolute z-50 w-full bg-white text-gray-800 shadow-lg">
                <div className="py-2">
                  {allCategories.map((category) => (
                    <div key={category._id} className="group relative border-none last:border-b-0 hover:bg-[#f4a137]">
                      <button
                        href="#"
                        className="flex items-center justify-between px-4 py-2 border-none"
                        onClick={(e) => {
                          setSearchTerm(category.name)
                          handleGetProductsByCategory(category.name)
                        }}
                      >
                        <div className="flex items-center gap-3">
                          {category.icon}
                          <span className="text-sm">{category.name}</span>
                        </div>
                        {category.subCategories && (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </button>
                      {category.subCategories && (
                        <div className="invisible absolute left-full top-0 min-h-full w-[500px] bg-white opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                          <div className="grid grid-cols-2 gap-2 p-4">
                            {category.subCategories &&
                              <>
                                {category.subCategories.map((category, idx) => (
                                  <div key={idx} className="">
                                    <h4 className=" text-[#444444]">{category.name}</h4>
                                  </div>
                                ))}
                              </>
                            }
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Horizontal Main Menu */}
          <div className="flex-1 hidden sm:block">
            <nav className="h-full">
              <ul className="flex h-full">
                {/* left side nav items  */}
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className="group relative h-full hover:bg-[#898989]"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.type === 'dropdown' ? (
                      <Link href='/' className="flex h-full items-center gap-1 px-4 text-sm font-medium text-white">
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                        {item.hot && (
                          <span className="ml-1 rounded bg-red-500 px-1 py-0.5 text-[10px] font-bold">Hot</span>
                        )}
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex h-full items-center px-4 text-sm font-medium text-white hover:bg-[#525252]"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}

                {/* right side icons */}
                <ul className='flex items-center gap-2  '>
                  <li className='hover:text-[#f4a137]'><Link href='/'><Instagram className='h-5 w-10 ' /></Link></li>
                  <li className='hover:text-[#f4a137]'><Link href='/'><Facebook className='h-5 w-10 ' /></Link></li>
                  <li className='hover:text-[#f4a137]'><Link href='/'><Twitter className='h-5 w-10 ' /></Link></li>
                </ul>
              </ul>


            </nav>
          </div>
        </div>
      </div>

      {/* Desktop Dropdown Container */}
      <div className="absolute left-[400px] right-0 top-full z-50 hidden lg:block">
        {activeDropdown && (
          <div
            className={`container bg-white p-6 text-gray-800 shadow-lg 
              ${activeDropdown === 'Contact us' ? 'w-[300px] relative left-[200px]' :
                'hidden'
              }`}
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {renderDropdownContent(menuItems.find(item => item.name === activeDropdown))}
          </div>
        )}
      </div>
    </div>
  )
}



