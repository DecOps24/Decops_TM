import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaXmark, FaPaperPlane } from 'react-icons/fa6';

import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Vision', path: '/vision' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/80 bg-[#F8F7F4]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Decops Logo"
            className="h-10 w-auto object-contain"
          />

          <span className="text-2xl font-extrabold tracking-wider bg-decops-text-gradient bg-clip-text text-transparent">
            DECOPS
          </span>

          <span className="text-[10px] text-gray-600 font-semibold px-2 py-0.5 rounded bg-white border border-gray-200">
            PVT LTD
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-[#D61F69] font-semibold'
                  : 'text-[#4B5563] hover:text-[#FF2A85]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs text-white bg-decops-gradient hover:scale-[1.03] transition-transform shadow-lg shadow-decops-pink/20"
          >
            <span>Get In Touch</span>
            <FaPaperPlane className="text-xs" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#374151] hover:text-[#FF2A85] transition-colors text-xl focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-[#F8F7F4] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-sm transition-colors ${
                location.pathname === link.path
                  ? 'text-[#D61F69] font-semibold'
                  : 'text-[#4B5563] font-medium hover:text-[#FF2A85]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}