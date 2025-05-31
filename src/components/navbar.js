import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import logo from '../images/hrrp_logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null);
 const jobData = [
    { title: "Jobs in Pakistan", link: "/jobs-in-pakistan" },
    { title: "Jobs in Karachi", link: "/jobs-in-karachi" },
    { title: "Jobs in Lahore", link: "/jobs-in-lahore" },
    { title: "Jobs in Islamabad/Rawalpindi", link: "/jobs-in-islamabad-rawalpindi" },
    { title: "Jobs in Faisalabad", link: "/jobs-in-faisalabad" },
    { title: "Remote Jobs for Pakistan", link: "/remote-jobs-for-pakistan", },
    { title: "Jobs/Internship for Non-experienced", link: "/jobs-internships-for-non-experienced" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <Link to="/about-us" className="text-gray-700 hover:text-blue-600 font-semibold">About Us</Link>
          
          {/* Dropdown for Job Opportunities */}
          <div className="relative inline-block">
            <button
              className="text-gray-700 hover:text-blue-600 font-semibold"
              onClick={() => setIsDropdownOpen(prev => !prev)}
            >
              Job Opportunities
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 space-y-2 bg-white shadow-lg p-2 rounded-md w-48 z-50">
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
