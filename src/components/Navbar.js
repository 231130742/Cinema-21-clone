import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPlay,
  faBullhorn,
  faMapMarkerAlt,
  faStar,
  faInfoCircle,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Top Navbar Section */}
      <div className="navbar-top">
        <Link to="/" className="home-icon">
          <img src="https://21cineplex.com//theme/v5/assets/img/icons/home@2x.png" alt="Home" />
        </Link>
        
        <div className="logo-center">
          <Link to="/">
            <img src="https://21cineplex.com//theme/v5/assets/img/logo.png" alt="Cinema XXI" />
          </Link>
        </div>

        {/* Search Bar for Desktop and Tablet */}
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search theater, movies..." />
        </div>

        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      {/* Search Bar for Mobile (placed below top navbar section) */}
      <div className="search-bar-mobile">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search theater, movies..." />
      </div>

      {/* Bottom Navbar Section */}
      <div className={`navbar-bottom ${isMobileMenuOpen ? 'show' : ''}`}>
        <div className="nav-links">
          <Link to="/now-playing">
            <FontAwesomeIcon icon={faPlay} /> Now Playing
          </Link>
          <Link to="/upcoming">
            <FontAwesomeIcon icon={faBullhorn} /> Upcoming
          </Link>
          <Link to="/theaters">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Theaters
          </Link>
          <Link to="/promotions">
            <FontAwesomeIcon icon={faStar} /> Promotions
          </Link>
          <Link to="/info">
            <FontAwesomeIcon icon={faInfoCircle} /> Info 21
          </Link>
        </div>

        <div className="nav-extras">
          <a href="https://21cineplex.com//theme/v5/assets/img/imax-menu.png" target="_blank" rel="noopener noreferrer">
            <img src="https://21cineplex.com//theme/v5/assets/img/imax-menu.png" alt="IMAX" />
          </a>
          <a href="https://m.21cineplex.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://21cineplex.com//theme/v5/assets/img/dolby-menu.png" alt="Dolby Atmos" />
          </a>
          <a href="https://21cineplex.com//theme/v5/assets/img/mtix-menu.png" target="_blank" rel="noopener noreferrer">
            <img src="https://21cineplex.com//theme/v5/assets/img/mtix-menu.png" alt="MTix" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
