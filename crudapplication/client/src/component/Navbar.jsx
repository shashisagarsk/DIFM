// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">CRUD APPLICATION</a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-4 w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto`}>
          <ul className="md:flex md:space-x-6 md:space-y-0 space-y-4 mt-4 md:mt-0">
            <li>
              <a href="/" className="block text-gray-800 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/About" className="block text-gray-800 hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="/Services" className="block text-gray-800 hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="/Contact" className="block text-gray-800 hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
