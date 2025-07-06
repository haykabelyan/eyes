"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'  // Next.js 13+ hook
import logo from '../public/assets/img/logo.png'
import Image from 'next/image'

export const MyHeader = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  
  const items = [
    { name: 'Գլխավոր', path: '/' },
    { name: 'Մեր մասին', path: '/about' },
  ]

  useEffect(() => {
    setMenuOpen(false) // Փակել մենյուը route փոփոխվելուց հետո
  }, [pathname])

  return (
    <header className="fixed top-0 w-full text-gray-900 bg-white flex justify-between items-center px-[100px] max-[480px]:px-[10px] py-[6px] z-50">
      {/* Logo and Shop Name */}
      <div className="flex items-center gap-4">
        <Image src={logo} alt="Eyes Logo" className="w-12 h-12 object-contain max-[480px]:w-9" />
        <h1 className="text-3xl font-semibold max-[480px]:text-2xl">Eyes</h1>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        {items.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`px-4 py-2 rounded-md text-lg transition-colors ${
                isActive ? 'bg-white' : 'hover:bg-white'
              }`}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden flex flex-col gap-1.5 focus:outline-none hover:cursor-pointer"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-900 transition-transform ${
            menuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-900 transition-opacity ${
            menuOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-900 transition-transform ${
            menuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-full right-0  w-full md:hidden shadow-md">
          <ul className="flex flex-col">
            {items.map((item) => {
              const isActive = pathname === item.path
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                    className='block px-6 py-3 text-lg bg-white'
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}
