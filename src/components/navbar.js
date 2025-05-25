import React, { useState } from "react"
import { Link } from "gatsby"
import logo from '../images/hrrp_logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="HR Posting Partner" className="h-10" />
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/about-us" className="text-gray-700 hover:text-blue-600 font-semibold">About Us</Link>
          
          {/* Dropdown for Job Opportunities */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="text-gray-700 hover:text-blue-600 font-semibold">
              Job Opportunities
            </button>
            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 space-y-2 bg-white shadow-lg p-2 rounded-md w-48 z-50">
                <Link to="/full-time" className="block text-gray-700 hover:text-blue-600">Full-Time</Link>
                <Link to="/part-time" className="block text-gray-700 hover:text-blue-600">Part-Time</Link>
                <Link to="/internships" className="block text-gray-700 hover:text-blue-600">Internships</Link>
              </div>
            )}
          </div>

          <Link to="/advertise-with-us" className="text-gray-700 hover:text-blue-600 font-semibold">Advertise with Us</Link>
          <Link to="/contact-us" className="text-gray-700 hover:text-blue-600 font-semibold">Contact Us</Link>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col space-y-2 items-center justify-center"
        >
          <div className="w-6 h-1 bg-gray-700"></div>
          <div className="w-6 h-1 bg-gray-700"></div>
          <div className="w-6 h-1 bg-gray-700"></div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-lg`}>
        <div className="space-y-4 p-4">
          <Link to="/" className="block text-gray-700 hover:text-blue-600 font-semibold">About Us</Link>
          <Link to="/full-time" className="block text-gray-700 hover:text-blue-600">Full-Time</Link>
          <Link to="/part-time" className="block text-gray-700 hover:text-blue-600">Part-Time</Link>
          <Link to="/internships" className="block text-gray-700 hover:text-blue-600">Internships</Link>
          <Link to="/advertise-with-us" className="block text-gray-700 hover:text-blue-600 font-semibold">Advertise with Us</Link>
          <Link to="/contact-us" className="block text-gray-700 hover:text-blue-600 font-semibold">Contact Us</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
