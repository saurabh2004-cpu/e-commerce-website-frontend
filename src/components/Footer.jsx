'use client'

import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const mainSections = {
    Information: ['About Us', 'FAQ', 'Order history', 'Order information'],
    'Customer Service': ['Contact Us', 'Returns', 'Site Map', 'My Account'],
    'My Account': ['Brands', 'Gift Vouchers', 'Affiliates', 'Specials', 'Our Blog'],
    'Contact Us': [
      {
        icon: MapPin,
        text: 'My Company, 42 avenue des Champs Elysées 75000 Paris France'
      },
      {
        icon: Mail,
        text: 'Email: sales@yourcompany.com'
      },
      {
        icon: Phone,
        text: 'Phone 1: 0123456789\nPhone 2: (123) 4567890'
      }
    ]
  }

  const categories = {
    'MOST SEARCHED KEYWORDS MARKET:': 'Xiaomi Mi3 | Digiflip Pro XT 712 Tablet | Mi 3 Phones',
    'MOBILES:': 'Moto E | Samsung Mobile | Micromax Mobile | Nokia Mobile | HTC Mobile | Sony Mobile | Apple Mobile | LG Mobile | Karbonn Mobile',
    'CAMERA:': 'Nikon Camera | Canon Camera | Sony Camera | Samsung Camera | Point shoot camera | Camera Lens | Camera Tripod | Camera Bag',
    'LAPTOPS:': 'Apple Laptop | Acer Laptop | Sony Laptop | Dell Laptop | Asus Laptop | Toshiba Laptop | LG Laptop | HP Laptop | Notebook',
    'TVS:': 'Sony TV | Samsung TV | LG TV | Panasonic TV | Onida TV | Toshiba TV | Philips TV | Micromax TV | LED TV | LCD TV | Plasma TV | 3D TV | Smart TV',
    'TABLETS:': 'Micromax Tablets | HCL Tablets | Samsung Tablets | Lenovo Tablets | Karbonn Tablets | Asus Tablets | Apple Tablets',
    'WATCHES:': 'FCUK Watches | Titan Watches | Casio Watches | Fastrack Watches | Timex Watches | Fossil Watches | Diesel Watches | Luxury Watches',
    'CLOTHING:': 'Shirts | Jeans | T-shirts | Kurtis | Sarees | Levis Jeans | Killer Jeans | Pepe Jeans | Arrow Shirts | Ethnic Wear | Formal Shirts | Peter England Shirts',
    'FOOTWEAR:': 'Shoes | Casual Shoes | Adidas Shoes | Gas Shoes | Puma Shoes | Reebok Shoes | Woodland Shoes | Red tape Shoes | Nike Shoes'
  }

  return (
    <footer className="bg-gray-100 pt-12 pb-4 p-6 sm:px-32">
      {/* Main Footer */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {Object.entries(mainSections).map(([title, items]) => (
            <div key={title}>
              <h2 className="text-lg font-semibold mb-4 text-gray-800">{title}</h2>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index}>
                    {typeof item === 'string' ? (
                      <a
                        href="#"
                        className="text-gray-600 hover:text-orange-500 transition-colors inline-flex items-center group"
                      >
                        <span className="transform group-hover:translate-x-1 transition-transform">
                          {item}
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-start text-gray-600">
                        <item.icon className="w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="space-y-4">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="text-sm">
                <span className="font-semibold text-gray-700">{category}</span>{' '}
                {items.split('|').map((item, index, array) => (
                  <span key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      {item.trim()}
                    </a>
                    {index < array.length - 1 ? ' | ' : ''}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Links */}
        <div className="text-sm text-gray-600 mt-8 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            <span>Top Stores :</span>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Brand Directory
            </a>
            <span>|</span>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Store Directory
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

