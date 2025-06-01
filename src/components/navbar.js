import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import logo from "../images/hrrp_logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)
  const jobData = [
    { title: "Jobs in Pakistan", link: "/jobs-in-pakistan" },
    { title: "Jobs in Karachi", link: "/jobs-in-karachi" },
    { title: "Jobs in Lahore", link: "/jobs-in-lahore" },
    {
      title: "Jobs in Islamabad/Rawalpindi",
      link: "/jobs-in-islamabad-rawalpindi",
    },
    { title: "Jobs in Faisalabad", link: "/jobs-in-faisalabad" },
    { title: "Remote Jobs for Pakistan", link: "/remote-jobs-for-pakistan" },
    {
      title: "Jobs/Internship for Non-experienced",
      link: "/jobs-internships-for-non-experienced",
    },
  ]

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="HR Posting Partner" className="h-10" />
          <span className="ml-2 text-lg font-semibold">HR Posting Partner</span>
        </Link>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/about-us"
            className="text-gray-700 hover:text-blue-600 font-semibold"
          >
            About Us
          </Link>

          {/* Dropdown for Job Opportunities */}
          <div className="relative inline-block">
            <button
              ref={buttonRef}
              className="text-gray-700 hover:text-blue-600 font-semibold"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              onMouseEnter={() => setIsDropdownOpen(true)} // Open on hover
              onFocus={() => setIsDropdownOpen(true)} // Open on focus (for accessibility)
              onMouseLeave={() => {}}
            >
              Job Opportunities
            </button>

            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute left-0 mt-2 space-y-2 bg-white shadow-lg p-2 rounded-md w-48 z-50"
                role="menu"
                aria-label="Job Opportunities"
                onMouseEnter={() => setIsDropdownOpen(true)} // Keep dropdown open on hover
                onMouseLeave={() => setIsDropdownOpen(false)} // Close dropdown when mouse leaves
              >
                {jobData.map((job, index) => (
                  <Link
                    key={index}
                    to={job.link}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded"
                    role="menuitem"
                  >
                    {job.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/advertise-with-us"
            className="text-gray-700 hover:text-blue-600 font-semibold"
          >
            Advertise with Us
          </Link>
          <Link
            to="/contact-us"
            className="text-gray-700 hover:text-blue-600 font-semibold"
          >
            Contact Us
          </Link>
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
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white shadow-lg`}
      >
        <div className="space-y-4 p-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600 font-semibold"
          >
            About Us
          </Link>
          <div className="relative">
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="block text-gray-700 hover:text-blue-600 font-semibold"
          >
            Job Opportunities
          </button>

          {/* Job Options Dropdown */}
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 space-y-2 bg-white shadow-lg p-2 rounded-md w-full z-50">
              {jobData.map((job, index) => (
                <Link
                  key={index}
                  to={job.link}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded"
                >
                  {job.title}
                </Link>
              ))}
            </div>
          )}
        </div>

          <Link
            to="/advertise-with-us"
            className="block text-gray-700 hover:text-blue-600 font-semibold"
          >
            Advertise with Us
          </Link>
          <Link
            to="/contact-us"
            className="block text-gray-700 hover:text-blue-600 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
