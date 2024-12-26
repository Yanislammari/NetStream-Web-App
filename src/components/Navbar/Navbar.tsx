import React, { useState } from "react";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="Navbar">
      <nav className="navbar">
        <div className={`navbar-left ${searchOpen ? "hide" : ""}`}>
          <img className="navbar-logo" src="./../assets/netstream-logo.png" alt="Logo" />
          <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
            <li>Home</li>
            <li>Series</li>
            <li>Movies</li>
            <li>News</li>
            <li>Most Viewed</li>
            <li>Favorites</li>
            <li>My History</li>
          </ul>
        </div>
        <div className="navbar-icons">
          <div className="search-container">
            <input type="text" className={`search-input ${searchOpen ? "show" : ""}`} placeholder="Search..." />
            <FaSearch className="icon-search" onClick={toggleSearch} />
          </div>
          <FaBell className="icon-bell" />
          <img src="./../assets/placeholder.png" alt="Profile" className="profile-pic" />
          <FaBars className="icon-menu" onClick={toggleMenu} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;