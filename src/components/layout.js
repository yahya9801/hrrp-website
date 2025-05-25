// src/components/layout.js
import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar remains constant across all pages */}
      <Navbar />
      
      {/* Main content is dynamically injected here */}
      <main>{children}</main>
      
      {/* Footer remains constant across all pages */}
      <Footer />
    </div>
  )
}

export default Layout
