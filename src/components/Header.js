import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-gray-200">K.</Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 dark:text-gray-200 hover:text-indigo-500">Home</Link>
            <Link to="/projects" className="text-gray-800 dark:text-gray-200 hover:text-indigo-500">Projects</Link>
            <Link to="/skills" className="text-gray-800 dark:text-gray-200 hover:text-indigo-500">Skills</Link>
            <Link to="/about" className="text-gray-800 dark:text-gray-200 hover:text-indigo-500">About</Link>
            <Link to="/contact" className="text-gray-800 dark:text-gray-200 hover:text-indigo-500">Contact</Link>
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
          <Link to="/" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Home</Link>
          <Link to="/projects" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Projects</Link>
          <Link to="/skills" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Skills</Link>
          <Link to="/about" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">About</Link>
          <Link to="/contact" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Contact</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
