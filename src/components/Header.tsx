"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link href="#home" className="logo">
        Farwa Kanwal
      </Link>

      <i className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></i>

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link href="/" className="links">Home</Link>
          </li>
          <li>
            <Link href="/about" className="links">About</Link>
          </li>
          <li>
            <Link href="/services" className="links">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="links">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
