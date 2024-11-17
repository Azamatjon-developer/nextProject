import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-between py-5 px-8 shadow-lg">
      <h2 className="text-2xl font-bold hover:text-gray-200 transition duration-300">
        MyLogo
      </h2>
      <nav className="flex items-center gap-8">
        <Link
          href="/"
          className="text-lg font-medium hover:text-gray-300 transition duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-lg font-medium hover:text-gray-300 transition duration-300"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-lg font-medium hover:text-gray-300 transition duration-300"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header
