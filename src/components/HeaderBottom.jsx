'use client'

import { useState } from 'react'
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

export const HeaderBottom = () => {
  const [isVerticalMenuOpen, setIsVerticalMenuOpen] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  const categories = [
    {
      id: 'automotive',
      name: 'Automotive & Motorcycle',
      icon: <Car className="h-5 w-5" />,
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            title: 'APPAREL',
            links: [
              'Accessories for Tablet PC',
              'Accessories for i Pad',
              'Accessories for iPhone',
              'Bags, Holiday Supplies',
              'Car Alarms and Security',
              'Car Audio & Speakers'
            ]
          },
          {
            title: 'CABLES & CONNECTORS',
            links: [
              'Cameras & Photo',
              'Electronics',
              'Outdoor & Traveling'
            ]
          },
          {
            title: 'BAGS, HOLIDAY SUPPLIES',
            links: [
              'Battereries & Chargers',
              'Bath & Body',
              'Headphones, Headsets',
              'Home Audio'
            ]
          }
        ]
      }
    },
    {
      id: 'electronic',
      name: 'Electronic',
      icon: <Tv className="h-5 w-5" />,
      hasSubmenu: false
    },
    {
      id: 'sports',
      name: 'Sports & Outdoors',
      icon: <Gamepad className="h-5 w-5" />,
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            title: 'MOBILE ACCESSORIES',
            links: [
              'Gadgets & Auto Parts',
              'Bath & Body',
              'Bags, Holiday Supplies'
            ]
          },
          {
            title: 'BATTERERIES & CHARGERS',
            links: [
              'Outdoor & Traveling',
              'Flashlights & Lamps',
              'Fragrances'
            ]
          },
          {
            title: 'FISHING',
            links: [
              'FPV System & Parts',
              'Electronics',
              'Earings',
              'More Car Accessories'
            ]
          }
        ],
        banner: {
          image: '/image/demo/cms/menu_bg2.jpg?height=300&width=200',
          title: 'Save an extra 30% on all 2014 Spring/Summer Clothing this weekend'
        }
      }
    },
    {
      id: 'health',
      name: 'Health & Beauty',
      icon: <Gift className="h-5 w-5" />,
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            title: 'CAR ALARMS AND SECURITY',
            links: [
              'Car Audio & Speakers',
              'Gadgets & Auto Parts',
              'Gadgets & Auto Partss',
              'Headphones, Headsets'
            ]
          },
          {
            title: 'ELECTRONICS',
            links: [
              'Earings',
              'Salon & Spa Equipment',
              'Shaving & Hair Removal',
              'Smartphone & Tablets'
            ]
          },
          {
            title: 'MORE CAR ACCESSORIES',
            links: [
              'Lighter & Cigar Supplies',
              'Mp3 Players & Accessories',
              'Men Watches',
              'Mobile Accessories'
            ]
          }
        ]
      }
    },
    {
      id: 'smartphone',
      name: 'Smartphone & Tablets',
      icon: <Smartphone className="h-5 w-5" />,
      hasSubmenu: true,
      submenu: {
        links: [
          'Headphones, Headsets',
          'Home Audio',
          'Health & Beauty',
          'Helicopters & Parts',
          'RC Helicopters'
        ]
      }
    },
    {
      id: 'flashlights',
      name: 'Flashlights & Lamps',
      icon: <Lightbulb className="h-5 w-5" />,
      hasSubmenu: false
    },
    {
      id: 'camera',
      name: 'Camera & Photo',
      icon: <Camera className="h-5 w-5" />,
      hasSubmenu: false
    },
    {
      id: 'mobile',
      name: 'Smartphone & Tablets',
      icon: <Smartphone className="h-5 w-5" />,
      hasSubmenu: false
    },
    {
      id: 'outdoor',
      name: 'Outdoor & Traveling Supplies',
      icon: <Plane className="h-5 w-5" />,
      hasSubmenu: false
    },
    {
      id: 'jewelry',
      name: 'Jewelry & Watches',
      icon: <Watch className="h-5 w-5" />,
      hasSubmenu: false
    },
  ]

  const menuItems = [
    {
      name: 'Home',
      type: 'dropdown',
      link: '/',
      content: [
        {
          title: 'HOME PAGE - (DEFAULT)',
          image: '/image/demo/feature/home-1.jpg',
          link: '/',
          layout: 1
        },
        {
          title: 'HOME PAGE - LAYOUT 2',
          image: '/image/demo/feature/home-2.jpg',
          link: '/home-2',
          layout: 2
        },
        {
          title: 'HOME PAGE - LAYOUT 3',
          image: '/image/demo/feature/home-3.jpg?height=200&width=300',
          link: '/home-3',
          layout: 3
        },
        {
          title: 'HOME PAGE - LAYOUT 4',
          image: '/image/demo/feature/home-4.jpg?height=200&width=300',
          link: '/home-4',
          layout: 4
        },
        {
          title: 'HOME PAGE - LAYOUT 5',
          image: '/image/demo/feature/home-5.jpg?height=200&width=300',
          link: '/home-5',
          layout: 5
        },
        {
          title: 'HOME PAGE - LAYOUT 6',
          image: '/image/demo/feature/home-6.jpg?height=200&width=300',
          link: '/home-6',
          layout: 6
        },
        {
          title: 'HOME PAGE - LAYOUT 7',
          image: '/image/demo/feature/home-7.jpg?height=200&width=300',
          link: '/home-7',
          layout: 7
        },
        {
          title: 'HOME PAGE - LAYOUT 8',
          image: '/image/demo/feature/home-rtl.jpg?height=200&width=300',
          link: '/home-8',
          layout: 8
        },
        {
          title: 'HOME PAGE - LAYOUT RTL',
          image: '/image/demo/feature/home-8.jpg?height=200&width=300',
          link: '/home-rtl',
          layout: 'RTL'
        },
        {
          title: 'COMMING SOON',
          image: '/image/demo/feature/coming-soon.png?height=200&width=300',
          link: '/coming-soon',
          layout: 'Coming Soon'
        }
      ]
    },
    {
      name: 'Blogs',
      type: 'link',
      href: '/blogs'
    },
    {
      name: 'About Us',
      type: 'link',
      href: '/about-us'
    },
    {
      name: 'Contact us',
      type: 'link',
      href: '/',
      content: [
        { title: 'sales@yourcompany.com',
          icon: 'Mail@ :'

         },
        { title: '+1234567890',
          icon:<Phone className='h-5 w-5' />
         }
      ]
    },
    {
      name: 'Collaborate',
      type: 'link',
      href: '/collaboration'
    },
  ]



  const renderDropdownContent = (item) => {
    if (!item) return null;

    switch (item.name) {
      case 'Home':
        return (
          <div className="grid grid-cols-5 gap-4">
            {item.content.map((content, idx) => (
              <Link key={idx} href={content.link} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src={content.image}
                    alt={content.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-[#f4a137]">
                    {content.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        );
      case 'Contact us':
        return (
          <div className="grid block justify-start  gap-4">
            {item.content.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <div className="font-medium text-gray-900 flex"><span>{section.icon}</span><span className='hover:text-[#f4a137]'>{section.title}</span></div>
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
                        {categories.map((category) => (
                          <Accordion
                            key={category.id}
                            type="single"
                            collapsible
                            className="w-full"
                          >
                            <AccordionItem value={category.id}>
                              {category.hasSubmenu ? (
                                <>
                                  <AccordionTrigger className="px-4 py-2">
                                    <span className="flex items-center gap-2">
                                      {category.icon}
                                      {category.name}
                                    </span>
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <div className="space-y-4 px-4">
                                      {category.submenu.columns?.map((column, idx) => (
                                        <div key={idx}>
                                          <h4 className="mb-2 font-medium">{column.title}</h4>
                                          <ul className="space-y-2">
                                            {column.links.map((link, linkIdx) => (
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
                                  href="#"
                                  className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {category.icon}
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
                              {item.content.map((section, idx) => (
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
                  {categories.map((category) => (
                    <div key={category.id} className="group relative border-none last:border-b-0 hover:bg-[#f4a137]">
                      <Link
                        href="#"
                        className="flex items-center justify-between px-4 py-4 my-2 border-none"
                      >
                        <div className="flex items-center gap-3">
                          {category.icon}
                          <span className="text-sm">{category.name}</span>
                        </div>
                        {category.hasSubmenu && (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Link>
                      {category.hasSubmenu && (
                        <div className="invisible absolute left-full top-0 min-h-full w-[700px] bg-white opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                          <div className="grid grid-cols-4 gap-4 p-4">
                            {category.submenu.columns ? (
                              <>
                                {category.submenu.columns.map((column, idx) => (
                                  <div key={idx} className="space-y-4">
                                    <h4 className="font-medium text-[#444444]">{column.title}</h4>
                                    <ul className="space-y-2">
                                      {column.links.map((link) => (
                                        <li key={link}>
                                          <Link href="#" className="text-sm text-gray-600 hover:text-[#f4a137]">
                                            {link}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                                {category.submenu.banner && (
                                  <div className="col-span-1">
                                    <div className="relative h-full w-full">
                                      <Image
                                        src={category.submenu.banner.image}
                                        alt={category.submenu.banner.title}
                                        fill
                                        className="rounded-lg object-cover"
                                      />
                                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white">
                                        <p className="text-sm">{category.submenu.banner.title}</p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            ) : (
                              <div className="col-span-4">
                                <ul className="space-y-2">
                                  {category.submenu.links.map((link) => (
                                    <li key={link}>
                                      <Link href="#" className="text-sm text-gray-600 hover:text-[#f4a137]">
                                        {link}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
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
              ${
              activeDropdown === 'Home' ? 'w-[1000px]' : activeDropdown === 'Contact us' ? 'w-[300px] relative left-[200px]' :
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



