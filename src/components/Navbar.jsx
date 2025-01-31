import React, { useState } from 'react';
import './css/Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="top-container">
        {/* Logo */}
        <div className="logo">College Discover</div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search colleges, Courses..." />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 
                0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75
                 52.5 127.5T380-400Z" />
            </svg>
          </button>
        </div>

        {/* Auth Buttons */}
        {/* <div className="auth-buttons">
          <a href="#" className="sign-in">Sign In</a>
          <a href="#" className="sign-up">Sign Up</a>
        </div> */}

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/course">Course</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/blogs">Blogs</a></li>
        {/* <div className="login-signup-mobile">
        <button>Signup</button> 
        <button>Login</button>
        </div> */}
      
      </ul>
    </nav>
  );
}

export default Navbar;
