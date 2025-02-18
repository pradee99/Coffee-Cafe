import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Create a CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Coffee Cafe ☕</div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
