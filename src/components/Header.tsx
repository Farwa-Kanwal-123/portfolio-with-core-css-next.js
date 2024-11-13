"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu
  };

  return (
    <header className="header">
      <Link href="#home" className="logo">
        Farwa Kanwal
      </Link>
      <div id="menu-icon" onClick={toggleMenu}>
        {menuOpen ? (
          <i className="bx bx-x icons"></i> // Show close icon when menu is open
        ) : (
          <i className="bx bx-menu icons"></i> // Show hamburger icon when menu is closed
        )}
      </div>
      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        {" "}
        {/* Add 'active' class when menu is open */}
        <ul>
          <li>
            <Link href="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="links">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="links">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="links">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
