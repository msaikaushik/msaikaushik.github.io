import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="menu-container">
        <nav>
          <a href="#" className="Menu-Item">
            Home
          </a>
          <a href="#" className="Menu-Item">
            About
          </a>
          <a href="#" className="Menu-Item">
            Skills
          </a>
          <a href="#" className="Menu-Item">
            Projects
          </a>
          <a href="#" className="Menu-Item">
            Contact
          </a>
        </nav>
      </div>

      <header>
          {/* TODO: Check Font of Logo */}
          <h1 className="logo">K</h1>
      </header>
    </div>
  );
};

export default NavBar;
