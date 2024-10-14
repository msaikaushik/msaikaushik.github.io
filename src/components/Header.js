import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-gray-800">K.</a> {/* Link to Home */}
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-indigo-500">
              Home
            </a>
            <a href="#projects" className="text-gray-800 hover:text-indigo-500">
              Projects
            </a>
            <a href="#skills" className="text-gray-800 hover:text-indigo-500">
              Skills
            </a>
            <a href="#contact" className="text-gray-800 hover:text-indigo-500">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-indigo-500 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden">
          <a href="#home" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Home
          </a>
          <a href="#projects" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Projects
          </a>
          <a href="#skills" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Skills
          </a>
          <a href="#contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
