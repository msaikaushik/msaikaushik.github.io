import React from "react";
import "./styles/NavBar.css";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  return (
    <div className="navigation-bar">
      <ul className="navigation-bar-list">
        <li className="navigation-bar-list-item">
          <a href="#">Home</a>
        </li>
        <li className="navigation-bar-list-item">
          <a href="#">About</a>
        </li>
        <li className="navigation-bar-list-item">
          <a href="#">Skills</a>
        </li>
        <li className="navigation-bar-list-item">
          <a href="#">Experience</a>
        </li>
        <li className="navigation-bar-list-item">
          <a href="#">Projects</a>
        </li>
        <li className="navigation-bar-list-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
