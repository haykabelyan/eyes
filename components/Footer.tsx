"use client"
import React from 'react'
import { FaInstagram, FaEnvelope } from 'react-icons/fa'
// import Image from 'next/image'
// import logo from '../assets/img/logo.png'

export const MyFooter = () => {
  return (
    <footer className="text-gray-900 bg-white px-5 py-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        {/* Follow Us Section */}
        <div className="flex flex-col min-w-[150px] flex-1">
          <h3 className="text-2xl mb-5">Follow Us</h3>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/eyess_brand?utm_source=ig_web_button_share_sheet&igsh=dDBoMml5Z2ZqZGF0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:eyess.brand@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-pink-500 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col min-w-[150px] flex-1">
          <h3 className="text-2xl mb-5">Contact</h3>
          <div className="text-lg space-y-3">
            <a href="mailto:eyess.brand@gmail.com" className="hover:text-pink-500 transition-colors">
              Email: eyess.brand@gmail.com
            </a>
            <a href="tel:+37498914109" className="hover:text-pink-500 transition-colors">
              Product: +374 98 91 41 09
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-400 text-lg">
        © {new Date().getFullYear()} EYES BRAND. All rights reserved.
      </div>
    </footer>
  )
}
