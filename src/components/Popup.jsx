'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function Popup() {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
  }

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full relative overflow-hidden">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors z-10"
          onClick={handleClose}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="/image/demo/cms/newletter-bg.jpg?height=400&width=300&text=Newsletter"
              alt="Newsletter promotion"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">
                Daily Promotion
              </h3>
              <p className="text-gray-600 mb-6 uppercase tracking-wide font-medium">
                Sign up for newsletter
              </p>

              {/* Newsletter Form */}
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 uppercase"
                >
                  Subscribe
                </button>

                <div className="flex items-center justify-center">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer"
                    />
                    <span className="ml-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                      Don&apos;t show this popup again
                    </span>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

