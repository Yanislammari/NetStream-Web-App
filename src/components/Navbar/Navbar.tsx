import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import "./Navbar.css";

interface NavbarProps {
  isSearchOpen?: boolean;
  searchInputDefaultValue?: string
}

const Navbar: React.FC<NavbarProps> = ({ isSearchOpen = false, searchInputDefaultValue = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchInputDefaultValue);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setScrolled(true);
      }
      else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setSearchOpen(isSearchOpen);
  }, [isSearchOpen]);

  return (
    <div className="Navbar">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className={`navbar-left ${searchOpen ? "hide" : ""}`}>
          <img className="navbar-logo" src="./../assets/netstream-logo.png" alt="Logo" onClick={() => navigate("/home")} />
          <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
            <li onClick={() => navigate("/home")}><p>Home</p></li>
            <li onClick={() => navigate("/series")}><p>Series</p></li>
            <li onClick={() => navigate("/movies")}><p>Movies</p></li>
            <li><p>News</p></li>
            <li><p>Most Viewed</p></li>
            <li><p>Favorites</p></li>
            <li><p>My History</p></li>
          </ul>
        </div>
        <div className="navbar-icons">
          <div className="search-container">
            <input className={`search-input ${searchOpen ? "show" : ""}`} type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
            <FaSearch className="icon-search" onClick={toggleSearch} />
          </div>
          <FaBell className="icon-bell" />
          <img className="profile-pic" src="./../assets/placeholder.png" alt="Profile" />
          <FaBars className="icon-menu" onClick={toggleMenu} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
