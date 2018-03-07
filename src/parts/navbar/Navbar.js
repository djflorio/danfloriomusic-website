import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar__nav">
        <Link
          activeClassName='navbar__link--active'
          to="/about"
          className="navbar__link"
        >
          Learn
        </Link>
        <Link
          activeClassName='navbar__link--active'
          to="/music"
          className="navbar__link"
        >
          Listen
        </Link>
        <Link
          activeClassName='navbar__link--active'
          to="/videos"
          className="navbar__link"
        >
          Look
        </Link>
        <Link
          activeClassName='navbar__link--active'
          to="/contact"
          className="navbar__link"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;