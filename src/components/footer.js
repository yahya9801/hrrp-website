import React from 'react';
import logo from "../images/hrrp_logo.png"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  // Sample services - replace with your actual services
  const services = [
    { name: 'Advertise with Us', href: '/advertise-with-us' },
    { name: 'Special Presence Job Ads', href: '/special-presence-job-ads' },
    { name: 'Open Platforms', href: '/open-platforms' }
  ];

  // Sample important links - replace with your actual important pages
  const importantLinks = [
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Feedback Form', href: 'https://docs.google.com/forms/d/18JtWOD_mZB0sIavYudSkZF-ZIlRuEYlOoR7HZwQ7zZ8/edit?usp=drivesdk' }
  ];

  // Information links
  const informationLinks = [
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'About Us', href: '/about-us' }
  ];

  return (
    <footer className="bg-gray-900 text-white" style={{ backgroundColor: '#1a202c', color: '#ffffff' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Section */}
          <div className="space-y-6">
            {/* Company Logo */}
            <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={logo} // <-- Replace with actual logo path
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
              <div>
                <h3 className="text-xl font-bold text-white">HR Posting Partner</h3>
                {/* <p className="text-sm text-gray-400">Building Digital Excellence</p> */}
              </div>
            </div>
            
            {/* Company Description */}
            <p className="text-gray-300 text-sm leading-relaxed" style={{ color: '#d1d5db' }}>
                We are HR based Marketing business providing Job Ads service along with marketing for other companies or businesses.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100087877179793" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-600 hover:border-blue-500"
                style={{ backgroundColor: '#374151', borderColor: '#4b5563' }}
                aria-label="Visit our Facebook page"
              >
                <Facebook size={18} />
              </a>
              
              <a 
                href="https://www.linkedin.com/company/hr-posting-partner/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-600 hover:border-pink-500"
                style={{ backgroundColor: '#374151', borderColor: '#4b5563' }}
                aria-label="Visit our Instagram page"
              >
                <Linkedin size={18} />
              </a>

              <a 
                href="https://whatsapp.com/channel/0029VaRWeF7DDmFRZuX0Ww0K" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-600 hover:border-pink-500"
                style={{ backgroundColor: '#374151', borderColor: '#4b5563' }}
                aria-label="Visit our Instagram page"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white relative" style={{ color: '#ffffff' }}>
              Our Services
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-purple-500 rounded-full" style={{ backgroundColor: '#8b5cf6' }}></div>
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm"
                    style={{ color: '#d1d5db' }}
                  >
                    <ChevronRight size={14} className="mr-2 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white relative" style={{ color: '#ffffff' }}>
              Important
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-purple-500 rounded-full" style={{ backgroundColor: '#8b5cf6' }}></div>
            </h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    {...(link.name === "Feedback Form"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center text-slate-300 hover:text-white transition-all duration-300 text-sm"
                  >
                    <ChevronRight size={14} className="mr-2 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Section */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white relative" style={{ color: '#ffffff' }}>
              Information
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-purple-500 rounded-full" style={{ backgroundColor: '#8b5cf6' }}></div>
            </h4>
            
            {/* Information Links */}
            <ul className="space-y-3">
              {informationLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="group flex items-center text-slate-300 hover:text-white transition-all duration-300 text-sm"
                  >
                    <ChevronRight size={14} className="mr-2 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Information */}
            {/* <div className="space-y-3 pt-2 border-t border-slate-700">
              <div className="flex items-center space-x-3 text-slate-300 text-sm">
                <div className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center">
                  <Mail size={14} className="text-purple-400" />
                </div>
                <span>contact@yourcompany.com</span>
              </div>
              
              <div className="flex items-center space-x-3 text-slate-300 text-sm">
                <div className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center">
                  <Phone size={14} className="text-blue-400" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3 text-slate-300 text-sm">
                <div className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center">
                  <MapPin size={14} className="text-green-400" />
                </div>
                <span>123 Business St, City, ST 12345</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-700 bg-gray-800" style={{ backgroundColor: '#1f2937', borderColor: '#374151' }}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm" style={{ color: '#9ca3af' }}>
                © 2025 HR Posting Partner. All rights reserved.
              </p>
            </div>
            
            {/* <div className="flex items-center space-x-6 text-sm text-slate-400">
              <a href="/sitemap" className="hover:text-white transition-colors duration-300">
                Sitemap
              </a>
              <a href="/cookies" className="hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;