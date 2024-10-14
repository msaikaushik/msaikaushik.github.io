import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll

function Header({ toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <ScrollLink to="home" smooth={true} duration={500} className="text-2xl font-bold text-gray-800 dark:text-gray-200 cursor-pointer 
                                                                          bg-gradient-to-r bg-clip-text text-transparent
                                                                          from-blue-400 via-teal-500 to-green-500
                                                                          dark:bg-gradient-to-r dark:bg-clip-text dark:text-transparent
                                                                          dark:from-green-400 dark:via-green-500 dark:to-green-600">
              K.
            </ScrollLink>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <ScrollLink to="home" smooth={true} duration={500} className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 cursor-pointer">Home</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 cursor-pointer">Projects</ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 cursor-pointer">Skills</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 cursor-pointer">Contact</ScrollLink>
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 text-gray-800 dark:text-gray-200 hover:text-indigo-500"
          >
            {document.documentElement.classList.contains('dark') ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden">
          <ScrollLink to="home" smooth={true} duration={500} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Home</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Projects</ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Skills</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Contact</ScrollLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
